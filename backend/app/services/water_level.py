import numpy as np
from scipy import stats as scipy_stats
from typing import List, Tuple, Optional
from datetime import date
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.models import Borehole, WaterLevel
from app.services.krige import ordinary_kriging, compute_variogram
from app.services.modeling3d import _compute_grid_bounds, _generate_grid
import asyncio


def compute_statistics(records: List[WaterLevel]) -> dict:
    if not records or len(records) < 1:
        return None

    values = np.array([r.water_level for r in sorted(records, key=lambda r: r.obs_date)])

    mean_val = float(np.mean(values))
    median_val = float(np.median(values))
    std_val = float(np.std(values, ddof=1)) if len(values) > 1 else 0.0
    cv_val = (std_val / mean_val * 100) if mean_val != 0 else 0.0

    sorted_records = sorted(records, key=lambda r: r.obs_date)
    max_rise = 0
    max_fall = 0
    rise_start = None
    fall_start = None

    for i in range(1, len(sorted_records)):
        diff = sorted_records[i].water_level - sorted_records[i - 1].water_level
        if diff > 0:
            if rise_start is None:
                rise_start = sorted_records[i - 1].obs_date
            current_rise_span = (sorted_records[i].obs_date - rise_start).days
            max_rise = max(max_rise, current_rise_span)
            fall_start = None
        elif diff < 0:
            if fall_start is None:
                fall_start = sorted_records[i - 1].obs_date
            current_fall_span = (sorted_records[i].obs_date - fall_start).days
            max_fall = max(max_fall, current_fall_span)
            rise_start = None
        else:
            rise_start = None
            fall_start = None

    annual_amplitudes = {}
    for r in sorted_records:
        year = r.obs_date.year
        if year not in annual_amplitudes:
            annual_amplitudes[year] = []
        annual_amplitudes[year].append(r.water_level)

    annual_amp = 0.0
    if annual_amplitudes:
        amps = [max(v) - min(v) for v in annual_amplitudes.values() if len(v) >= 2]
        annual_amp = float(np.mean(amps)) if amps else 0.0

    return {
        "count": len(records),
        "mean": mean_val,
        "median": median_val,
        "std_dev": std_val,
        "cv": cv_val,
        "max_rise_days": max_rise,
        "max_fall_days": max_fall,
        "annual_amplitude": annual_amp,
    }


def mann_kendall_test(records: List[WaterLevel]) -> dict:
    if not records or len(records) < 8:
        return {
            "count": len(records) if records else 0,
            "s_stat": None,
            "var_s": None,
            "z_value": None,
            "p_value": None,
            "trend": "数据不足",
            "trend_icon": "—",
        }

    sorted_records = sorted(records, key=lambda r: r.obs_date)
    values = [r.water_level for r in sorted_records]
    n = len(values)

    s = 0
    for i in range(n - 1):
        for j in range(i + 1, n):
            diff = values[j] - values[i]
            if diff > 0:
                s += 1
            elif diff < 0:
                s -= 1

    unique_vals = sorted(set(values))
    tie_groups = [values.count(v) for v in unique_vals if values.count(v) > 1]

    var_s = n * (n - 1) * (2 * n + 5)
    for t in tie_groups:
        var_s -= t * (t - 1) * (2 * t + 5)
    var_s = var_s / 18.0

    if s > 0:
        z = (s - 1) / np.sqrt(var_s) if var_s > 0 else 0
    elif s < 0:
        z = (s + 1) / np.sqrt(var_s) if var_s > 0 else 0
    else:
        z = 0

    p_value = 2 * (1 - scipy_stats.norm.cdf(abs(z)))

    if p_value < 0.05:
        if z > 0:
            trend = "显著上升"
            trend_icon = "↑"
        else:
            trend = "显著下降"
            trend_icon = "↓"
    else:
        trend = "无显著趋势"
        trend_icon = "—"

    return {
        "count": n,
        "s_stat": float(s),
        "var_s": float(var_s),
        "z_value": float(z),
        "p_value": float(p_value),
        "trend": trend,
        "trend_icon": trend_icon,
    }


def compute_boxplot_data(records: List[WaterLevel]) -> dict:
    if not records:
        return None
    values = sorted([r.water_level for r in records])
    arr = np.array(values)
    q1 = float(np.percentile(arr, 25))
    q2 = float(np.percentile(arr, 50))
    q3 = float(np.percentile(arr, 75))
    iqr = q3 - q1
    whisker_low = float(max(arr.min(), q1 - 1.5 * iqr))
    whisker_high = float(min(arr.max(), q3 + 1.5 * iqr))
    outliers = [float(v) for v in values if v < whisker_low or v > whisker_high]
    return {
        "min": float(arr.min()),
        "max": float(arr.max()),
        "q1": q1,
        "median": q2,
        "q3": q3,
        "whisker_low": whisker_low,
        "whisker_high": whisker_high,
        "outliers": outliers,
    }


async def kriging_water_level(
    boreholes: List[Borehole],
    water_level_map: dict,
    variogram_model: str = "spherical",
    grid_nx: int = 50,
    grid_ny: int = 50,
) -> dict:
    coords_list = []
    values_list = []

    for bh in boreholes:
        bh_id = str(bh.id)
        if bh_id in water_level_map and water_level_map[bh_id] is not None:
            coords_list.append([bh.longitude, bh.latitude])
            values_list.append(water_level_map[bh_id])

    if len(coords_list) < 3:
        return {"error": "水位数据不足，至少需要3个钻孔有水位数据"}

    coords = np.array(coords_list)
    values = np.array(values_list)

    lon_min, lon_max, lat_min, lat_max = _compute_grid_bounds(boreholes)
    grid_2d = _generate_grid(lon_min, lon_max, lat_min, lat_max, grid_nx, grid_ny)

    vinfo = compute_variogram(coords, values, variogram_model)
    r = vinfo["range"]
    s = vinfo["sill"]
    n = vinfo["nugget"]

    predicted, variance = ordinary_kriging(
        coords, values, grid_2d,
        model_type=variogram_model,
        range_=r, sill=s, nugget=n,
    )

    grid_data = predicted.reshape(grid_ny, grid_nx).tolist()
    var_data = variance.reshape(grid_ny, grid_nx).tolist()

    wl_min = float(np.min(predicted))
    wl_max = float(np.max(predicted))

    return {
        "grid": {
            "nx": grid_nx,
            "ny": grid_ny,
            "lon_min": lon_min,
            "lon_max": lon_max,
            "lat_min": lat_min,
            "lat_max": lat_max,
        },
        "water_level_grid": grid_data,
        "variance_grid": var_data,
        "water_level_min": wl_min,
        "water_level_max": wl_max,
        "variogram": vinfo,
    }
