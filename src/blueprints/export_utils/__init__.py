"""Shared export helpers for build123d models."""

from __future__ import annotations

from .html import _VIEWER_HTML, _viewer_iife, write_gltf_html_viewer
from .layers import (
    SECTION_HEAVY_WEIGHT,
    SECTION_LAYER_ORDER,
    SECTION_LAYERS,
    SECTION_LINE_WEIGHT,
    SECTION_PNG_WIDTH,
)
from .mesh import (
    _restore_labels,
    _shape_span,
    _stamp_element_labels,
    _stl_tolerance,
    _walk_shapes,
    element_node_name,
    export_shape,
    rewrite_glb_element_names,
    write_glb,
)
from .paths import (
    EXPORTS_DIR,
    REPO_ROOT,
    VIEWER_DIR,
    VIEWER_IIFE_PATH,
    ensure_export_dir,
    summarize_params,
)
from .preview import _write_viewer_assets, write_lazy_layers
from .section import _section_children, _section_to_xy, _write_png, export_section
