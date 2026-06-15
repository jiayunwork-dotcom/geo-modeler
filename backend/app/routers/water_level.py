import numpy as np
from uuid import UUID
from datetime import date
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models import Borehole, WaterLevel
from app.schemas import (
    WaterLevelCreate, WaterLevelOut, WaterLevelCSVImportResult,
    WaterLevelStatsOut, MKTestResult, WaterLevelKrigingRequest,
)
from app.crud import get_project
from app.crud_water_level import (
    get_water_levels_for_borehole, get_water_levels_for_project,
    create_water_level, delete_water_level, import_water_level_csv,
)
from app.services.water_level import (
    compute_statistics, mann_kendall_test, compute_boxplot_data,
    kriging_water_level,
)

router = APIRouter()


@router.get("/{project_id}/water-levels", response_model=list[WaterLevelOut])
async def api_list_water_levels(
    project_id: UUID,
    borehole_id: UUID = Query(None),
    db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")

    if borehole_id:
        return await get_water_levels_for_borehole(db, borehole_id)
    return await get_water_levels_for_project(db, project_id)


@router.post("/{project_id}/water-levels", response_model=WaterLevelOut, status_code=201)
async def api_create_water_level(
    project_id: UUID, data: WaterLevelCreate, db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")
    wl, errors = await create_water_level(db, data)
    if errors:
        raise HTTPException(400, detail="; ".join(errors))
    return wl


@router.delete("/{project_id}/water-levels/{water_level_id}", status_code=204)
async def api_delete_water_level(
    project_id: UUID, water_level_id: UUID, db: AsyncSession = Depends(get_db),
):
    if not await delete_water_level(db, water_level_id):
        raise HTTPException(404, "水位记录不存在")


@router.post("/{project_id}/water-levels/import-csv", response_model=WaterLevelCSVImportResult)
async def api_import_water_level_csv(
    project_id: UUID, file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")
    content = await file.read()
    csv_text = content.decode("utf-8-sig")
    return await import_water_level_csv(db, project_id, csv_text)


@router.post("/{project_id}/water-levels/statistics", response_model=list[WaterLevelStatsOut])
async def api_water_level_statistics(
    project_id: UUID, borehole_ids: list[UUID], db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")

    results = []
    for bh_id in borehole_ids:
        bh_result = await db.execute(
            select(Borehole).where(Borehole.id == bh_id, Borehole.project_id == project_id)
        )
        bh = bh_result.scalar_one_or_none()
        if not bh:
            continue

        wl_result = await db.execute(
            select(WaterLevel)
            .where(WaterLevel.borehole_id == bh_id)
            .order_by(WaterLevel.obs_date)
        )
        records = wl_result.scalars().all()

        stats = compute_statistics(records) if records else {"count": 0}
        results.append(WaterLevelStatsOut(
            borehole_id=bh_id,
            hole_id=bh.hole_id,
            **stats,
        ))

    return results


@router.post("/{project_id}/water-levels/mk-test", response_model=list[MKTestResult])
async def api_mk_test(
    project_id: UUID, borehole_ids: list[UUID], db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")

    results = []
    for bh_id in borehole_ids:
        bh_result = await db.execute(
            select(Borehole).where(Borehole.id == bh_id, Borehole.project_id == project_id)
        )
        bh = bh_result.scalar_one_or_none()
        if not bh:
            continue

        wl_result = await db.execute(
            select(WaterLevel)
            .where(WaterLevel.borehole_id == bh_id)
            .order_by(WaterLevel.obs_date)
        )
        records = wl_result.scalars().all()

        mk = mann_kendall_test(records)
        results.append(MKTestResult(
            borehole_id=bh_id,
            hole_id=bh.hole_id,
            **mk,
        ))

    return results


@router.post("/{project_id}/water-levels/boxplot")
async def api_boxplot(
    project_id: UUID, borehole_ids: list[UUID], db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")

    results = []
    for bh_id in borehole_ids:
        bh_result = await db.execute(
            select(Borehole).where(Borehole.id == bh_id, Borehole.project_id == project_id)
        )
        bh = bh_result.scalar_one_or_none()
        if not bh:
            continue

        wl_result = await db.execute(
            select(WaterLevel)
            .where(WaterLevel.borehole_id == bh_id)
            .order_by(WaterLevel.obs_date)
        )
        records = wl_result.scalars().all()

        box_data = compute_boxplot_data(records) if records else None
        results.append({
            "borehole_id": str(bh_id),
            "hole_id": bh.hole_id,
            "boxplot": box_data,
        })

    return results


@router.post("/{project_id}/water-levels/kriging")
async def api_kriging_water_level(
    project_id: UUID, data: WaterLevelKrigingRequest, db: AsyncSession = Depends(get_db),
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")

    bh_result = await db.execute(
        select(Borehole)
        .where(Borehole.project_id == project_id)
    )
    boreholes = bh_result.scalars().all()

    if len(boreholes) < 3:
        raise HTTPException(400, "至少需要3个钻孔才能进行空间插值")

    wl_result = await db.execute(
        select(WaterLevel)
        .join(Borehole)
        .where(Borehole.project_id == project_id)
    )
    all_water_levels = wl_result.scalars().all()

    wl_by_borehole = {}
    for wl in all_water_levels:
        bh_id = str(wl.borehole_id)
        if bh_id not in wl_by_borehole:
            wl_by_borehole[bh_id] = []
        wl_by_borehole[bh_id].append(wl)

    water_level_map = {}
    for bh_id, records in wl_by_borehole.items():
        if data.obs_date:
            matching = [r for r in records if r.obs_date == data.obs_date]
            if matching:
                water_level_map[bh_id] = matching[0].water_level
        elif data.date_from and data.date_to:
            matching = [r for r in records if data.date_from <= r.obs_date <= data.date_to]
            if matching:
                avg_wl = sum(r.water_level for r in matching) / len(matching)
                water_level_map[bh_id] = avg_wl
        else:
            if records:
                latest = max(records, key=lambda r: r.obs_date)
                water_level_map[bh_id] = latest.water_level

    result = await kriging_water_level(
        boreholes, water_level_map, data.variogram_model,
        data.grid_nx, data.grid_ny,
    )

    if "error" in result:
        raise HTTPException(400, result["error"])

    return result
