import numpy as np
from typing import List
from app.models import Borehole
from app.services.krige import ordinary_kriging


def interpolate_attribute_field(
    boreholes: List[Borehole],
    attribute: str,
    grid_nx: int = 50,
    grid_ny: int = 50,
    grid_nz: int = 25,
    variogram_model: str = "spherical",
) -> dict:
    points = []
    values = []

    for b in boreholes:
        for layer in b.layers:
            val = getattr(layer, attribute, None)
            if val is not None:
                mid_elev = b.elevation - (layer.top_depth + layer.bottom_depth) / 2.0
                points.append([b.longitude, b.latitude, mid_elev])
                values.append(val)

    if not points:
        return {"error": "没有可用的属性数据"}

    points = np.array(points)
    values = np.array(values)

    lon_min, lon_max = points[:, 0].min(), points[:, 0].max()
    lat_min, lat_max = points[:, 1].min(), points[:, 1].max()
    elev_min, elev_max = points[:, 2].min(), points[:, 2].max()

    expand = 0.10
    lon_range = lon_max - lon_min or 0.01
    lat_range = lat_max - lat_min or 0.01
    elev_range = elev_max - elev_min or 1.0

    lon_min -= lon_range * expand
    lon_max += lon_range * expand
    lat_min -= lat_range * expand
    lat_max += lat_range * expand
    elev_min -= elev_range * expand
    elev_max += elev_range * expand

    lons = np.linspace(lon_min, lon_max, grid_nx)
    lats = np.linspace(lat_min, lat_max, grid_ny)
    elevs = np.linspace(elev_min, elev_max, grid_nz)

    lon_grid, lat_grid, elev_grid = np.meshgrid(lons, lats, elevs)
    grid_3d = np.column_stack([
        lon_grid.ravel(), lat_grid.ravel(), elev_grid.ravel()
    ])

    coords_2d = points[:, :2]
    grid_2d = grid_3d[:, :2]

    predicted_2d, variance_2d = ordinary_kriging(
        coords_2d, values, grid_2d,
        model_type=variogram_model,
        n_neighbors=20,
    )

    field_3d = predicted_2d.reshape(grid_ny, grid_nx, grid_nz)

    return {
        "attribute": attribute,
        "grid": {
            "nx": grid_nx, "ny": grid_ny, "nz": grid_nz,
            "lon_min": float(lon_min), "lon_max": float(lon_max),
            "lat_min": float(lat_min), "lat_max": float(lat_max),
            "elev_min": float(elev_min), "elev_max": float(elev_max),
        },
        "field": field_3d.tolist(),
        "value_min": float(np.min(values)),
        "value_max": float(np.max(values)),
        "value_mean": float(np.mean(values)),
    }
