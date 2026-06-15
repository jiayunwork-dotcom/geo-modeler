import os
import json
import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from app.config import CORS_ORIGINS
from app.database import engine, Base, async_session
from app.routers import projects, boreholes, profiles, modeling, attributes, export
from app.models import ModelRun
from sqlalchemy import select

_active_ws: dict[str, list[WebSocket]] = {}


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

app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(boreholes.router, prefix="/api/projects", tags=["boreholes"])
app.include_router(profiles.router, prefix="/api/projects", tags=["profiles"])
app.include_router(modeling.router, prefix="/api/projects", tags=["modeling"])
app.include_router(attributes.router, prefix="/api/projects", tags=["attributes"])
app.include_router(export.router, prefix="/api", tags=["export"])


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.websocket("/api/ws/{project_id}")
async def ws_model_progress(websocket: WebSocket, project_id: str):
    await websocket.accept()
    run_id = websocket.query_params.get("run_id", "")
    key = f"{project_id}:{run_id}"
    if key not in _active_ws:
        _active_ws[key] = []
    _active_ws[key].append(websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        if websocket in _active_ws.get(key, []):
            _active_ws[key].remove(websocket)


async def notify_progress(run_id: str, project_id: str, progress: float, status: str):
    key = f"{project_id}:{run_id}"
    connections = _active_ws.get(key, [])
    msg = json.dumps({"run_id": run_id, "progress": progress, "status": status})
    for ws in connections[:]:
        try:
            await ws.send_text(msg)
        except Exception:
            try:
                connections.remove(ws)
            except ValueError:
                pass
