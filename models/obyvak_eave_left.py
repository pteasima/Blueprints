"""Left eave detail: GKF on a UD screwed to the wall plate; vapour brake to plaster.

The slope GKF ends in a UD track whose bent leg is screwed to the room cheek of
the wall plate (wood screw 3.5×35 @ 300 mm). NaturHeld bears softly on the
masonry wall. The vapour brake runs down past the plate, keeps a slack loop for
movement, and is bonded and taped to the wall plaster. The wall/ceiling corner
is a planned cut closed with an acrylic bead.

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
WINDOW = (-200.0, 3120.0, 260.0, 3420.0)


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
        (-195, 3405, "Left eave: GKF fixed to the wall plate, brake taped to plaster"),
        (-195, 3392, "UD 28/27 bent leg screwed to the plate, wood screw 3.5x35 @ 300 mm"),
        (60, 3330, "2x GKF 12.5 ends in the UD"),
        (60, 3316, "NaturHeld 140 bears softly on the wall"),
        (60, 3302, "Jutafol N AL 170, continuous"),
        (-195, 3175, "brake: slack loop below the plate,"),
        (-195, 3162, "bonded + taped to wall plaster"),
        (-195, 3140, "planned cut: acrylic bead in the corner"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    annotate_notes(svg_path, dxf_path, png_path, notes())
