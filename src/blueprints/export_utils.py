"""Shared export helpers for build123d models."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from build123d import Compound, ExportDXF, ExportSVG, Shape, export_step, export_stl


REPO_ROOT = Path(__file__).resolve().parents[2]
EXPORTS_DIR = REPO_ROOT / "exports"


def ensure_export_dir(model_name: str) -> Path:
    out = EXPORTS_DIR / model_name
    out.mkdir(parents=True, exist_ok=True)
    return out


def _viewport_edges(shape: Shape | Compound):
    """Isometric-ish visible edges for mobile-friendly 2D review."""
    visible, _hidden = shape.project_to_viewport((-1.2, -1.5, 1.0))
    return visible


def export_shape(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("step", "stl", "svg", "dxf"),
) -> dict[str, Path]:
    """Export a build123d shape to common formats under exports/<model_name>/."""
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "step":
            export_step(shape, path)
        elif fmt == "stl":
            export_stl(shape, path)
        elif fmt == "svg":
            exporter = ExportSVG(scale=1.0)
            exporter.add_layer("visible")
            exporter.add_shape(_viewport_edges(shape), layer="visible")
            exporter.write(path)
        elif fmt == "dxf":
            exporter = ExportDXF()
            exporter.add_layer("visible")
            exporter.add_shape(_viewport_edges(shape), layer="visible")
            exporter.write(path)
        else:
            raise ValueError(f"Unsupported export format: {fmt}")
        written[fmt] = path

    return written


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
