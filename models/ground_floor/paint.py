"""Paint build123d solids with the section-layer colours."""
from __future__ import annotations

from build123d import Color

from blueprints.export_utils import SECTION_LAYERS

from .constants import MM


def _color(label: str) -> Color:
    rgb = SECTION_LAYERS[label]["fill"]
    return Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)


def _paint(shape, label: str):
    shape.label = label
    shape.color = _color(label)
    return shape


def _mm(metres: float) -> float:
    return float(metres) * MM


def _tag(painted, yaml_id: str, list_key: str):
    painted.furnishing_id = yaml_id
    painted.furnishing_list = list_key
    painted.element_id = yaml_id
    return painted
