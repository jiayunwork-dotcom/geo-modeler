from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas import ProjectCreate, ProjectOut
from app.crud import get_project, list_projects, create_project, delete_project

router = APIRouter()


@router.get("/", response_model=list[ProjectOut])
async def api_list_projects(db: AsyncSession = Depends(get_db)):
    return await list_projects(db)


@router.post("/", response_model=ProjectOut, status_code=201)
async def api_create_project(data: ProjectCreate, db: AsyncSession = Depends(get_db)):
    return await create_project(db, data.name, data.description)


@router.get("/{project_id}", response_model=ProjectOut)
async def api_get_project(project_id: UUID, db: AsyncSession = Depends(get_db)):
    project = await get_project(db, project_id)
    if not project:
        raise HTTPException(404, "项目不存在")
    return project


@router.delete("/{project_id}", status_code=204)
async def api_delete_project(project_id: UUID, db: AsyncSession = Depends(get_db)):
    if not await delete_project(db, project_id):
        raise HTTPException(404, "项目不存在")
