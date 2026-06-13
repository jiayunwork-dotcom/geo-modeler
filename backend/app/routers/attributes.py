from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models import Borehole, ModelRun
from app.services.attribute_field import interpolate_attribute_field

router = APIRouter()


@router.post("/{project_id}/interpolate")
async def api_interpolate_attribute(
    project_id: UUID,
    attribute: str,
    run_id: UUID = None,
    grid_nx: int = 50,
    grid_ny: int = 50,
    grid_nz: int = 25,
    variogram_model: str = "spherical",
    db: AsyncSession = Depends(get_db),
):
    valid_attrs = ("spt_n", "water_content", "compression_modulus")
    if attribute not in valid_attrs:
        raise HTTPException(400, f"参数必须为 {valid_attrs}")

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.project_id == project_id)
    )
    boreholes = result.scalars().all()
    if not boreholes:
        raise HTTPException(400, "没有钻孔数据")

    field_data = interpolate_attribute_field(
        boreholes=list(boreholes),
        attribute=attribute,
        grid_nx=grid_nx,
        grid_ny=grid_ny,
        grid_nz=grid_nz,
        variogram_model=variogram_model,
    )
    return field_data
