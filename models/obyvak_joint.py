"""Right eave detail: the widened soffit lid meets the lowered slope.

The lid stays at the plate. It extends into the room until the slope GKF,
cut level, lands on it. That joint cantilevers past the lid CD, so a UD bent
to the slope/lid angle sits on the room side, under the NaturHeld, and runs
back to the lid CD and to the nearest slope CD.

Cut from the same faces as `obyvak_section` (see obyvak_detail.clip_section).

    python -m blueprints.export obyvak_joint
"""

from __future__ import annotations

from dataclasses import asdict

from obyvak_detail import annotate_notes, clip_section
from obyvak_geom import ObyvakParams, build_layout

MODEL_NAME = "obyvak_joint"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())
WINDOW = (4480.0, 2760.0, 5520.0, 3680.0)


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = build_layout(p)
    shape = clip_section(WINDOW, p, MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "wool_left": g.wool_left,
            "wool_right": g.wool_right,
            "t_left": g.t_left,
            "t_right": g.t_right,
        },
    }
    return shape, meta


def notes(p: ObyvakParams | None = None):
    g = build_layout(p or ObyvakParams())
    zl = g.z_soffit_lid
    return [
        (4500, 2920, "Lid widens until it meets the lowered slope"),
        (4500, 2902, "2x GKF cut level on the lid"),
        (4500, 2884, "UD at the joint, both boards screw into it"),
        (4500, 2866, "angle bracket from the nearest slope CD holds the UD"),
        (4680, 2920, "slope NaturHeld runs to the vertical soffit face"),
        (4680, 2902, "wool triangle under the lid, one solid"),
        (4680, 2884, "brake taped to the cabinet plaster"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    annotate_notes(svg_path, dxf_path, png_path, notes())
