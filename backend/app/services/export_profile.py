import io
import numpy as np
from matplotlib.figure import Figure
from matplotlib.backends.backend_agg import FigureCanvasAgg


DEFAULT_COLORS = [
    "#E6B89C", "#F0E68C", "#CD853F", "#8B7355", "#A0522D",
    "#DEB887", "#D2B48C", "#BDB76B", "#BC8F8F", "#C4A882",
]


def _get_color_map(profile_data: dict) -> dict:
    color_map = {}
    for i, litho in enumerate(profile_data.get("lithologies", [])):
        color_map[litho] = DEFAULT_COLORS[i % len(DEFAULT_COLORS)]
    return color_map


def _draw_profile(fig, ax, profile_data: dict):
    color_map = _get_color_map(profile_data)
    columns = profile_data["columns"]
    connections = profile_data["connections"]

    for conn in connections:
        litho = conn["lithology_name"]
        color = color_map.get(litho, "#888888")
        dists = conn["distances"]
        top = conn["top_elevations"]
        bottom = conn["bottom_elevations"]

        top_line = list(zip(dists, top))
        bottom_line = list(zip(dists, bottom))
        bottom_line.reverse()

        polygon = top_line + bottom_line
        if polygon:
            from matplotlib.patches import Polygon as MplPolygon
            poly = MplPolygon(polygon, closed=True, facecolor=color, edgecolor="black",
                              linewidth=0.5, alpha=0.85, label=litho)
            ax.add_patch(poly)

    for col in columns:
        x = col["distance"]
        elev = col["elevation"]
        y_bottom = elev

        for layer in col["layers"]:
            litho = layer["lithology_name"]
            color = color_map.get(litho, "#888888")
            top_y = layer["top_elevation"]
            bottom_y = layer["bottom_elevation"]

            from matplotlib.patches import Rectangle
            rect = Rectangle((x - 3, bottom_y), 6, top_y - bottom_y,
                              facecolor=color, edgecolor="black", linewidth=1)
            ax.add_patch(rect)

            mid_y = (top_y + bottom_y) / 2
            thickness = layer["thickness"]
            ax.text(x + 8, mid_y, f"{layer['layer_no']}\n{thickness:.1f}m",
                    fontsize=7, va="center", ha="left")

        ax.text(x, elev + 2, col["hole_id"], fontsize=8, ha="center", fontweight="bold")

    ax.set_xlabel("水平距离 (m)")
    ax.set_ylabel("高程 (m)")
    ax.set_title("地质剖面图")
    ax.invert_yaxis()
    ax.grid(True, alpha=0.3)

    handles, labels = ax.get_legend_handles_labels()
    by_label = dict(zip(labels, handles))
    if by_label:
        ax.legend(by_label.values(), by_label.keys(), loc="upper right", fontsize=8)


def export_profile_png(profile_data: dict, width: int = 1600, height: int = 800, dpi: int = 150) -> bytes:
    fig = Figure(figsize=(width / dpi, height / dpi), dpi=dpi)
    ax = fig.add_subplot(111)
    _draw_profile(fig, ax, profile_data)

    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=dpi, bbox_inches="tight")
    buf.seek(0)
    return buf.read()


def export_profile_svg(profile_data: dict) -> str:
    fig = Figure(figsize=(16, 8))
    ax = fig.add_subplot(111)
    _draw_profile(fig, ax, profile_data)

    buf = io.BytesIO()
    fig.savefig(buf, format="svg", bbox_inches="tight")
    buf.seek(0)
    return buf.read().decode("utf-8")
