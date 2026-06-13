import csv
import io
import uuid
from typing import List, Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, delete
from sqlalchemy.orm import selectinload
from app.models import Project, Borehole, BoreholeLayer, LithologyType
from app.schemas import (
    BoreholeCreate, BoreholeLayerBase, CSVImportResult, LithologyTypeBase
)
from app.services.validation import (
    validate_coordinates, validate_elevation, validate_layers,
    validate_borehole_count, check_uniformity
)

DEFAULT_LITHOLOGY_COLORS = [
    "#E6B89C", "#F0E68C", "#CD853F", "#8B7355", "#A0522D",
    "#DEB887", "#D2B48C", "#BDB76B", "#BC8F8F", "#C4A882",
    "#9ACD32", "#6B8E23", "#556B2F", "#8FBC8F", "#2E8B57",
    "#708090", "#778899", "#B0C4DE", "#87CEEB", "#4682B4",
]


async def get_project(db: AsyncSession, project_id: uuid.UUID) -> Project:
    result = await db.execute(select(Project).where(Project.id == project_id))
    return result.scalar_one_or_none()


async def list_projects(db: AsyncSession):
    result = await db.execute(select(Project).order_by(Project.created_at.desc()))
    return result.scalars().all()


async def create_project(db: AsyncSession, name: str, description: str = None) -> Project:
    project = Project(name=name, description=description)
    db.add(project)
    await db.commit()
    await db.refresh(project)
    return project


async def delete_project(db: AsyncSession, project_id: uuid.UUID) -> bool:
    project = await get_project(db, project_id)
    if not project:
        return False
    await db.delete(project)
    await db.commit()
    return True


async def get_borehole(db: AsyncSession, borehole_id: uuid.UUID) -> Borehole:
    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.id == borehole_id)
    )
    return result.scalar_one_or_none()


async def list_boreholes(db: AsyncSession, project_id: uuid.UUID) -> List[Borehole]:
    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.project_id == project_id)
        .order_by(Borehole.hole_id)
    )
    return result.scalars().all()


async def create_borehole(db: AsyncSession, project_id: uuid.UUID, data: BoreholeCreate) -> Tuple[Borehole, List[str]]:
    errors = []
    errors.extend(validate_coordinates(data.longitude, data.latitude))
    errors.extend(validate_elevation(data.elevation))
    errors.extend(validate_layers(data.layers))

    count_result = await db.execute(
        select(func.count()).where(Borehole.project_id == project_id)
    )
    current_count = count_result.scalar()
    errors.extend(validate_borehole_count(current_count))

    if errors:
        return None, errors

    await _ensure_lithologies(db, project_id, [l.lithology_name for l in data.layers])

    borehole = Borehole(
        project_id=project_id,
        hole_id=data.hole_id,
        longitude=data.longitude,
        latitude=data.latitude,
        elevation=data.elevation,
    )
    db.add(borehole)
    await db.flush()

    for layer_data in data.layers:
        layer = BoreholeLayer(
            borehole_id=borehole.id,
            layer_no=layer_data.layer_no,
            top_depth=layer_data.top_depth,
            bottom_depth=layer_data.bottom_depth,
            lithology_name=layer_data.lithology_name,
            spt_n=layer_data.spt_n,
            water_content=layer_data.water_content,
            compression_modulus=layer_data.compression_modulus,
        )
        db.add(layer)

    await db.commit()
    await db.refresh(borehole)

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.id == borehole.id)
    )
    return result.scalar_one(), []


async def update_borehole(db: AsyncSession, borehole_id: uuid.UUID, version: int, update_data: dict, layers_update=None) -> Tuple[Borehole, List[str]]:
    borehole = await get_borehole(db, borehole_id)
    if not borehole:
        return None, ["钻孔不存在"]

    if borehole.version != version:
        return None, ["数据已被他人修改，请刷新后重试"]

    errors = []
    if update_data.get("longitude") is not None or update_data.get("latitude") is not None:
        lon = update_data.get("longitude", borehole.longitude)
        lat = update_data.get("latitude", borehole.latitude)
        errors.extend(validate_coordinates(lon, lat))

    if update_data.get("elevation") is not None:
        errors.extend(validate_elevation(update_data["elevation"]))

    if errors:
        return None, errors

    for key, value in update_data.items():
        if key in ("hole_id", "longitude", "latitude", "elevation") and value is not None:
            setattr(borehole, key, value)

    borehole.version += 1

    if layers_update is not None:
        await db.execute(
            delete(BoreholeLayer).where(BoreholeLayer.borehole_id == borehole_id)
        )
        for layer_data in layers_update:
            layer = BoreholeLayer(
                borehole_id=borehole.id,
                layer_no=layer_data.layer_no,
                top_depth=layer_data.top_depth,
                bottom_depth=layer_data.bottom_depth,
                lithology_name=layer_data.lithology_name,
                spt_n=layer_data.spt_n if hasattr(layer_data, 'spt_n') else None,
                water_content=layer_data.water_content if hasattr(layer_data, 'water_content') else None,
                compression_modulus=layer_data.compression_modulus if hasattr(layer_data, 'compression_modulus') else None,
            )
            db.add(layer)

    await db.commit()
    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.id == borehole.id)
    )
    return result.scalar_one(), []


