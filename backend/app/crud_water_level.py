import csv
import io
import uuid
from datetime import date, datetime
from typing import List, Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, delete
from sqlalchemy.orm import selectinload
from app.models import Borehole, WaterLevel
from app.schemas import WaterLevelCreate, WaterLevelCSVImportResult


async def get_water_levels_for_borehole(
    db: AsyncSession, borehole_id: uuid.UUID
) -> List[WaterLevel]:
    result = await db.execute(
        select(WaterLevel)
        .where(WaterLevel.borehole_id == borehole_id)
        .order_by(WaterLevel.obs_date)
    )
    return result.scalars().all()


async def get_water_levels_for_project(
    db: AsyncSession, project_id: uuid.UUID
) -> List[WaterLevel]:
    result = await db.execute(
        select(WaterLevel)
        .join(Borehole)
        .where(Borehole.project_id == project_id)
        .order_by(WaterLevel.obs_date)
    )
    return result.scalars().all()


async def create_water_level(
    db: AsyncSession, data: WaterLevelCreate
) -> Tuple[WaterLevel, List[str]]:
    errors = []

    bh_result = await db.execute(
        select(Borehole).where(Borehole.id == data.borehole_id)
    )
    borehole = bh_result.scalar_one_or_none()
    if not borehole:
        return None, ["钻孔不存在"]

    if data.water_level > borehole.elevation:
        errors.append(f"水位标高({data.water_level})不能高于孔口高程({borehole.elevation})")

    if data.obs_date > date.today():
        errors.append(f"观测日期({data.obs_date})不能晚于今天")

    existing = await db.execute(
        select(WaterLevel).where(
            WaterLevel.borehole_id == data.borehole_id,
            WaterLevel.obs_date == data.obs_date,
        )
    )
    existing_record = existing.scalar_one_or_none()
    if existing_record:
        existing_record.water_level = data.water_level
        existing_record.water_temp = data.water_temp
        existing_record.conductivity = data.conductivity
        await db.commit()
        await db.refresh(existing_record)
        return existing_record, []

    if errors:
        return None, errors

    wl = WaterLevel(
        borehole_id=data.borehole_id,
        obs_date=data.obs_date,
        water_level=data.water_level,
        water_temp=data.water_temp,
        conductivity=data.conductivity,
    )
    db.add(wl)
    await db.commit()
    await db.refresh(wl)
    return wl, []


async def delete_water_level(db: AsyncSession, water_level_id: uuid.UUID) -> bool:
    result = await db.execute(
        select(WaterLevel).where(WaterLevel.id == water_level_id)
    )
    wl = result.scalar_one_or_none()
    if not wl:
        return False
    await db.delete(wl)
    await db.commit()
    return True


async def import_water_level_csv(
    db: AsyncSession, project_id: uuid.UUID, csv_content: str
) -> WaterLevelCSVImportResult:
    reader = csv.DictReader(io.StringIO(csv_content))
    imported = 0
    errors = []
    warnings = []

    bh_result = await db.execute(
        select(Borehole).where(Borehole.project_id == project_id)
    )
    boreholes = {bh.hole_id: bh for bh in bh_result.scalars().all()}

    rows = list(reader)
    for row_idx, row in enumerate(rows, 1):
        hole_id = row.get("hole_id") or row.get("孔号") or row.get("borehole_id")
        if not hole_id:
            errors.append(f"第 {row_idx} 行: 缺少孔号")
            continue

        borehole = boreholes.get(hole_id)
        if not borehole:
            errors.append(f"第 {row_idx} 行: 孔号 {hole_id} 不存在于当前项目")
            continue

        date_str = row.get("date") or row.get("日期") or row.get("obs_date")
        if not date_str:
            errors.append(f"第 {row_idx} 行: 缺少日期")
            continue

        try:
            obs_date = datetime.strptime(date_str, "%Y-%m-%d").date()
        except ValueError:
            errors.append(f"第 {row_idx} 行: 日期格式错误，应为yyyy-MM-dd")
            continue

        if obs_date > date.today():
            errors.append(f"第 {row_idx} 行: 日期 {date_str} 不能晚于今天")
            continue

        try:
            water_level = float(row.get("water_level") or row.get("水位标高") or row.get("level", ""))
        except (ValueError, TypeError):
            errors.append(f"第 {row_idx} 行: 水位标高格式错误")
            continue

        if water_level > borehole.elevation:
            errors.append(f"第 {row_idx} 行: 水位标高({water_level})高于孔口高程({borehole.elevation})")
            continue

        water_temp = None
        temp_str = row.get("water_temp") or row.get("水温") or row.get("temp")
        if temp_str:
            try:
                water_temp = float(temp_str)
            except (ValueError, TypeError):
                warnings.append(f"第 {row_idx} 行: 水温格式错误，已忽略")

        conductivity = None
        cond_str = row.get("conductivity") or row.get("电导率") or row.get("ec")
        if cond_str:
            try:
                conductivity = float(cond_str)
            except (ValueError, TypeError):
                warnings.append(f"第 {row_idx} 行: 电导率格式错误，已忽略")

        create_data = WaterLevelCreate(
            borehole_id=borehole.id,
            obs_date=obs_date,
            water_level=water_level,
            water_temp=water_temp,
            conductivity=conductivity,
        )

        wl, wl_errors = await create_water_level(db, create_data)
        if wl:
            imported += 1
        else:
            errors.extend([f"第 {row_idx} 行: {e}" for e in wl_errors])

    return WaterLevelCSVImportResult(imported=imported, errors=errors, warnings=warnings)
