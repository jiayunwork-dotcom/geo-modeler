import io
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from typing import List
from app.models import ModelRun, Borehole


def export_report_pdf(model_run: ModelRun, boreholes: List[Borehole]) -> bytes:
    buf = io.BytesIO()

    doc = SimpleDocTemplate(buf, pagesize=A4, topMargin=20 * mm, bottomMargin=20 * mm,
                            leftMargin=20 * mm, rightMargin=20 * mm)

    styles = getSampleStyleSheet()
    title_style = styles["Title"]
    heading_style = styles["Heading2"]
    normal_style = styles["Normal"]

    elements = []

    elements.append(Paragraph("三维地质建模参数报告", title_style))
    elements.append(Spacer(1, 10 * mm))
    elements.append(Paragraph(f"生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", normal_style))
    elements.append(Spacer(1, 5 * mm))

    elements.append(Paragraph("1. 建模概述", heading_style))
    overview_data = [
        ["参数", "值"],
        ["建模状态", model_run.status],
        ["变异函数模型", model_run.variogram_model],
        ["变程 (Range)", f"{model_run.range_param:.4f}" if model_run.range_param else "自动拟合"],
        ["基台值 (Sill)", f"{model_run.sill_param:.4f}" if model_run.sill_param else "自动拟合"],
        ["块金值 (Nugget)", f"{model_run.nugget_param:.4f}" if model_run.nugget_param else "自动拟合"],
        ["各向异性角度", f"{model_run.aniso_angle:.1f}°"],
        ["各向异性比", f"{model_run.aniso_ratio:.2f}"],
        ["网格分辨率", f"{model_run.grid_nx} × {model_run.grid_ny} × {model_run.grid_nz}"],
        ["钻孔数量", str(len(boreholes))],
    ]
    table = Table(overview_data, colWidths=[60 * mm, 80 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.grey),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
    ]))
    elements.append(table)
    elements.append(Spacer(1, 5 * mm))

    elements.append(Paragraph("2. 钻孔信息", heading_style))
    bh_data = [["孔号", "经度", "纬度", "高程(m)", "分层数"]]
    for bh in boreholes:
        bh_data.append([
            bh.hole_id,
            f"{bh.longitude:.6f}",
            f"{bh.latitude:.6f}",
            f"{bh.elevation:.2f}",
            str(len(bh.layers)),
        ])
    table2 = Table(bh_data, colWidths=[25 * mm, 30 * mm, 30 * mm, 25 * mm, 20 * mm])
    table2.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.grey),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
    ]))
    elements.append(table2)
    elements.append(Spacer(1, 5 * mm))

    elements.append(Paragraph("3. 变异函数拟合结果", heading_style))
    if model_run.result_data and "variogram_info" in model_run.result_data:
        vinfo_data = [["层位", "变程", "基台值", "块金值"]]
        for key, vinfo in model_run.result_data["variogram_info"].items():
            vinfo_data.append([
                key,
                f"{vinfo.get('range', 'N/A'):.4f}" if isinstance(vinfo.get('range'), (int, float)) else "N/A",
                f"{vinfo.get('sill', 'N/A'):.4f}" if isinstance(vinfo.get('sill'), (int, float)) else "N/A",
                f"{vinfo.get('nugget', 'N/A'):.4f}" if isinstance(vinfo.get('nugget'), (int, float)) else "N/A",
            ])
        table3 = Table(vinfo_data, colWidths=[40 * mm, 30 * mm, 30 * mm, 30 * mm])
        table3.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.grey),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
            ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
            ("FONTSIZE", (0, 0), (-1, -1), 8),
        ]))
        elements.append(table3)
    else:
        elements.append(Paragraph("暂无变异函数拟合数据", normal_style))

    elements.append(Spacer(1, 5 * mm))
    elements.append(Paragraph("4. 剖面图缩略", heading_style))
    elements.append(Paragraph("(剖面图请在系统中查看或导出PNG/SVG)", normal_style))

    doc.build(elements)
    buf.seek(0)
    return buf.read()
