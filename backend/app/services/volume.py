import numpy as np
from typing import Optional


def compute_layer_volume(result_data: dict, lithology_name: str) -> float:
    if not result_data or "surfaces" not in result_data:
        return 0.0

    surface = result_data["surfaces"].get(lithology_name)
    if not surface or surface.get("top") is None or surface.get("bottom") is None:
        return 0.0

    grid_info = result_data["grid"]
    nx = grid_info["nx"]
    ny = grid_info["ny"]

    top = np.array(surface["top"])
    bottom = np.array(surface["bottom"])

    thickness = top - bottom
    thickness = np.maximum(thickness, 0)

    lon_range = grid_info["lon_max"] - grid_info["lon_min"]
    lat_range = grid_info["lat_max"] - grid_info["lat_min"]

    lat_center = (grid_info["lat_min"] + grid_info["lat_max"]) / 2
    dx = lon_range / nx * 111320 * np.cos(np.radians(lat_center))
    dy = lat_range / ny * 111320

    cell_area = dx * dy
    volume = float(np.sum(thickness) * cell_area)

    return volume


def compute_all_layer_volumes(result_data: dict) -> list:
    if not result_data or "surfaces" not in result_data:
        return []

    lithologies = result_data.get("lithologies", [])
    results = []
    total_volume = 0.0

    for litho_name in lithologies:
        vol = compute_layer_volume(result_data, litho_name)
        results.append({
            "lithology_name": litho_name,
            "volume": round(vol, 2),
        })
        total_volume += vol

    for item in results:
        if total_volume > 0:
            item["percentage"] = round(item["volume"] / total_volume * 100, 2)
        else:
            item["percentage"] = 0.0
        item["total_volume"] = round(total_volume, 2)

    return results
