import numpy as np
from typing import List
from scipy.interpolate import CubicSpline
from app.models import Borehole
from app.services.krige import ordinary_kriging


def _haversine_distance(lon1, lat1, lon2, lat2):
    R = 111320
    dlat = lat2 - lat1
    dlon = (lon2 - lon1) * np.cos(np.radians((lat1 + lat2) / 2))
    return np.sqrt((dlat * R) ** 2 + (dlon * R) ** 2)


async def generate_profile_data(boreholes: List[Borehole], method: str = "linear") -> dict:
    sorted_bhs = sorted(boreholes, key=lambda b: b.longitude)

    distances = [0.0]
    for i in range(1, len(sorted_bhs)):
        d = _haversine_distance(
            sorted_bhs[i - 1].longitude, sorted_bhs[i - 1].latitude,
            sorted_bhs[i].longitude, sorted_bhs[i].latitude
        )
        distances.append(distances[-1] + d)

    columns = []
    for idx, bh in enumerate(sorted_bhs):
        layers = []
        current_elev = bh.elevation
        for layer in sorted(bh.layers, key=lambda l: l.layer_no):
            top_elev = current_elev
            bottom_elev = bh.elevation - layer.bottom_depth
            current_elev = bottom_elev
            thickness = top_elev - bottom_elev
            layers.append({
                "layer_no": layer.layer_no,
                "lithology_name": layer.lithology_name,
                "top_elevation": top_elev,
                "bottom_elevation": bottom_elev,
                "thickness": thickness,
                "spt_n": layer.spt_n,
                "water_content": layer.water_content,
                "compression_modulus": layer.compression_modulus,
            })
        columns.append({
            "borehole_id": str(bh.id),
            "hole_id": bh.hole_id,
            "distance": distances[idx],
            "elevation": bh.elevation,
            "longitude": bh.longitude,
            "latitude": bh.latitude,
            "layers": layers,
        })

    all_lithologies = []
    seen = set()
    for col in columns:
        for l in col["layers"]:
            if l["lithology_name"] not in seen:
                all_lithologies.append(l["lithology_name"])
                seen.add(l["lithology_name"])

    connections = []
    n_interp = max(50, len(columns) * 20)

    for litho_name in all_lithologies:
        top_points = []
        bottom_points = []
        for col in columns:
            for l in col["layers"]:
                if l["lithology_name"] == litho_name:
                    top_points.append((col["distance"], l["top_elevation"]))
                    bottom_points.append((col["distance"], l["bottom_elevation"]))
                    break
            else:
                top_points.append(None)
                bottom_points.append(None)

        present_indices = [i for i, p in enumerate(top_points) if p is not None]

        if len(present_indices) < 2:
            continue

        interp_dists = np.linspace(
            columns[present_indices[0]]["distance"],
            columns[present_indices[-1]]["distance"],
            n_interp,
        )

        present_dists = [columns[i]["distance"] for i in present_indices]
        top_elevs = [top_points[i][1] for i in present_indices]
        bottom_elevs = [bottom_points[i][1] for i in present_indices]

        if method == "linear":
            top_interp = np.interp(interp_dists, present_dists, top_elevs)
            bottom_interp = np.interp(interp_dists, present_dists, bottom_elevs)
        elif method == "cubic_spline":
            if len(present_indices) >= 4:
                cs_top = CubicSpline(present_dists, top_elevs)
                cs_bottom = CubicSpline(present_dists, bottom_elevs)
                top_interp = cs_top(interp_dists)
                bottom_interp = cs_bottom(interp_dists)
            else:
                top_interp = np.interp(interp_dists, present_dists, top_elevs)
                bottom_interp = np.interp(interp_dists, present_dists, bottom_elevs)
        elif method == "kriging":
            coords = np.array([[d, 0] for d in present_dists])
            grid = np.column_stack([interp_dists, np.zeros(n_interp)])

            top_interp_arr, _ = ordinary_kriging(
                coords, np.array(top_elevs), grid,
                model_type="spherical", n_neighbors=min(12, len(present_indices))
            )
            bottom_interp_arr, _ = ordinary_kriging(
                coords, np.array(bottom_elevs), grid,
                model_type="spherical", n_neighbors=min(12, len(present_indices))
            )
            top_interp = top_interp_arr
            bottom_interp = bottom_interp_arr
        else:
            top_interp = np.interp(interp_dists, present_dists, top_elevs)
            bottom_interp = np.interp(interp_dists, present_dists, bottom_elevs)

        first_present = present_indices[0]
        last_present = present_indices[-1]

        for i in range(len(columns)):
            if top_points[i] is None:
                col_dist = columns[i]["distance"]
                if col_dist < columns[first_present]["distance"]:
                    pinch_dist = columns[first_present]["distance"] - col_dist
                    total_dist = columns[first_present]["distance"] - (columns[first_present - 1]["distance"] if first_present > 0 else 0)
                    if total_dist > 0:
                        ratio = max(0, 1.0 - pinch_dist / total_dist)
                    else:
                        ratio = 0
                    idx_start = 0
                    idx_end = int(n_interp * ratio)
                    top_interp[idx_start:idx_end] = np.linspace(
                        top_interp[idx_start] if idx_start < n_interp else top_interp[0],
                        top_interp[idx_end] if idx_end < n_interp else top_interp[0],
                        max(1, idx_end - idx_start)
                    ) if idx_end > idx_start else top_interp[idx_start:idx_end]
                elif col_dist > columns[last_present]["distance"]:
                    pinch_dist = col_dist - columns[last_present]["distance"]
                    total_dist = (columns[min(last_present + 1, len(columns) - 1)]["distance"]
                                  - columns[last_present]["distance"]) if last_present < len(columns) - 1 else 1
                    if total_dist > 0:
                        ratio = max(0, 1.0 - pinch_dist / total_dist)
                    else:
                        ratio = 0
                    idx_end = n_interp
                    idx_start = int(n_interp * ratio)
                    if idx_end > idx_start:
                        top_interp[idx_start:idx_end] = np.linspace(
                            bottom_interp[idx_start] if idx_start < n_interp else bottom_interp[-1],
                            bottom_interp[idx_end - 1] if idx_end <= n_interp else bottom_interp[-1],
                            idx_end - idx_start
                        )

        thickness_interp = top_interp - bottom_interp
        for j in range(len(interp_dists)):
            if thickness_interp[j] < 0.05:
                mid = (top_interp[j] + bottom_interp[j]) / 2
                top_interp[j] = mid + 0.025
                bottom_interp[j] = mid - 0.025

        connections.append({
            "lithology_name": litho_name,
            "distances": interp_dists.tolist(),
            "top_elevations": top_interp.tolist(),
            "bottom_elevations": bottom_interp.tolist(),
        })

    return {
        "columns": columns,
        "connections": connections,
        "lithologies": all_lithologies,
        "total_distance": distances[-1] if distances else 0,
        "interpolation_method": method,
    }
