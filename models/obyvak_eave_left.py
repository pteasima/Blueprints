"""Left eave detail: GKF on a UD screwed to the wall; wool up to the plate.

The lowered slope meets the wall below the crown. The GKF ends tight on a UD
fixed to the plaster. NaturHeld ends on the wall, with an acrylic bead in the
corner. The vapour brake is taped to the plaster, and the wool above it fills
back to the wall plate.

Cut from the same faces as `obyvak_section` (see obyvak_detail.clip_section).

    python -m blueprints.export obyvak_eave_left
"""

from __future__ import annotations

from dataclasses import asdict

from obyvak_detail import annotate_notes, clip_section
from obyvak_geom import ObyvakParams, build_layout

MODEL_NAME = "obyvak_eave_left"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())
WINDOW = (-220.0, 2960.0, 480.0, 3520.0)


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = build_layout(p)
    shape = clip_section(WINDOW, p, MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {"h_start": g.h_start, "wool_left": g.wool_left, "t_left": g.t_left},
    }
    return shape, meta


def notes(p: ObyvakParams | None = None):
    return [
        (140, 3090, "Left eave: GKF fixed to a UD on the wall"),
        (140, 3072, "1x GKF 12.5 ends in the UD"),
        (140, 3054, "NaturHeld 100 to the wall, acrylic in the corner"),
        (140, 3036, "Jutafol taped to the plaster"),
        (140, 3018, "wool above the brake fills up to the plate"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    annotate_notes(svg_path, dxf_path, png_path, notes())
