CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lithology_types (
    id SERIAL PRIMARY KEY,
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(7) NOT NULL DEFAULT '#888888',
    layer_order INTEGER NOT NULL DEFAULT 0,
    UNIQUE(project_id, name)
);

CREATE TABLE IF NOT EXISTS boreholes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    hole_id VARCHAR(50) NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    elevation DOUBLE PRECISION NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(project_id, hole_id)
);

CREATE TABLE IF NOT EXISTS borehole_layers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    borehole_id UUID NOT NULL REFERENCES boreholes(id) ON DELETE CASCADE,
    layer_no INTEGER NOT NULL,
    top_depth DOUBLE PRECISION NOT NULL,
    bottom_depth DOUBLE PRECISION NOT NULL,
    lithology_name VARCHAR(100) NOT NULL,
    spt_n DOUBLE PRECISION,
    water_content DOUBLE PRECISION,
    compression_modulus DOUBLE PRECISION,
    UNIQUE(borehole_id, layer_no)
);

CREATE TABLE IF NOT EXISTS profile_lines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    borehole_ids UUID[] NOT NULL,
    interpolation_method VARCHAR(20) NOT NULL DEFAULT 'linear',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS model_runs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    variogram_model VARCHAR(20) NOT NULL DEFAULT 'spherical',
    range_param DOUBLE PRECISION,
    sill_param DOUBLE PRECISION,
    nugget_param DOUBLE PRECISION,
    aniso_angle DOUBLE PRECISION DEFAULT 0,
    aniso_ratio DOUBLE PRECISION DEFAULT 1,
    grid_nx INTEGER NOT NULL DEFAULT 50,
    grid_ny INTEGER NOT NULL DEFAULT 50,
    grid_nz INTEGER NOT NULL DEFAULT 25,
    progress DOUBLE PRECISION DEFAULT 0,
    result_data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS annotations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profile_lines(id) ON DELETE CASCADE,
    type VARCHAR(20) NOT NULL DEFAULT 'text',
    x DOUBLE PRECISION NOT NULL,
    y DOUBLE PRECISION NOT NULL,
    text_content TEXT,
    arrow_dx DOUBLE PRECISION,
    arrow_dy DOUBLE PRECISION,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_boreholes_project ON boreholes(project_id);
CREATE INDEX idx_borehole_layers_borehole ON borehole_layers(borehole_id);
CREATE INDEX idx_lithology_project ON lithology_types(project_id);
CREATE INDEX idx_model_runs_project ON model_runs(project_id);
