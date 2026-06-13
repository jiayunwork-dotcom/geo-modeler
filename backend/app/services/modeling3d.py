import numpy as np
from typing import List, Optional, Callable
from scipy.spatial import ConvexHull
from app.models import Borehole
from app.services.krige import ordinary_kriging, compute_variogram
from app.config import CONVEX_HULL_EXPAND_RATIO


def _get_borehole_coords(boreholes: List[Borehole]) -> np.ndarray:
    return np.array([[b.longitude, b.latitude, b.elevation] for b in boreholes])


def _get_unique_lithologies(boreholes: List[Borehole]) -> List[str]:
    lithologies = []
    seen = set()
    for b in boreholes:
        for layer in sorted(b.layers, key=lambda l: l.layer_no):
            if layer.lithology_name not in seen:
                lithologies.append(layer.lithology_name)
                seen.add(layer.lithology_name)
    return lithologies


def _build_surface_data(boreholes: List[Borehole], lithology_name: str) -> tuple:
    top_points = []
    bottom_points = []

    for b in boreholes:
        current_elev = b.elevation
        for layer in sorted(b.layers, key=lambda l: l.layer_no):
            layer_top_elev = current_elev
            layer_bottom_elev = b.elevation - layer.bottom_depth
            current_elev = layer_bottom_elev

            if layer.lithology_name == lithology_name:
                top_points.append([b.longitude, b.latitude, layer_top_elev])
                bottom_points.append([b.longitude, b.latitude, layer_bottom_elev])

    return np.array(top_points) if top_points else None, np.array(bottom_points) if bottom_points else None


def _compute_grid_bounds(boreholes: List[Borehole]) -> tuple:
    coords = _get_borehole_coords(boreholes)
    lon_min, lon_max = coords[:, 0].min(), coords[:, 0].max()
    lat_min, lat_max = coords[:, 1].min(), coords[:, 1].max()

    lon_range = lon_max - lon_min
    lat_range = lat_max - lat_min
    expand = CONVEX_HULL_EXPAND_RATIO

    return (
        lon_min - lon_range * expand,
        lon_max + lon_range * expand,
        lat_min - lat_range * expand,
        lat_max + lat_range * expand,
    )


def _generate_grid(
    lon_min: float, lon_max: float,
    lat_min: float, lat_max: float,
    nx: int, ny: int
) -> np.ndarray:
    lons = np.linspace(lon_min, lon_max, nx)
    lats = np.linspace(lat_min, lat_max, ny)
    lon_grid, lat_grid = np.meshgrid(lons, lats)
    return np.column_stack([lon_grid.ravel(), lat_grid.ravel()])


