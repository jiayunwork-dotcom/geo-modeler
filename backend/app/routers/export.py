import io
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models import ModelRun, Borehole, ProfileLine, LithologyType
from app.services.export_gltf import export_gltf
from app.services.export_profile import export_profile_png, export_profile_svg
from app.services.export_excel import export_stats_excel
from app.services.export_pdf import export_report_pdf

router = APIRouter()


@router.get("/export/gltf/{run_id}")
async def api_export_gltf(run_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
    model_run = result.scalar_one_or_none()
    if not model_run or model_run.status != "completed":
        raise HTTPException(400, "建模尚未完成")

    glb_data = export_gltf(model_run.result_data)
    return StreamingResponse(
        io.BytesIO(glb_data),
        media_type="model/gltf-binary",
        headers={"Content-Disposition": f"attachment; filename=model_{run_id}.glb"},
    )


@router.get("/export/profile/{profile_id}/png")
async def api_export_profile_png(profile_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ProfileLine).where(ProfileLine.id == profile_id))
    profile = result.scalar_one_or_none()
    if not profile:
        raise HTTPException(404, "剖面线不存在")

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.id.in_(profile.borehole_ids))
    )
    boreholes = result.scalars().all()

    from app.services.profile import generate_profile_data
    profile_data = await generate_profile_data(boreholes, profile.interpolation_method)

    png_bytes = export_profile_png(profile_data)
    return StreamingResponse(
        io.BytesIO(png_bytes),
        media_type="image/png",
        headers={"Content-Disposition": f"attachment; filename=profile_{profile_id}.png"},
    )


@router.get("/export/profile/{profile_id}/svg")
async def api_export_profile_svg(profile_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ProfileLine).where(ProfileLine.id == profile_id))
    profile = result.scalar_one_or_none()
    if not profile:
        raise HTTPException(404, "剖面线不存在")

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.id.in_(profile.borehole_ids))
    )
    boreholes = result.scalars().all()

    from app.services.profile import generate_profile_data
    profile_data = await generate_profile_data(boreholes, profile.interpolation_method)

    svg_str = export_profile_svg(profile_data)
    return StreamingResponse(
        io.BytesIO(svg_str.encode("utf-8")),
        media_type="image/svg+xml",
        headers={"Content-Disposition": f"attachment; filename=profile_{profile_id}.svg"},
    )


@router.get("/export/stats/{project_id}/excel")
async def api_export_stats_excel(project_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.project_id == project_id)
    )
    boreholes = result.scalars().all()

    result = await db.execute(
        select(LithologyType).where(LithologyType.project_id == project_id)
    )
    lithology_types = result.scalars().all()

    result = await db.execute(
        select(ModelRun).where(
            ModelRun.project_id == project_id,
            ModelRun.status == "completed",
        ).order_by(ModelRun.created_at.desc())
    )
    model_run = result.scalars().first()

    result_data = model_run.result_data if model_run else None
    excel_bytes = export_stats_excel(boreholes, lithology_types, result_data)
    return StreamingResponse(
        io.BytesIO(excel_bytes),
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f"attachment; filename=stats_{project_id}.xlsx"},
    )


@router.get("/export/report/{run_id}/pdf")
async def api_export_report_pdf(run_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ModelRun).where(ModelRun.id == run_id))
    model_run = result.scalar_one_or_none()
    if not model_run:
        raise HTTPException(404, "建模任务不存在")

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.project_id == model_run.project_id)
    )
    boreholes = result.scalars().all()

    pdf_bytes = export_report_pdf(model_run, boreholes)
    return StreamingResponse(
        io.BytesIO(pdf_bytes),
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename=report_{run_id}.pdf"},
    )
