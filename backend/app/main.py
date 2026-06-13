import os
import json
import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import CORS_ORIGINS
from app.database import engine, Base
from app.routers import projects, boreholes, profiles, modeling, attributes, export


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
app.include_router(boreholes.router, prefix="/api/boreholes", tags=["boreholes"])
app.include_router(profiles.router, prefix="/api/profiles", tags=["profiles"])
app.include_router(modeling.router, prefix="/api/modeling", tags=["modeling"])
app.include_router(attributes.router, prefix="/api/attributes", tags=["attributes"])
app.include_router(export.router, prefix="/api/export", tags=["export"])


@app.get("/api/health")
async def health():
    return {"status": "ok"}
