"""Obývák 1.02 — 3D massing from the transverse section + gable elevation.

World: X eave↔eave (5350), Y living gable↔kitchen gable (11100), Z up.
Living is Y=0 (one sliding door, 450 mm trap). Kitchen is Y=L (two sliding
doors, 190 mm trap).

Physical assembly rules (also keep the web viewer free of z-fighting):
- Each labelled solid has real thickness from the section params.
- Different materials never share a plane and never interpenetrate; mates get a
  1 mm clearance (still reads as "touching" at room scale).
- Gables own the end walls (full X). Eave runs only the clear mid-span so
  corner volumes are not drawn twice.
- Obývák-only scope: no koruna (exterior gables are in adjacent rooms), no EPS
  on gable shells, three gable pocket doors (one on the living gable at Y=0,
  two on the kitchen gable at Y=L), and terrace glazing on the X=0 eave
  (opposite cabinets).
- Floor slab is the clear room only; perimeter walls own the strip below z=0.
- Šikminy: NaturHeld 140, 100 mm, screwed through GKF into CD ⊥ krokvím
  → Jutafol N AL 170 Speciál on the attic face of the CD → přímý závěs 200 on the
  window slope, Nonius on the cabinet slope → minerální vata λ 0,039 (160 mm below
  the window slope and between the rafters; the cabinet slope fills its deeper
  cavity with 160+160+120 mm) → krokve 100/160 @ 875 + straps.
  No slope latě and no Flex. `rafters` = roof timber. Six ø14 ties run from
  wall plate to wall plate in every other rafter bay (270 mm off the nearer
  rafter face). They sit in the top of the plate so they clear the Ø160 ducts.
  Five pairs of spots on each slope sit on the ceiling between the ties.
  The kastlík frame is CD 60×27 plus a UD channel on the eave wall — no timber battens.
- Soffit box: 40 mm NH L over cabinets (20 mm gap); mineral wool + CD/UD rost
  below a service void; three Ø160 spiral ducts (HRV + AC) in that void; GKF
  lid raised onto the pozednice (above the wall head, not the plaster). Slope
  GKF butts the lid where the two planes meet, at full 12.5 mm. That joint is
  left floating: no angle and no UD. The lid CD keeps
  the only Nonius for the corner. Vertical CD studs hang from it; bottom CD studs
  socket into the wall UD. The three ducts are already anchored to the wall
  and are not hung from this box. Nothing heavy is fixed to the frame, so
  there are no timber packers. Furniture and pozednice do not carry the box —
  the plate only cleats the board edge.
- Terrace eave (X=0): glass stops at the 2500 mm opening head. Above that
  head the wall is the same stack as the rest of the eave — interior plaster,
  masonry, EPS — each brought down to the head (1 mm off the glass). The
  masonry course is the lintel up to the ring beam.
  100×100 columns in
  front of the glass at the pier centres stop one brick course below the beam.
  Cabinet eave keeps a continuous wall with 300×300 columns standing in front
  of it on the room side (same Y grid). Columns are drawn as masonry.
- Rafters seat on the wall plate (centred on the věnec); EPS is cut around rafters,
  not the other way around. Overhang past EPS is gutter-sized only.
- Bass traps (štít): kitchen 190 at Y=L / living 450 at Y=0. Each is a
  standalone CW wall on the gable only — not hung from the slopes or the
  soffit. UW at 2450 and a sloped UW screwed to the gable wall, sealing tape
  under the tracks, CW studs vertical @ 625, CW/UA offcuts back to the wall.
  The lining stops at the soffit face (cabinet line) as well as under the
  slopes. GKB 12.5 meets each of those finishes with a flexible acrylic bead
  and nothing else.

    python -m blueprints.export obyvak

450 mm at the cabinets is eave furniture depth — not the living-gable předstěna 450.
"""

from __future__ import annotations

import math
from dataclasses import asdict

from build123d import (
    Align,
    Axis,
    Box,
    Color,
    Compound,
    Cylinder,
    Location,
    Plane,
    Rotation,
    Solid,
)

from obyvak_geom import (
    LABEL_BASS_ACRYLIC,
    LABEL_BASS_ANCHOR,
    LABEL_BASS_ANGLE,
    LABEL_BASS_CW,
    LABEL_BASS_GKB,
    LABEL_BASS_STRUT,
    LABEL_BASS_TAPE,
    LABEL_BASS_UW,
    LABEL_BASS_WOOL,
    LABEL_EPS,
    LABEL_FLOOR,
    LABEL_FURNITURE,
    LABEL_GLAZING,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_PLENUM_WOOL,
    LABEL_POCKET_FRAME,
    LABEL_RACKING_STRAP,
    LABEL_RAFTERS,
    LABEL_SLOPE_LIGHT,
    LABEL_TIE_ROD,
    LABEL_ROOFING,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_DIRECT,
    LABEL_SLOPE_FOIL,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_UD,
    LABEL_SOFFIT_WOOL,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_GKB,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
    LABEL_WALL_GKF,
    LABEL_WALL_PLATE,
    PART_GROUPS,
    ObyvakLayout,
    ObyvakParams,
    TIE_LIGHT_D,
    TIE_LIGHT_H,
    xz_face,
    xz_rect,
    thicken_polyline,
    LABEL_EAVE_UD,
    LABEL_VB_TAPE,
    LABEL_EAVE_ACRYLIC,
)


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


