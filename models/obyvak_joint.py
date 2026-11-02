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
WINDOW = (4480.0, 3000.0, 5520.0, 3680.0)


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
        (4490, 3655, "Lid widens until it meets the lowered slope"),
        (4490, 3641, "2x GKF cut level on the lid"),
        (4490, 3627, f"joint {g.joint_overhang:.0f} mm past the lid CD room face"),
        (5200, 3655, "bent UD under the NaturHeld, back to both CDs"),
        (5200, 3641, "screws through the boards into the CDs"),
        (5200, 3627, "Jutafol over the CD and along the lid"),
        (5200, 3148, "brake taped to the cabinet plaster"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    annotate_notes(svg_path, dxf_path, png_path, notes())
