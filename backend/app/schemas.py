from pydantic import BaseModel, Field, field_validator
from typing import Optional, List
from uuid import UUID
from datetime import datetime, date


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


class WaterLevelBase(BaseModel):
    obs_date: date
    water_level: float
    water_temp: Optional[float] = None
    conductivity: Optional[float] = None


class WaterLevelCreate(WaterLevelBase):
    borehole_id: UUID


class WaterLevelOut(WaterLevelBase):
    id: UUID
    borehole_id: UUID
    created_at: datetime

    class Config:
        from_attributes = True


class WaterLevelCSVImportResult(BaseModel):
    imported: int
    errors: List[str]
    warnings: List[str]


class WaterLevelStatsOut(BaseModel):
    borehole_id: UUID
    hole_id: str
    count: int
    mean: Optional[float] = None
    median: Optional[float] = None
    std_dev: Optional[float] = None
    cv: Optional[float] = None
    max_rise_days: Optional[int] = None
    max_fall_days: Optional[int] = None
    annual_amplitude: Optional[float] = None
    anomaly_count: Optional[int] = None


class MKTestResult(BaseModel):
    borehole_id: UUID
    hole_id: str
    count: int
    s_stat: Optional[float] = None
    var_s: Optional[float] = None
    z_value: Optional[float] = None
    p_value: Optional[float] = None
    trend: str
    trend_icon: str


class WaterLevelKrigingRequest(BaseModel):
    obs_date: Optional[date] = None
    date_from: Optional[date] = None
    date_to: Optional[date] = None
    variogram_model: str = "spherical"
    grid_nx: int = Field(50, ge=5, le=100)
    grid_ny: int = Field(50, ge=5, le=100)


class WaterLevelThresholdBase(BaseModel):
    blue_threshold: float = Field(..., description="蓝色预警阈值(水位偏高)")
    orange_threshold: float = Field(..., description="橙色预警阈值(水位异常)")
    red_threshold: float = Field(..., description="红色预警阈值(水位危险)")

    @field_validator("orange_threshold")
    @classmethod
    def check_orange_gt_blue(cls, v, info):
        if v <= info.data.get("blue_threshold", float("-inf")):
            raise ValueError("橙色预警阈值必须大于蓝色预警阈值")
        return v

    @field_validator("red_threshold")
    @classmethod
    def check_red_gt_orange(cls, v, info):
        if v <= info.data.get("orange_threshold", float("-inf")):
            raise ValueError("红色预警阈值必须大于橙色预警阈值")
        return v


class WaterLevelThresholdCreate(WaterLevelThresholdBase):
    borehole_id: UUID


class WaterLevelThresholdUpdate(WaterLevelThresholdBase):
    pass


class WaterLevelThresholdOut(WaterLevelThresholdBase):
    id: UUID
    borehole_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class WarningInfo(BaseModel):
    borehole_id: UUID
    hole_id: str
    latest_water_level: float
    warning_level: str
    exceed_amount: float
    obs_date: date