async def delete_borehole(db: AsyncSession, borehole_id: uuid.UUID) -> bool:
    borehole = await get_borehole(db, borehole_id)
    if not borehole:
        return False
    await db.delete(borehole)
    await db.commit()
    return True


async def import_csv(db: AsyncSession, project_id: uuid.UUID, csv_content: str) -> CSVImportResult:
    reader = csv.DictReader(io.StringIO(csv_content))
    imported = 0
    errors = []
    warnings = []

    rows = list(reader)
    boreholes_data = {}

    for row_idx, row in enumerate(rows, 1):
        hole_id = row.get("hole_id") or row.get("孔号") or row.get("borehole_id")
        if not hole_id:
            errors.append(f"第 {row_idx} 行: 缺少孔号")
            continue

        if hole_id not in boreholes_data:
            try:
                lon = float(row.get("longitude") or row.get("经度") or row.get("lon", 0))
                lat = float(row.get("latitude") or row.get("纬度") or row.get("lat", 0))
                elev = float(row.get("elevation") or row.get("高程") or row.get("elev", 0))
            except (ValueError, TypeError):
                errors.append(f"第 {row_idx} 行: 坐标或高程格式错误")
                continue

            boreholes_data[hole_id] = {
                "hole_id": hole_id,
                "longitude": lon,
                "latitude": lat,
                "elevation": elev,
                "layers": [],
            }

        try:
            layer_no = int(row.get("layer_no") or row.get("层号") or row.get("layer", len(boreholes_data[hole_id]["layers"]) + 1))
            top_depth = float(row.get("top_depth") or row.get("层顶深度") or row.get("top", 0))
            bottom_depth = float(row.get("bottom_depth") or row.get("层底深度") or row.get("bottom", 0))
            lithology = row.get("lithology") or row.get("岩性") or row.get("lithology_name", "未知")
            spt_n = None
            wc = None
            cm = None
            if row.get("spt_n") or row.get("标贯N值"):
                spt_n = float(row.get("spt_n") or row.get("标贯N值"))
            if row.get("water_content") or row.get("含水量"):
                wc = float(row.get("water_content") or row.get("含水量"))
            if row.get("compression_modulus") or row.get("压缩模量"):
                cm = float(row.get("compression_modulus") or row.get("压缩模量"))
        except (ValueError, TypeError) as e:
            errors.append(f"第 {row_idx} 行: 分层数据格式错误 - {e}")
            continue

        boreholes_data[hole_id]["layers"].append({
            "layer_no": layer_no,
            "top_depth": top_depth,
            "bottom_depth": bottom_depth,
            "lithology_name": lithology,
            "spt_n": spt_n,
            "water_content": wc,
            "compression_modulus": cm,
        })

    for hole_id, bh_data in boreholes_data.items():
        layers = [BoreholeLayerBase(**l) for l in bh_data["layers"]]
        create_data = BoreholeCreate(
            hole_id=hole_id,
            longitude=bh_data["longitude"],
            latitude=bh_data["latitude"],
            elevation=bh_data["elevation"],
            layers=layers,
        )
        bh, bh_errors = await create_borehole(db, project_id, create_data)
        if bh:
            imported += 1
        else:
            errors.extend([f"钻孔 {hole_id}: {e}" for e in bh_errors])

    all_bhs = await list_boreholes(db, project_id)
    if all_bhs:
        bh_coords = [(b.longitude, b.latitude, b.elevation) for b in all_bhs]
        warnings.extend(check_uniformity(bh_coords))

    return CSVImportResult(imported=imported, errors=errors, warnings=warnings)


async def _ensure_lithologies(db: AsyncSession, project_id: uuid.UUID, lithology_names: List[str]):
    result = await db.execute(
        select(LithologyType).where(LithologyType.project_id == project_id)
    )
    existing = {lt.name: lt for lt in result.scalars().all()}

    color_idx = len(existing)
    for name in lithology_names:
        if name not in existing:
            color = DEFAULT_LITHOLOGY_COLORS[color_idx % len(DEFAULT_LITHOLOGY_COLORS)]
            lt = LithologyType(
                project_id=project_id,
                name=name,
                color=color,
                layer_order=color_idx,
            )
            db.add(lt)
            existing[name] = lt
            color_idx += 1

    await db.flush()


async def list_lithology_types(db: AsyncSession, project_id: uuid.UUID) -> List[LithologyType]:
    result = await db.execute(
        select(LithologyType)
        .where(LithologyType.project_id == project_id)
        .order_by(LithologyType.layer_order)
    )
    return result.scalars().all()


async def update_lithology_type(db: AsyncSession, project_id: uuid.UUID, lithology_id: int, color: str = None, layer_order: int = None) -> LithologyType:
    result = await db.execute(
        select(LithologyType).where(
            LithologyType.id == lithology_id,
            LithologyType.project_id == project_id,
        )
    )
    lt = result.scalar_one_or_none()
    if not lt:
        return None
    if color is not None:
        lt.color = color
    if layer_order is not None:
        lt.layer_order = layer_order
    await db.commit()
    await db.refresh(lt)
    return lt
