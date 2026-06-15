from contextlib import asynccontextmanager
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.config import CORS_ORIGINS
from app.database import engine, Base
from app.websocket import ws_model_progress as _ws_handler


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield


app = FastAPI(title="GeoModeler API", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 路由导入放在app创建之后，避免循环依赖
from app.routers import projects, boreholes, profiles, modeling, attributes, export, water_level

app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(boreholes.router, prefix="/api/projects", tags=["boreholes"])
app.include_router(profiles.router, prefix="/api/projects", tags=["profiles"])
app.include_router(modeling.router, prefix="/api/projects", tags=["modeling"])
app.include_router(attributes.router, prefix="/api/projects", tags=["attributes"])
app.include_router(export.router, prefix="/api", tags=["export"])
app.include_router(water_level.router, prefix="/api/projects", tags=["water-level"])


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.websocket("/api/ws/{project_id}")
async def ws_endpoint(websocket: WebSocket, project_id: str):
    await _ws_handler(websocket, project_id)
