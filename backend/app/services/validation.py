from typing import List, Tuple
from app.config import (
    CHINA_LON_MIN, CHINA_LON_MAX, CHINA_LAT_MIN, CHINA_LAT_MAX,
    MAX_BOREHOLES, MAX_LAYERS_PER_BOREHOLE
)
from app.schemas import BoreholeLayerBase


def validate_coordinates(lon: float, lat: float) -> List[str]:
    errors = []
    if not (CHINA_LON_MIN <= lon <= CHINA_LON_MAX):
        errors.append(f"经度 {lon} 超出中国范围 ({CHINA_LON_MIN}~{CHINA_LON_MAX})")
    if not (CHINA_LAT_MIN <= lat <= CHINA_LAT_MAX):
        errors.append(f"纬度 {lat} 超出中国范围 ({CHINA_LAT_MIN}~{CHINA_LAT_MAX})")
    return errors


def validate_elevation(elevation: float) -> List[str]:
    errors = []
    if elevation < 0:
        errors.append(f"孔口高程 {elevation} 不能为负值")
    return errors


def validate_layers(layers: List[BoreholeLayerBase]) -> List[str]:
    errors = []
    if len(layers) > MAX_LAYERS_PER_BOREHOLE:
        errors.append(f"分层数量 {len(layers)} 超出上限 {MAX_LAYERS_PER_BOREHOLE}")
    if not layers:
        errors.append("钻孔必须至少有一个分层")
        return errors

    sorted_layers = sorted(layers, key=lambda l: l.layer_no)
    for i, layer in enumerate(sorted_layers):
        if layer.top_depth >= layer.bottom_depth:
            errors.append(
                f"层 {layer.layer_no}: 层顶深度 {layer.top_depth} 必须小于层底深度 {layer.bottom_depth}"
            )
        if i > 0:
            prev = sorted_layers[i - 1]
            if abs(layer.top_depth - prev.bottom_depth) > 0.01:
                errors.append(
                    f"层 {layer.layer_no}: 层顶深度 {layer.top_depth} 与上层底深度 {prev.bottom_depth} 不连续"
                )

    return errors


def validate_borehole_count(current_count: int) -> List[str]:
    errors = []
    if current_count >= MAX_BOREHOLES:
        errors.append(f"钻孔数量已达上限 {MAX_BOREHOLES}")
    return errors


def check_uniformity(boreholes: List[Tuple[float, float, float]]) -> List[str]:
    warnings = []
    if len(boreholes) < 3:
        return warnings

    import numpy as np
    coords = np.array([(b[0], b[1]) for b in boreholes])

    from scipy.spatial.distance import pdist
    dists = pdist(coords)
    mean_dist = np.mean(dists)
    max_dist = np.max(dists)

    if max_dist > mean_dist * 3:
        direction_vec = None
        max_pair_idx = np.argmax(dists)
        n = len(coords)
        for i in range(n):
            for j in range(i + 1, n):
                if len(dists) > 0:
                    pass
        warnings.append(
            f"钻孔分布极不均匀: 最大孔间距 {max_dist:.1f} 超过均距 {mean_dist:.1f} 的3倍，部分方向插值可信度低"
        )

    return warnings
