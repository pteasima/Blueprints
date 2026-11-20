"""The soffit over the north cabinets of room 1.02 (models/soffit.py)."""

from __future__ import annotations

import ceiling_line
import ground_floor as gf
import soffit
from obyvak_geom import ObyvakLayout, ObyvakParams

ROOM = (gf.ROOM_X0, gf.ROOM_X1, gf.ROOM_Y0, gf.ROOM_Y1)


def test_extents_come_from_the_obyvak_model():
    p = ObyvakParams()
    g = ObyvakLayout(p)
    e = soffit.extents(ROOM)
    assert e["z_under"] == p.furniture_height + p.furniture_gap == 2470.0
    assert e["y_wall"] - e["y_face"] == p.furniture_width == 450.0
    assert e["y_back"] - e["y_face"] == g.t_soffit_face == 44.0
    assert e["z_gkb_top"] - e["z_under"] == p.soffit_bottom_t == 12.5
    assert e["z_top"] == g.z_soffit_lid == 3287.5
    assert (e["x0"], e["x1"]) == (18990.0, 29450.0)


def test_underside_is_cut_round_the_piers():
    pieces = [b for b in soffit.boxes(ROOM, gf.ROOM_PIERS_M) if b[1] == soffit.LABEL_UNDERSIDE]
    area = sum((b[3] - b[2]) * (b[5] - b[4]) for b in pieces)
    e = soffit.extents(ROOM)
    full = (e["x1"] - e["x0"]) * (e["y_wall"] - e["y_back"])
    piers = sum((x1 - x0) * (y1 - y0) * 1e6 for x0, x1, y0, y1 in gf.ROOM_PIERS_M)
    assert abs(area - (full - piers)) < 1e-6
    for x0, x1, y0, y1 in gf.ROOM_PIERS_M:
        for b in pieces:
            overlap_x = min(b[3], x1 * 1000) - max(b[2], x0 * 1000)
            overlap_y = min(b[5], y1 * 1000) - max(b[4], y0 * 1000)
            assert overlap_x <= 0 or overlap_y <= 0


def test_solids_have_their_own_viewer_group():
    solids = gf.soffit_solids()
    assert {s.label for s in solids} == {soffit.LABEL_FACE, soffit.LABEL_UNDERSIDE}
    groups = {g["id"]: g["children"] for g in gf.part_groups()}
    assert groups["soffit"] == [soffit.LABEL_FACE, soffit.LABEL_UNDERSIDE]


def test_open_envelope_obstacle_is_the_modelled_soffit():
    e = soffit.extents(ROOM)
    (box,) = [o for o in ceiling_line.obstacles(ROOM) if o[0].startswith("soffit")]
    assert box[1:6] == (e["x0"], e["x1"], e["y_face"], e["y_wall"], e["z_under"])
