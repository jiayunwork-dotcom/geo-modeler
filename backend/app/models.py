import uuid
from datetime import datetime, date
from sqlalchemy import (
    Column, String, Text, Integer, Float, DateTime, Date, ForeignKey, UniqueConstraint, JSON, ARRAY
)
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from app.database import Base


class Project(Base):
    __tablename__ = "projects"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(200), nullable=False)
    description = Column(Text)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)

    boreholes = relationship("Borehole", back_populates="project", cascade="all, delete-orphan")
    lithology_types = relationship("LithologyType", back_populates="project", cascade="all, delete-orphan")
    profile_lines = relationship("ProfileLine", back_populates="project", cascade="all, delete-orphan")
    model_runs = relationship("ModelRun", back_populates="project", cascade="all, delete-orphan")


class LithologyType(Base):
    __tablename__ = "lithology_types"
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(100), nullable=False)
    color = Column(String(7), nullable=False, default="#888888")
    layer_order = Column(Integer, nullable=False, default=0)

    project = relationship("Project", back_populates="lithology_types")

    __table_args__ = (UniqueConstraint("project_id", "name"),)


class Borehole(Base):
    __tablename__ = "boreholes"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    hole_id = Column(String(50), nullable=False)
    longitude = Column(Float, nullable=False)
    latitude = Column(Float, nullable=False)
    elevation = Column(Float, nullable=False)
    version = Column(Integer, nullable=False, default=1)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)

    project = relationship("Project", back_populates="boreholes")
    layers = relationship("BoreholeLayer", back_populates="borehole", cascade="all, delete-orphan",
                          order_by="BoreholeLayer.layer_no")
    water_levels = relationship("WaterLevel", back_populates="borehole", cascade="all, delete-orphan",
                                order_by="WaterLevel.obs_date")

    __table_args__ = (UniqueConstraint("project_id", "hole_id"),)


class BoreholeLayer(Base):
    __tablename__ = "borehole_layers"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    borehole_id = Column(UUID(as_uuid=True), ForeignKey("boreholes.id", ondelete="CASCADE"), nullable=False)
    layer_no = Column(Integer, nullable=False)
    top_depth = Column(Float, nullable=False)
    bottom_depth = Column(Float, nullable=False)
    lithology_name = Column(String(100), nullable=False)
    spt_n = Column(Float, nullable=True)
    water_content = Column(Float, nullable=True)
    compression_modulus = Column(Float, nullable=True)

    borehole = relationship("Borehole", back_populates="layers")

    __table_args__ = (UniqueConstraint("borehole_id", "layer_no"),)


class ProfileLine(Base):
    __tablename__ = "profile_lines"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(200), nullable=False)
    borehole_ids = Column(ARRAY(UUID(as_uuid=True)), nullable=False)
    interpolation_method = Column(String(20), nullable=False, default="linear")
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    project = relationship("Project", back_populates="profile_lines")
    annotations = relationship("Annotation", back_populates="profile_line", cascade="all, delete-orphan")


class Annotation(Base):
    __tablename__ = "annotations"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    profile_id = Column(UUID(as_uuid=True), ForeignKey("profile_lines.id", ondelete="CASCADE"), nullable=False)
    type = Column(String(20), nullable=False, default="text")
    x = Column(Float, nullable=False)
    y = Column(Float, nullable=False)
    text_content = Column(Text, nullable=True)
    arrow_dx = Column(Float, nullable=True)
    arrow_dy = Column(Float, nullable=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    profile_line = relationship("ProfileLine", back_populates="annotations")


class ModelRun(Base):
    __tablename__ = "model_runs"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    status = Column(String(20), nullable=False, default="pending")
    variogram_model = Column(String(20), nullable=False, default="spherical")
    range_param = Column(Float, nullable=True)
    sill_param = Column(Float, nullable=True)
    nugget_param = Column(Float, nullable=True)
    aniso_angle = Column(Float, nullable=False, default=0)
    aniso_ratio = Column(Float, nullable=False, default=1)
    grid_nx = Column(Integer, nullable=False, default=50)
    grid_ny = Column(Integer, nullable=False, default=50)
    grid_nz = Column(Integer, nullable=False, default=25)
    progress = Column(Float, nullable=False, default=0)
    result_data = Column(JSONB, nullable=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    completed_at = Column(DateTime(timezone=True), nullable=True)

    project = relationship("Project", back_populates="model_runs")


class WaterLevel(Base):
    __tablename__ = "water_levels"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    borehole_id = Column(UUID(as_uuid=True), ForeignKey("boreholes.id", ondelete="CASCADE"), nullable=False)
    obs_date = Column(Date, nullable=False)
    water_level = Column(Float, nullable=False)
    water_temp = Column(Float, nullable=True)
    conductivity = Column(Float, nullable=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    borehole = relationship("Borehole", back_populates="water_levels")

    __table_args__ = (UniqueConstraint("borehole_id", "obs_date"),)
