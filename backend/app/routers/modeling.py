import asyncio
import json
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.database import get_db, async_session
from app.models import ModelRun, Borehole
from app.schemas import ModelRunCreate, ModelRunOut
from app.services.modeling3d import run_3d_modeling
from app.services.krige import compute_variogram
from app.websocket import notify_progress

router = APIRouter()


@router.get("/{project_id}/modeling/runs", response_model=list[ModelRunOut])
async def api_list_model_runs(project_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(ModelRun)
        .where(ModelRun.project_id == project_id)
        .order_by(ModelRun.created_at.desc())
    )
    return result.scalars().all()


@router.post("/{project_id}/modeling/run", response_model=ModelRunOut, status_code=201)
async def api_start_modeling(
    project_id: UUID, data: ModelRunCreate, db: AsyncSession = Depends(get_db)
):
    valid_models = ("spherical", "exponential", "gaussian")
    if data.variogram_model not in valid_models:
        raise HTTPException(400, f"变异函数模型必须为 {valid_models}")

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.project_id == project_id)
    )
    boreholes = result.scalars().all()
    if len(boreholes) < 3:
        raise HTTPException(400, "三维建模至少需要3个钻孔")

    model_run = ModelRun(
        project_id=project_id,
        status="pending",
        variogram_model=data.variogram_model,
        range_param=data.range_param,
        sill_param=data.sill_param,
        nugget_param=data.nugget_param,
        aniso_angle=data.aniso_angle,
        aniso_ratio=data.aniso_ratio,
        grid_nx=data.grid_nx,
        grid_ny=data.grid_ny,
        grid_nz=data.grid_nz,
    )
    db.add(model_run)
    await db.commit()
    await db.refresh(model_run)

    asyncio.create_task(
        _run_modeling_task(str(model_run.id), str(project_id), list(boreholes), data)
    )

    return model_run


@router.get("/modeling/runs/{run_id}", response_model=ModelRunOut)
async def api_get_model_run(run_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
    model_run = result.scalar_one_or_none()
    if not model_run:
        raise HTTPException(404, "建模任务不存在")
    return model_run


@router.get("/modeling/runs/{run_id}/result")
async def api_get_model_result(run_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
    model_run = result.scalar_one_or_none()
    if not model_run:
        raise HTTPException(404, "建模任务不存在")
    if model_run.status != "completed":
        raise HTTPException(400, "建模尚未完成")
    return model_run.result_data


@router.post("/modeling/runs/{run_id}/volume")
async def api_compute_volume(
    run_id: UUID, lithology_name: str, db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
    model_run = result.scalar_one_or_none()
    if not model_run or model_run.status != "completed":
        raise HTTPException(400, "建模尚未完成")

    from app.services.volume import compute_layer_volume
    volume = compute_layer_volume(model_run.result_data, lithology_name)
    return {"lithology_name": lithology_name, "volume": volume}


async def _run_modeling_task(run_id: str, project_id: str, boreholes, params: ModelRunCreate):
    async with async_session() as db:
        result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
        model_run = result.scalar_one()
        model_run.status = "running"
        await db.commit()

    try:
        async def progress_cb(p):
            async with async_session() as db:
                result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
                mr = result.scalar_one()
                mr.progress = p
                await db.commit()
            await notify_progress(run_id, project_id, p, "running")

        result_data = await run_3d_modeling(
            boreholes=boreholes,
            variogram_model=params.variogram_model,
            range_param=params.range_param,
            sill_param=params.sill_param,
            nugget_param=params.nugget_param,
            aniso_angle=params.aniso_angle,
            aniso_ratio=params.aniso_ratio,
            grid_nx=params.grid_nx,
            grid_ny=params.grid_ny,
            grid_nz=params.grid_nz,
            progress_callback=progress_cb,
        )

        async with async_session() as db:
            result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
            mr = result.scalar_one()
            mr.status = "completed"
            mr.progress = 100
            mr.result_data = result_data
            from datetime import datetime
            mr.completed_at = datetime.utcnow()
            await db.commit()

        await notify_progress(run_id, project_id, 100, "completed")

    except Exception as e:
        async with async_session() as db:
            result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
            mr = result.scalar_one()
            mr.status = "failed"
            mr.result_data = {"error": str(e)}
            await db.commit()

        await notify_progress(run_id, project_id, 0, "failed")
