from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas import (
    BoreholeCreate, BoreholeOut, BoreholeUpdate,
    LithologyTypeOut, LithologyTypeUpdate, CSVImportResult
)
from app.crud import (
    get_borehole, list_boreholes, create_borehole,
    update_borehole, delete_borehole, import_csv,
    list_lithology_types, update_lithology_type, get_project
)

router = APIRouter()


@router.get("/{project_id}/boreholes", response_model=list[BoreholeOut])
async def api_list_boreholes(project_id: UUID, db: AsyncSession = Depends(get_db)):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")
    return await list_boreholes(db, project_id)


@router.post("/{project_id}/boreholes", response_model=BoreholeOut, status_code=201)
async def api_create_borehole(
    project_id: UUID, data: BoreholeCreate, db: AsyncSession = Depends(get_db)
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")
    bh, errors = await create_borehole(db, project_id, data)
    if errors:
        raise HTTPException(400, detail="; ".join(errors))
    return bh


@router.get("/{project_id}/boreholes/{borehole_id}", response_model=BoreholeOut)
async def api_get_borehole(
    project_id: UUID, borehole_id: UUID, db: AsyncSession = Depends(get_db)
):
    bh = await get_borehole(db, borehole_id)
    if not bh or bh.project_id != project_id:
        raise HTTPException(404, "钻孔不存在")
    return bh


@router.put("/{project_id}/boreholes/{borehole_id}", response_model=BoreholeOut)
async def api_update_borehole(
    project_id: UUID, borehole_id: UUID, data: BoreholeUpdate,
    db: AsyncSession = Depends(get_db)
):
    bh, errors = await update_borehole(
        db, borehole_id, data.version,
        data.model_dump(exclude_unset=True, exclude={"version", "layers"}),
        data.layers
    )
    if errors:
        raise HTTPException(400, detail="; ".join(errors))
    return bh


@router.delete("/{project_id}/boreholes/{borehole_id}", status_code=204)
async def api_delete_borehole(
    project_id: UUID, borehole_id: UUID, db: AsyncSession = Depends(get_db)
):
    if not await delete_borehole(db, borehole_id):
        raise HTTPException(404, "钻孔不存在")


@router.post("/{project_id}/boreholes/import-csv", response_model=CSVImportResult)
async def api_import_csv(
    project_id: UUID, file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")
    content = await file.read()
    csv_text = content.decode("utf-8-sig")
    return await import_csv(db, project_id, csv_text)


@router.get("/{project_id}/lithology-types", response_model=list[LithologyTypeOut])
async def api_list_lithology_types(project_id: UUID, db: AsyncSession = Depends(get_db)):
    return await list_lithology_types(db, project_id)


@router.put("/{project_id}/lithology-types/{lithology_id}", response_model=LithologyTypeOut)
async def api_update_lithology_type(
    project_id: UUID, lithology_id: int, data: LithologyTypeUpdate,
    db: AsyncSession = Depends(get_db)
):
    lt = await update_lithology_type(
        db, project_id, lithology_id, data.color, data.layer_order
    )
    if not lt:
        raise HTTPException(404, "岩性类型不存在")
    return lt
