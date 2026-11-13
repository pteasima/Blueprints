"""The ceiling line of room 1.02 and the space above it (Petr, 2026-11-13).

Petr, 2026-11-13: "don't move anything up, make it shorter in height. The
existing ceiling line (windows, pocket doors, furtniture, basstraps) is an
invariant."

``CEILING_LINE_MM`` is that line: the obývák model's furniture height, where
the bass traps start and the pocket doors and tall cabinets stop
(``obyvak_geom.ObyvakParams``). ``check_ceiling_line`` stops the export if a
furnishing or a kitchen part reaches above it. ``check_open_envelopes``
stops it if an open lift front (its swept path and its Blum clearance box)
would meet a bass trap, the soffit over the north cabinets or the sloped
ceiling, and returns the margins for the notes.

The obývák model's frame: X eave to eave, 0 at the south eave and
``room_width`` at the cabinet (north) eave; Y gable to gable, 0 at the living
gable (east) and ``room_length`` at the kitchen gable (west). In ground-floor
CAD mm: X = y − ROOM_Y0, Y = ROOM_X1 − x (models/ground_floor.py).
"""

from __future__ import annotations

import math

from obyvak_geom import ObyvakLayout, ObyvakParams

_P = ObyvakParams()
_L = ObyvakLayout(_P)
CEILING_LINE_MM = _P.furniture_height
# Hanging lights are under the sloped ceiling, not the furniture line.
EXEMPT_LISTS = ("lightFixtures",)
TOL = 0.5


def _room(room: tuple) -> tuple:
    x0, x1, y0, y1 = (v * 1000.0 for v in room)
    return x0, x1, y0, y1


def obstacles(room: tuple) -> list:
    """Boxes (name, x0, x1, y0, y1, z0, z1) in ground-floor CAD mm, and the
    sloped ceiling as a function of y (``ceiling_z``)."""
    x0, x1, y0, y1 = _room(room)
    top = 1e6
    return [
        ("kitchen-gable bass trap", x0, x0 + _P.predstena_kitchen, y0, y1, _P.predstena_bottom_z, top),
        ("living-gable bass trap", x1 - _P.predstena_living, x1, y0, y1, _P.predstena_bottom_z, top),
        ("soffit over the north cabinets", x0, x1, y1 - _P.furniture_width, y1, _L.z_nabeh_bot, top),
    ]


def ceiling_z(room: tuple, y: float) -> float:
    _x0, _x1, y0, _y1 = _room(room)
    return _L.z_ceil(min(max(y - y0, 0.0), _P.room_width))


def check_ceiling_line(doc: dict, lists: tuple, runs: list) -> None:
    over = []
    for key in lists:
        if key in EXEMPT_LISTS:
            continue
        for e in doc.get(key) or []:
            if e.get("Height") is None:
                continue
            z = (float(e.get("Elevation") or 0.0) + float(e["Height"])) * 1000.0
            if z > CEILING_LINE_MM + TOL:
                over.append(f"{e['id']} top {z:.0f}")
    for run in runs:
        for part in run.parts:
            z = max(b[5] for b in part.boxes)
            if z > CEILING_LINE_MM + TOL:
                over.append(f"{part.id} top {z:.0f}")
    if over:
        raise ValueError(f"above the ceiling line {CEILING_LINE_MM:.0f} (Petr, 2026-11-13: an invariant): "
                         + ", ".join(over))


def _turn(pt, pivot_c, pivot_z, out, angle):
    """Turn a run-frame point (a, c, z) about the line along a through
    (pivot_c, pivot_z); positive takes down towards ``out``."""
    a, c, z = pt
    u, dz = out * (c - pivot_c), z - pivot_z
    u2 = u * math.cos(angle) - dz * math.sin(angle)
    z2 = u * math.sin(angle) + dz * math.cos(angle)
    return a, pivot_c + out * u2, pivot_z + z2


def swept_points(run) -> dict:
    """Corners of every lift front (joints without a parent, role Lift, and
    the fronts riding on them) at each sampled angle, world CAD mm, by group."""
    parts = {p.id: p for p in run.parts if p.lift is not None and p.role == "Lift"}
    by_group: dict[str, dict[int, object]] = {}
    for p in parts.values():
        by_group.setdefault(p.lift.group, {})[p.lift.index] = p
    out = {}
    for group, joints in by_group.items():
        pts = []
        for p in joints.values():
            lj = p.lift
            a0, a1, c0, c1, z0, z1 = p.boxes[0]
            corners = [(a, c, z) for a in (a0, a1) for c in (c0, c1) for z in (z0, z1)]
            for k, ang in enumerate(lj.angles):
                for q in corners:
                    q = _turn(q, lj.pivot_c, lj.pivot_z, lj.out, ang)
                    if lj.parent is not None:
                        par = joints[lj.parent].lift
                        q = _turn(q, par.pivot_c, par.pivot_z, par.out, par.angles[k])
                    pts.append(run.frame.world(*q))
        out[group] = pts
    return out


def check_open_envelopes(runs: list, room: tuple) -> list:
    """Notes with each lift front's margins; raises on an overlap."""
    obs = obstacles(room)
    notes, hits = [], []
    for run in runs:
        clear = {bid: box for bid, box in run.clearances}
        for group, pts in swept_points(run).items():
            bid = group[: -len("-LIFT")]
            box = clear.get(bid)
            if box is not None:
                a0, a1, c0, c1, z0, z1 = box
                pts = pts + [run.frame.world(a, c, z) for a in (a0, a1) for c in (c0, c1) for z in (z0, z1)]
            xs = [q[0] for q in pts]
            ys = [q[1] for q in pts]
            zs = [q[2] for q in pts]
            ex = (min(xs), max(xs), min(ys), max(ys), min(zs), max(zs))
            margins = []
            for name, ox0, ox1, oy0, oy1, oz0, oz1 in obs:
                apart = max(ox0 - ex[1], ex[0] - ox1, oy0 - ex[3], ex[2] - oy1, oz0 - ex[5], ex[4] - oz1)
                if apart < -TOL:
                    hits.append(f"{group} open meets the {name}")
                margins.append(f"{apart:.0f} from the {name}")
            head = min(ceiling_z(room, q[1]) - q[2] for q in pts)
            if head < TOL:
                hits.append(f"{group} open meets the sloped ceiling")
            margins.append(f"{head:.0f} under the sloped ceiling")
            notes.append(f"{group} open: x {ex[0]:.0f}–{ex[1]:.0f}, top {ex[5]:.0f}; " + ", ".join(margins))
    if hits:
        raise ValueError("; ".join(hits))
    return notes
