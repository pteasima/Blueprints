"""Shared export helpers for build123d models."""

from __future__ import annotations

import base64
import json
import shutil
import struct
from pathlib import Path
from typing import Any

from build123d import (
    Axis,
    ColorIndex,
    Compound,
    ExportDXF,
    ExportSVG,
    LineType,
    Shape,
    Unit,
    export_gltf,
    export_step,
    export_stl,
)

from blueprints.preview_hub import publish_to_preview_site


REPO_ROOT = Path(__file__).resolve().parents[2]
EXPORTS_DIR = REPO_ROOT / "exports"
VIEWER_DIR = Path(__file__).resolve().parent / "viewer"
VIEWER_IIFE_PATH = VIEWER_DIR / "viewer.iife.js"

# Drawing-unit stroke widths so a ~6 m section still reads at ~1800 px PNG.
SECTION_LINE_WEIGHT = 12.0
SECTION_HEAVY_WEIGHT = 22.0
SECTION_PNG_WIDTH = 1800

# SVG fill/line colours (0–255 RGB) keyed by Face/Wire.label from the section model.
# Near-max chroma solids (diagrammatic). Viewer Solid mode uses unlit MeshBasicMaterial.
# Optional roughness/metallic feed UsdPreviewSurface (viewer Realistic mode is separate).
# Keep SOLID_COLORS in src/blueprints/viewer/materials.js in sync with fill/line RGB.
SECTION_LAYERS: dict[str, dict[str, Any]] = {
    "floor": {
        "fill": (230, 115, 20),
        "line": (120, 50, 0),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.72,
        "metallic": 0.0,
    },
    "eps": {
        "fill": (70, 230, 25),
        "line": (25, 120, 10),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.92,
        "metallic": 0.0,
    },
    "masonry": {
        "fill": (225, 70, 40),
        "line": (130, 30, 15),
        "dxf": ColorIndex.RED,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "column": {
        "fill": (225, 70, 40),
        "line": (130, 30, 15),
        "dxf": ColorIndex.RED,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "venec": {
        "fill": (200, 55, 35),
        "line": (120, 25, 12),
        "dxf": ColorIndex.RED,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "plaster": {
        "fill": (255, 225, 120),
        "line": (170, 140, 50),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.9,
        "metallic": 0.0,
    },
    "furniture": {
        "fill": (255, 150, 0),
        "line": (160, 80, 0),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.45,
        "metallic": 0.0,
    },
    "upholstery": {
        "fill": (158, 168, 148),
        "line": (80, 90, 72),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.72,
        "metallic": 0.0,
    },
    "cabinet": {
        "fill": (214, 148, 40),
        "line": (120, 70, 10),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.42,
        "metallic": 0.0,
    },
    # Gridfinity baseplates in the kitchen drawers (printed plastic, grey).
    "gridfinity": {
        "fill": (150, 154, 160),
        "line": (80, 84, 90),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.6,
        "metallic": 0.0,
    },
    "worktop": {
        # Silestone Blanco Maple, a mottled white quartz (kitchen-cabinets.md).
        "fill": (236, 233, 226),
        "line": (120, 116, 108),
        "dxf": ColorIndex.LIGHT_GRAY,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.3,
        "metallic": 0.0,
    },
    "hob": {
        # Miele KM 8665 FL: black ceramic glass (kitchen-cabinets.md).
        "fill": (24, 24, 27),
        "line": (0, 0, 0),
        "dxf": ColorIndex.BLACK,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.1,
        "metallic": 0.0,
    },
    "oak": {
        "fill": (196, 150, 96),
        "line": (110, 72, 36),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.48,
        "metallic": 0.0,
    },
    "appliance": {
        "fill": (176, 190, 205),
        "line": (70, 80, 95),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.28,
        "metallic": 0.65,
    },
    "sink": {
        "fill": (40, 185, 195),
        "line": (10, 90, 100),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.22,
        "metallic": 0.15,
    },
    "rug": {
        "fill": (150, 70, 175),
        "line": (70, 25, 90),
        "dxf": ColorIndex.MAGENTA,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.9,
        "metallic": 0.0,
    },
    "light": {
        "fill": (255, 210, 40),
        "line": (140, 100, 0),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.2,
    },
    "switch": {
        "fill": (40, 120, 220),
        "line": (10, 50, 120),
        "dxf": ColorIndex.BLUE,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.0,
    },
    "sensor": {
        "fill": (40, 170, 90),
        "line": (10, 80, 40),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.45,
        "metallic": 0.0,
    },
    "outlet": {
        "fill": (230, 120, 40),
        "line": (140, 60, 10),
        "dxf": ColorIndex.RED,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.0,
    },
    "actuator": {
        "fill": (140, 80, 180),
        "line": (70, 30, 100),
        "dxf": ColorIndex.MAGENTA,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.45,
        "metallic": 0.1,
    },
    "tile": {
        "fill": (222, 205, 176),
        "line": (140, 120, 90),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.42,
        "metallic": 0.0,
    },
    "grout": {
        "fill": (48, 46, 44),
        "line": (20, 18, 16),
        "dxf": ColorIndex.BLACK,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.9,
        "metallic": 0.0,
    },
    "drain": {
        "fill": (176, 184, 190),
        "line": (70, 78, 86),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.28,
        "metallic": 0.7,
    },
    "fixture": {
        "fill": (236, 236, 232),
        "line": (140, 140, 136),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.0,
    },
    "prewall": {
        "fill": (196, 184, 168),
        "line": (110, 100, 88),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.8,
        "metallic": 0.0,
    },
    "screen": {
        "fill": (170, 210, 220),
        "line": (80, 120, 130),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.08,
        "metallic": 0.05,
    },
    "profile": {
        "fill": (190, 196, 200),
        "line": (80, 86, 92),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.25,
        "metallic": 0.85,
    },
    "vanity": {
        "fill": (186, 140, 90),
        "line": (110, 78, 40),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.55,
        "metallic": 0.0,
    },
    "door": {
        "fill": (210, 140, 70),
        "line": (120, 70, 30),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.55,
        "metallic": 0.0,
    },
    "wall_plate": {
        "fill": (200, 85, 10),
        "line": (110, 40, 0),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.58,
        "metallic": 0.0,
    },
    "pocket_frame": {
        "fill": (235, 185, 80),
        "line": (140, 100, 30),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "dashed": True,
        "roughness": 0.7,
        "metallic": 0.0,
    },
    "joint_screw": {
        "fill": (20, 20, 24),
        "line": (10, 10, 12),
        "dxf": ColorIndex.BLACK,
        "weight": 2.0,
        "roughness": 0.4,
        "metallic": 0.6,
    },
    "wall_gkf": {
        "fill": (230, 230, 235),
        "line": (120, 120, 130),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "rafters": {
        "fill": (200, 85, 10),
        "line": (110, 40, 0),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.58,
        "metallic": 0.0,
    },
    "plenum_wool": {
        "fill": (0, 210, 155),
        "line": (0, 110, 75),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.95,
        "metallic": 0.0,
    },
    "racking_strap": {
        "fill": (70, 70, 80),
        "line": (30, 30, 40),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.45,
        "metallic": 0.8,
    },
    "tie_rod": {
        "fill": (35, 38, 44),
        "line": (15, 16, 20),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_HEAVY_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.9,
    },
    "slope_light": {
        "fill": (28, 28, 30),
        "line": (10, 10, 12),
        "dxf": ColorIndex.BLACK,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.6,
    },
    "roofing": {
        "fill": None,
        "line": (235, 15, 15),
        "dxf": ColorIndex.RED,
        "weight": SECTION_HEAVY_WEIGHT,
        "roughness": 0.38,
        "metallic": 0.35,
    },
    "glazing": {
        "fill": (140, 210, 255),
        "line": (40, 120, 180),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.12,
        "metallic": 0.05,
    },
    "slope_naturheld_140": {
        "fill": (15, 85, 245),
        "line": (10, 50, 160),
        "dxf": ColorIndex.BLUE,
        "weight": SECTION_HEAVY_WEIGHT,
        "roughness": 0.8,
        "metallic": 0.05,
    },
    "slope_gkf": {
        "fill": (230, 230, 235),
        "line": (120, 120, 130),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "slope_cd": {
        "fill": (120, 120, 130),
        "line": (60, 60, 70),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.7,
    },
    "slope_foil": {
        "fill": (225, 35, 60),
        "line": (150, 20, 40),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.25,
        "metallic": 0.85,
    },
    "slope_direct_hanger": {
        "fill": (150, 150, 160),
        "line": (70, 70, 80),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.75,
    },
    "slope_nonius": {
        "fill": (90, 90, 100),
        "line": (40, 40, 50),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.75,
    },
    "soffit_naturheld_140": {
        "fill": (15, 85, 245),
        "line": (10, 50, 160),
        "dxf": ColorIndex.BLUE,
        "weight": SECTION_HEAVY_WEIGHT,
        "roughness": 0.8,
        "metallic": 0.05,
    },
    "soffit_mineral_wool": {
        "fill": (0, 210, 155),
        "line": (0, 110, 75),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.95,
        "metallic": 0.0,
    },
    "eave_ud": {
        "fill": (120, 120, 130),
        "line": (40, 40, 50),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.7,
    },
    "vapour_brake_tape": {
        "fill": (255, 140, 0),
        "line": (180, 90, 0),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.6,
        "metallic": 0.0,
    },
    "eave_acrylic": {
        "fill": (245, 245, 245),
        "line": (20, 20, 20),
        "dxf": ColorIndex.BLACK,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.9,
        "metallic": 0.0,
    },
    "soffit_ud": {
        "fill": (120, 120, 130),
        "line": (60, 60, 70),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.7,
    },
    "soffit_gkf": {
        "fill": (230, 230, 235),
        "line": (120, 120, 130),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "soffit_gkb": {
        "fill": (230, 230, 235),
        "line": (120, 120, 130),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "soffit_cd": {
        "fill": (120, 120, 130),
        "line": (60, 60, 70),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.7,
    },
    "soffit_nonius": {
        "fill": (90, 90, 100),
        "line": (40, 40, 50),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.75,
    },
    "soffit_duct": {
        "fill": (168, 176, 188),
        "line": (70, 78, 90),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.85,
    },
    "bass_mineral_wool": {
        "fill": (0, 210, 155),
        "line": (0, 110, 75),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.95,
        "metallic": 0.0,
    },
    "bass_gkb": {
        "fill": (230, 230, 235),
        "line": (120, 120, 130),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.88,
        "metallic": 0.0,
    },
    "bass_cw": {
        "fill": (120, 120, 130),
        "line": (60, 60, 70),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.7,
    },
    "bass_uw": {
        "fill": (100, 108, 120),
        "line": (50, 55, 65),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.35,
        "metallic": 0.7,
    },
    "bass_strut": {
        "fill": (80, 86, 98),
        "line": (40, 44, 52),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.75,
    },
    "bass_angle": {
        "fill": (70, 76, 88),
        "line": (35, 40, 48),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.4,
        "metallic": 0.75,
    },
    "bass_anchor": {
        "fill": (60, 64, 72),
        "line": (30, 32, 38),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.45,
        "metallic": 0.6,
    },
    "bass_tape": {
        "fill": (210, 190, 90),
        "line": (120, 100, 40),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.8,
        "metallic": 0.0,
    },
    "bass_acrylic": {
        "fill": (190, 210, 220),
        "line": (90, 110, 120),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
        "roughness": 0.2,
        "metallic": 0.0,
    },
}

SECTION_LAYER_ORDER = [
    "floor",
    "eps",
    "masonry",
    "column",
    "venec",
    "plaster",
    "furniture",
    "upholstery",
    "cabinet",
    "gridfinity",
    "worktop",
    "hob",
    "oak",
    "appliance",
    "sink",
    "rug",
    "light",
    "switch",
    "sensor",
    "outlet",
    "actuator",
    "door",
    "wall_plate",
    "pocket_frame",
    "wall_gkf",
    "rafters",
    "plenum_wool",
    "racking_strap",
    "tie_rod",
    "slope_light",
    "roofing",
    "glazing",
    "slope_naturheld_140",
    "slope_gkf",
    "slope_cd",
    "slope_foil",
    "vapour_brake_tape",
    "eave_ud",
    "eave_acrylic",
    "slope_direct_hanger",
    "slope_nonius",
    "soffit_naturheld_140",
    "soffit_mineral_wool",
    "soffit_ud",
    "soffit_gkf",
    "soffit_gkb",
    "soffit_cd",
    "joint_screw",
    "soffit_nonius",
    "soffit_duct",
    "bass_mineral_wool",
    "bass_gkb",
    "bass_cw",
    "bass_uw",
    "bass_strut",
    "bass_angle",
    "bass_anchor",
    "bass_tape",
    "bass_acrylic",
]


def ensure_export_dir(model_name: str) -> Path:
    out = EXPORTS_DIR / model_name
    out.mkdir(parents=True, exist_ok=True)
    return out


def _shape_span(shape: Shape | Compound) -> float:
    size = shape.bounding_box().size
    return max(size.X, size.Y, size.Z)


def _stl_tolerance(shape: Shape | Compound) -> float:
    if _shape_span(shape) > 2000:
        return 2.0
    return 1e-3


def _write_png(svg_path: Path, png_path: Path, *, width: int = 1400) -> None:
    try:
        import cairosvg
    except ImportError as exc:  # pragma: no cover
        raise ImportError("PNG export requires cairosvg; pip install cairosvg") from exc
    cairosvg.svg2png(
        url=str(svg_path),
        write_to=str(png_path),
        output_width=width,
        background_color="white",
    )


def export_shape(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("step", "stl"),
    scenes: list | None = None,
    part_groups: list | None = None,
    label: str | None = None,
    ifc_index: dict | None = None,
) -> dict[str, Path]:
    """Export a solid under exports/<model_name>/.

    STEP and STL only. SVG/DXF/PNG plates come from the viewer drawing
    export (named scenes) or from ``export_section`` for 2D sheets.
    """
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "step":
            export_step(shape, path)
        elif fmt == "stl":
            export_stl(shape, path, tolerance=_stl_tolerance(shape))
        elif fmt in {"svg", "dxf", "png"}:
            raise ValueError(
                "Solid models do not export SVG, DXF, or PNG. "
                "Use the viewer Drawing button, or export_section for a 2D sheet."
            )
        else:
            raise ValueError(f"Unsupported export format: {fmt}")
        written[fmt] = path

    _write_viewer_assets(
        written,
        model_name,
        shape=shape,
        stem=stem,
        scenes=scenes,
        part_groups=part_groups,
        label=label,
        ifc_index=ifc_index,
    )
    return written


def _section_children(shape: Shape | Compound) -> list[Shape]:
    children = getattr(shape, "children", None)
    if children:
        return list(children)
    return [shape]


def _section_to_xy(shape: Shape) -> Shape:
    """Map XZ section (Y=0, Z up) onto the XY plane used by SVG/DXF exporters."""
    return shape.rotate(Axis.X, -90)


def export_section(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("svg", "dxf", "png"),
) -> dict[str, Path]:
    """Orthographic XZ section: 1:1 mm DXF, layered SVG, PNG preview."""
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}
    grouped: dict[str, list[Shape]] = {}
    for child in _section_children(shape):
        name = child.label or "visible"
        grouped.setdefault(name, []).append(_section_to_xy(child))

    layer_names = [n for n in SECTION_LAYER_ORDER if n in grouped]
    layer_names.extend(n for n in grouped if n not in layer_names)

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "svg":
            exporter = ExportSVG(scale=1.0, margin=80)
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                svg_kwargs: dict[str, Any] = dict(
                    fill_color=style.get("fill"),
                    line_color=style.get("line", (0, 0, 0)),
                    line_weight=style.get("weight", SECTION_LINE_WEIGHT),
                )
                if style.get("dashed"):
                    svg_kwargs["line_type"] = LineType.DASHED
                exporter.add_layer(name, **svg_kwargs)
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "dxf":
            exporter = ExportDXF()
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                dxf_kwargs: dict[str, Any] = dict(
                    color=style.get("dxf", ColorIndex.BLACK),
                    line_weight=0.35,
                )
                if style.get("dashed"):
                    dxf_kwargs["line_type"] = LineType.DASHED
                exporter.add_layer(name, **dxf_kwargs)
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "png":
            svg_path = written.get("svg") or (out_dir / f"{stem}.svg")
            if "svg" not in written:
                svg_paths = export_section(shape, model_name, stem=stem, formats=("svg",))
                svg_path = svg_paths["svg"]
                written["svg"] = svg_path
            _write_png(svg_path, path, width=SECTION_PNG_WIDTH)
        else:
            raise ValueError(f"Unsupported section export format: {fmt}")
        written[fmt] = path

    return written


_VIEWER_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"/>
<title>Blueprints viewer</title>
<style>
  html, body { margin: 0; height: 100%; overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
    background: #1c1c1e; color: #f5f5f7; }
  canvas { display: block; width: 100%; height: 100%; touch-action: none;
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; }
  #err { display: none; }
</style>
</head>
<body>
<nav id="top-chrome" class="top-chrome" aria-label="Viewer">
  <div class="top-chrome-start">
    <button type="button" id="ar" class="chrome-btn" hidden>AR</button>
    <button type="button" id="labels" class="chrome-btn" hidden aria-pressed="true">Labels</button>
    <button type="button" id="drawing" class="chrome-btn" hidden disabled>Drawing</button>
  </div>
  <div class="top-chrome-end">
    <button type="button" id="sheet-toggle" class="chrome-btn sheet-toggle" aria-expanded="true" aria-label="Hide controls" title="Hide controls">›</button>
  </div>
</nav>
<aside id="sheet" class="sheet" data-detent="peek">
  <button type="button" class="sheet-handle" id="sheet-handle" aria-label="Drag controls sheet"></button>
  <div class="sheet-scroll" id="sheet-scroll">
    <section class="sheet-section" id="section-view">
      <h2 class="sheet-title" data-i18n="ui.view">View</h2>
      <div id="cams" class="seg"></div>
      <div id="scenes" class="scene-list" hidden></div>
      <div id="fov" class="fov"></div>
    </section>
    <section class="sheet-section" id="section-cuts">
      <h2 class="sheet-title" data-i18n="ui.sections">Cuts</h2>
      <div id="cuts" class="cuts"></div>
    </section>
    <section class="sheet-section" id="section-parts">
      <h2 class="sheet-title" data-i18n="ui.parts">Parts</h2>
      <div id="parts" class="parts"></div>
    </section>
    <section class="sheet-section" id="section-materials">
      <h2 class="sheet-title" data-i18n="ui.materials">Materials</h2>
      <div id="mats" class="seg" role="group" aria-label="Materials" data-i18n-aria="ui.materials"></div>
      <div class="edges-block">
        <span class="edges-label" data-i18n="ui.edges">Edges</span>
        <div id="edges" class="seg" role="group" aria-label="Edges" data-i18n-aria="ui.edges"></div>
      </div>
    </section>
    <section class="sheet-section" id="section-locale">
      <h2 class="sheet-title" data-i18n="ui.language">Language</h2>
      <div id="locale" class="seg" role="group" aria-label="Language" data-i18n-aria="ui.language"></div>
    </section>
  </div>
</aside>
<pre id="err"></pre>
<canvas id="c"></canvas>
<script>
%%VIEWER_JS%%
</script>
<script>
(function () {
  function b64ToBuf(s) {
    const bin = atob(s);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8.buffer;
  }
  const canvas = document.getElementById('c');
  const glb = b64ToBuf("%%GLB_B64%%");
  let scenes = [];
  try {
    scenes = JSON.parse("%%SCENES_JSON%%");
    if (!Array.isArray(scenes)) scenes = [];
  } catch (e) {
    scenes = [];
  }
  let partGroups = [];
  try {
    partGroups = JSON.parse("%%PARTS_JSON%%");
    if (!Array.isArray(partGroups)) partGroups = [];
  } catch (e) {
    partGroups = [];
  }
  let ifcIndex = null;
  try {
    ifcIndex = JSON.parse("%%IFC_JSON%%");
    if (!ifcIndex || typeof ifcIndex !== "object") ifcIndex = null;
  } catch (e) {
    ifcIndex = null;
  }
  BlueprintsViewerBundle.mountViewer(canvas, glb, { scenes: scenes, partGroups: partGroups, ifc: ifcIndex });
})();
</script>
</body>
</html>
"""


def _viewer_iife() -> str:
    """The viewer as one classic script, for the self-contained HTML export.

    Built by ``npm run build`` (viewer/build.mjs), not committed. A missing
    bundle is built here once when npm is available.
    """
    if not VIEWER_IIFE_PATH.is_file() and shutil.which("npm"):
        import subprocess

        if not (VIEWER_DIR / "node_modules").is_dir():
            subprocess.run(["npm", "ci", "--no-audit", "--no-fund"], cwd=VIEWER_DIR, check=True)
        subprocess.run(["npm", "run", "build"], cwd=VIEWER_DIR, check=True)
    if not VIEWER_IIFE_PATH.is_file():
        raise FileNotFoundError(
            f"Missing {VIEWER_IIFE_PATH}; run: npm --prefix src/blueprints/viewer ci && "
            "npm --prefix src/blueprints/viewer run build"
        )
    return VIEWER_IIFE_PATH.read_text(encoding="utf-8")


def element_node_name(label: str | None, element_id: str | None) -> str:
    """Part label, plus a yaml id the viewer can split back off (`masonry__W-001__`)."""
    base = label or "part"
    if not element_id:
        return base
    safe = str(element_id).replace("__", "_")
    return f"{base}__{safe}__"


def _walk_shapes(shape: Shape | Compound):
    yield shape
    for child in list(getattr(shape, "children", ()) or ()):
        yield from _walk_shapes(child)


def _stamp_element_labels(shape: Shape | Compound) -> list[tuple[Any, str]]:
    """Temporarily put element ids into node labels. Restored after export."""
    saved: list[tuple[Any, str]] = []
    for node in _walk_shapes(shape):
        element_id = getattr(node, "element_id", None)
        label = getattr(node, "label", None)
        if not element_id or not label or "__" in str(label):
            continue
        saved.append((node, str(label)))
        node.label = element_node_name(str(label), str(element_id))
    return saved


def _restore_labels(saved: list[tuple[Any, str]]) -> None:
    for node, label in saved:
        node.label = label


def write_glb(
    shape: Shape | Compound,
    glb_path: Path,
    *,
    linear_deflection: float | None = None,
) -> Path:
    """Write a binary glTF (.glb) preserving labeled compounds and materials."""
    glb_path = glb_path.resolve()
    glb_path.parent.mkdir(parents=True, exist_ok=True)
    tol = linear_deflection if linear_deflection is not None else _stl_tolerance(shape)
    saved = _stamp_element_labels(shape)
    try:
        ok = export_gltf(
            shape,
            glb_path,
            unit=Unit.MM,
            binary=True,
            linear_deflection=tol,
            angular_deflection=0.1,
        )
    finally:
        _restore_labels(saved)
    if not ok or not glb_path.is_file():
        raise RuntimeError(f"export_gltf failed for {glb_path}")
    return glb_path


def rewrite_glb_element_names(glb_path: Path, shape: Shape | Compound) -> int:
    """Rename existing GLB nodes from compound children, without tessellating again.

    OCCT writes one node per direct child, in order, under the root. Names that
    already carry an element id are left alone when the part label still matches.
    """
    import json
    import struct

    glb_path = glb_path.resolve()
    data = glb_path.read_bytes()
    if data[:4] != b"glTF":
        raise ValueError(f"{glb_path} is not a glTF binary")
    json_len, json_type = struct.unpack_from("<II", data, 12)
    if json_type != 0x4E4F534A:
        raise ValueError(f"{glb_path} JSON chunk is missing")
    json_bytes = data[20 : 20 + json_len]
    bin_at = 20 + json_len
    document = json.loads(json_bytes)
    nodes = document.get("nodes") or []
    if not nodes or not nodes[0].get("children"):
        raise ValueError(f"{glb_path} has no root children")
    children = list(getattr(shape, "children", ()) or ())
    indexes = nodes[0]["children"]
    if len(children) != len(indexes):
        raise ValueError(
            f"{glb_path} has {len(indexes)} nodes, the model has {len(children)} children"
        )
    renamed = 0
    for child, index in zip(children, indexes):
        node = nodes[index]
        label = str(getattr(child, "label", None) or "")
        current = str(node.get("name") or "")
        element_id = getattr(child, "element_id", None)
        base = current.split("__", 1)[0]
        if base != label and current != label:
            raise ValueError(f"node {current!r} is not part {label!r}")
        if not element_id:
            continue
        name = element_node_name(label, str(element_id))
        if current != name:
            node["name"] = name
            renamed += 1
    if not renamed:
        return 0
    payload = json.dumps(document, separators=(",", ":")).encode("utf-8")
    pad = (4 - (len(payload) % 4)) % 4
    payload += b" " * pad
    rest = data[bin_at:]
    total = 12 + 8 + len(payload) + len(rest)
    out = bytearray()
    out += struct.pack("<III", 0x46546C67, 2, total)
    out += struct.pack("<II", len(payload), 0x4E4F534A)
    out += payload
    out += rest
    glb_path.write_bytes(out)
    return renamed


def write_lazy_layers(model_name: str, layers: dict, models_dir: Path) -> list[Path]:
    """Write on-demand viewer layers: ``<model>.<label>.glb`` per label and
    ``<model>.layers.json`` listing them. The viewer shows each as a Parts
    leaf, on by default, and fetches its GLB after the main model (or only
    when it is switched on, if it starts off)
    (src/blueprints/viewer/README.md "On-demand layers"). Nodes are named
    like the main GLB's (``gridfinity__SF-E700-D1__``), in the same frame.
    With no layers, the manifest and the GLBs it listed are removed.
    """
    import json

    models_dir = Path(models_dir)
    manifest = models_dir / f"{model_name}.layers.json"
    if manifest.is_file():
        try:
            old = json.loads(manifest.read_text())
        except ValueError:
            old = []
        for entry in old if isinstance(old, list) else []:
            url = str((entry or {}).get("url") or "")
            if url and url not in {f"{model_name}.{label}.glb" for label in layers}:
                (models_dir / url).unlink(missing_ok=True)
    written: list[Path] = []
    entries = []
    for label in sorted(layers):
        solids = list(layers[label])
        if not solids:
            continue
        compound = Compound(obj=solids, children=solids, label=f"{model_name}.{label}")
        path = write_glb(compound, models_dir / f"{model_name}.{label}.glb")
        rewrite_glb_element_names(path, compound)
        written.append(path)
        entries.append({"id": label, "url": path.name})
    if entries:
        manifest.write_text(json.dumps(entries, indent=2) + "\n")
        written.append(manifest)
    else:
        manifest.unlink(missing_ok=True)
    return written


def write_gltf_html_viewer(
    glb_path: Path,
    html_path: Path,
    *,
    scenes: list | None = None,
    part_groups: list | None = None,
    ifc_index: dict | None = None,
) -> Path:
    """Self-contained offline HTML viewer (bundled Three.js + embedded GLB)."""
    glb_b64 = base64.b64encode(glb_path.read_bytes()).decode("ascii")
    scenes_json = json.dumps(scenes if scenes is not None else [])
    # Escape for embedding inside a double-quoted JS string literal.
    scenes_js = (
        scenes_json.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    )
    parts_json = json.dumps(part_groups if part_groups is not None else [])
    parts_js = (
        parts_json.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    )
    ifc_json = json.dumps(ifc_index if ifc_index is not None else None)
    ifc_js = ifc_json.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    html = (
        _VIEWER_HTML.replace("%%VIEWER_JS%%", _viewer_iife())
        .replace("%%GLB_B64%%", glb_b64)
        .replace("%%SCENES_JSON%%", scenes_js)
        .replace("%%PARTS_JSON%%", parts_js)
        .replace("%%IFC_JSON%%", ifc_js)
    )
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(html, encoding="utf-8")
    return html_path


def _write_viewer_assets(
    written: dict[str, Path],
    model_name: str,
    *,
    shape: Shape | Compound | None = None,
    stem: str = "model",
    scenes: list | None = None,
    part_groups: list | None = None,
    label: str | None = None,
    ifc_index: dict | None = None,
) -> None:
    """Write GLB + offline HTML next to the STL, and publish the primary stem to the hub."""
    stl_path = written.get("stl")
    if stl_path is None or not stl_path.is_file():
        return

    if shape is not None:
        glb_path = stl_path.with_suffix(".glb")
        write_glb(shape, glb_path)
        written["glb"] = glb_path
        html_path = stl_path.with_suffix(".html")
        write_gltf_html_viewer(
            glb_path,
            html_path,
            scenes=scenes,
            part_groups=part_groups,
            ifc_index=ifc_index,
        )
        written["html"] = html_path

    # Only the primary stem updates the Pages hub (extras must not overwrite it).
    if stem == "model":
        hub = publish_to_preview_site(
            model_name,
            glb_path=written.get("glb"),
            scenes=scenes,
            part_groups=part_groups,
            label=label,
            ifc_index=ifc_index,
        )
        if hub is not None:
            written["preview_hub"] = hub


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
