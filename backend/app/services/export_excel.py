import io
import numpy as np
from openpyxl import Workbook
from typing import List
from app.models import Borehole, LithologyType
from app.services.volume import compute_layer_volume


def export_stats_excel(
    boreholes: List[Borehole],
    lithology_types: List[LithologyType],
    result_data: dict = None,
) -> bytes:
    wb = Workbook()

    ws_summary = wb.active
    ws_summary.title = "地层统计"

    headers = ["岩性名称", "颜色", "厚度均值(m)", "厚度最小值(m)", "厚度最大值(m)", "出现次数"]
    if result_data:
        headers.extend(["面积(m²)", "体积(m³)"])

    ws_summary.append(headers)

    color_map = {lt.name: lt.color for lt in lithology_types}

    litho_thicknesses = {}
    for bh in boreholes:
        for layer in bh.layers:
            name = layer.lithology_name
            thickness = layer.bottom_depth - layer.top_depth
            if name not in litho_thicknesses:
                litho_thicknesses[name] = []
            litho_thicknesses[name].append(thickness)

    for litho_name, thicknesses in litho_thicknesses.items():
        color = color_map.get(litho_name, "#888888")
        row = [
            litho_name,
            color,
            float(np.mean(thicknesses)),
            float(np.min(thicknesses)),
            float(np.max(thicknesses)),
            len(thicknesses),
        ]
        if result_data:
            volume = compute_layer_volume(result_data, litho_name)
            surface = result_data.get("surfaces", {}).get(litho_name, {})
            top = surface.get("top")
            area = 0.0
            if top:
                grid_info = result_data["grid"]
                nx = grid_info["nx"]
                ny = grid_info["ny"]
                lon_range = grid_info["lon_max"] - grid_info["lon_min"]
                lat_range = grid_info["lat_max"] - grid_info["lat_min"]
                lat_center = (grid_info["lat_min"] + grid_info["lat_max"]) / 2
                dx = lon_range / nx * 111320 * np.cos(np.radians(lat_center))
                dy = lat_range / ny * 111320
                cell_area = dx * dy
                top_arr = np.array(top)
                present = np.any(top_arr != 0) if top_arr.size > 0 else False
                area = float(cell_area * nx * ny) if present else 0.0
            row.extend([area, volume])
        ws_summary.append(row)

    ws_boreholes = wb.create_sheet("钻孔数据")
    ws_boreholes.append(["孔号", "经度", "纬度", "高程(m)", "层号", "层顶深度(m)",
                          "层底深度(m)", "岩性", "厚度(m)", "标贯N值", "含水量(%)", "压缩模量(MPa)"])

    for bh in boreholes:
        for layer in sorted(bh.layers, key=lambda l: l.layer_no):
            ws_boreholes.append([
                bh.hole_id,
                bh.longitude,
                bh.latitude,
                bh.elevation,
                layer.layer_no,
                layer.top_depth,
                layer.bottom_depth,
                layer.lithology_name,
                layer.bottom_depth - layer.top_depth,
                layer.spt_n,
                layer.water_content,
                layer.compression_modulus,
            ])

    buf = io.BytesIO()
    wb.save(buf)
    buf.seek(0)
    return buf.read()
