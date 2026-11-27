"""Small geometric helpers used when laying out kitchen cabinet runs."""
from __future__ import annotations

import math

from .hardware import TOL
from .types import Bay


def _cuts(length: float, module: float, min_cut: float) -> list[float]:
    """Module pieces along one side: whole modules, then one cut piece; a
    leftover under ``min_cut`` is left off."""
    whole = int(length // module)
    out = [module] * whole
    rest = length - whole * module
    if rest >= min_cut - TOL:
        out.append(rest)
    if not out:
        out = [length]  # narrower than one module: one cut piece
    return out


def _ring(outer: tuple, holes: list, z0: float, z1: float) -> list:
    """``outer`` (a0, a1, c0, c1) less the ``holes`` (side by side along a,
    inside outer), as boxes from z0 to z1."""
    a0, a1, c0, c1 = outer
    out = []
    cursor = a0
    for h0, h1, k0, k1 in sorted(holes):
        if h0 > cursor + TOL:
            out.append((cursor, h0, c0, c1, z0, z1))
        if k0 > c0 + TOL:
            out.append((h0, h1, c0, k0, z0, z1))
        if c1 > k1 + TOL:
            out.append((h0, h1, k1, c1, z0, z1))
        cursor = h1
    if a1 > cursor + TOL:
        out.append((cursor, a1, c0, c1, z0, z1))
    return out


def _near(x: float, y: float) -> bool:
    return abs(x - y) <= TOL


def _rows(bays: list) -> list[list]:
    rows: dict[tuple, list] = {}
    for bay in bays:
        key = (round(bay.c0), round(bay.c1), bay.front_low)
        rows.setdefault(key, []).append(bay)
    out = []
    for key in sorted(rows):
        row = sorted(rows[key], key=lambda b: b.a0)
        for left, right in zip(row, row[1:]):
            if right.a0 < left.a1 - TOL:
                raise ValueError(f"{left.id} and {right.id} overlap")
        out.append(row)
    return out


def _segments(row: list) -> list[list]:
    """Contiguous carcass bays. A niche or a gap ends a segment."""
    segs, cur = [], []
    for bay in row:
        if bay.niche:
            if cur:
                segs.append(cur)
            cur = []
            continue
        if cur and not _near(cur[-1].a1, bay.a0):
            segs.append(cur)
            cur = []
        cur.append(bay)
    if cur:
        segs.append(cur)
    return segs


# A row's depth axis: y from the front face (0) to the back plane.
def c_range(row_bay: Bay, y0: float, y1: float) -> tuple[float, float]:
    if row_bay.front_low:
        return (row_bay.c0 + y0, row_bay.c0 + y1)
    return (row_bay.c1 - y1, row_bay.c1 - y0)


def _mitre_cut(outer: float, inner: float, zb: float, zt: float, piece: str) -> list:
    """The triangle (a, z) cut off one end of a 45 degree mitre joint.

    The joint plane runs from the outer top corner (``outer``, ``zt``) to the
    inner bottom one (``inner``, ``zb``): the worktop loses the triangle
    under it (``piece="top"``), the end panel the triangle over it
    (``"clad"``). Corners run 1 mm past the faces along the joint line so
    the boolean cut is clean."""
    s = 1.0 if inner > outer else -1.0  # from the outer face inwards
    o_top = (outer - s, zt + 1.0)
    i_bot = (inner + s, zb - 1.0)
    if piece == "top":
        return [o_top, (outer - s, zb - 1.0), i_bot]
    return [o_top, (inner + s, zt + 1.0), i_bot]


def _tilt_point(c: float, z: float, pivot_c: float, pivot_z: float, angle: float, out: float) -> tuple:
    """A (c, z) point after a bottom-hinged tilt of ``angle`` radians.

    ``angle`` > 0 swings the upper edge towards ``out`` (+1 / −1 in c),
    the opposite of ``LiftJoint``'s sign (which swings the lower edge out).
    """
    sign = -1.0 if out > 0 else 1.0
    dc = (c - pivot_c) * sign
    dz = z - pivot_z
    ca = dc * math.cos(angle) - dz * math.sin(angle)
    za = dc * math.sin(angle) + dz * math.cos(angle)
    return (pivot_c + ca * sign, pivot_z + za)


def _boxes_meet(a, b) -> bool:
    return all(a[2 * i] < b[2 * i + 1] - TOL and b[2 * i] < a[2 * i + 1] - TOL for i in range(3))


def _even(z_lo: float, z_hi: float, n: int, t: float) -> list[float]:
    """Bottoms of ``n`` boards ``t`` thick spaced evenly in z_lo..z_hi."""
    if n <= 0:
        return []
    step = (z_hi - z_lo - n * t) / (n + 1)
    return [z_lo + step * (k + 1) + t * k for k in range(n)]


def _plan_meet(a, b) -> bool:
    return a[0] < b[1] - TOL and b[0] < a[1] - TOL and a[2] < b[3] - TOL and b[2] < a[3] - TOL


def _rot(v, a):
    """(u, z) turned by ``a``; positive takes down (0, -1) towards out (+u)."""
    return (v[0] * math.cos(a) - v[1] * math.sin(a), v[0] * math.sin(a) + v[1] * math.cos(a))
