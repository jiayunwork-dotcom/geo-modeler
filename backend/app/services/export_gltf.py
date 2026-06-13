import numpy as np
import struct
import json


def export_gltf(result_data: dict) -> bytes:
    surfaces = result_data.get("surfaces", {})
    grid_info = result_data.get("grid", {})
    lithologies = result_data.get("lithologies", [])

    nx = grid_info["nx"]
    ny = grid_info["ny"]
    lon_min = grid_info["lon_min"]
    lon_max = grid_info["lon_max"]
    lat_min = grid_info["lat_min"]
    lat_max = grid_info["lat_max"]

    lons = np.linspace(lon_min, lon_max, nx)
    lats = np.linspace(lat_min, lat_max, ny)

    all_vertices = []
    all_indices = []
    vertex_offset = 0

    for litho_name in lithologies:
        surface = surfaces.get(litho_name)
        if not surface:
            continue

        top = surface.get("top")
        bottom = surface.get("bottom")
        if top is None:
            continue

        top_arr = np.array(top)

        verts = []
        idxs = []

        for j in range(ny):
            for i in range(nx):
                x = (lons[i] - lon_min) / max(lon_max - lon_min, 1e-9) * 100
                y = (lats[j] - lat_min) / max(lat_max - lat_min, 1e-9) * 100
                z = top_arr[j, i]
                verts.append([x, y, z])

        for j in range(ny - 1):
            for i in range(nx - 1):
                v0 = j * nx + i
                v1 = j * nx + i + 1
                v2 = (j + 1) * nx + i
                v3 = (j + 1) * nx + i + 1
                idxs.extend([v0, v2, v1, v1, v2, v3])

        all_vertices.extend(verts)
        all_indices.extend([idx + vertex_offset for idx in idxs])
        vertex_offset += len(verts)

        if bottom is not None:
            bottom_arr = np.array(bottom)
            bottom_verts = []
            bottom_idxs = []

            for j in range(ny):
                for i in range(nx):
                    x = (lons[i] - lon_min) / max(lon_max - lon_min, 1e-9) * 100
                    y = (lats[j] - lat_min) / max(lat_max - lat_min, 1e-9) * 100
                    z = bottom_arr[j, i]
                    bottom_verts.append([x, y, z])

            for j in range(ny - 1):
                for i in range(nx - 1):
                    v0 = j * nx + i
                    v1 = j * nx + i + 1
                    v2 = (j + 1) * nx + i
                    v3 = (j + 1) * nx + i + 1
                    bottom_idxs.extend([v0, v1, v2, v1, v3, v2])

            all_vertices.extend(bottom_verts)
            all_indices.extend([idx + vertex_offset for idx in bottom_idxs])
            vertex_offset += len(bottom_verts)

    if not all_vertices:
        all_vertices = [[0, 0, 0], [1, 0, 0], [0, 1, 0]]
        all_indices = [0, 1, 2]

    vertices = np.array(all_vertices, dtype=np.float32)
    indices = np.array(all_indices, dtype=np.uint32)

    vert_bytes = vertices.tobytes()
    idx_bytes = indices.tobytes()

    vert_len = len(vert_bytes)
    idx_len = len(idx_bytes)

    bin_data = vert_bytes + idx_bytes
    while len(bin_data) % 4 != 0:
        bin_data += b'\x00'

    gltf = {
        "asset": {"version": "2.0", "generator": "GeoModeler"},
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": [{"mesh": 0}],
        "meshes": [{"primitives": [{"attributes": {"POSITION": 0}, "indices": 1}]}],
        "accessors": [
            {
                "bufferView": 0,
                "componentType": 5126,
                "count": len(vertices),
                "type": "VEC3",
                "max": vertices.max(axis=0).tolist(),
                "min": vertices.min(axis=0).tolist(),
            },
            {
                "bufferView": 1,
                "componentType": 5125,
                "count": len(indices),
                "type": "SCALAR",
                "max": [int(indices.max())],
                "min": [int(indices.min())],
            },
        ],
        "bufferViews": [
            {
                "buffer": 0,
                "byteOffset": 0,
                "byteLength": vert_len,
                "target": 34962,
            },
            {
                "buffer": 0,
                "byteOffset": vert_len,
                "byteLength": idx_len,
                "target": 34963,
            },
        ],
        "buffers": [{"byteLength": len(bin_data)}],
    }

    json_str = json.dumps(gltf, separators=(",", ":"))
    json_bytes = json_str.encode("utf-8")
    while len(json_bytes) % 4 != 0:
        json_bytes += b" "

    header = struct.pack("<I", 0x46546C67)
    header += struct.pack("<I", 2)
    header += struct.pack("<I", 12 + 8 + len(json_bytes) + 8 + len(bin_data))

    chunk0_len = struct.pack("<I", len(json_bytes))
    chunk0_type = struct.pack("<I", 0x4E4F534A)
    chunk1_len = struct.pack("<I", len(bin_data))
    chunk1_type = struct.pack("<I", 0x004E4942)

    glb = header + chunk0_len + chunk0_type + json_bytes + chunk1_len + chunk1_type + bin_data
    return glb
