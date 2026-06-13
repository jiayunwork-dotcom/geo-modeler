from pydantic import BaseModel, Field, field_validator
from typing import Optional, List
from uuid import UUID
from datetime import datetime


class LithologyTypeBase(BaseModel):
    name: str
    color: str = "#888888"
    layer_order: int = 0


class LithologyTypeOut(LithologyTypeBase):
    id: int
    project_id: UUID

    class Config:
        from_attributes = True


class LithologyTypeUpdate(BaseModel):
    color: Optional[str] = None
    layer_order: Optional[int] = None


class BoreholeLayerBase(BaseModel):
    layer_no: int
    top_depth: float
    bottom_depth: float
    lithology_name: str
    spt_n: Optional[float] = None
    water_content: Optional[float] = None
    compression_modulus: Optional[float] = None


class BoreholeLayerOut(BoreholeLayerBase):
    id: UUID
    borehole_id: UUID

    class Config:
        from_attributes = True


class BoreholeLayerUpdate(BaseModel):
    top_depth: Optional[float] = None
    bottom_depth: Optional[float] = None
    lithology_name: Optional[str] = None
    spt_n: Optional[float] = None
    water_content: Optional[float] = None
    compression_modulus: Optional[float] = None


class BoreholeBase(BaseModel):
    hole_id: str
    longitude: float = Field(..., ge=73.0, le=135.0)
    latitude: float = Field(..., ge=3.0, le=54.0)
    elevation: float = Field(..., ge=0)


class BoreholeCreate(BoreholeBase):
    layers: List[BoreholeLayerBase]


class BoreholeOut(BoreholeBase):
    id: UUID
    project_id: UUID
    version: int
    created_at: datetime
    updated_at: datetime
    layers: List[BoreholeLayerOut] = []

    class Config:
        from_attributes = True


class BoreholeUpdate(BaseModel):
    hole_id: Optional[str] = None
    longitude: Optional[float] = Field(None, ge=73.0, le=135.0)
    latitude: Optional[float] = Field(None, ge=3.0, le=54.0)
    elevation: Optional[float] = Field(None, ge=0)
    version: int
    layers: Optional[List[BoreholeLayerUpdate]] = None


class ProjectBase(BaseModel):
    name: str
    description: Optional[str] = None


class ProjectCreate(ProjectBase):
    pass


class ProjectOut(ProjectBase):
    id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class ProfileLineCreate(BaseModel):
    name: str
    borehole_ids: List[UUID]
    interpolation_method: str = "linear"


class ProfileLineOut(BaseModel):
    id: UUID
    project_id: UUID
    name: str
    borehole_ids: List[UUID]
    interpolation_method: str
    created_at: datetime

    class Config:
        from_attributes = True


class AnnotationCreate(BaseModel):
    type: str = "text"
    x: float
    y: float
    text_content: Optional[str] = None
    arrow_dx: Optional[float] = None
    arrow_dy: Optional[float] = None


class AnnotationOut(AnnotationCreate):
    id: UUID
    profile_id: UUID
    created_at: datetime

    class Config:
        from_attributes = True


class ModelRunCreate(BaseModel):
    variogram_model: str = "spherical"
    range_param: Optional[float] = None
    sill_param: Optional[float] = None
    nugget_param: Optional[float] = None
    aniso_angle: float = 0
    aniso_ratio: float = 1
    grid_nx: int = Field(50, ge=5, le=100)
    grid_ny: int = Field(50, ge=5, le=100)
    grid_nz: int = Field(25, ge=5, le=50)


class ModelRunOut(BaseModel):
    id: UUID
    project_id: UUID
    status: str
    variogram_model: str
    range_param: Optional[float]
    sill_param: Optional[float]
    nugget_param: Optional[float]
    aniso_angle: float
    aniso_ratio: float
    grid_nx: int
    grid_ny: int
    grid_nz: int
    progress: float
    created_at: datetime
    completed_at: Optional[datetime]

    class Config:
        from_attributes = True


class CSVImportResult(BaseModel):
    imported: int
    errors: List[str]
    warnings: List[str]


class ValidationError(BaseModel):
    field: str
    message: str


class LayerStatsOut(BaseModel):
    lithology_name: str
    color: str
    thickness_mean: float
    thickness_min: float
    thickness_max: float
    area: float
    volume: float
