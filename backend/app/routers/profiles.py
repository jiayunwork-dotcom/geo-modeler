from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models import ProfileLine, Borehole, Annotation
from app.schemas import ProfileLineCreate, ProfileLineOut, AnnotationCreate, AnnotationOut
from app.services.profile import generate_profile_data

router = APIRouter()


@router.get("/{project_id}/profiles", response_model=list[ProfileLineOut])
async def api_list_profiles(project_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(ProfileLine).where(ProfileLine.project_id == project_id)
    )
    return result.scalars().all()


@router.post("/{project_id}/profiles", response_model=ProfileLineOut, status_code=201)
async def api_create_profile(
    project_id: UUID, data: ProfileLineCreate, db: AsyncSession = Depends(get_db)
):
    valid_methods = ("linear", "cubic_spline", "kriging")
    if data.interpolation_method not in valid_methods:
        raise HTTPException(400, f"插值方式必须为 {valid_methods}")

    result = await db.execute(
        select(Borehole).where(Borehole.id.in_(data.borehole_ids))
    )
    boreholes = result.scalars().all()
    if len(boreholes) < 2:
        raise HTTPException(400, "剖面线至少需要2个钻孔")

    profile = ProfileLine(
        project_id=project_id,
        name=data.name,
        borehole_ids=data.borehole_ids,
        interpolation_method=data.interpolation_method,
    )
    db.add(profile)
    await db.commit()
    await db.refresh(profile)
    return profile


@router.get("/profiles/{profile_id}", response_model=ProfileLineOut)
async def api_get_profile(profile_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(ProfileLine).where(ProfileLine.id == profile_id)
    )
    profile = result.scalar_one_or_none()
    if not profile:
        raise HTTPException(404, "剖面线不存在")
    return profile


@router.get("/profiles/{profile_id}/data")
async def api_get_profile_data(profile_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(ProfileLine).where(ProfileLine.id == profile_id)
    )
    profile = result.scalar_one_or_none()
    if not profile:
        raise HTTPException(404, "剖面线不存在")

    result = await db.execute(
        select(Borehole)
        .options(selectinload(Borehole.layers))
        .where(Borehole.id.in_(profile.borehole_ids))
    )
    boreholes = result.scalars().all()

    return await generate_profile_data(boreholes, profile.interpolation_method)


@router.post("/profiles/{profile_id}/annotations", response_model=AnnotationOut, status_code=201)
async def api_create_annotation(
    profile_id: UUID, data: AnnotationCreate, db: AsyncSession = Depends(get_db)
):
    result = await db.execute(
        select(ProfileLine).where(ProfileLine.id == profile_id)
    )
    if not result.scalar_one_or_none():
        raise HTTPException(404, "剖面线不存在")

    annotation = Annotation(
        profile_id=profile_id,
        type=data.type,
        x=data.x,
        y=data.y,
        text_content=data.text_content,
        arrow_dx=data.arrow_dx,
        arrow_dy=data.arrow_dy,
    )
    db.add(annotation)
    await db.commit()
    await db.refresh(annotation)
    return annotation


@router.get("/profiles/{profile_id}/annotations", response_model=list[AnnotationOut])
async def api_list_annotations(profile_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Annotation).where(Annotation.profile_id == profile_id)
    )
    return result.scalars().all()


@router.delete("/profiles/annotations/{annotation_id}", status_code=204)
async def api_delete_annotation(annotation_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Annotation).where(Annotation.id == annotation_id)
    )
    annotation = result.scalar_one_or_none()
    if not annotation:
        raise HTTPException(404, "标注不存在")
    await db.delete(annotation)
    await db.commit()