async def run_3d_modeling(
    boreholes: List[Borehole],
    variogram_model: str = "spherical",
    range_param: Optional[float] = None,
    sill_param: Optional[float] = None,
    nugget_param: Optional[float] = None,
    aniso_angle: float = 0,
    aniso_ratio: float = 1,
    grid_nx: int = 50,
    grid_ny: int = 50,
    grid_nz: int = 25,
    progress_callback: Optional[Callable] = None,
) -> dict:
    import asyncio

    lithologies = _get_unique_lithologies(boreholes)
    n_lithologies = len(lithologies)

    lon_min, lon_max, lat_min, lat_max = _compute_grid_bounds(boreholes)
    grid_2d = _generate_grid(lon_min, lon_max, lat_min, lat_max, grid_nx, grid_ny)

    coords_2d = np.array([[b.longitude, b.latitude] for b in boreholes])

    all_elevs = []
    for b in boreholes:
        for layer in b.layers:
            all_elevs.append(b.elevation - layer.top_depth)
            all_elevs.append(b.elevation - layer.bottom_depth)
    all_elevs = np.array(all_elevs)
    elev_min = float(np.min(all_elevs)) - 5
    elev_max = float(max(b.elevation for b in boreholes)) + 2

    z_levels = np.linspace(elev_min, elev_max, grid_nz)

    surfaces = {}
    variogram_info = {}
    total = n_lithologies * 2

    for i, litho_name in enumerate(lithologies):
        top_pts, bottom_pts = _build_surface_data(boreholes, litho_name)

        if top_pts is not None and len(top_pts) >= 3:
            top_coords = top_pts[:, :2]
            top_values = top_pts[:, 2]

            vinfo = compute_variogram(top_coords, top_values, variogram_model)
            variogram_info[f"{litho_name}_top"] = vinfo

            r = range_param or vinfo["range"]
            s = sill_param or vinfo["sill"]
            n = nugget_param or vinfo["nugget"]

            top_predicted, top_var = ordinary_kriging(
                top_coords, top_values, grid_2d,
                model_type=variogram_model,
                range_=r, sill=s, nugget=n,
                aniso_angle=aniso_angle,
                aniso_ratio=aniso_ratio,
            )
            top_grid = top_predicted.reshape(grid_ny, grid_nx)
        else:
            top_grid = None

        if progress_callback:
            await progress_callback((i * 2 + 1) / total * 90)
        await asyncio.sleep(0.01)

        if bottom_pts is not None and len(bottom_pts) >= 3:
            bottom_coords = bottom_pts[:, :2]
            bottom_values = bottom_pts[:, 2]

            vinfo = compute_variogram(bottom_coords, bottom_values, variogram_model)
            variogram_info[f"{litho_name}_bottom"] = vinfo

            r = range_param or vinfo["range"]
            s = sill_param or vinfo["sill"]
            n = nugget_param or vinfo["nugget"]

            bottom_predicted, bottom_var = ordinary_kriging(
                bottom_coords, bottom_values, grid_2d,
                model_type=variogram_model,
                range_=r, sill=s, nugget=n,
                aniso_angle=aniso_angle,
                aniso_ratio=aniso_ratio,
            )
            bottom_grid = bottom_predicted.reshape(grid_ny, grid_nx)
        else:
            bottom_grid = None

        if progress_callback:
            await progress_callback((i * 2 + 2) / total * 90)
        await asyncio.sleep(0.01)

        surfaces[litho_name] = {
            "top": top_grid.tolist() if top_grid is not None else None,
            "bottom": bottom_grid.tolist() if bottom_grid is not None else None,
        }

    for i in range(1, len(lithologies)):
        prev_name = lithologies[i - 1]
        curr_name = lithologies[i]
        prev_bottom = surfaces[prev_name]["bottom"]
        curr_top = surfaces[curr_name]["top"]

        if prev_bottom is not None and curr_top is not None:
            prev_bottom_arr = np.array(prev_bottom)
            curr_top_arr = np.array(curr_top)
            violation = curr_top_arr > prev_bottom_arr + 0.01
            if np.any(violation):
                mid = (curr_top_arr[violation] + prev_bottom_arr[violation]) / 2.0
                curr_top_arr[violation] = mid
                prev_bottom_arr[violation] = mid
                surfaces[prev_name]["bottom"] = prev_bottom_arr.tolist()
                surfaces[curr_name]["top"] = curr_top_arr.tolist()

    if progress_callback:
        await progress_callback(95)
    await asyncio.sleep(0.01)

    result = {
        "lithologies": lithologies,
        "surfaces": surfaces,
        "grid": {
            "nx": grid_nx,
            "ny": grid_ny,
            "nz": grid_nz,
            "lon_min": lon_min,
            "lon_max": lon_max,
            "lat_min": lat_min,
            "lat_max": lat_max,
            "elev_min": elev_min,
            "elev_max": elev_max,
            "z_levels": z_levels.tolist(),
        },
        "variogram_info": variogram_info,
        "borehole_coords": [
            {
                "id": str(b.id),
                "hole_id": b.hole_id,
                "longitude": b.longitude,
                "latitude": b.latitude,
                "elevation": b.elevation,
                "layers": [
                    {
                        "layer_no": l.layer_no,
                        "top_depth": l.top_depth,
                        "bottom_depth": l.bottom_depth,
                        "lithology_name": l.lithology_name,
                        "spt_n": l.spt_n,
                        "water_content": l.water_content,
                        "compression_modulus": l.compression_modulus,
                    }
                    for l in sorted(b.layers, key=lambda x: x.layer_no)
                ],
            }
            for b in boreholes
        ],
    }

    if progress_callback:
        await progress_callback(100)

    return result
