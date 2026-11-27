"""Painted solid helpers and assembly constants for the obývák model."""

from __future__ import annotations

from dataclasses import asdict

from build123d import (
    Align,
    Box,
    Color,
    Cylinder,
    Location,
    Plane,
    Rotation,
    Solid,
)

from obyvak_geom import ObyvakParams, xz_face, xz_rect


MODEL_NAME = "obyvak"
EXPORT_KIND = "solid"
PARAMS = asdict(ObyvakParams())

# Clearance between distinct solids (mm). Large enough for float32 metres in glTF;
# small enough not to read as a gap in the viewer.
FACE_GAP = 1.0


def _layer_color(label: str) -> Color:
    from blueprints.export_utils import SECTION_LAYERS

    style = SECTION_LAYERS.get(label, {})
    rgb = style.get("fill") or style.get("line") or (80, 80, 80)
    return Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)


def _paint(shape, label: str):
    shape.label = label
    shape.color = _layer_color(label)
    return shape


def _oriented_bar(
    p0: tuple[float, float, float],
    p1: tuple[float, float, float],
    width: float,
    thick: float,
    label: str,
    thin_dir: tuple[float, float, float] | None = None,
):
    """Thin rectangular bar from p0→p1 (centreline), width×thick cross-section.

    If ``thin_dir`` is set, the ``thick`` axis follows that direction (projected
    ⊥ to the bar), so straps sit flat on a face instead of rolling into it.
    """
    import math

    dx, dy, dz = p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]
    length = math.sqrt(dx * dx + dy * dy + dz * dz)
    if length < 10.0 or width <= 0 or thick <= 0:
        return None
    mid = (0.5 * (p0[0] + p1[0]), 0.5 * (p0[1] + p1[1]), 0.5 * (p0[2] + p1[2]))
    fx, fy, fz = dx / length, dy / length, dz / length
    solid = Box(length, width, thick, align=(Align.CENTER, Align.CENTER, Align.CENTER))
    if thin_dir is not None:
        nx, ny, nz = thin_dir
        # Project thin_dir onto the plane ⊥ bar axis.
        dot = nx * fx + ny * fy + nz * fz
        nx, ny, nz = nx - dot * fx, ny - dot * fy, nz - dot * fz
        nl = math.sqrt(nx * nx + ny * ny + nz * nz)
        if nl < 1e-9:
            # Parallel to bar — fall back to yaw/pitch.
            thin_dir = None
        else:
            nx, ny, nz = nx / nl, ny / nl, nz / nl
            solid = Plane(origin=mid, x_dir=(fx, fy, fz), z_dir=(nx, ny, nz)) * solid
            return _paint(solid, label)
    yaw = math.degrees(math.atan2(fy, fx))
    hyp = math.hypot(fx, fy)
    pitch = math.degrees(math.atan2(fz, hyp))
    solid = Location(mid) * Rotation(Z=yaw) * Rotation(Y=-pitch) * solid
    return _paint(solid, label)


def _cyl_x(x0: float, x1: float, y: float, z: float, radius: float, label: str):
    """Cylinder along X, centred on (mid-X, y, z). Radius is the true OD/2."""
    length = x1 - x0
    if length <= 0 or radius <= 0:
        raise ValueError(f"non-positive bar for {label}")
    solid = Cylinder(radius, length, align=(Align.CENTER, Align.CENTER, Align.CENTER))
    # Local +Z → world +X.
    solid = Location((0.5 * (x0 + x1), y, z)) * Rotation(Y=90) * solid
    return _paint(solid, label)


def _cyl_y(cx: float, y0: float, y1: float, cz: float, radius: float, label: str):
    """Cylinder along Y, centred on (cx, mid-Y, cz). Radius is the true OD/2."""
    length = y1 - y0
    if length <= 0 or radius <= 0:
        raise ValueError(f"non-positive duct for {label}")
    solid = Cylinder(radius, length, align=(Align.CENTER, Align.CENTER, Align.CENTER))
    solid = Location((cx, 0.5 * (y0 + y1), cz)) * Rotation(X=90) * solid
    return _paint(solid, label)