def _pocket_door_cutters(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Through-openings for posuvné dveře in Y=0 / Y=L gables (D.1.1.03).

    Extends far enough into the room to clear masonry, pouzdro bay, and the SDK
    face that sits in front of the pocket (people walk through this hole).
    """
    face_t = max(p.sdk_t, 12.5)
    # pouzdro against gable + clearance + SDK in front of pouzdro.
    depth = p.pouzdro_d + face_t + 2 * gap + 2.0
    cutters = []
    for spec in p.pocket_doors:
        gable, x0, width = spec
        xa, xb = x0 + gap, x0 + width - gap
        if xb <= xa:
            continue
        if gable == "living":
            ya, yb = g.yl_eps - 1.0, gap + depth
        elif gable == "kitchen":
            ya, yb = p.room_length - gap - depth, g.yr_eps + 1.0
        else:
            raise ValueError(f"unknown pocket door gable: {gable!r}")
        cutters.append(
            _box(
                xa,
                min(ya, yb),
                -1.0,
                xb - xa,
                abs(yb - ya),
                p.pocket_door_h + 2 * gap + 2.0,
                "_door_cut",
            )
        )
    return cutters


def _eave_window_boxes(
    p: ObyvakParams, g: ObyvakLayout, gap: float, z1: float, tag: str
) -> list:
    """X=0 eave openings, from below the slab up to ``z1``."""
    cutters = []
    z0 = -1.0
    if z1 <= z0:
        return cutters
    for y0, width in p.eave_windows:
        ya, yb = y0 + gap, y0 + width - gap
        if yb <= ya:
            continue
        cutters.append(
            _box(
                g.xl_eps - 1.0,
                ya,
                z0,
                -g.xl_eps + p.wall_plaster + 2.0,
                yb - ya,
                z1 - z0,
                tag,
            )
        )
    return cutters


def _eave_window_cutters(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Opening through every eave layer, stopped at the window head.

    Interior plaster, masonry and EPS all end on that head. The lintel is
    the masonry course above it, still inside the same plaster and EPS.
    """
    return _eave_window_boxes(p, g, gap, p.window_h, "_window_cut")


def _cut_wall_openings(parts: list, cutters: list, labels: set | None = None) -> list:
    if not cutters:
        return parts
    if labels is None:
        labels = {
            LABEL_EPS,
            LABEL_MASONRY,
            LABEL_PLASTER,
            LABEL_WALL_GKF,
        }
    out = []
    for part in parts:
        if part.label not in labels:
            out.append(part)
            continue
        cut = part
        for tool in cutters:
            if _aabb_hit(part, tool):
                cut = _cut_away(cut, [tool], part.label)
        out.append(cut)
    return out


def _gable_sdk_and_pouzdra(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Local pouzdro pockets against the gable, SDK skin in front covering them.

    Stack (living Y=0 → into room, and kitchen Y=L → into room): gable →
    pouzdro bay → thin SDK face. SDK is pierced only for walk-through door
    openings — never for pouzdro bays. Does not touch or resize předstěny
    (Z≥2450; living 450 at Y=0, kitchen 190 at Y=L).
    """
    h = p.pocket_door_h - gap
    face_t = max(p.sdk_t, 12.5)
    # Full pocket depth against the gable; SDK sits clearly in front (into the room).
    pocket_d = max(p.pouzdro_d - gap, gap)
    pouzdra: list = []
    sdk_parts: list = []

    for end, _y_wall in (("living", gap), ("kitchen", p.room_length - gap)):
        if end == "living":
            y_pocket = gap
            y_sdk = gap + p.pouzdro_d
        else:
            y_sdk = p.room_length - gap - face_t - p.pouzdro_d
            y_pocket = p.room_length - gap - pocket_d
        sdk_parts.append(
            _box(gap, y_sdk, gap, p.room_width - 2 * gap, face_t, h, LABEL_WALL_GKF)
        )
        for gable, x0, width in p.pocket_doors:
            if gable != end:
                continue
            if x0 < p.room_width / 2.0:
                px0 = x0 + width + gap
            else:
                px0 = x0 - width + gap
            px0 = min(max(px0, gap), p.room_width - width - gap)
            pouzdra.append(_box(px0, y_pocket, gap, width - 2 * gap, pocket_d, h, LABEL_POCKET_FRAME))

    # Walk-through openings only (not pouzdro bays).
    door_cutters = _pocket_door_cutters(p, g, gap)
    sdk_parts = _cut_wall_openings(sdk_parts, door_cutters)
    return pouzdra + sdk_parts


def _predstena_outline(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list[tuple[float, float]]:
    """XZ outline of the gable bass-trap box (bottom @ 2450 → underside of ceiling)."""
    pts = []
    for i, (x, z) in enumerate(g.predstena_pts()):
        x = min(max(x, gap), p.room_width - gap)
        z = z + gap if i < 2 else z - gap
        pts.append((x, z))
    return pts


def bass_cd_centres(length: float, spacing: float, profile_w: float, gap: float) -> list[float]:
    """CD centres on the make-up grid, kept inside the gable.

    Screw lines match the acoustic lattice: a profile at the start, then exact
    modules, then one make-up bay at the far edge. A 60 mm CD cannot sit on the
    wall line, so each end profile moves in by half its width.
    """
    if spacing <= 1.0 or length <= 1.0:
        raise ValueError("length and spacing must be positive")
    half = profile_w * 0.5
    lo = half + gap
    hi = length - half - gap
    if hi <= lo:
        return []
    lines = [0.0]
    x = spacing
    while x < length - 0.5:
        lines.append(x)
        x += spacing
    if length - lines[-1] > 0.5:
        lines.append(length)
    centres: list[float] = []
    for line in lines:
        centre = min(max(line, lo), hi)
        if centres and centre - centres[-1] < profile_w * 0.75:
            continue
        centres.append(centre)
    return centres


def bass_soffit_stop_x(p: ObyvakParams) -> float:
    """X where the trap solids end, short of the soffit face by the acrylic bead.

    The soffit face is the vertical NH at the cabinet line (``x_furn``). The
    bead occupies the gap; the frame, board and wool stay on the room side of it.
    """
    x_furn = p.room_width - p.furniture_width
    return x_furn - p.bass_acrylic - 2.0 * FACE_GAP


def _down_normal(x0: float, z0: float, x1: float, z1: float) -> tuple[float, float]:
    """Unit normal of a ceiling segment, pointing downward."""
    dx, dz = x1 - x0, z1 - z0
    span = math.hypot(dx, dz) or 1.0
    nx, nz = -dz / span, dx / span
    if nz > 0.0:
        nx, nz = -nx, -nz
    return nx, nz


def _band_below(
    x0: float, z0: float, x1: float, z1: float, near: float, far: float
) -> list[tuple[float, float]]:
    """Quad under a segment, offset `near` then `far` along the downward normal."""
    nx, nz = _down_normal(x0, z0, x1, z1)
    return [
        (x0 + nx * near, z0 + nz * near),
        (x1 + nx * near, z1 + nz * near),
        (x1 + nx * far, z1 + nz * far),
        (x0 + nx * far, z0 + nz * far),
    ]


def _offset_open(path: list[tuple[float, float]], dist: float) -> list[tuple[float, float]]:
    """Move an open polyline by ``dist`` along the downward bisector."""
    if len(path) < 2:
        return list(path)
    normals = [_down_normal(a[0], a[1], b[0], b[1]) for a, b in zip(path, path[1:])]
    out = []
    for i, (x, z) in enumerate(path):
        if i == 0:
            nx, nz = normals[0]
        elif i == len(path) - 1:
            nx, nz = normals[-1]
        else:
            nx = normals[i - 1][0] + normals[i][0]
            nz = normals[i - 1][1] + normals[i][1]
            scale = math.hypot(nx, nz) or 1.0
            nx, nz = nx / scale, nz / scale
        out.append((x + nx * dist, z + nz * dist))
    return out


def _ceiling_segments(g: ObyvakLayout, x_stop: float) -> list[tuple[float, float, float, float]]:
    """Top of the trap, left to right: window eave, false ridge, soffit stop.

    The cabinet bay (past the soffit face) is not part of the trap.
    """
    path = [
        (0.0, g.h_start),
        (g.x_false, g.z_false),
        (x_stop, g.z_ceil(x_stop)),
    ]
    return [
        (a[0], a[1], b[0], b[1])
        for a, b in zip(path, path[1:])
        if math.hypot(b[0] - a[0], b[1] - a[1]) > 1.0
    ]


def _strut_centres(z0: float, z1: float, bar: float, max_step: float) -> list[float]:
    """1/3 and 2/3 of the stud, plus a head fixing, with no gap over ``max_step``.

    Short studs keep a single mid strut. The head bar is how the top of the
    stud bears on the wall track instead of on the slope.
    """
    height = z1 - z0
    margin = bar * 0.5 + 2.0
    if height < bar + 20.0:
        return []
    lo, hi = z0 + margin, z1 - margin
    if hi <= lo:
        return []
    if height <= max_step:
        raw = [0.5 * (z0 + z1)]
    else:
        raw = [z0 + height / 3.0, z0 + 2.0 * height / 3.0, hi]
        # Extra bars if a third of a tall stud would still exceed the step.
        guard = 0
        while guard < 6:
            guard += 1
            pts = [z0, *sorted(raw), z1]
            widest = max(range(len(pts) - 1), key=lambda i: pts[i + 1] - pts[i])
            gap = pts[widest + 1] - pts[widest]
            if gap <= max_step + 1.0:
                break
            raw.append(0.5 * (pts[widest] + pts[widest + 1]))
    out: list[float] = []
    for z in sorted(raw):
        z = min(max(z, lo), hi)
        if out and z - out[-1] < bar + 30.0:
            continue
        out.append(z)
    return out


def _clip_span(
    x0: float, z0: float, x1: float, z1: float, lo: float, hi: float
) -> tuple[float, float, float, float] | None:
    """Keep the portion of a segment inside ``lo <= x <= hi``."""
    dx, dz = x1 - x0, z1 - z0
    if abs(dx) < 1e-6:
        return (x0, z0, x1, z1) if lo <= x0 <= hi else None
    t_lo = (lo - x0) / dx
    t_hi = (hi - x0) / dx
    a, b = (t_lo, t_hi) if t_lo <= t_hi else (t_hi, t_lo)
    t0, t1 = max(0.0, a), min(1.0, b)
    if t1 - t0 < 0.02:
        return None
    return (x0 + dx * t0, z0 + dz * t0, x0 + dx * t1, z0 + dz * t1)


def _bass_trap_parts(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Standalone CW linings on the two gable walls.

    Nothing here is fixed to the slopes or to the soffit. The bottom UW sits
    at 2450 on the base, with sealing tape under it. The top UW follows the
    slope and is screwed to the gable wall (tape between track and wall).
    Vertical CW studs at 625 mm carry the GKB. CW/UA offcuts tie the studs
    back to the wall. The lining stops at the soffit face. A flexible acrylic
    bead is the only meeting with the slope finish and with that face.
    """
    # Perpendicular-ish clearance under the new ceiling so the bead and the
    # 1 mm mate gap both fit. 14 mm vertical is about 11 mm perpendicular at 40°.
    head_drop = 14.0
    x_stop = bass_soffit_stop_x(p)
    outline = [
        (gap, p.predstena_bottom_z + gap),
        (x_stop, p.predstena_bottom_z + gap),
        (x_stop, g.z_ceil(x_stop) - head_drop),
        (g.x_false, g.z_false - head_drop),
        (gap, g.h_start - head_drop),
    ]
    face = xz_face(outline, "predstena")
    parts: list = []
    steel: list = []

    def add_end(side: str) -> None:
        cw = p.bass_k_cw if side == "kitchen" else p.bass_l_cw
        wool = p.bass_k_wool if side == "kitchen" else p.bass_l_wool
        gkb = p.bass_k_gkb if side == "kitchen" else p.bass_l_gkb
        depth = p.predstena_kitchen if side == "kitchen" else p.predstena_living
        toward = -1.0 if side == "kitchen" else 1.0
        y_wall = p.room_length if side == "kitchen" else 0.0
        y_room = y_wall + toward * depth
        # Wool against the wall. GKB on the room face. CW against the GKB,
        # so a stud deeper than the air notches the wool and nowhere else.
        if toward > 0:
            y_wool0, y_wool1 = gap, wool - gap
            y_gkb0 = y_room - gkb + gap
            y_gkb1 = y_room - gap
            y_stud1 = y_gkb0 - gap
            y_stud0 = y_stud1 - cw
            y_track0, y_track1 = gap + p.bass_tape_t, gap + p.bass_tape_t + p.bass_uw_flange
        else:
            y_wool0, y_wool1 = y_wall - wool + gap, y_wall - gap
            y_gkb0 = y_room + gap
            y_gkb1 = y_room + gkb - gap
            y_stud0 = y_gkb1 + gap
            y_stud1 = y_stud0 + cw
            y_track1 = y_wall - gap - p.bass_tape_t
            y_track0 = y_track1 - p.bass_uw_flange
        if y_wool1 > y_wool0:
            parts.append(_extrude_y(face, y_wool0, y_wool1, LABEL_BASS_WOOL))
        if y_gkb1 > y_gkb0:
            parts.append(_extrude_y(face, y_gkb0, y_gkb1, LABEL_BASS_GKB))

        z_tape0 = p.predstena_bottom_z + gap
        z_uw0 = z_tape0 + p.bass_tape_t
        z_uw1 = z_uw0 + p.bass_uw_flange
        z_stud0 = z_uw1 + gap
        # Bottom track on the stud line, tape under the web, up to the soffit stop.
        track_w = x_stop - gap
        steel.append(
            _box(gap, y_stud0, z_tape0, track_w, y_stud1 - y_stud0, p.bass_tape_t, LABEL_BASS_TAPE)
        )
        steel.append(
            _box(
                gap,
                y_stud0,
                z_uw0,
                track_w,
                y_stud1 - y_stud0,
                p.bass_uw_flange,
                LABEL_BASS_UW,
            )
        )
        # Separate segments, not a mitre: a mitred bead crosses the GKB, and
        # neighbouring tracks overlap at the ridge. Each piece stays under its face.
        # Ridge ends are shortened so the two tracks do not meet; the free ends
        # only leave the eave bead and the soffit bead.
        if toward > 0:
            ty0, ty1 = gap, gap + p.bass_tape_t
        else:
            ty1 = y_wall - gap
            ty0 = ty1 - p.bass_tape_t
        segments = _ceiling_segments(g, x_stop)
        for i, (x0, z0, x1, z1) in enumerate(segments):
            dx, dz = x1 - x0, z1 - z0
            span = math.hypot(dx, dz) or 1.0
            trim0 = 80.0 if i > 0 else 20.0
            trim1 = 80.0 if i < len(segments) - 1 else 12.0
            x0 += dx * trim0 / span
            z0 += dz * trim0 / span
            x1 -= dx * trim1 / span
            z1 -= dz * trim1 / span
            clipped = _clip_span(x0, z0, x1, z1, 10.0, x_stop)
            if clipped is None:
                continue
            x0, z0, x1, z1 = clipped
            steel.append(
                _extrude_y(
                    xz_face(_band_below(x0, z0, x1, z1, 12.0, 12.0 + p.bass_uw_flange), LABEL_BASS_UW),
                    y_track0,
                    y_track1,
                    LABEL_BASS_UW,
                )
            )
            steel.append(
                _extrude_y(
                    xz_face(_band_below(x0, z0, x1, z1, 8.0, 8.0 + p.bass_tape_t), LABEL_BASS_TAPE),
                    ty0,
                    ty1,
                    LABEL_BASS_TAPE,
                )
            )
            parts.append(
                _extrude_y(
                    xz_face(_band_below(x0, z0, x1, z1, 3.0, 3.0 + p.bass_acrylic), LABEL_BASS_ACRYLIC),
                    y_gkb0,
                    y_gkb1,
                    LABEL_BASS_ACRYLIC,
                )
            )
        # Vertical bead in the gap to the soffit face. Not fixed to the box.
        x_bead0 = x_stop + gap
        z_bead0 = g.z_nabeh_bot + gap
        z_bead1 = min(g.z_ceil(x_bead0), g.z_ceil(x_bead0 + p.bass_acrylic)) - p.bass_acrylic
        if z_bead1 - z_bead0 > 40.0:
            parts.append(
                _box(
                    x_bead0,
                    y_gkb0,
                    z_bead0,
                    p.bass_acrylic,
                    y_gkb1 - y_gkb0,
                    z_bead1 - z_bead0,
                    LABEL_BASS_ACRYLIC,
                )
            )

        stations = bass_cd_centres(x_stop, p.bass_stud_spacing, p.bass_cw_w, gap)
        half = p.bass_cw_w * 0.5
        for xc in stations:
            x0 = xc - half
            z_top = min(g.z_ceil(x) for x in (x0, xc, x0 + p.bass_cw_w)) - head_drop
            if z_top - z_stud0 < 80.0:
                continue
            steel.append(_box(x0, y_stud0, z_stud0, p.bass_cw_w, y_stud1 - y_stud0, z_top - z_stud0, LABEL_BASS_CW))
            # The track flange is only at the floor and the ceiling. Mid-height
            # struts have to reach the wall themselves: clearance is the sealing
            # tape and the mate gap, then a bent angle, then the offcut.
            tab_t = 2.0
            tab_return = 20.0
            tab_lip = 15.0
            anchor_embed = 60.0
            y_steel = (gap + p.bass_tape_t) if toward > 0 else (y_wall - gap - p.bass_tape_t)
            y_stud_near = (y_stud0 - gap) if toward > 0 else (y_stud1 + gap)
            if toward > 0:
                y_bar0 = y_steel + tab_t + tab_return + gap
                y_bar1 = y_stud_near
                plaster_face = -gap
                mason_face = -p.wall_plaster - gap
                y_shank0, y_shank1 = mason_face - anchor_embed, plaster_face + 0.4
            else:
                y_bar0 = y_stud_near
                y_bar1 = y_steel - tab_t - tab_return - gap
                plaster_face = y_wall + gap
                mason_face = y_wall + p.wall_plaster + gap
                y_shank0, y_shank1 = plaster_face - 0.4, mason_face + anchor_embed
            if y_bar1 - y_bar0 < 20.0:
                continue
            uw_here = [s for s in steel if s.label == LABEL_BASS_UW]
            for zc in _strut_centres(z_stud0, z_top, p.bass_strut_h, p.bass_strut_max_step):
                bar = _box(
                    x0,
                    y_bar0,
                    zc - p.bass_strut_h * 0.5,
                    p.bass_cw_w,
                    y_bar1 - y_bar0,
                    p.bass_strut_h,
                    LABEL_BASS_STRUT,
                )
                hits = [u for u in uw_here if _aabb_hit(bar, u)]
                if hits:
                    bar = _cut_away(bar, hits, LABEL_BASS_STRUT)
                if float(bar.volume) < 100.0:
                    continue
                steel.append(bar)
                bb = bar.bounding_box()
                reaches = (bb.min.Y < y_bar0 + 2.0) if toward > 0 else (bb.max.Y > y_bar1 - 2.0)
                if not reaches:
                    continue
                z_tab0 = zc - p.bass_strut_h * 0.5 - tab_lip
                z_tab = p.bass_strut_h + 2.0 * tab_lip
                if toward > 0:
                    wall_leg = _box(x0, y_steel, z_tab0, p.bass_cw_w, tab_t, z_tab, LABEL_BASS_ANGLE)
                    ret_leg = _box(
                        x0,
                        y_steel + tab_t,
                        zc - p.bass_strut_h * 0.5,
                        p.bass_cw_w,
                        tab_return,
                        p.bass_strut_h,
                        LABEL_BASS_ANGLE,
                    )
                else:
                    wall_leg = _box(x0, y_steel - tab_t, z_tab0, p.bass_cw_w, tab_t, z_tab, LABEL_BASS_ANGLE)
                    ret_leg = _box(
                        x0,
                        y_steel - tab_t - tab_return,
                        zc - p.bass_strut_h * 0.5,
                        p.bass_cw_w,
                        tab_return,
                        p.bass_strut_h,
                        LABEL_BASS_ANGLE,
                    )
                angle = _paint(wall_leg.fuse(ret_leg), LABEL_BASS_ANGLE)
                hits = [u for u in uw_here if _aabb_hit(angle, u)]
                if hits:
                    angle = _cut_away(angle, hits, LABEL_BASS_ANGLE)
                if float(angle.volume) < 40.0:
                    continue
                steel.append(angle)
                steel.append(_cyl_y(xc, y_shank0, y_shank1, zc, 4.0, LABEL_BASS_ANCHOR))
        # Vertical board joints: 1250 mm sheets span two 625 mm bays and land on a stud.
        # The soffit end is the acrylic bead, not a taped joint.
        for xj in range(int(p.bass_board_w), int(x_stop), int(p.bass_board_w)):
            if xj + 25.0 > x_stop - gap:
                continue
            z_top = min(g.z_ceil(x) for x in (xj - 25.0, float(xj), xj + 25.0)) - head_drop
            if z_top - z_uw1 < 40.0:
                continue
            if toward > 0:
                jt0, jt1 = y_gkb1 + gap, y_gkb1 + gap + 1.0
            else:
                jt1 = y_gkb0 - gap
                jt0 = jt1 - 1.0
            parts.append(
                _box(xj - 25.0, jt0, z_uw1, 50.0, jt1 - jt0, z_top - z_uw1, LABEL_BASS_TAPE)
            )

    add_end("living")
    add_end("kitchen")

    # Wool is friction-fit around the steel, never inside a profile.
    wool_parts = [part for part in parts if part.label == LABEL_BASS_WOOL]
    kept = [part for part in parts if part.label != LABEL_BASS_WOOL]
    for wool in wool_parts:
        tools = [tool for tool in steel if _aabb_hit(wool, tool)]
        kept.append(_cut_away(wool, tools, LABEL_BASS_WOOL) if tools else wool)
    kept.extend(steel)
    return kept


def _glass_panes(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Thin glass fills in the X=0 eave openings."""
    panes = []
    x_glass = g.xl_mas + (p.wall_mason - p.glass_t) / 2.0
    for y0, width in p.eave_windows:
        panes.append(
            _box(
                x_glass,
                y0 + gap,
                gap,
                p.glass_t,
                width - 2 * gap,
                p.window_h - gap,
                LABEL_GLAZING,
            )
        )
    return panes


def _parts(p: ObyvakParams, g: ObyvakLayout) -> list:
    gap = FACE_GAP
    # Room-clear eave run: gable plaster owns y∈[-plaster,0] and [L, L+plaster].
    y0, y1 = gap, p.room_length - gap
    ey = y1 - y0
    z_col = g.column_top_z
    structure: list = []

    # --- Floor: clear slab only (walls own the perimeter strip below z=0). ---
    structure.append(
        _box(gap, gap, -p.floor_t, p.room_width - 2 * gap, p.room_length - 2 * gap, p.floor_t, LABEL_FLOOR)
    )

    # --- Eave walls (panel A): mid-span only. Layer stack outside → inside. ---
    # Left (terrace / glazing): EPS full height; masonry ends + continuous ring-beam
    # course; 100×100 columns in front of the glass (same masonry material).
    structure.append(
        _box(g.xl_eps, y0, -p.floor_t, p.wall_eps - gap, ey, p.eave_wall_z + p.floor_t, LABEL_EPS)
    )
    for ya, yb in g.eave_masonry_end_spans(y0, y1):
        if yb <= ya + gap:
            continue
        structure.append(
            _box(g.xl_mas, ya, -p.floor_t, p.wall_mason - gap, yb - ya, z_col + p.floor_t, LABEL_MASONRY)
        )
    structure.append(
        _box(g.xl_mas, y0, z_col + gap, p.wall_mason - gap, ey, p.venec_h - gap, LABEL_MASONRY)
    )
    # Lintel: the same masonry course as the piers, from the opening head up
    # to the ring beam. 1 mm above the glass (glass stops at window_h - gap).
    # The beam starts at column_top + gap. Plaster and EPS are the same
    # solids as the rest of the wall; the opening cut stops on this head.
    lintel_h = z_col - p.window_h
    for y_win, width in p.eave_windows:
        if lintel_h <= gap or width <= 2 * gap:
            continue
        structure.append(
            _box(
                g.xl_mas,
                y_win + gap,
                p.window_h,
                p.wall_mason - gap,
                width - 2 * gap,
                lintel_h,
                LABEL_MASONRY,
            )
        )
    structure.append(_box(-p.wall_plaster, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, LABEL_PLASTER))

    x_glass = g.xl_mas + (p.wall_mason - p.glass_t) / 2.0
    x_win_col = x_glass + p.glass_t + gap
    half_win = p.window_column_size * 0.5
    for yc in g.eave_column_y_centres():
        structure.append(
            _box(
                x_win_col,
                yc - half_win,
                -p.floor_t,
                p.window_column_size - gap,
                p.window_column_size,
                z_col + p.floor_t,
                LABEL_MASONRY,
            )
        )

    # Right (cabinets): continuous masonry wall; 300×300 columns stand in front of
    # the interior plaster face (entirely in the room), same Y grid as the glass posts.
    structure.append(_box(p.room_width, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, LABEL_PLASTER))
    x_furn_mas = p.room_width + p.wall_plaster + gap
    structure.append(
        _box(
            x_furn_mas,
            y0,
            -p.floor_t,
            p.wall_mason - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            LABEL_MASONRY,
        )
    )
    half_furn = p.furn_column_size * 0.5
    # Against the room-side plaster face; sits on the slab.
    x_furn_col0 = p.room_width - p.furn_column_size
    furn_col_parts: list = []
    for yc in g.eave_column_y_centres():
        furn_col_parts.append(
            _box(
                x_furn_col0,
                yc - half_furn,
                gap,
                p.furn_column_size - gap,
                p.furn_column_size,
                z_col - gap,
                LABEL_MASONRY,
            )
        )
    structure.extend(furn_col_parts)
    structure.append(
        _box(
            g.xr_mas + gap,
            y0,
            -p.floor_t,
            p.wall_eps - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            LABEL_EPS,
        )
    )

    # Wall plates sit on the ring-beam course, centred on masonry thickness.
    structure.append(
        _box(g.poz_l0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, LABEL_WALL_PLATE)
    )
    structure.append(
        _box(g.poz_r0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, LABEL_WALL_PLATE)
    )

    # --- Gable walls (panel B): full X, own the corners; interior shells only (no EPS). ---
    for ya, yb in (
        (g.yl_mas, -p.wall_plaster - gap),
        (p.room_length + p.wall_plaster + gap, g.yr_mas),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t), LABEL_MASONRY), ya, yb, LABEL_MASONRY
            )
        )
    for ya, yb in (
        (-p.wall_plaster, -gap),
        (p.room_length + gap, p.room_length + p.wall_plaster),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(0.0, p.room_width, 0.0), LABEL_PLASTER), ya, yb, LABEL_PLASTER
            )
        )

    door_cutters = _pocket_door_cutters(p, g, gap)
    # Every terrace layer stops at the glass head. The lintel boxes, which
    # start on that head, stay inside the plaster and the EPS.
    structure = _cut_wall_openings(structure, door_cutters)
    structure = _cut_wall_openings(structure, _eave_window_cutters(p, g, gap))

    # Rafter seat: pozednice (+ minor masonry/column/plaster contact). EPS is cut
    # around the finished rafters — real build order.
    rafter_seat_cutters = [
        s
        for s in structure
        if s.label in {LABEL_WALL_PLATE, LABEL_MASONRY, LABEL_PLASTER}
    ]
    # Krytina may still clear gable massing / plates at the ridge runout.
    roofing_cutters = [s for s in structure if s.label != LABEL_FLOOR]

    # --- Roof: krytina above krokve above vata; thinned, then notched at seat. ---
    # Krov = discrete rafters 100/160 @ 875 (sheet E_KROK), not a solid timber slab.
    krov_pts = _shrink_band(g.krov_pts(), top_n=3, gap=gap)
    krytina_pts = [(x, z + gap if i < 3 else z) for i, (x, z) in enumerate(g.krytina_pts())]
    # Plenum wool follows the 2D outline out to the rafter seats on both
    # plates (about x -140 and x 5490), inset by the face gap.
    vata_face = _inset_face(g.vata_pts(), gap, LABEL_PLENUM_WOOL)

    y_raf0, y_raf1 = gap, p.room_length - gap
    rafter_ys = g.rafter_y_stations(y_raf0, y_raf1)
    half_raf = p.rafter_w * 0.5
    krov_parts: list = []
    for yc in rafter_ys:
        ya, yb = yc - half_raf, yc + half_raf
        if yb <= ya:
            continue
        krov_parts.append(
            _cut_away(
                _extrude_y(xz_face(krov_pts, LABEL_RAFTERS), ya, yb, LABEL_RAFTERS),
                rafter_seat_cutters,
                LABEL_RAFTERS,
            )
        )
    # EPS (and room plaster on the terrace eave) wrap around rafters.
    eps_raf_cutters = list(krov_parts)
    structure = [
        _cut_away(s, eps_raf_cutters, s.label) if s.label in {LABEL_EPS, LABEL_PLASTER} else s
        for s in structure
    ]

    krytina = _cut_away(
        _extrude_y(xz_face(krytina_pts, LABEL_ROOFING), g.y_roof0, g.y_roof1, LABEL_ROOFING),
        roofing_cutters,
        LABEL_ROOFING,
    )
    # Minerální vata λ 0,039: the void above the CD pack, plus the 160 mm bays between
    # krokve. Same part. The vent channel above the rafter top stays empty.
    # Notch the soffit rods while this solid is still one prism. Cutting them
    # out after the bay fuse inverts the shell.
    vata = _extrude_y(vata_face, gap, p.room_length - gap, LABEL_PLENUM_WOOL)
    _half_hang = p.hanger_w * 0.5
    _z_cd = g.horiz_hanger_bot_z()
    _wool_notches = []
    for _xc in g.horiz_cd_x_stations():
        _wool_notches.append(
            _extrude_y(xz_face(g.horiz_cd_quad(_xc), LABEL_SOFFIT_CD), g.y_furn0, g.y_furn1, LABEL_SOFFIT_CD)
        )
        _hang_h = g.horiz_hanger_top_z(_xc) - 2.0 * gap - _z_cd
        if _hang_h < 20.0:
            continue
        for _yc in rafter_ys:
            _wool_notches.append(
                _box(
                    _xc - _half_hang,
                    _yc - _half_hang,
                    _z_cd,
                    p.hanger_w,
                    p.hanger_w,
                    _hang_h,
                    LABEL_SOFFIT_NONIUS,
                )
            )
    if _wool_notches:
        vata = _cut_away(vata, _wool_notches, LABEL_PLENUM_WOOL)
    # Same wool, between the rafters: rafter depth from plate face to plate face.
    # Where the rafter is seated in the plate the bay starts on the plate top.
    bay_face = xz_face(g.vata_rafter_bay_pts(gap), LABEL_PLENUM_WOOL)
    # Cheeks stop FACE_GAP short of each krokev so the timber and the wool do not share a face.
    cursor = gap
    y_wool1 = p.room_length - gap
    for yc in rafter_ys:
        ya = yc - half_raf - gap
        yb = yc + half_raf + gap
        if ya - cursor > gap:
            piece = _extrude_y(bay_face, cursor, ya, LABEL_PLENUM_WOOL)
            vata = _paint(vata.fuse(piece), LABEL_PLENUM_WOOL)
        cursor = max(cursor, yb)
    if y_wool1 - cursor > gap:
        piece = _extrude_y(bay_face, cursor, y_wool1, LABEL_PLENUM_WOOL)
        vata = _paint(vata.fuse(piece), LABEL_PLENUM_WOOL)

    parts: list = list(structure)
    parts.extend(_glass_panes(p, g, gap))
    parts.extend(krov_parts)
    parts.extend([krytina, vata])

    # --- Šikminy: complete acoustic / steel stack. ---
    # Slope pack runs wall-to-wall to the gables; soffit bay stays between bass traps.
    y_ceil0, y_ceil1 = gap, p.room_length - gap
    y_soff0, y_soff1 = g.y_furn0 + gap, g.y_furn1 - gap

    def _add_band(pts: list[tuple[float, float]], label: str):
        band = _shrink_closed_band(pts, gap)
        return _extrude_y(xz_face(band, label), y_ceil0, y_ceil1, label)

    # 1) NaturHeld 140, 80 mm, screwed through the GKF into the CD. No latě, no Flex.
    # Two boards per slope run: they butt at the false ridge (vertical cut).
    parts.extend(
        _split_x(
            _extrude_y(_inset_face(g.sikmina_nh_pts(), gap, LABEL_SLOPE_NH), y_ceil0, y_ceil1, LABEL_SLOPE_NH),
            g.x_false,
            LABEL_SLOPE_NH,
        )
    )

    # Triangle under the lid, above the slope board, out to the vertical lať.
    # Only the soffit bay has that lid. Same mineral wool as the soffit cavity.
    wedge_pts = g.soffit_wool_wedge_pts()
    wedge_solid = None
    if len(wedge_pts) >= 3:
        # One triangle, held off the lid, the vertical face and the slope board.
        x0, _z_lid = wedge_pts[0]
        x1, z_nh = wedge_pts[1]
        z_top = g.z_soffit_lid - gap
        wedge = [
            (x0, z_top),
            (x1 - gap, z_nh + gap),
            (x1 - gap, z_top),
        ]
        wedge_solid = _extrude_y(xz_face(wedge, LABEL_SOFFIT_WOOL), y_soff0, y_soff1, LABEL_SOFFIT_WOOL)

    # 2) SDK
    # Room-side GKF butts where the left and right planes meet (no step).
    parts.extend(_split_x(_add_band(g.sikmina_sdk_pts(), LABEL_SLOPE_GKF), g.x_stack_joint, LABEL_SLOPE_GKF))
    if (_sdk2 := g.sikmina_sdk2_pts()) is not None:
        parts.append(_add_band(_sdk2, LABEL_SLOPE_GKF))

    # 4) CD ⊥ krokvím (spaced along slope, run along Y)
    cd_parts: list = []
    for quad in g.sikmina_cd_quads():
        cd_parts.append(_extrude_y(xz_face(quad, LABEL_SLOPE_CD), y_ceil0, y_ceil1, LABEL_SLOPE_CD))
    parts.extend(cd_parts)

    # 5) Závěsy CD→krokev at rafter × CD crossings (same Y stations as krokve).
    zaves_parts: list = []
    half_hang = p.hanger_w * 0.5
    ceil_rafter_ys = [yc for yc in rafter_ys if y_ceil0 <= yc <= y_ceil1]
    for st in g.sikmina_cd_stations():
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if not g.sikmina_cd_in_span(xs, st[0]):
            continue
        hang_quad = g.hanger_quad(*st)
        # The eave CD is seated in the wall UD. Its direct hanger would run
        # through the wall plate and the masonry; that hanger is not built.
        if min(x for x, _z in hang_quad) < -0.5:
            continue
        plate_x0, plate_x1 = g.poz_l0, g.poz_l0 + p.plate_w
        plate_z0, plate_z1 = p.eave_wall_z, g.z_plate_top
        hxs = [x for x, _z in hang_quad]
        hzs = [z for _x, z in hang_quad]
        if (
            max(hxs) > plate_x0
            and min(hxs) < plate_x1
            and max(hzs) > plate_z0
            and min(hzs) < plate_z1
        ):
            continue
        # Window slope stays parallel to the rafters (140 mm plenum). Direct hanger 200.
        # Cabinet slope opens toward the furniture line — Nonius from the false
        # ridge onward (pack peak at x_false, left of the roof ridge).
        # Direct hanger on the left plane, including the short run past the
        # false ridge. Nonius starts where the right GKF plane takes over.
        hang_label = LABEL_SLOPE_DIRECT if st[0] <= g.x_cd_joint else LABEL_SLOPE_NONIUS
        for yc in ceil_rafter_ys:
            zaves_parts.append(
                _extrude_y(
                    xz_face(hang_quad, hang_label),
                    yc - half_hang,
                    yc + half_hang,
                    hang_label,
                )
            )
    # Any other hanger that still meets the wall is trimmed back to the room.
    wall_solids = [
        s for s in parts if getattr(s, "label", None) in {LABEL_MASONRY, LABEL_PLASTER, LABEL_WALL_PLATE}
    ]
    if wall_solids:
        for i, hanger in enumerate(zaves_parts):
            hits = [w for w in wall_solids if _aabb_hit(hanger, w)]
            if not hits:
                continue
            zaves_parts[i] = _cut_away(hanger, hits, hanger.label)
    parts.extend(zaves_parts)

    # 5b) Jutafol N AL 170 Speciál — attic face of CD, below mineral wool. Hangers pierce it.
    # Vapour brake, eave to eave (1 mm: no inset, it is thinner than two gaps).
    foil_part = _extrude_y(xz_face(g.sikmina_foil_pts(), LABEL_SLOPE_FOIL), y_ceil0, y_ceil1, LABEL_SLOPE_FOIL)
    foil_tools = list(cd_parts) + [part for part in parts if part.label == LABEL_SLOPE_GKF]
    if zaves_parts:
        foil_tools = zaves_parts + foil_tools
    if foil_tools:
        foil_part = _cut_away(foil_part, foil_tools, LABEL_SLOPE_FOIL)
    parts.append(foil_part)

    # Left eave: bent UD screwed to the plate (the GKF is fixed to it) and the
    # brake's bond tape on both wall plasters; acrylic bead at the planned cut.
    eave_ud = None
    for quad in g.eave_ud_left_quads():
        piece = _extrude_y(xz_face(quad, LABEL_EAVE_UD), y_ceil0, y_ceil1, LABEL_EAVE_UD)
        eave_ud = piece if eave_ud is None else eave_ud.fuse(piece)
    if eave_ud is not None:
        gkf_for_ud = [part for part in parts if part.label == LABEL_SLOPE_GKF]
        if gkf_for_ud:
            eave_ud = _cut_away(eave_ud, gkf_for_ud, LABEL_EAVE_UD)
        eave_ud = _paint(eave_ud, LABEL_EAVE_UD)
        parts.append(eave_ud)
        parts.extend(
            _screw_solids(
                g, g.eave_ud_left_screw_quads(), y_ceil0 + 10.0, y_ceil1 - 10.0, spacing=625.0
            )
        )
        parts.extend(_screw_solids(g, g.eave_gkf_screw_quads(), y_ceil0 + 10.0, y_ceil1 - 10.0))
        for i, part in enumerate(parts):
            if part.label in {LABEL_SLOPE_NH, LABEL_SLOPE_FOIL} and _aabb_hit(part, eave_ud):
                parts[i] = _cut_away(part, [eave_ud], part.label)
    for band in g.vb_tape_pts():
        tape = _extrude_y(xz_face(band, LABEL_VB_TAPE), y_ceil0, y_ceil1, LABEL_VB_TAPE)
        tape_tools = []
        if eave_ud is not None and _aabb_hit(tape, eave_ud):
            tape_tools.append(eave_ud)
        if _aabb_hit(tape, foil_part):
            tape_tools.append(foil_part)
        if tape_tools:
            tape = _cut_away(tape, tape_tools, LABEL_VB_TAPE)
        parts.append(tape)
    parts.append(
        _extrude_y(xz_face(g.eave_acrylic_pts(), LABEL_EAVE_ACRYLIC), y_ceil0, y_ceil1, LABEL_EAVE_ACRYLIC)
    )

    # 6) Zavětrovací pásky: long thin 40×2 straps at 45°, crossing into X on each slope.
    # ~6 per side (3 X pairs) along the 11 m room length — racking restraint along Y.
    paska_parts: list = []
    n_x_pairs = 3
    y_span = y_ceil1 - y_ceil0

    def _add_slope_bracing(
        s0: float,
        s1: float,
        point_at,
        n_room: tuple[float, float, float],
    ) -> None:
        """place 3 X pairs on one slope; s = distance along slope from eave."""
        slope_len = s1 - s0
        if slope_len < 200 or y_span < 200:
            return
        off = p.strap_t * 0.5 + 2.0 * gap  # clear of shrunk krov underside
        nx, ny, nz = n_room
        for i in range(n_x_pairs):
            y_c = y_ceil0 + (i + 0.5) * y_span / n_x_pairs
            half = min(y_span / (2 * n_x_pairs) * 0.9, slope_len * 0.42)
            s_c = 0.5 * (s0 + s1)
            # Diagonal A: +s with +y ; Diagonal B: +s with -y (45° in the face).
            # Stack the two legs of each X by strap thickness so they mate, not fuse.
            for k, sign in enumerate((+1.0, -1.0)):
                sa, sb = s_c - half, s_c + half
                ya, yb = y_c - sign * half, y_c + sign * half
                if ya < y_ceil0 + 50 or yb > y_ceil1 - 50:
                    continue
                if sa < s0 + 50 or sb > s1 - 50:
                    continue
                layer = off + k * (p.strap_t + gap)
                p0 = point_at(sa, ya)
                p1 = point_at(sb, yb)
                p0 = (p0[0] + nx * layer, p0[1] + ny * layer, p0[2] + nz * layer)
                p1 = (p1[0] + nx * layer, p1[1] + ny * layer, p1[2] + nz * layer)
                bar = _oriented_bar(
                    p0, p1, p.strap_w, p.strap_t, LABEL_RACKING_STRAP, thin_dir=(nx, ny, nz)
                )
                if bar is not None:
                    paska_parts.append(bar)

    # Left slope: eave→false ridge; room-normal points down-right into the room.
    def _left_raf(s: float, y: float):
        x = s * g.cos
        return (x, y, g.z_raf(x))

    s_left = g.x_false / g.cos
    _add_slope_bracing(0.0, s_left, _left_raf, (g.sin, 0.0, -g.cos))

    # Right slope: false ridge→furniture line; descending as x grows.
    def _right_raf(s: float, y: float):
        # s from false ridge toward eave/furniture along the slope.
        x = g.x_false + s * g.cos
        return (x, y, g.z_raf(x))

    s_right = (g.x_furn - g.x_false) / g.cos
    _add_slope_bracing(0.0, s_right, _right_raf, (-g.sin, 0.0, -g.cos))

    # Guarantee FACE_GAP mates: shave float nicks against krokve / hangers.
    if paska_parts:
        tools = list(krov_parts) + zaves_parts
        paska_parts = [_cut_away(bar, tools, LABEL_RACKING_STRAP) for bar in paska_parts]

    parts.extend(paska_parts)

    # Mineral wool must not swallow CD / hangers / foil / pásky.
    if cd_parts or zaves_parts or paska_parts:
        tools = cd_parts + zaves_parts + paska_parts + [foil_part]
        vata = _cut_away(vata, tools, LABEL_PLENUM_WOOL)
        for i, part in enumerate(parts):
            if part.label == LABEL_PLENUM_WOOL:
                parts[i] = vata
                break

    # The eave CD is centred within 100 mm of the wall. Its attic corner
    # crosses the plaster; cut that tail off at the UD and the wall.
    if eave_ud is not None:
        wall_clip = _box(
            -400.0,
            y_ceil0 - 5.0,
            2000.0,
            400.0 + g.x_gkf_end_l,
            (y_ceil1 - y_ceil0) + 10.0,
            5000.0,
            LABEL_EAVE_UD,
        )
        for i, cd in enumerate(cd_parts):
            tools = []
            if _aabb_hit(cd, eave_ud):
                tools.append(eave_ud)
            if cd.bounding_box().min.X < g.x_gkf_end_l - 0.5:
                tools.append(wall_clip)
            if not tools:
                continue
            trimmed = _cut_away(cd, tools, LABEL_SLOPE_CD)
            cd_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is cd:
                    parts[j] = trimmed
                    break

    # --- Soffit bay: ducts under a lid that lands on the pozednice. ---
    # Box: krokve → Nonius → front CD → drop through the lid → vertical CD
    # → bottom CD into the wall UD. The wall angle is a brace only.
    # Lid edge: continuous steel cleat on the plate cheek. Not a hang point.
    # Ducts are already anchored to the wall. This box only keeps them clear.
    t = g.t_soffit_face
    x_duct0, x_duct1 = g.soffit_duct_x_extent()
    lat_end = g.x_nh_inner + p.cd_t
    if x_duct0 < lat_end + 8.0:
        raise ValueError(
            f"soffit ducts collide with the front CD ({x_duct0:.1f} < {lat_end + 8:.1f})"
        )
    if x_duct1 > p.room_width - 4.0:
        raise ValueError(f"soffit ducts run through the plaster ({x_duct1:.1f})")
    if g.z_soffit_duct_bot() < g.column_top_z + 10.0:
        raise ValueError(
            f"soffit ducts hit the column heads ({g.z_soffit_duct_bot():.1f} < {g.column_top_z + 10:.1f})"
        )
    if g.z_soffit_duct_crown() > g.z_soffit_lid - 5.0:
        raise ValueError("soffit ducts do not fit under the lid on the pozednice")

    # Flat top under the lid (the slope GKF bears on the lid). 1 mm off each mate.
    z_nh_out = z_nh_in = g.z_soffit_lid - gap
    soffit_nh = [
        (g.x_nh_outer + gap, g.z_nabeh_bot + gap),
        (g.x_nh_inner - gap, g.z_nabeh_bot + gap),
        (g.x_nh_inner - gap, z_nh_in),
        (g.x_nh_outer + gap, z_nh_out),
    ]
    parts.append(_extrude_y(xz_face(soffit_nh, LABEL_SOFFIT_NH), y_soff0, y_soff1, LABEL_SOFFIT_NH))
    # GKB underside over the cabinets, butting the NH side face.
    tb = g.t_soffit_bottom
    soffit_gkb = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + tb - gap),
        (g.x_nh_inner + gap, g.z_nabeh_bot + tb - gap),
    ]
    parts.append(_extrude_y(xz_face(soffit_gkb, LABEL_SOFFIT_GKB), y_soff0, y_soff1, LABEL_SOFFIT_GKB))

    # Mineral wool in the acoustic cavity, stopped short of the pipes.
    z_rail_top = g.z_soffit_rail()
    wool_box = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + tb + gap),
        (p.room_width - gap, g.z_nabeh_bot + tb + gap),
        (p.room_width - gap, z_rail_top - gap),
        (g.x_nh_inner + gap, z_rail_top - gap),
    ]
    wool_solid = _extrude_y(xz_face(wool_box, LABEL_SOFFIT_WOOL), y_soff0, y_soff1, LABEL_SOFFIT_WOOL)

    # Lid from the plane intersection onto the plate. No vertical riser.
    # The joint angle on the rost CD holds the board edge.
    # Lid pack: one GKF under the plate top, the next layers stacked above it.
    lid_solids: list = []
    xb = g.x_gkf_kink
    if p.sdk_t > 2 * gap:
        for k in range(p.soffit_lid_layers):
            z_a = g.z_soffit_lid + k * p.sdk_t
            lid = [
                (xb + gap, z_a + gap),
                (g.poz_r0 - gap, z_a + gap),
                (g.poz_r0 - gap, z_a + p.sdk_t - gap),
                (xb + gap, z_a + p.sdk_t - gap),
            ]
            lid_solids.append(_extrude_y(xz_face(lid, LABEL_SOFFIT_GKF), y_soff0, y_soff1, LABEL_SOFFIT_GKF))

    # Horizontal CD on the lid. No UD on the plaster — the board ends on the plate.
    horiz_cd_parts: list = []
    for xc in g.horiz_cd_x_stations():
        horiz_cd_parts.append(
            _extrude_y(xz_face(g.horiz_cd_quad(xc), LABEL_SOFFIT_CD), y_soff0, y_soff1, LABEL_SOFFIT_CD)
        )
    parts.extend(horiz_cd_parts)

    # Nonius: each lid CD → krokev. The joint angle screws to the rost CD.
    horiz_zaves: list = []
    half_hang = p.hanger_w * 0.5
    z_cd_top = g.horiz_hanger_bot_z()
    for xc in g.horiz_cd_x_stations():
        z_top = g.horiz_hanger_top_z(xc) - 2.0 * gap
        hang_h = z_top - z_cd_top
        if hang_h < 20.0:
            continue
        for yc in ceil_rafter_ys:
            horiz_zaves.append(
                _box(
                    xc - half_hang,
                    yc - half_hang,
                    z_cd_top,
                    p.hanger_w,
                    p.hanger_w,
                    hang_h,
                    LABEL_SOFFIT_NONIUS,
                )
            )
    if horiz_zaves and krov_parts:
        horiz_zaves = [_cut_away(z, krov_parts, LABEL_SOFFIT_NONIUS) for z in horiz_zaves]
    parts.extend(horiz_zaves)
    # The last cabinet-slope CD is within one module of the joint, so its
    # Nonius reaches the same rafter as the soffit hanger. Notch the slope
    # hanger; the soffit rod stays the continuous piece.
    if horiz_zaves:
        for i, z in enumerate(zaves_parts):
            if getattr(z, "label", None) != LABEL_SLOPE_NONIUS:
                continue
            hits = [h for h in horiz_zaves if _aabb_hit(z, h)]
            if not hits:
                continue
            trimmed = _cut_away(z, hits, LABEL_SLOPE_NONIUS)
            zaves_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is z:
                    parts[j] = trimmed
                    break

    # Slope GKF / lid joint is intentionally unresolved. No angle, no UD.
    ud_parts: list = []

    # CD/UD rost: vertical CD behind the NH, bottom CD into a wall UD.
    # The lid CD is the only hang. The ducts are not. No timber packers —
    # nothing heavy is fixed to this frame.
    fd = p.cd_t
    half_w = p.cd_w * 0.5
    bt = p.wall_bracket_t
    z_wood0 = g.z_nabeh_bot + tb + gap + bt
    # Land on the lid. The rost CD is on the attic side of that board; a short
    # drop through the GKF is the screw, not a riser.
    z_lat_top = g.z_soffit_lid - gap
    face_h = z_lat_top - z_wood0
    x_front = g.x_nh_inner + gap
    x_wall = p.room_width - p.wall_plaster - gap
    x_ud1 = x_wall - bt - gap
    x_ud0 = x_ud1 - p.ud_w
    frame_parts: list = []
    drop_parts: list = []
    bracket_parts: list = []
    soffit_ys = g.soffit_rost_y_stations(
        y_soff0, y_soff1, g.sikmina_rost_y_stations(y_ceil0, y_ceil1)
    )
    if face_h > fd + gap and x_ud0 - (x_front + fd) > gap and z_rail_top - z_wood0 > fd:
        # UD channel along the eave wall. The bottom CDs socket into it.
        frame_parts.append(
            _box(
                x_ud0,
                y_soff0,
                z_wood0,
                p.ud_w - gap,
                y_soff1 - y_soff0,
                fd - gap,
                LABEL_SOFFIT_UD,
            )
        )
        cd_xs = g.horiz_cd_x_stations()
        for yc in soffit_ys:
            ya, yb = yc - half_w, yc + half_w
            if yb <= ya:
                continue
            # Vertical CD against the NH, beside the duct pack (not through it).
            frame_parts.append(
                _box(x_front, ya, z_wood0, fd - gap, yb - ya, face_h, LABEL_SOFFIT_CD)
            )
            # Bottom CD spanning toward the wall UD.
            frame_parts.append(
                _box(
                    x_front + fd,
                    ya,
                    z_wood0,
                    max(x_ud0 - (x_front + fd), gap),
                    yb - ya,
                    fd - gap,
                    LABEL_SOFFIT_CD,
                )
            )
            # Drop on the vertical CD, still under the lid CD (60 mm covers it).
            z_drop1 = g.z_soffit_cd_bot
            drop_h = z_drop1 - z_lat_top
            rost_x = g.x_soffit_cd
            if drop_h > gap and any(abs(x - rost_x) < 1.0 for x in cd_xs):
                # Lid CD sits right over the vertical CD.
                xc = x_front + fd * 0.5
                drop_parts.append(
                    _box(
                        xc - p.soffit_drop_w * 0.5,
                        yc - p.soffit_drop_t * 0.5,
                        z_lat_top,
                        p.soffit_drop_w,
                        p.soffit_drop_t,
                        drop_h,
                        LABEL_SOFFIT_NONIUS,
                    )
                )
            # Wall angle: horizontal under the CD + vertical up the plaster.
            leg = p.wall_bracket_leg
            z_ang = z_wood0 - bt
            bracket_parts.append(
                _box(x_wall - leg, ya, z_ang, leg - bt, yb - ya, bt, LABEL_SOFFIT_NONIUS)
            )
            bracket_parts.append(
                _box(x_wall - bt, ya, z_ang + bt, bt, yb - ya, leg - bt, LABEL_SOFFIT_NONIUS)
            )

    # Ø160 spiral ducts along the soffit, 2-over-1. Already anchored to the wall.
    duct_parts: list = []
    r_duct = p.duct_od * 0.5
    for cx, cz in g.soffit_duct_centers():
        duct_parts.append(_cyl_y(cx, y_soff0, y_soff1, cz, r_duct, LABEL_SOFFIT_DUCT))

    # Continuous angle on the plate cheek, holding the board edge. Not the hang.
    cleat_parts: list = []
    setback = g.poz_r0 - p.room_width
    cleat_leg = min(p.wall_bracket_leg, max(setback - 15.0, bt + 10.0))
    cleat_parts.append(
        _box(
            g.poz_r0 - cleat_leg,
            y_soff0,
            g.z_soffit_lid - bt - gap,
            cleat_leg - gap,
            y_soff1 - y_soff0,
            bt,
            LABEL_SOFFIT_NONIUS,
        )
    )
    cleat_parts.append(
        _box(
            g.poz_r0 - bt - gap,
            y_soff0,
            g.z_soffit_lid - cleat_leg,
            bt,
            y_soff1 - y_soff0,
            cleat_leg - bt - gap,
            LABEL_SOFFIT_NONIUS,
        )
    )

    service_steel = drop_parts + bracket_parts + cleat_parts
    if frame_parts:
        if service_steel:
            frame_parts = [_cut_away(f, service_steel, f.label) for f in frame_parts]
        wool_solid = _cut_away(wool_solid, frame_parts + service_steel, LABEL_SOFFIT_WOOL)
        parts.append(wool_solid)
        parts.extend(frame_parts)
    else:
        parts.append(wool_solid)
    if wedge_solid is not None:
        if ud_parts:
            wedge_solid = _cut_away(wedge_solid, ud_parts, LABEL_SOFFIT_WOOL)
        parts.append(wedge_solid)
    if drop_parts or horiz_zaves:
        for i, part in enumerate(parts):
            if part.label != LABEL_SOFFIT_UD or part.bounding_box().size.Y < 1000.0:
                continue
            hits = [d for d in drop_parts + horiz_zaves if _aabb_hit(part, d)]
            if hits:
                parts[i] = _cut_away(part, hits, LABEL_SOFFIT_UD)
    parts.extend(drop_parts)
    parts.extend(bracket_parts)
    parts.extend(cleat_parts)
    parts.extend(duct_parts)

    # The slope NaturHeld keeps its thickness up to the vertical soffit face,
    # so its top corner crosses the lid. The lid wins; the wool triangle is
    # what's left above the board.
    if lid_solids:
        for i, part in enumerate(parts):
            if part.label != LABEL_SLOPE_NH:
                continue
            hits = [lid for lid in lid_solids if _aabb_hit(part, lid)]
            if hits:
                parts[i] = _cut_away(part, hits, LABEL_SLOPE_NH)

    # The slope grid stops short of the lid. If a profile still meets the
    # board, the lid wins. The joint itself is not framed.
    if lid_solids:
        for i, cd in enumerate(cd_parts):
            hits = [lid for lid in lid_solids if _aabb_hit(cd, lid)]
            if not hits:
                continue
            trimmed = _cut_away(cd, hits, LABEL_SLOPE_CD)
            cd_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is cd:
                    parts[j] = trimmed
                    break
    if bracket_parts and cd_parts:
        for i, bracket in enumerate(bracket_parts):
            hits = [cd for cd in cd_parts if _aabb_hit(bracket, cd)]
            if not hits:
                continue
            trimmed = _cut_away(bracket, hits, LABEL_SOFFIT_UD)
            bracket_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is bracket:
                    parts[j] = trimmed
                    break

    # GKF last so the rost drop can pierce the lid.
    pierce = drop_parts
    for lid_solid in lid_solids:
        if pierce:
            lid_solid = _cut_away(lid_solid, pierce, LABEL_SOFFIT_GKF)
        parts.append(lid_solid)

    # --- Cabinets: clear of right plaster; top leaves furniture_gap under the box. ---
    furn_w = p.furniture_width - gap
    furn_y0, furn_y1 = g.y_furn0 + gap, g.y_furn1 - gap
    furniture = _box(g.x_furn, furn_y0, 0.0, furn_w, furn_y1 - furn_y0, p.furniture_height, LABEL_FURNITURE)
    # 300×300 columns protrude into the cabinet / soffit bay — notch those runs.
    if furn_col_parts:
        furniture = _cut_away(furniture, furn_col_parts, LABEL_FURNITURE)
        soffit_cut_labels = {
            LABEL_SOFFIT_NH,
            LABEL_SOFFIT_WOOL,
            LABEL_SOFFIT_UD,
            LABEL_SOFFIT_GKF,
            LABEL_SOFFIT_GKB,
            LABEL_SOFFIT_CD,
            LABEL_SOFFIT_NONIUS,
            LABEL_SOFFIT_DUCT,
        }
        parts = [
            _cut_away(part, furn_col_parts, part.label) if part.label in soffit_cut_labels else part
            for part in parts
        ]
    parts.append(furniture)

    # --- Bass traps (detail C/D): interior cabinets under continuous šikminy. ---
    # Gable-only hang; top soft-joints to NH face — pack itself is not interrupted.
    parts.extend(_bass_trap_parts(p, g, gap))

    parts.extend(_gable_sdk_and_pouzdra(p, g, gap))

    # Where a bass trap stands against the left wall, the brake's tape and the
    # acrylic bead stop at the trap (sealed to its board instead).
    bass = [
        x
        for x in parts
        if x.label in {LABEL_BASS_CW, LABEL_BASS_UW, LABEL_BASS_STRUT, LABEL_BASS_GKB, LABEL_BASS_WOOL}
    ]
    eave_seal = {LABEL_VB_TAPE, LABEL_EAVE_ACRYLIC}
    parts = [
        _cut_away(x, [b for b in bass if _aabb_hit(x, b)], x.label) if x.label in eave_seal else x
        for x in parts
    ]
    _add_ties_and_lights(parts, p, g, gap)
    return parts


def _cut_strict(solid: Solid, tools: list, label: str) -> Solid:
    """Like ``_cut_away``, but a failed boolean is a broken tie, not a skip."""
    out = solid
    for tool in tools:
        try:
            nxt = out.cut(tool)
        except Exception as exc:
            raise RuntimeError(f"tie clearance failed on {label}") from exc
        if nxt is None or nxt.volume <= 0:
            raise RuntimeError(f"tie clearance removed {label}")
        out = nxt
    return _paint(out, label)


def _add_ties_and_lights(parts: list, p: ObyvakParams, g: ObyvakLayout, gap: float) -> None:
    """Ø14 ties between the wall plates, and the spot pairs on the slopes.

    The bars are bored through whatever they cross (plates, walls, ceiling
    pack) with 1 mm radial clearance. They are not bored through the ducts.
    Spot heads stand just proud of the room face; they do not cut the board.
    """
    z = g.tie_axis_z(gap)
    ys = g.tie_y_stations(gap, p.room_length - gap)
    if len(ys) != 6:
        raise ValueError(f"expected 6 tie rods, the rafter grid gives {len(ys)}")
    x0, x1 = g.tie_x_ends(gap)
    radius = p.tie_d * 0.5
    rods = [_cyl_x(x0, x1, y, z, radius, LABEL_TIE_ROD) for y in ys]
    # Open the hole on the outer cheek, 1 mm past the bar end.
    cutters = [
        _cyl_x(
            g.poz_l0 - gap,
            g.poz_r0 + p.plate_w + gap,
            y,
            z,
            radius + gap,
            LABEL_TIE_ROD,
        )
        for y in ys
    ]
    try:
        cutter = cutters[0]
        for extra in cutters[1:]:
            cutter = cutter.fuse(extra)
        tools = [cutter]
    except Exception:
        tools = cutters

    for rod in rods:
        for part in parts:
            if part.label == LABEL_SOFFIT_DUCT and _aabb_hit(rod, part):
                raise ValueError("tie rod intersects a soffit duct")

    for i, part in enumerate(parts):
        if part.label in {LABEL_SOFFIT_DUCT, LABEL_TIE_ROD, LABEL_SLOPE_LIGHT}:
            continue
        if not any(_aabb_hit(part, tool) for tool in tools):
            continue
        parts[i] = _cut_strict(part, tools, part.label)

    parts.extend(rods)

    head_r = TIE_LIGHT_D * 0.5
    for x, y, zc, nx, nz, _side in g.light_contacts(gap, p.room_length - gap, gap):
        nlen = math.hypot(nx, nz) or 1.0
        nx, nz = nx / nlen, nz / nlen
        tx, tz = -nz, nx
        lift = gap + TIE_LIGHT_H * 0.5
        origin = (x + nx * lift, y, zc + nz * lift)
        solid = Plane(origin=origin, x_dir=(tx, 0.0, tz), z_dir=(nx, 0.0, nz)) * Cylinder(
            head_r, TIE_LIGHT_H, align=(Align.CENTER, Align.CENTER, Align.CENTER)
        )
        parts.append(_paint(solid, LABEL_SLOPE_LIGHT))


def _compound(parts: list, label: str = MODEL_NAME) -> Compound:
    return Compound(obj=parts, children=parts, label=label)


def _meta(p: ObyvakParams, g: ObyvakLayout) -> dict:
    return {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "z_soffit": g.z_soffit,
            "z_false": g.z_false,
            "predstena_kitchen": p.predstena_kitchen,
            "predstena_living": p.predstena_living,
            "y_furn0": g.y_furn0,
            "y_furn1": g.y_furn1,
            "room_width": p.room_width,
            "room_length": p.room_length,
            "face_gap": FACE_GAP,
        },
    }


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    return _compound(_parts(p, g)), _meta(p, g)


def _labeled_slices(parts: list, plane: Plane):
    faces = []
    for part in parts:
        hits = part.intersect(plane)
        if not hits:
            continue
        for face in hits:
            face.label = part.label
            faces.append(face)
    return faces


def build_section_slice(params: ObyvakParams | None = None):
    """XZ slice through a krokev near mid-length (panel A station from 3D solids)."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    # Discrete krokve miss a pure mid-Y cut; snap to the nearest rafter centreline.
    y_target = p.room_length / 2.0
    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_mid = min(stations, key=lambda y: abs(y - y_target)) if stations else y_target
    faces = _labeled_slices(_parts(p, g), Plane.XZ.offset(-y_mid))
    moved = []
    for face in faces:
        placed = face.moved(Location((0.0, -y_mid, 0.0)))
        placed.label = face.label
        moved.append(placed)
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(moved, label=f"{MODEL_NAME}_slice_section"), meta


def _elevation_outline(placed) -> list[tuple[float, float]]:
    """XZ outline of a ridge section face.

    Faceted parts (walls, rafters) keep their corner vertices. A tie is a
    circle in this cut, and a circle's vertices are only the seam, so the
    edge is sampled when the corners do not already close a polygon.
    """
    unique: list[tuple[float, float]] = []
    seen: set[tuple[float, float]] = set()
    for v in placed.vertices():
        key = (round(v.X, 3), round(v.Z, 3))
        if key in seen:
            continue
        seen.add(key)
        unique.append((v.X, v.Z))
    if len(unique) >= 3:
        return unique
    wires = list(placed.wires())
    if not wires:
        return unique
    wire = max(wires, key=lambda w: w.length)
    pts: list[tuple[float, float]] = []
    for edge in wire.edges():
        samples = edge.positions(deflection=0.5)
        for v in samples[:-1]:
            pts.append((v.X, v.Z))
    return pts


def build_elevation_slice(params: ObyvakParams | None = None):
    """YZ slice at the ridge, remapped to XZ (drawing X = world Y) like panel B."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    faces = _labeled_slices(_parts(p, g), Plane.YZ.offset(g.x_ridge))
    mapped = []
    for face in faces:
        placed = face.moved(Location((-g.x_ridge, 0.0, 0.0))).rotate(Axis.Z, -90)
        # Snap onto XZ so SVG export stays planar.
        pts = _elevation_outline(placed)
        if len(pts) < 3:
            continue
        mapped.append(xz_face(pts, face.label))
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(mapped, label=f"{MODEL_NAME}_slice_elevation"), meta


_PARTS_CACHE: dict = {}


def model_parts(params: ObyvakParams | None = None) -> list:
    """The 3D solids (same list as the GLB), cached per parameter set."""
    p = params or ObyvakParams()
    key = tuple(sorted(asdict(p).items()))
    if key not in _PARTS_CACHE:
        _PARTS_CACHE.clear()
        _PARTS_CACHE[key] = _parts(p, ObyvakLayout(p))
    return _PARTS_CACHE[key]


def section_y(params: ObyvakParams | None = None) -> float:
    """Drawing cut plane: mid-bay between two rafters near the middle of the soffit."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_target = 0.5 * (g.y_furn0 + g.y_furn1)
    ys = sorted(stations)
    mids = [0.5 * (a + b) for a, b in zip(ys, ys[1:])] or [y_target]
    return min(mids, key=lambda y: abs(y - y_target))


def _xz_at(face, y: float, label: str):
    placed = face.moved(Location((0.0, -y, 0.0)))
    placed.label = label
    return placed


def model_section(params: ObyvakParams | None = None, y_cut: float | None = None,
                  beyond: float | None = None, label: str = "obyvak_section"):
    """Transverse drawing made only from the 3D solids.

    Every solid crossing the plane y = y_cut is cut there. Solids lying wholly
    behind it (within `beyond` mm, default one rafter bay) are drawn as seen:
    each is cut at its own mid-Y and placed under the cut faces (rafters,
    hangers, straps, screws). Nothing here is drawn from 2D geometry.
    """
    p = params or ObyvakParams()
    y = section_y(p) if y_cut is None else y_cut
    depth = p.rafter_spacing if beyond is None else beyond
    cut, seen = [], []
    for part in model_parts(p):
        bb = part.bounding_box()
        if bb.min.Y <= y <= bb.max.Y:
            yy, bucket = y, cut
        elif part.label == LABEL_TIE_ROD:
            # The six bars share one axis. The section shows that circle,
            # whether this plane cuts the bar or the bar sits in the depth.
            yy, bucket = 0.5 * (bb.min.Y + bb.max.Y), seen
        elif y < bb.min.Y and bb.max.Y <= y + depth:
            yy, bucket = 0.5 * (bb.min.Y + bb.max.Y), seen
        else:
            continue
        hits = part.intersect(Plane.XZ.offset(-yy))
        if not hits:
            continue
        for face in hits.faces() if hasattr(hits, "faces") else hits:
            if face.area < 1e-3:
                continue
            bucket.append(_xz_at(face, yy, part.label))
    faces = seen + cut
    return Compound(obj=faces, children=faces, label=label)


def model_elevation(params: ObyvakParams | None = None, x_cut: float | None = None,
                    label: str = "obyvak_elevation"):
    """Longitudinal drawing (gable to gable) cut from the 3D solids at x = x_cut.

    Drawing X is world Y. Default cut is the ridge line.
    """
    p = params or ObyvakParams()
    x = ObyvakLayout(p).x_ridge if x_cut is None else x_cut
    faces = []
    for part in model_parts(p):
        bb = part.bounding_box()
        if not (bb.min.X <= x <= bb.max.X):
            continue
        hits = part.intersect(Plane.YZ.offset(x))
        if not hits:
            continue
        for face in hits.faces() if hasattr(hits, "faces") else hits:
            if face.area < 1e-3:
                continue
            placed = face.moved(Location((-x, 0.0, 0.0))).rotate(Axis.Z, -90)
            placed.label = part.label
            faces.append(placed)
    return Compound(obj=faces, children=faces, label=label)


def _tx(en: str, cs: str) -> dict[str, str]:
    return {"en": en, "cs": cs}


def _callout(
    anchor: tuple[float, float, float],
    en: str,
    cs: str,
    offset: tuple[float, float],
    tips: list[tuple[float, float, float]] | None = None,
    size: float | None = None,
) -> dict:
    item: dict = {
        "kind": "callout",
        "anchor": [round(v, 1) for v in anchor],
        "text": _tx(en, cs),
        "offset": [round(offset[0], 3), round(offset[1], 3)],
    }
    if tips:
        item["tips"] = [[round(v, 1) for v in tip] for tip in tips]
    if size:
        item["size"] = size
    return item


def _dim(
    a: tuple[float, float, float],
    b: tuple[float, float, float],
    offset: float,
    en: str | None = None,
    cs: str | None = None,
) -> dict:
    item: dict = {
        "kind": "dim",
        "a": [round(v, 1) for v in a],
        "b": [round(v, 1) for v in b],
        "offset": round(offset, 3),
    }
    if en and cs:
        item["text"] = _tx(en, cs)
    return item


def _ndc_offset(
    anchor_ndc: tuple[float, float],
    label_ndc: tuple[float, float],
) -> tuple[float, float]:
    """Callout ``offset`` is half the NDC delta (viewer does ``ndc + offset * 2``)."""
    return (
        0.5 * (label_ndc[0] - anchor_ndc[0]),
        0.5 * (label_ndc[1] - anchor_ndc[1]),
    )


def _section_ndc(
    anchor_cad: tuple[float, float, float],
    target: list[float],
    half_w: float,
    half_h: float,
) -> tuple[float, float]:
    """Section looks along −Z; screen X/Y follow glTF X/Y."""
    from blueprints.scenes import cad_mm_to_gltf_m

    gx, gy, _ = cad_mm_to_gltf_m(anchor_cad)
    return ((gx - target[0]) / half_w, (gy - target[1]) / half_h)


def _lattice_ndc(
    anchor_cad: tuple[float, float, float],
    target: list[float],
    look: tuple[float, float, float],
    up: tuple[float, float, float],
    half_w: float,
    half_h: float,
) -> tuple[float, float]:
    """Head-on lattice: screen right = look × up, screen up = ``up``."""
    from blueprints.scenes import cad_mm_to_gltf_m

    gx, gy, gz = cad_mm_to_gltf_m(anchor_cad)
    dx, dy, dz = gx - target[0], gy - target[1], gz - target[2]
    # look × up = (0, 0, -1) for the šikmina lattice pose → screen +X = −glTF Z.
    rx = look[1] * up[2] - look[2] * up[1]
    ry = look[2] * up[0] - look[0] * up[2]
    rz = look[0] * up[1] - look[1] * up[0]
    sx = dx * rx + dy * ry + dz * rz
    sy = dx * up[0] + dy * up[1] + dz * up[2]
    return (sx / half_w, sy / half_h)


def _column_label_ndcs(
    n: int,
    *,
    col_x: float,
    y_top: float,
    y_bot: float,
    weights: list[float] | None = None,
) -> list[tuple[float, float]]:
    """NDC points for a vertical label column (top → bottom).

    Even spacing by default. With ``weights`` (e.g. line counts), centres are
    placed so taller notes get a larger share of the column — neighbours do
    not sit on each other's glyphs.
    """
    if n <= 0:
        return []
    if n == 1:
        return [(col_x, 0.5 * (y_top + y_bot))]
    if not weights or len(weights) != n:
        return [
            (col_x, y_top + (y_bot - y_top) * i / (n - 1))
            for i in range(n)
        ]
    # Pad half a slot above the first and below the last so multi-line notes
    # stay inside the column band.
    w = [max(float(v), 1.0) for v in weights]
    total = sum(w)
    span = y_top - y_bot
    out: list[tuple[float, float]] = []
    cursor = y_top
    for wi in w:
        slot = span * (wi / total)
        out.append((col_x, cursor - 0.5 * slot))
        cursor -= slot
    return out


def _rafter_window(p: ObyvakParams, g: ObyvakLayout) -> tuple[float, float, float, float]:
    """Y slab through one krokev, clear of the column stations.

    Returns (y_near, y_far, rafter_a, rafter_b) in CAD mm.
    The near plane sits in the gap; the far plane stops just past the next krokev.
    """
    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    columns = g.eave_column_y_centres()

    def clear(y: float) -> bool:
        return all(abs(y - c) > 500.0 for c in columns)

    chosen: tuple[float, float] | None = None
    for a, b in zip(stations, stations[1:]):
        if clear(a) and clear(b) and clear(0.5 * (a + b)) and 4000.0 < a < 7000.0:
            chosen = (a, b)
            break
    if chosen is None:
        for a, b in zip(stations, stations[1:]):
            if clear(a) and clear(b):
                chosen = (a, b)
                break
    if chosen is None:
        chosen = (stations[0], stations[1]) if len(stations) > 1 else (2000.0, 2875.0)
    a, b = chosen
    half = p.rafter_w * 0.5
    return (a + half + 40.0, b + half + 80.0, a, b)


def _ortho_pose(
    target_cad: tuple[float, float, float],
    look_gltf: tuple[float, float, float],
    up_gltf: tuple[float, float, float],
    half_w: float,
    half_h: float,
) -> dict:
    from blueprints.scenes import cad_mm_to_gltf_m

    target = cad_mm_to_gltf_m(target_cad)
    dist = max(half_w, half_h, 0.35) * 5.0
    position = [
        target[0] - look_gltf[0] * dist,
        target[1] - look_gltf[1] * dist,
        target[2] - look_gltf[2] * dist,
    ]
    return {
        "target": target,
        "position": position,
        "up": list(up_gltf),
        "orthoFit": [half_w, half_h],
    }


def _cut(normal: tuple[float, float, float], anchor: tuple[float, float, float]) -> dict:
    return {
        "normal": [float(v) for v in normal],
        "anchor": [round(v, 1) for v in anchor],
    }


def _sikmina_plates(p: ObyvakParams, g: ObyvakLayout) -> list[dict]:
    """Two contractor plates of the šikmina.

    Lattice is head-on to the window slope (true shape of the CD grid and hangers).
    Section looks along the room through one rafter bay and keeps both slopes
    plus the soffit. Masonry stays so the věnec under the pozednice is in the picture.

    Callouts sit in one left-hand column, ordered outside → in, so the drawing
    reads the stack without hunting around the plate.
    """
    y_near, y_far, raf_a, raf_b = _rafter_window(p, g)
    # Lattice window: a few bays around that same rafter pair, still off the columns.
    y0 = raf_a - p.rafter_spacing * 0.35
    y1 = raf_b + p.rafter_spacing * 0.55
    y_mid = 0.5 * (y0 + y1)

    # Left-slope face depths (room face → rafter). The callouts sit on that slope.
    t_nh = g.t_nh_left
    t_gkf = t_nh + g.t_flex_pack + p.sdk_t * 0.5
    t_cd = t_nh + g.t_flex_pack + p.sdk_t + p.cd_t * 0.5
    t_cd_outer = g.t_cd_outer_left
    t_foil = g.t_cd_outer_left + p.foil_t * 0.5
    # Hanger tip sits in the wool above the foil — keep it clear of the foil tip.
    t_hanger = t_cd_outer + max(0.55 * g.wool_left, 30.0)
    t_wool = g.t_left + p.rafter_t * 0.5

    def on_face(x: float, y: float, t_perp: float) -> tuple[float, float, float]:
        return (x, y, g.z_slope_offset(x, t_perp))

    # CD stations are spaced along the slope. Pick two on the steep run.
    cd = [st for st in g.sikmina_cd_stations() if st[0] < g.x_false - 80.0]
    cd_a = cd[1] if len(cd) > 2 else cd[0]
    cd_b = cd[2] if len(cd) > 2 else cd[min(1, len(cd) - 1)]

    nh_l = f"{p.naturheld_left:g}"
    nh_r = f"{p.naturheld_right:g}"
    sdk_mm = f"{p.sdk_t:g}".replace(".", ",")
    finish_mm = f"{p.finish_t:g}"
    basic_mm = f"{p.basic_t:g}"
    cd_w = f"{p.cd_w:g}"
    cd_t = f"{p.cd_t:g}"
    cd_sp = f"{p.cd_spacing:g}"
    strap_w = f"{p.strap_w:g}"
    strap_t = f"{p.strap_t:g}"
    wool_l = f"{g.wool_left:.0f}"
    wool_r = f"{g.wool_right:.0f}"
    raf_w = f"{p.rafter_w:g}"
    raf_t = f"{p.rafter_t:g}"

    # Head-on: look along the attic normal, up along the slope.
    # glTF (x, z, −y). Screen right then runs along the room (CAD +Y).
    look_lat = (-g.sin, g.cos, 0.0)
    up_lat = (g.cos, g.sin, 0.0)
    slope_len = g.x_false / g.cos
    # Extra width on the left for the label column (keep centres inside the plate).
    pad_w = 1.88
    pad_h = 1.55
    lat_half_w = 0.5 * (y1 - y0) * 0.001 * pad_w
    lat_half_h = 0.5 * slope_len * 0.001 * pad_h
    lat_target = on_face(0.28 * g.x_false, y_mid, t_cd)
    lat_cam = _ortho_pose(lat_target, look_lat, up_lat, lat_half_w, lat_half_h)

    # Lattice column: outside (rafter / strap) → in (CD toward the room).
    # Anchors share one bay centreline and step down the slope so label Y
    # can match anchor Y (horizontal leaders, no crossings).
    y_lat = y_mid
    x_out = min(0.62 * g.x_false, g.x_false - 120.0)
    x_mid = 0.45 * g.x_false
    x_in = max(cd_a[0], 0.28 * g.x_false)
    lat_notes = [
        (
            (x_out, y_lat, g.z_raf(x_out)),
            f"Páska {strap_w}×{strap_t} mm\n45° přes krokve",
            f"Páska {strap_w}×{strap_t} mm\n45° přes krokve",
        ),
        (
            on_face(x_mid, y_lat, t_hanger),
            "Přímý závěs 200 mm\nDK Mont 3631100170\nCD → bok krokve",
            "Přímý závěs 200 mm\nDK Mont 3631100170\nCD → bok krokve",
        ),
        (
            on_face(x_in, y_lat, t_cd),
            f"CD {cd_w}×{cd_t} mm @ {cd_sp}\n⊥ krokvím",
            f"CD {cd_w}×{cd_t} mm @ {cd_sp}\n⊥ krokvím",
        ),
    ]
    lat_annotations = []
    for anchor, en, cs in lat_notes:
        anchor_ndc = _lattice_ndc(
            anchor, lat_cam["target"], look_lat, up_lat, lat_half_w, lat_half_h
        )
        # Same screen Y as the tip → horizontal leader into the left column.
        label_ndc = (-0.55, anchor_ndc[1])
        lat_annotations.append(
            _callout(anchor, en, cs, _ndc_offset(anchor_ndc, label_ndc))
        )
    lat_annotations.extend(
        [
            _dim(
                on_face(cd_a[0], y_mid - 280.0, t_cd),
                on_face(cd_b[0], y_mid - 280.0, t_cd),
                -0.045,
            ),
            _dim(
                (0.32 * g.x_false, raf_a, g.z_raf(0.32 * g.x_false)),
                (0.32 * g.x_false, raf_b, g.z_raf(0.32 * g.x_false)),
                -0.06,
            ),
        ]
    )

    lattice = {
        "id": "sikmina-lattice",
        "title": _tx("Šikmina — CD a závěsy", "Šikmina — CD a závěsy"),
        "project": "Obývák 1.02",
        "camera": lat_cam,
        "projection": "ortho",
        "cuts": [
            _cut((0.0, 0.0, -1.0), (g.x_ridge, y0, g.h_start)),
            _cut((0.0, 0.0, 1.0), (g.x_ridge, y1, g.h_start)),
            _cut((-1.0, 0.0, 0.0), (g.x_ridge, y_mid, g.h_start)),
        ],
        "opacity": {
            LABEL_SLOPE_CD: 1,
            LABEL_SLOPE_DIRECT: 1,
            LABEL_SLOPE_NONIUS: 1,
            LABEL_RAFTERS: 1,
            LABEL_RACKING_STRAP: 1,
            LABEL_WALL_PLATE: 1,
            # Head-on, the NaturHeld face covers the whole grid, so it stays
            # off. The foil+GKF board is ghosted so the CD stays the picture.
            LABEL_SLOPE_GKF: 0.35,
        },
        "opacityDefault": 0,
        "annotations": lat_annotations,
    }

    # Section: living gable → kitchen gable, both slopes and the soffit, one rafter bay.
    # The soffit is in the picture with no callouts (its own plate comes later).
    y_note = y_near + 30.0
    # Each cut face is its own layer, so a sliced solid stacks two of these.
    # Wool and the wood-fibre board stay the lighter tint. Foil is the 1 mm
    # in the GKF solid, so that board is ghosted a step darker and the CD
    # and hangers stay solid.
    wool = 0.18
    board = 0.35
    # Extra left margin so the outside→in column sits clear of the eave.
    # Czech lines are wider than the English ones this frame was drawn for.
    # A larger margin zooms the section out and leaves a blank column; the
    # two lines that are still wider than that column are broken below.
    label_margin = 3200.0
    frame_x0 = g.left_eave - 80.0 - label_margin
    frame_x1 = g.right_eave + 80.0
    frame_z0 = g.z_nabeh_bot - 180.0
    frame_z1 = p.ridge_z + 180.0
    sec_pad_w = 1.06
    sec_pad_h = 1.08
    sec_half_w = 0.5 * (frame_x1 - frame_x0) * 0.001 * sec_pad_w
    sec_half_h = 0.5 * (frame_z1 - frame_z0) * 0.001 * sec_pad_h
    sec_cam = _ortho_pose(
        (
            0.5 * (frame_x0 + frame_x1),
            y_near,
            0.5 * (frame_z0 + frame_z1),
        ),
        (0.0, 0.0, -1.0),
        (0.0, 1.0, 0.0),
        sec_half_w,
        sec_half_h,
    )

    # Outside (attic) → in (room). Tips walk down the window slope (ridge →
    # eave) so tip Z spreads with the stack order. Labels share one column X
    # and keep the tip's screen Y — horizontal leaders, no crossings through
    # neighbouring notes (a single stack X made every upper leader cut down
    # through the notes below).
    x_wool, x_hang, x_foil, x_cd, x_gkf, x_nh = (
        0.86 * g.x_false,
        0.68 * g.x_false,
        0.50 * g.x_false,
        0.34 * g.x_false,
        0.20 * g.x_false,
        0.08 * g.x_false,
    )
    sec_notes = [
        (
            on_face(x_wool, y_note, t_wool),
            f"Minerální vata λ 0,039\n{raf_t} mm mezi krokvemi\n"
            f"Pod krokvemi u oken {wool_l} mm\n"
            f"u skříní 160+160+120 mm",
            f"Minerální vata λ 0,039\n{raf_t} mm mezi krokvemi\n"
            f"Pod krokvemi u oken {wool_l} mm\n"
            f"u skříní 160+160+120 mm",
        ),
        (
            on_face(x_hang, y_note, t_hanger),
            "Přímý závěs 200 mm (okna)\nDK Mont 3631100170\nNonius 540 mm (skříně)",
            "Přímý závěs 200 mm (okna)\nDK Mont 3631100170\nNonius 540 mm (skříně)",
        ),
        (
            on_face(x_foil, y_note, t_foil),
            "Parozábrana\nJutafol N AL 170 Speciál",
            "Parozábrana\nJutafol N AL 170 Speciál",
        ),
        (
            on_face(x_cd, y_note, t_cd),
            f"CD {cd_w}×{cd_t} mm @ {cd_sp}\n⊥ krokvím",
            f"CD {cd_w}×{cd_t} mm @ {cd_sp}\n⊥ krokvím",
        ),
        (
            on_face(x_gkf, y_note, t_gkf),
            f"GKF {sdk_mm} mm",
            f"GKF {sdk_mm} mm",
        ),
        (
            on_face(x_nh, y_note, t_nh * 0.5),
            f"NaturHeld 140, {nh_l} mm\npřes GKF do CD\n"
            f"StoSilent Top Basic + Top Finish\n"
            f"bílá ~RAL 9016, {finish_mm}+{basic_mm} mm",
            f"NaturHeld 140, {nh_l} mm\npřes GKF do CD\n"
            f"StoSilent Top Basic + Top Finish\n"
            f"bílá ~RAL 9016, {finish_mm}+{basic_mm} mm",
        ),
    ]
    col_x = -0.64
    # Spread by line count. Sharing each tip's Y stacked the longer Czech
    # notes on top of each other. Order still follows the slope, so the
    # leaders do not cross.
    sec_ys = _column_label_ndcs(
        len(sec_notes),
        col_x=col_x,
        y_top=0.72,
        y_bot=-0.78,
        weights=[text.count("\n") + 1 for _anchor, text, _cs in sec_notes],
    )
    sec_annotations = []
    for (anchor, en, cs), label_ndc in zip(sec_notes, sec_ys):
        tip_ndc = _section_ndc(anchor, sec_cam["target"], sec_half_w, sec_half_h)
        sec_annotations.append(
            _callout(anchor, en, cs, _ndc_offset(tip_ndc, label_ndc))
        )

    section = {
        "id": "sikmina-section",
        "title": _tx(
            "Šikmina — řez\nkolmo na krokve",
            "Šikmina — řez\nkolmo na krokve",
        ),
        "project": "Obývák 1.02",
        "camera": sec_cam,
        "projection": "ortho",
        "cuts": [
            _cut((0.0, 0.0, -1.0), (0.5 * g.x_false, y_near, g.h_start)),
            _cut((0.0, 0.0, 1.0), (0.5 * g.x_false, y_far, g.h_start)),
        ],
        "opacity": {
            LABEL_RAFTERS: 1,
            LABEL_WALL_PLATE: 1,
            LABEL_SOFFIT_UD: 1,
            LABEL_SLOPE_CD: 1,
            LABEL_SOFFIT_CD: 1,
            LABEL_SLOPE_DIRECT: 1,
            LABEL_SLOPE_NONIUS: 1,
            LABEL_SOFFIT_NONIUS: 1,
            LABEL_SOFFIT_DUCT: 1,
            LABEL_RACKING_STRAP: 1,
            LABEL_TIE_ROD: 1,
            LABEL_ROOFING: 1,
            LABEL_MASONRY: 1,
            LABEL_EPS: 1,
            LABEL_PLASTER: 1,
            LABEL_PLENUM_WOOL: wool,
            LABEL_SLOPE_NH: wool,
            LABEL_SLOPE_FOIL: board,
            LABEL_SOFFIT_NH: wool,
            LABEL_SOFFIT_WOOL: wool,
            LABEL_SLOPE_GKF: board,
            LABEL_SOFFIT_GKF: board,
        },
        "opacityDefault": 0,
        "annotations": sec_annotations,
    }
    return [lattice, section]


def _unit(v: tuple[float, float, float]) -> tuple[float, float, float]:
    n = math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]) or 1.0
    return (v[0] / n, v[1] / n, v[2] / n)


def _cross(
    a: tuple[float, float, float], b: tuple[float, float, float]
) -> tuple[float, float, float]:
    return (
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    )


def _look_between(
    eye_cad: tuple[float, float, float], aim_cad: tuple[float, float, float]
) -> tuple[float, float, float]:
    """glTF look direction from a CAD eye toward a CAD aim."""
    from blueprints.scenes import cad_mm_to_gltf_m

    eye = cad_mm_to_gltf_m(eye_cad)
    aim = cad_mm_to_gltf_m(aim_cad)
    return _unit((aim[0] - eye[0], aim[1] - eye[1], aim[2] - eye[2]))


def _box_corners(
    x0: float, x1: float, y0: float, y1: float, z0: float, z1: float
) -> list[tuple[float, float, float]]:
    return [(x, y, z) for x in (x0, x1) for y in (y0, y1) for z in (z0, z1)]


def _frame_ortho(
    look: tuple[float, float, float],
    corners: list[tuple[float, float, float]],
    *,
    pad: float = 1.14,
    dist_scale: float = 2.4,
) -> dict:
    """Orthographic camera that fits ``corners``, Z up, look held fixed.

    The camera sits ``dist_scale`` frustum-halves back along ``look`` so a
    3/4 view stays near the trap instead of leaping past the other gable.
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    look_n = _unit(look)
    world_up = (0.0, 1.0, 0.0)
    right = _unit(_cross(look_n, world_up))
    screen_up = _unit(_cross(tuple(-c for c in look_n), right))
    projected: list[tuple[float, float, float]] = []
    for corner in corners:
        g = cad_mm_to_gltf_m(corner)
        projected.append(
            (
                g[0] * right[0] + g[1] * right[1] + g[2] * right[2],
                g[0] * screen_up[0] + g[1] * screen_up[1] + g[2] * screen_up[2],
                g[0] * look_n[0] + g[1] * look_n[1] + g[2] * look_n[2],
            )
        )
    minx, maxx = min(p[0] for p in projected), max(p[0] for p in projected)
    miny, maxy = min(p[1] for p in projected), max(p[1] for p in projected)
    midz = 0.5 * (min(p[2] for p in projected) + max(p[2] for p in projected))
    cx, cy = 0.5 * (minx + maxx), 0.5 * (miny + maxy)
    target = [
        cx * right[0] + cy * screen_up[0] + midz * look_n[0],
        cx * right[1] + cy * screen_up[1] + midz * look_n[1],
        cx * right[2] + cy * screen_up[2] + midz * look_n[2],
    ]
    half_w = 0.5 * (maxx - minx) * pad
    half_h = 0.5 * (maxy - miny) * pad
    dist = max(half_w, half_h, 0.35) * dist_scale
    return {
        "target": target,
        "position": [
            target[0] - look_n[0] * dist,
            target[1] - look_n[1] * dist,
            target[2] - look_n[2] * dist,
        ],
        "up": [0.0, 1.0, 0.0],
        "orthoFit": [half_w, half_h],
    }


def _cad_of_gltf(point: list[float]) -> tuple[float, float, float]:
    """Inverse of ``cad_mm_to_gltf_m`` (metres → CAD mm)."""
    return (point[0] / 0.001, -point[2] / 0.001, point[1] / 0.001)


def _mm_cs(value: float) -> str:
    return f"{value:g}".replace(".", ",")


def _bass_stud_xs(p: ObyvakParams, spacing: float) -> list[float]:
    return bass_cd_centres(bass_soffit_stop_x(p), spacing, p.bass_cw_w, FACE_GAP)


# Drawing button renders an A3 landscape plate (see viewer/drawing.js).
_PLATE_ASPECT = 2400 / 1697


def _plate_halves(half_w: float, half_h: float) -> tuple[float, float]:
    """Frustum the viewer actually uses: orthoFit, then letterboxed to the plate."""
    fw, fh = float(half_w), float(half_h)
    if fw < fh * _PLATE_ASPECT:
        fw = fh * _PLATE_ASPECT
    elif fh < fw / _PLATE_ASPECT:
        fh = fw / _PLATE_ASPECT
    return fw, fh


def _column_callouts(
    notes: list[tuple[tuple[float, float, float], str, str]],
    cam: dict,
    look: tuple[float, float, float],
    col_x: float,
    label_ys: list[float] | None = None,
    size: float | None = None,
) -> list[dict]:
    """One vertical label column. ``label_ys`` keeps notes off the title and each other.

    Offsets are in the plate's NDC, after the viewer letterboxes ``orthoFit``.
    """
    half_w, half_h = _plate_halves(*cam["orthoFit"])
    items = []
    for i, (anchor, en, cs) in enumerate(notes):
        ndc = _lattice_ndc(anchor, cam["target"], look, (0.0, 1.0, 0.0), half_w, half_h)
        label_y = label_ys[i] if label_ys is not None else ndc[1]
        items.append(
            _callout(anchor, en, cs, _ndc_offset(ndc, (col_x, label_y)), size=size)
        )
    return items


def _bass_view_scenes(p: ObyvakParams) -> list[dict]:
    """3/4 views of each trap. GKB is ghosted. A cut through an early stud
    opens the stack and keeps the soffit end in frame, so the stop reads.
    """
    z0, z1 = 2100.0, 5300.0
    # Normal +X keeps the cabinet side (Three.js clips the opposite half).
    cut_x = _bass_stud_xs(p, p.bass_stud_spacing)[2]
    opacity = {
        LABEL_BASS_CW: 1,
        LABEL_BASS_UW: 1,
        LABEL_BASS_STRUT: 1,
        LABEL_BASS_ANGLE: 1,
        LABEL_BASS_ANCHOR: 1,
        LABEL_BASS_TAPE: 1,
        LABEL_BASS_ACRYLIC: 1,
        LABEL_BASS_WOOL: 0.4,
        LABEL_BASS_GKB: 0.14,
        LABEL_PLASTER: 0.9,
        LABEL_MASONRY: 0.4,
        LABEL_WALL_GKF: 0.95,
        LABEL_POCKET_FRAME: 1,
        LABEL_SOFFIT_NH: 0.55,
        LABEL_SOFFIT_GKB: 0.4,
        LABEL_FURNITURE: 0.28,
    }

    def one(side: str, spacing: float, depth: float, y_wall: float, toward: float) -> dict:
        y_room = y_wall + toward * depth
        y_lo, y_hi = (min(y_wall, y_room) - 280.0, max(y_wall, y_room) + 80.0)
        corners = _box_corners(cut_x - 80.0, p.room_width + 80.0, y_lo, y_hi, z0, z1)
        # From the window side, slightly above: the cut stack, then the soffit stop.
        x_furn = p.room_width - p.furniture_width
        if toward > 0:
            eye = (-700.0, depth + 2800.0, 4800.0)
            aim = (0.62 * x_furn, depth * 0.55, 3400.0)
        else:
            eye = (-700.0, y_wall - 2800.0, 4800.0)
            aim = (0.62 * x_furn, y_wall - depth * 0.55, 3400.0)
        cam = _frame_ortho(_look_between(eye, aim), corners)
        cam_y = _cad_of_gltf(cam["position"])[1]
        # Drop the other gable on the far side of the camera so its cap is behind us.
        if toward > 0:
            far = _cut((0.0, 0.0, 1.0), (p.room_width * 0.5, cam_y + 1200.0, 3000.0))
        else:
            far = _cut((0.0, 0.0, -1.0), (p.room_width * 0.5, cam_y - 1200.0, 3000.0))
        title = (
            (
                f"Štít kuchyně — basová past\n{depth:g} mm, svislé CW {p.bass_k_cw:g} @ {spacing:g}",
                f"Štít kuchyně — basová past\n{depth:g} mm, svislé CW {p.bass_k_cw:g} @ {spacing:g}",
            )
            if side == "kitchen"
            else (
                f"Štít obýváku — basová past\n{depth:g} mm, svislé CW {p.bass_l_cw:g} @ {spacing:g}",
                f"Štít obýváku — basová past\n{depth:g} mm, svislé CW {p.bass_l_cw:g} @ {spacing:g}",
            )
        )
        return {
            "id": f"bass-{side}",
            "title": _tx(*title),
            "project": "Obývák 1.02",
            "camera": cam,
            "projection": "ortho",
            "edges": "transparent",
            "cuts": [
                _cut((1.0, 0.0, 0.0), (cut_x, y_wall, 3000.0)),
                far,
            ],
            "opacity": opacity,
            "opacityDefault": 0,
        }

    kitchen = one("kitchen", p.bass_stud_spacing, p.predstena_kitchen, p.room_length, -1.0)
    living = one("living", p.bass_stud_spacing, p.predstena_living, 0.0, 1.0)
    return [kitchen, living]


def _bass_elevation_scene(
    p: ObyvakParams,
    *,
    side: str,
    spacing: float,
    depth: float,
    y_face: float,
    look: tuple[float, float, float],
    cut_y: float,
    cut_normal: tuple[float, float, float],
    col_x: float,
    doors: list[tuple[float, float]],
) -> dict:
    """Straight elevation from the room. GKB is off so the vertical lattice shows."""
    studs = _bass_stud_xs(p, spacing)
    # Wide margin on the cabinet side (screen left for living, screen right for kitchen).
    # Room below the slab so the scale bar is not sitting on the floor.
    x0, x1 = -1100.0, 8900.0
    z0, z1 = -720.0, 5300.0
    pad_w, pad_h = 1.0, 1.04
    half_w = 0.5 * (x1 - x0) * 0.001 * pad_w
    half_h = 0.5 * (z1 - z0) * 0.001 * pad_h
    target = (0.5 * (x0 + x1), y_face, 0.5 * (z0 + z1))
    cam = _ortho_pose(target, look, (0.0, 1.0, 0.0), half_w, half_h)
    cw = p.bass_k_cw if side == "kitchen" else p.bass_l_cw
    x_furn = p.room_width - p.furniture_width
    module_line = spacing
    while module_line + spacing < bass_soffit_stop_x(p) - 0.5:
        module_line += spacing
    makeup = x_furn - module_line
    # Interior module, clear of both inset end studs.
    module_a = studs[2]
    module_b = studs[3]
    n_studs = len(studs)
    if side == "kitchen":
        title = (
            f"Štít kuchyně — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
            f"Štít kuchyně — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
        )
    else:
        title = (
            f"Štít obýváku — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
            f"Štít obýváku — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
        )
    studs_note = (
        f"CW {cw:g} svisle\n"
        f"{n_studs} stojek @ {spacing:g}, krajní pole {makeup:g} mm k podhledu"
    )
    free_note = "Ke šikmině ani k podhledu nekotveno\nUW v 2450, páska pod profily"
    brace_note = "Odstřižky CW/UA na úhelník\nasi 1/3 a 2/3, kotva do zdiva"
    board_note = (
        f"GKB {p.bass_board_w:g}×{p.bass_board_l:g}, spáry na stojkách\n"
        f"akryl {p.bass_acrylic:g} mm ke šikmině a k podhledu"
    )
    notes = [
        ((0.35 * p.room_width, y_face, 4700.0), studs_note, studs_note),
        ((0.22 * p.room_width, y_face, 3600.0), free_note, free_note),
        ((0.62 * p.room_width, y_face, 3200.0), brace_note, brace_note),
        ((doors[0][0] + 0.5 * doors[0][1], y_face, 700.0), board_note, board_note),
    ]
    dims = [
        _dim(
            (module_a, y_face, 2680.0),
            (module_b, y_face, 2680.0),
            -0.045,
            f"{spacing:g} mm",
            f"{spacing:g} mm",
        ),
        _dim(
            (module_line, y_face, 2680.0),
            (x_furn, y_face, 2680.0),
            0.04,
            f"{makeup:g} mm",
            f"{makeup:g} mm",
        ),
    ]
    for x_door, width in doors:
        dims.append(
            _dim(
                (x_door, y_face, 1400.0),
                (x_door + width, y_face, 1400.0),
                0.04,
                f"{width:g} mm",
                f"{width:g} mm",
            )
        )
    return {
        "id": f"bass-{side}-elevation",
        "title": _tx(*title),
        "project": "Obývák 1.02",
        "camera": cam,
        "projection": "ortho",
        "edges": "opaque",
        "cuts": [_cut(cut_normal, (0.5 * p.room_width, cut_y, 3000.0))],
        "opacity": {
            LABEL_BASS_CW: 1,
            LABEL_BASS_UW: 1,
            LABEL_BASS_STRUT: 1,
            LABEL_BASS_ANGLE: 1,
            LABEL_BASS_ANCHOR: 1,
            LABEL_BASS_TAPE: 0.9,
            LABEL_BASS_WOOL: 0.22,
            LABEL_BASS_GKB: 0,
            LABEL_BASS_ACRYLIC: 1,
            LABEL_PLASTER: 1,
            LABEL_MASONRY: 0.45,
            LABEL_WALL_GKF: 1,
            LABEL_POCKET_FRAME: 1,
            LABEL_SOFFIT_NH: 0.72,
            LABEL_SOFFIT_GKB: 0.55,
            LABEL_FURNITURE: 0.35,
        },
        "opacityDefault": 0,
        "annotations": [
            *_column_callouts(
                notes, cam, look, col_x, [0.50, -0.40, 0.16, -0.62], size=0.82
            ),
            *dims,
        ],
    }


def _bass_section_scene(
    p: ObyvakParams,
    *,
    side: str,
    stud_x: float,
    y_wall: float,
    toward: float,
    depth: float,
    wool: float,
    air: float,
    gkb: float,
    cw: float,
    look: tuple[float, float, float],
    y0: float,
    y1: float,
    col_x: float,
) -> dict:
    """Vertical section through one stud. Layer thicknesses are the design stack."""
    z0, z1 = 2300.0, 4400.0
    pad_w, pad_h = 1.0, 1.04
    half_w = 0.5 * (y1 - y0) * 0.001 * pad_w
    half_h = 0.5 * (z1 - z0) * 0.001 * pad_h
    cam = _ortho_pose(
        (stud_x, 0.5 * (y0 + y1), 0.5 * (z0 + z1)),
        look,
        (0.0, 1.0, 0.0),
        half_w,
        half_h,
    )
    # Slab through the stud so the CW and a wall strut are in the cut.
    half = p.bass_cw_w * 0.5
    if look[0] < 0:
        cuts = [
            _cut((-1.0, 0.0, 0.0), (stud_x, y_wall, 3000.0)),
            _cut((1.0, 0.0, 0.0), (stud_x - half, y_wall, 3000.0)),
        ]
    else:
        cuts = [
            _cut((1.0, 0.0, 0.0), (stud_x, y_wall, 3000.0)),
            _cut((-1.0, 0.0, 0.0), (stud_x + half, y_wall, 3000.0)),
        ]
    y_wool = y_wall + toward * wool
    y_gkb_back = y_wall + toward * (depth - gkb)
    y_room = y_wall + toward * depth
    y_stud_back = y_gkb_back - toward * cw
    y_mas0 = y_wall - toward * p.wall_plaster
    y_mas1 = y_mas0 - toward * p.wall_mason

    def ymid(a: float, b: float) -> float:
        return 0.5 * (a + b)

    if side == "kitchen":
        title = (
            "Basová past kuchyně — řez\npřes svislou CW stojku",
            "Basová past kuchyně — řez\npřes svislou CW stojku",
        )
    else:
        title = (
            "Basová past obýváku — řez\npřes svislou CW stojku",
            "Basová past obýváku — řez\npřes svislou CW stojku",
        )
    wool_cs = _mm_cs(wool)
    air_cs = _mm_cs(air)
    gkb_cs = _mm_cs(gkb)
    masonry_note = f"Zdivo {p.wall_mason:g} + omítka {p.wall_plaster:g}"
    anchor_note = f"Odstřižek CW {cw:g} na úhelník\nkotva 60 mm do zdiva"
    wool_note = f"Minerální vata {wool_cs} mm"
    air_note = f"Vzduch {air_cs} mm, CW {cw:g}"
    gkb_note = f"GKB {gkb_cs} mm"
    notes = [
        ((stud_x, ymid(y_mas0, y_mas1), 3000.0), masonry_note, masonry_note),
        ((stud_x, y_wall + toward * 8.0, 2800.0), anchor_note, anchor_note),
        ((stud_x, ymid(y_wall, y_wool), 3400.0), wool_note, wool_note),
        ((stud_x, ymid(y_wool, y_gkb_back), 3750.0), air_note, air_note),
        ((stud_x, ymid(y_gkb_back, y_room), 4100.0), gkb_note, gkb_note),
    ]
    # Dimension the design planes (the 1 mm mate clearance is not a layer).
    dims = [
        _dim(
            (stud_x, y_mas1, 2420.0),
            (stud_x, y_mas0, 2420.0),
            -0.06,
            f"{p.wall_mason:g} mm",
            f"{p.wall_mason:g} mm",
        ),
        _dim(
            (stud_x, y_wall, 3000.0),
            (stud_x, y_wool, 3000.0),
            -0.05,
            f"{wool_cs} mm",
            f"{wool_cs} mm",
        ),
        _dim(
            (stud_x, y_wool, 3480.0),
            (stud_x, y_gkb_back, 3480.0),
            -0.05,
            f"{air_cs} mm",
            f"{air_cs} mm",
        ),
        _dim(
            (stud_x, y_wall, 3980.0),
            (stud_x, y_room, 3980.0),
            -0.07,
            f"{depth:g} mm",
            f"{_mm_cs(depth)} mm",
        ),
    ]
    return {
        "id": f"bass-{side}-section",
        "title": _tx(*title),
        "project": "Obývák 1.02",
        "camera": cam,
        "projection": "ortho",
        "edges": "opaque",
        "cuts": cuts,
        "opacity": {
            LABEL_BASS_CW: 1,
            LABEL_BASS_UW: 1,
            LABEL_BASS_STRUT: 1,
            LABEL_BASS_ANGLE: 1,
            LABEL_BASS_ANCHOR: 1,
            LABEL_BASS_TAPE: 1,
            LABEL_BASS_ACRYLIC: 1,
            LABEL_BASS_WOOL: 0.5,
            LABEL_BASS_GKB: 1,
            LABEL_PLASTER: 1,
            LABEL_MASONRY: 0.72,
        },
        "opacityDefault": 0,
        "annotations": [
            *_column_callouts(
                notes,
                cam,
                look,
                col_x,
                [-0.22, -0.48, 0.04, 0.30, 0.55],
                size=0.85,
            ),
            *dims,
        ],
    }


def _bass_drawing_scenes(p: ObyvakParams, g: ObyvakLayout) -> list[dict]:
    """Elevation (GKB off) and a stud section for each trap. Geometry is the 3D model."""
    living_doors = [(x0, width) for name, x0, width in p.pocket_doors if name == "living"]
    kitchen_doors = [(x0, width) for name, x0, width in p.pocket_doors if name == "kitchen"]
    # Label column sits in the cabinet-side margin (screen left on the living
    # elevation, screen right on the kitchen elevation).
    living_elev = _bass_elevation_scene(
        p,
        side="living",
        spacing=p.bass_stud_spacing,
        depth=p.predstena_living,
        y_face=p.predstena_living - p.bass_l_gkb * 0.5,
        look=(0.0, 0.0, 1.0),
        cut_y=p.predstena_living + 250.0,
        cut_normal=(0.0, 0.0, 1.0),
        col_x=-0.58,
        doors=living_doors,
    )
    kitchen_elev = _bass_elevation_scene(
        p,
        side="kitchen",
        spacing=625.0,
        depth=p.predstena_kitchen,
        y_face=g.y_pred_r + p.bass_k_gkb * 0.5,
        look=(0.0, 0.0, -1.0),
        cut_y=g.y_pred_r - 250.0,
        cut_normal=(0.0, 0.0, -1.0),
        col_x=0.58,
        doors=kitchen_doors,
    )
    # Section: wall on the left. Living looks toward −X; kitchen toward +X.
    living_sec = _bass_section_scene(
        p,
        side="living",
        stud_x=2500.0,
        y_wall=0.0,
        toward=1.0,
        depth=p.predstena_living,
        wool=p.bass_l_wool,
        air=p.bass_l_air,
        gkb=p.bass_l_gkb,
        cw=p.bass_l_cw,
        look=(-1.0, 0.0, 0.0),
        y0=-940.0,
        y1=650.0,
        col_x=-0.72,
    )
    kitchen_sec = _bass_section_scene(
        p,
        side="kitchen",
        stud_x=2500.0,
        y_wall=p.room_length,
        toward=-1.0,
        depth=p.predstena_kitchen,
        wool=p.bass_k_wool,
        air=p.bass_k_air,
        gkb=p.bass_k_gkb,
        cw=p.bass_k_cw,
        look=(1.0, 0.0, 0.0),
        y0=10745.0,
        y1=11930.0,
        col_x=-0.72,
    )
    return [kitchen_elev, kitchen_sec, living_elev, living_sec]


def scenes(params: ObyvakParams | None = None) -> list[dict]:
    """Named WebGL viewer scenes (see blueprints.scenes).

    Each scene owns its camera / cut / opacity recipe — values may match today
    (e.g. both ISO along living→kitchen) but are free to diverge later.

    GLB is glTF Y-up (CAD Z→Y, CAD Y→−Z). View plane for these length cuts is
    glTF XY (= CAD X width × CAD Z height).
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    gap = FACE_GAP

    # --- Soffit: orthographic cross-section zoomed on the cabinet soffit bay. ---
    sx0, sx1 = g.x_furn, g.x_furn + p.furniture_width
    sy0, sy1 = g.y_furn0 + gap, g.y_furn1 - gap
    sz0 = g.z_nabeh_bot + gap
    sz1 = g.z_soffit_cd_bot
    scx = 0.5 * (sx0 + sx1)
    scy = 0.5 * (sy0 + sy1)
    scz = 0.5 * (sz0 + sz1)
    spad = 1.25
    s_frame_x0 = g.x_furn - 250.0
    s_frame_x1 = g.poz_r0 + p.plate_w + 40.0
    s_frame_z0 = p.furniture_height - 150.0
    s_frame_z1 = g.z_plate_top + 180.0
    s_half_w = 0.5 * (s_frame_x1 - s_frame_x0) * spad * 0.001
    s_half_h = 0.5 * (s_frame_z1 - s_frame_z0) * spad * 0.001
    s_dist_m = max(s_half_w, s_half_h, 0.35) * 5.0
    s_target = cad_mm_to_gltf_m((scx, scy, scz))
    # CAD +Y (living gable → kitchen gable) → glTF −Z. Camera on the living side.
    s_look = (0.0, 0.0, -1.0)
    s_position = [
        s_target[0] - s_look[0] * s_dist_m,
        s_target[1] - s_look[1] * s_dist_m,
        s_target[2] - s_look[2] * s_dist_m,
    ]
    soffit = {
        "id": "soffit",
        "camera": {
            "target": s_target,
            "position": s_position,
            "up": [0.0, 1.0, 0.0],
            "orthoFit": [s_half_w, s_half_h],
        },
        "projection": "ortho",
        "cuts": [{"normal": list(s_look), "t": 0.5}],
        "opacity": {"soffit": 1, LABEL_PLASTER: 1},
        "opacityDefault": 0.5,
    }

    # --- Gable: full šikminy (eave↔eave), currently same ISO / look / cut idea. ---
    gy0, gy1 = g.y_furn0 + gap, g.y_furn1 - gap
    g_frame_x0 = -p.wall_plaster - 50.0
    g_frame_x1 = p.room_width + p.wall_plaster + 50.0
    g_frame_z0 = p.furniture_height - 150.0
    g_frame_z1 = p.ridge_z + 100.0
    gcx = 0.5 * (g_frame_x0 + g_frame_x1)
    gcy = 0.5 * (gy0 + gy1)
    gcz = 0.5 * (g_frame_z0 + g_frame_z1)
    gpad = 1.25
    g_half_w = 0.5 * (g_frame_x1 - g_frame_x0) * gpad * 0.001
    g_half_h = 0.5 * (g_frame_z1 - g_frame_z0) * gpad * 0.001
    g_dist_m = max(g_half_w, g_half_h, 0.35) * 5.0
    g_target = cad_mm_to_gltf_m((gcx, gcy, gcz))
    g_look = (0.0, 0.0, -1.0)
    g_position = [
        g_target[0] - g_look[0] * g_dist_m,
        g_target[1] - g_look[1] * g_dist_m,
        g_target[2] - g_look[2] * g_dist_m,
    ]
    gable = {
        "id": "gable",
        "camera": {
            "target": g_target,
            "position": g_position,
            "up": [0.0, 1.0, 0.0],
            "orthoFit": [g_half_w, g_half_h],
        },
        "projection": "ortho",
        "cuts": [{"normal": list(g_look), "t": 0.5}],
        "opacity": {"slopes": 1, LABEL_PLASTER: 1},
        "opacityDefault": 0.5,
    }
    return [
        soffit,
        gable,
        *_sikmina_plates(p, g),
        *_bass_view_scenes(p),
        *_bass_drawing_scenes(p, g),
        *_tie_scenes(p, g),
    ]


def _tie_scenes(p: ObyvakParams, g: ObyvakLayout) -> list[dict]:
    """Front (like the SketchUp view), plan, and one tie section.

    Front stands outside the window wall and looks across the length, slightly
    up, so both slopes and the foreshortened ties are in one shot. The plan
    hides the ceiling and shows where the six bars and the ten pairs sit.
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    z = g.tie_axis_z(FACE_GAP)
    ys = g.tie_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_cut = min(ys, key=lambda y: abs(y - 0.5 * p.room_length))
    eye = cad_mm_to_gltf_m((-3200.0, 0.42 * p.room_length, 1500.0))
    aim = cad_mm_to_gltf_m((0.55 * p.room_width, 0.62 * p.room_length, z + 80.0))
    front = {
        "id": "ties-front",
        "title": _tx(
            "Táhla a světla — pohled",
            "Táhla a světla — pohled",
        ),
        "project": "Obývák 1.02",
        "hFovDeg": 72,
        "projection": "perspective",
        "camera": {"target": aim, "position": eye, "up": [0.0, 1.0, 0.0]},
        "cuts": [_cut((1.0, 0.0, 0.0), (80.0, 0.5 * p.room_length, z))],
        "opacity": {LABEL_TIE_ROD: 1, LABEL_SLOPE_LIGHT: 1},
        "opacityDefault": 1,
    }
    plan = {
        "id": "ties-plan",
        "title": _tx(
            "Táhla a světla — půdorys",
            "Táhla a světla — půdorys",
        ),
        "project": "Obývák 1.02",
        "projection": "ortho",
        "camera": _ortho_pose(
            (0.5 * p.room_width, 0.5 * p.room_length, z),
            (0.0, -1.0, 0.0),
            (0.0, 0.0, -1.0),
            0.5 * (p.room_width + 900.0) * 0.001,
            0.5 * (p.room_length + 900.0) * 0.001,
        ),
        "opacityDefault": 0,
        "opacity": {
            LABEL_TIE_ROD: 1,
            LABEL_SLOPE_LIGHT: 1,
            LABEL_RAFTERS: 0.45,
            LABEL_WALL_PLATE: 0.9,
        },
    }
    section = {
        "id": "ties-section",
        "title": _tx(
            "Táhlo — řez jednou tyčí",
            "Táhlo — řez jednou tyčí",
        ),
        "project": "Obývák 1.02",
        "projection": "ortho",
        "camera": _ortho_pose(
            (0.5 * p.room_width, y_cut, 0.5 * (2400.0 + p.ridge_z)),
            (0.0, 0.0, -1.0),
            (0.0, 1.0, 0.0),
            0.5 * (g.right_eave - g.left_eave + 400.0) * 0.001,
            0.5 * (p.ridge_z - 2000.0) * 0.001,
        ),
        "cuts": [
            _cut((0.0, 0.0, -1.0), (0.5 * p.room_width, y_cut - 30.0, z)),
            _cut((0.0, 0.0, 1.0), (0.5 * p.room_width, y_cut + 30.0, z)),
        ],
        "opacityDefault": 0.2,
        "opacity": {
            LABEL_TIE_ROD: 1,
            LABEL_SLOPE_LIGHT: 1,
            LABEL_RAFTERS: 1,
            LABEL_WALL_PLATE: 1,
            LABEL_SOFFIT_DUCT: 1,
            LABEL_MASONRY: 1,
            LABEL_PLASTER: 1,
        },
    }
    return [front, plan, section]


def part_groups() -> list[dict]:
    """Nested Parts outline (ids only). Viewer localizes group/leaf labels."""
    return PART_GROUPS


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
