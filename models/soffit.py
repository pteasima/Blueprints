"""The soffit over the north cabinets of room 1.02, in ground-floor CAD mm.

Petr, 2026-11-20: "lets get the soffit modeled so I see how it works out
with the top cabinets."

One source: the obývák model's soffit box (``obyvak_geom.ObyvakParams`` /
``ObyvakLayout``, drawn in ``models/obyvak/`` and docs/design/obyvak.md):

- the 450 band (``furniture_width``) from the north wall's plaster face, the
  depth of the dining and living cabinets; the 600 kitchen tall units stick
  out past it on purpose (Petr, 2026-11-06);
- the underside 20 over the 2450 ceiling line (``furniture_height`` +
  ``furniture_gap`` = 2470): plain 12.5 GKB (``soffit_bottom_t``) from the
  back of the face to the wall;
- the vertical room face: 40 NaturHeld 140 + StoSilent Top Basic and Top
  Finish (2 + 2) = 44 (``t_soffit_face``), from the underside up to the
  GKF lid on the wall plate (``z_soffit_lid``, 3287.5);
- along the room between the two bass traps (``y_furn0`` .. ``y_furn1``):
  the kitchen-gable trap is 190 (west wall), the living-gable trap 450
  (east wall); the trap linings stop at the soffit face.

The obývák frame is X eave to eave (0 south, ``room_width`` at the north
wall) and Y gable to gable (0 at the east, living gable). Ground floor:
x = ROOM_X1 − Y, y = ROOM_Y0 + X (models/ceiling_line.py).

The ground-floor piers (W-052, W-053) stand in the soffit's depth behind the
face; the underside is cut round them. The face and underside are drawn;
the wool, CD frame, ducts and lid behind them are not (see models/obyvak/).
"""

from __future__ import annotations

from obyvak_geom import ObyvakLayout, ObyvakParams

LABEL_FACE = "soffit_naturheld_140"
LABEL_UNDERSIDE = "soffit_gkb"
FACE_ID = "SOFFIT-1.02-FACE"
UNDERSIDE_ID = "SOFFIT-1.02-UNDERSIDE"


def _layout():
    p = ObyvakParams()
    return p, ObyvakLayout(p)


def extents(room: tuple) -> dict:
    """The soffit's lines in ground-floor mm: x0/x1 along the north wall,
    y_face (room face), y_back (back of the face board), y_wall, z_under
    (underside), z_gkb_top, z_top (face top, at the lid)."""
    p, g = _layout()
    rx0, rx1, ry0, ry1 = (v * 1000.0 for v in room)
    if abs((ry1 - ry0) - p.room_width) > 1.0 or abs((rx1 - rx0) - p.room_length) > 1.0:
        raise ValueError(f"room 1.02 is {rx1 - rx0:.0f} x {ry1 - ry0:.0f}, the obývák model "
                         f"{p.room_length:.0f} x {p.room_width:.0f}")
    return {
        "x0": rx1 - g.y_furn1,
        "x1": rx1 - g.y_furn0,
        "y_face": ry0 + g.x_nh_outer,
        "y_back": ry0 + g.x_nh_inner,
        "y_wall": ry0 + p.room_width,
        "z_under": g.z_nabeh_bot,
        "z_gkb_top": g.z_nabeh_bot + g.t_soffit_bottom,
        "z_top": g.z_soffit_lid,
    }


def boxes(room: tuple, piers: tuple = ()) -> list[tuple]:
    """(id, label, x0, x1, y0, y1, z0, z1) boxes, mm. The underside is split
    round each pier (metre boxes x0, x1, y0, y1) that stands in it."""
    e = extents(room)
    out = [(FACE_ID, LABEL_FACE, e["x0"], e["x1"], e["y_face"], e["y_back"], e["z_under"], e["z_top"])]
    spans = [(e["x0"], e["x1"])]
    strips = []
    for px0, px1, py0, py1 in sorted(piers):
        px0, px1, py0, py1 = (v * 1000.0 for v in (px0, px1, py0, py1))
        if py1 <= e["y_back"] or py0 >= e["y_wall"]:
            continue
        nxt = []
        for a, b in spans:
            if px1 <= a or px0 >= b:
                nxt.append((a, b))
                continue
            if px0 > a:
                nxt.append((a, px0))
            if px1 < b:
                nxt.append((px1, b))
            # In front of the pier the underside still runs from the face to the pier.
            if py0 > e["y_back"]:
                strips.append((max(a, px0), min(b, px1), e["y_back"], py0))
        spans = nxt
    pieces = [(a, b, e["y_back"], e["y_wall"]) for a, b in spans] + strips
    for k, (a, b, y0, y1) in enumerate(sorted(pieces)):
        out.append((f"{UNDERSIDE_ID}-{k + 1}", LABEL_UNDERSIDE, a, b, y0, y1, e["z_under"], e["z_gkb_top"]))
    return out