def _box(x: float, y: float, z: float, dx: float, dy: float, dz: float, label: str):
    if dx < 0:
        x, dx = x + dx, -dx
    if dy < 0:
        y, dy = y + dy, -dy
    if dz < 0:
        z, dz = z + dz, -dz
    if dx <= 0 or dy <= 0 or dz <= 0:
        raise ValueError(f"non-positive box for {label}: {(dx, dy, dz)}")
    solid = Box(dx, dy, dz, align=(Align.MIN, Align.MIN, Align.MIN))
    solid = Location((x, y, z)) * solid
    return _paint(solid, label)


def _extrude_y(face, y0: float, y1: float, label: str):
    ya, yb = (y0, y1) if y1 >= y0 else (y1, y0)
    if yb - ya <= 0:
        raise ValueError(f"non-positive extrude for {label}: {y0}→{y1}")
    placed = face.moved(Location((0.0, ya, 0.0)))
    try:
        solid = Solid.extrude(placed, (0.0, yb - ya, 0.0))
    except Exception:
        solid = Solid.extrude(placed.reversed(), (0.0, yb - ya, 0.0))
    return _paint(solid, label)


def _shrink_band(pts: list[tuple[float, float]], top_n: int, gap: float) -> list[tuple[float, float]]:
    """Pull the first top_n vertices down and the rest up (thin a roof band)."""
    out = []
    for i, (x, z) in enumerate(pts):
        out.append((x, z - gap if i < top_n else z + gap))
    return out


def _shrink_closed_band(pts: list[tuple[float, float]], gap: float) -> list[tuple[float, float]]:
    """Inset a closed band whose first half is the inner/lower edge, second half the outer."""
    n = len(pts)
    if n < 4 or n % 2:
        return pts
    half = n // 2
    out = []
    for i, (x, z) in enumerate(pts):
        if i < half:
            out.append((x, z + gap))
        else:
            out.append((x, z - gap))
    return out


def _inset_face(pts, gap: float, label: str, x_range: tuple[float, float] | None = None):
    """Closed XZ outline, optionally clipped to an X range, inset by ``gap``."""
    from build123d import Face as _Face

    face = xz_face(pts, label)
    if x_range is not None:
        bb = face.bounding_box()
        clip = xz_rect(x_range[0], bb.min.Z - 10.0, x_range[1] - x_range[0], bb.size.Z + 20.0, label)
        face = face.intersect(clip)
        face = face.faces()[0] if hasattr(face, "faces") else face
        if isinstance(face, list):
            face = face[0]
    out = _Face(face.outer_wire().offset_2d(-gap))
    out.label = label
    return out


def _split_x(solid, x: float, label: str) -> list:
    """Split a solid at the vertical plane X = x (a board butt joint)."""
    from build123d import Keep

    halves = solid.split(Plane.YZ.offset(x), keep=Keep.BOTH)
    pieces = list(halves.solids()) if hasattr(halves, "solids") else list(halves)
    return [_paint(piece, label) for piece in pieces if piece.volume > 1.0]


def _screw_solids(g, quads, y0: float, y1: float, spacing: float = 300.0) -> list:
    """Screws: head (8 mm) and shank (3.5 mm) quads extruded across Y at each station."""
    out = []
    head, shank = quads
    for yc in g.y_stations(y0, y1, spacing, spacing * 0.5):
        out.append(_extrude_y(xz_face(head, "joint_screw"), yc - 4.0, yc + 4.0, "joint_screw"))
        out.append(_extrude_y(xz_face(shank, "joint_screw"), yc - 1.75, yc + 1.75, "joint_screw"))
    return out


def _cut_away(solid: Solid, tools: list, label: str) -> Solid:
    """Remove tool volumes so roof packs sit on walls instead of through them."""
    out = solid
    for tool in tools:
        try:
            out = out.cut(tool)
        except Exception:
            continue
    return _paint(out, label)


def _aabb_hit(a, b) -> bool:
    ba, bb = a.bounding_box(), b.bounding_box()
    return (
        min(ba.max.X, bb.max.X) > max(ba.min.X, bb.min.X)
        and min(ba.max.Y, bb.max.Y) > max(ba.min.Y, bb.min.Y)
        and min(ba.max.Z, bb.max.Z) > max(ba.min.Z, bb.min.Z)
    )
