"""Obývák 1.02 — 3D massing from the transverse section + gable elevation.

World: X eave↔eave (5350), Y kitchen↔living (11100), Z up.

Physical assembly rules (also keep the web viewer free of z-fighting):
- Each labelled solid has real thickness from the section params.
- Different materials never share a plane and never interpenetrate; mates get a
  1 mm clearance (still reads as "touching" at room scale).
- Gables own the end walls (full X). Eave runs only the clear mid-span so
  corner volumes are not drawn twice.
- Obývák-only scope: no koruna (exterior gables are in adjacent rooms), no EPS
  on gable shells, three gable pocket doors (chodba on Y=0; spíž + zádveří on Y=L),
  and terrace glazing on the X=0 eave (opposite cabinets).
- Floor slab is the clear room only; perimeter walls own the strip below z=0.
- Šikminy: NaturHeld 140 → latě // krokvím + Flex between (flush) → foil + GKF
  → CD ⊥ krokvím → přímý závěs 125 on the window slope, Nonius on the cabinet
  slope → mineral wool (below and between rafters) → krokve 100/160 @ 875 + straps.
  `rafters` = roof timber; `*_battens` = NH latě (zone-prefixed).
- Soffit box: NH L over cabinets (20 mm gap); Flex + latový rost below a
  service void; three Ø160 spiral ducts (HRV + AC) in that void; GKF lid
  raised onto the pozednice (above the wall head, not the plaster). Slope GKF
  butts the lid where the two planes meet, at full 12.5 mm. Slope latě and Flex
  continue on that plane to the vertical soffit lať. A light-gauge angle
  backs that hidden joint and screws to the rost CD; that CD keeps the only
  Nonius for the corner. The rost hangs from it and braces to the eave wall.
  Ducts hang on their own trapeze. Furniture and pozednice do not carry the
  box — the plate only cleats the board edge.
- Terrace eave (X=0): 100×100 columns in front of the glass at the pier centres
  stop one brick course below the ring beam; cabinet eave keeps a continuous wall
  with 300×300 columns standing in front of it on the room side (same Y grid).
  Columns are drawn as masonry.
- Rafters seat on the wall plate (centred on the věnec); EPS is cut around rafters,
  not the other way around. Overhang past EPS is gutter-sized only.
- Bass traps (štít): kitchen 190 / living 450 as interior CD/UW cabinets under
  continuous šikminy (pack runs wall-to-wall). Short rear třmeny to the gable;
  top soft-joints to the NH face — no hangers through the slope pack.

    python -m blueprints.export obyvak

450 mm at the cabinets is eave furniture depth — not the living-gable předstěna 450.
"""

from __future__ import annotations

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
    LABEL_BASS_CD,
    LABEL_BASS_GKB,
    LABEL_BASS_HANGER,
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
    LABEL_ROOFING,
    LABEL_SLOPE_BATTENS,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_DIRECT,
    LABEL_SLOPE_FLEX,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_BATTENS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_FLEX,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
    LABEL_WALL_GKF,
    LABEL_WALL_PLATE,
    PART_GROUPS,
    ObyvakLayout,
    ObyvakParams,
    xz_face,
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
        if gable == "kitchen":
            ya, yb = g.yl_eps - 1.0, gap + depth
        elif gable == "living":
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


def _eave_window_cutters(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Through-openings in the X=0 eave up to the underside of the věnec."""
    cutters = []
    z_open = g.column_top_z
    for y0, width in p.eave_windows:
        ya, yb = y0 + gap, y0 + width - gap
        if yb <= ya:
            continue
        cutters.append(
            _box(
                g.xl_eps - 1.0,
                ya,
                -1.0,
                -g.xl_eps + p.wall_plaster + 2.0,
                yb - ya,
                z_open + 2 * gap + 2.0,
                "_window_cut",
            )
        )
    return cutters


def _cut_wall_openings(parts: list, cutters: list) -> list:
    if not cutters:
        return parts
    out = []
    for part in parts:
        if part.label not in {
            LABEL_EPS,
            LABEL_MASONRY,
            LABEL_PLASTER,
            LABEL_WALL_GKF,
        }:
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

    Stack (kitchen Y=0 → into room): gable → pouzdro bay → thin SDK face.
    SDK is pierced only for walk-through door openings — never for pouzdro bays.
    Does not touch or resize předstěny (Z≥2450, depths 190 / 450).
    """
    h = p.pocket_door_h - gap
    face_t = max(p.sdk_t, 12.5)
    # Full pocket depth against the gable; SDK sits clearly in front (into the room).
    pocket_d = max(p.pouzdro_d - gap, gap)
    pouzdra: list = []
    sdk_parts: list = []

    for end, _y_wall in (("kitchen", gap), ("living", p.room_length - gap)):
        if end == "kitchen":
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


def _bass_cd_x_stations(p: ObyvakParams, gap: float) -> list[float]:
    """Vertical CD stud centres along the gable (X), @ cd_spacing."""
    x0 = gap + p.cd_first_inset
    x1 = p.room_width - gap - p.cd_first_inset
    xs: list[float] = []
    x = x0
    while x <= x1 + 1e-6:
        xs.append(x)
        x += p.cd_spacing
    if not xs or xs[-1] < x1 - 1.0:
        xs.append(x1)
    return xs


def _bass_trap_frame(
    p: ObyvakParams,
    g: ObyvakLayout,
    gap: float,
    *,
    y_rear0: float,
    y_rear1: float,
    y_front0: float,
    y_front1: float,
    y_wall: float,
    toward_room: float,
    z_bot: float | None = None,
) -> list:
    """Closed CD/UW cabinet: rear + front verticals, depth struts, bay rails.

    Gable-only hang via short wall třmeny to the rear studs — no Nonius through
    the šikmina pack. Tops stay below the continuous ceiling (min z_ceil over
    each part footprint) so the box sits under šikminy, not through them.
    """
    parts: list = []
    z0 = z_bot if z_bot is not None else p.predstena_bottom_z + gap
    hw = p.cd_w * 0.5
    arm_t = p.bass_trmen_arm_t
    arm_h = p.bass_trmen_arm_h
    d = p.cd_t
    if toward_room > 0:
        y_strut0, y_strut1 = y_rear1 + gap, y_front0 - gap
    else:
        y_strut0, y_strut1 = y_front1 + gap, y_rear0 - gap
    strut_dy = y_strut1 - y_strut0
    if strut_dy <= gap:
        return parts

    stations = _bass_cd_x_stations(p, gap)
    stations = [xc for xc in stations if gap <= xc - hw and xc + hw <= p.room_width - gap]
    if not stations:
        return parts

    def _z_under_ceil(*xs: float) -> float:
        """Flat top clear of the sloping acoustic face over the given X samples."""
        return min(g.z_ceil(x) for x in xs) - gap

    # Bay rails along X (between verticals) on rear and front planes.
    for i in range(len(stations) - 1):
        xa = stations[i] + hw + gap
        xb = stations[i + 1] - hw - gap
        if xb - xa <= gap:
            continue
        z_top = _z_under_ceil(xa, 0.5 * (xa + xb), xb)
        if z_top - z0 < 50.0:
            continue
        for ya, yb in ((y_rear0, y_rear1), (y_front0, y_front1)):
            parts.append(_box(xa, ya, z0, xb - xa, yb - ya, d, LABEL_BASS_CD))
            parts.append(_box(xa, ya, z_top - d, xb - xa, yb - ya, d, LABEL_BASS_CD))

    for xc in stations:
        x0 = xc - hw
        x1 = xc + hw
        z_top = _z_under_ceil(x0, xc, x1)
        if z_top - z0 < 50.0:
            continue
        # Vertical studs — clear of top/bottom depth struts.
        z_vert0 = z0 + d + gap
        z_vert1 = z_top - d - gap
        if z_vert1 - z_vert0 > 50.0:
            parts.append(_box(x0, y_rear0, z_vert0, p.cd_w, y_rear1 - y_rear0, z_vert1 - z_vert0, LABEL_BASS_CD))
            parts.append(_box(x0, y_front0, z_vert0, p.cd_w, y_front1 - y_front0, z_vert1 - z_vert0, LABEL_BASS_CD))
        # Depth struts in the air gap only (skříň diaphragm).
        z_levels = [z0, z_top - d]
        z = z0 + p.bass_hanger_z_inset
        while z < z_top - d - 80.0:
            z_levels.append(max(z0, z - d * 0.5))
            z += p.bass_hanger_z_step
        seen: set[float] = set()
        for z_s in z_levels:
            key = round(z_s, 1)
            if key in seen:
                continue
            seen.add(key)
            if z_s < z0 - 0.1 or z_s + d > z_top + 0.1:
                continue
            parts.append(_box(x0, y_strut0, z_s, p.cd_w, strut_dy, d, LABEL_BASS_CD))
        # Short třmen arms: wall → rear CD only.
        z = z0 + p.bass_hanger_z_inset
        while z < z_top - 80.0:
            if toward_room > 0:
                ya, yb = y_wall, y_rear0
            else:
                ya, yb = y_rear1, y_wall
            if abs(yb - ya) > gap:
                parts.append(
                    _box(xc - arm_t * 0.5, ya, z - arm_h * 0.5, arm_t, yb - ya, arm_h, LABEL_BASS_HANGER)
                )
            z += p.bass_hanger_z_step
    return parts


def _bass_trap_parts(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Bass traps at both gables — interior boxes under continuous šikminy.

    Šikminy run full length to the gable; these assemblies sit in the room
    against the štít from Z=2450 up to a soft joint under the NH face.
    Frame is a closed CD/UW cabinet (rear + front + depth struts + rails).
    """
    outline = _predstena_outline(p, g, gap)
    face = xz_face(outline, "predstena")
    parts: list = []
    bot_t = min(p.bass_bottom_sdk_t, p.bass_k_gkb) - gap * 0.5
    z_frame = p.predstena_bottom_z + gap + (bot_t + gap if bot_t > gap else 0.0)

    # --- Kitchen Y=0: zeď → MW 80 → vzduch 97.5 → GKB 12.5 ---
    y_k0 = gap
    y_k_wool1 = p.bass_k_wool - gap
    y_k_gkb0 = p.predstena_kitchen - p.bass_k_gkb + gap
    y_k_gkb1 = p.predstena_kitchen - gap
    y_k_rear1 = p.bass_k_rear_reach - gap
    y_k_rear0 = y_k_rear1 - p.cd_t
    y_k_front1 = y_k_gkb0 - gap
    y_k_front0 = y_k_front1 - p.cd_t
    k_wool = None
    if y_k_wool1 > y_k0:
        k_wool = _extrude_y(face, y_k0, y_k_wool1, LABEL_BASS_WOOL)
    if y_k_gkb1 > y_k_gkb0:
        parts.append(_extrude_y(face, y_k_gkb0, y_k_gkb1, LABEL_BASS_GKB))
    if bot_t > gap and y_k_gkb0 > y_k0 + gap:
        parts.append(
            _box(
                gap,
                y_k0,
                p.predstena_bottom_z + gap,
                p.room_width - 2 * gap,
                y_k_gkb0 - y_k0 - gap,
                bot_t,
                LABEL_BASS_GKB,
            )
        )
    k_frame = _bass_trap_frame(
        p,
        g,
        gap,
        y_rear0=y_k_rear0,
        y_rear1=y_k_rear1,
        y_front0=y_k_front0,
        y_front1=y_k_front1,
        y_wall=y_k0,
        toward_room=1.0,
        z_bot=z_frame,
    )
    if k_wool is not None:
        tools = [s for s in k_frame if s.bounding_box().min.Y < y_k_wool1]
        if bot_t > gap:
            tools.append(
                _box(
                    gap,
                    y_k0,
                    p.predstena_bottom_z + gap,
                    p.room_width - 2 * gap,
                    y_k_wool1 - y_k0,
                    bot_t + gap,
                    "_bass_bot",
                )
            )
        parts.append(_cut_away(k_wool, tools, LABEL_BASS_WOOL) if tools else k_wool)
    parts.extend(k_frame)

    # --- Living Y=L: GKB 12.5 → vzduch 137.5 → MW 300 → zeď ---
    y_l1 = p.room_length - gap
    y_l_gkb0 = g.y_pred_r + gap
    y_l_gkb1 = g.y_pred_r + p.bass_l_gkb - gap
    y_l_wool0 = p.room_length - p.bass_l_wool + gap
    y_l_wool1 = y_l1
    y_l_rear0 = p.room_length - p.bass_l_rear_reach + gap
    y_l_rear1 = y_l_rear0 + p.cd_t
    y_l_front0 = y_l_gkb1 + gap
    y_l_front1 = y_l_front0 + p.cd_t
    if y_l_gkb1 > y_l_gkb0:
        parts.append(_extrude_y(face, y_l_gkb0, y_l_gkb1, LABEL_BASS_GKB))
    l_wool = None
    if y_l_wool1 > y_l_wool0:
        l_wool = _extrude_y(face, y_l_wool0, y_l_wool1, LABEL_BASS_WOOL)
    if bot_t > gap and y_l1 > y_l_gkb1 + gap:
        parts.append(
            _box(
                gap,
                y_l_gkb1 + gap,
                p.predstena_bottom_z + gap,
                p.room_width - 2 * gap,
                y_l1 - (y_l_gkb1 + gap),
                bot_t,
                LABEL_BASS_GKB,
            )
        )
    l_frame = _bass_trap_frame(
        p,
        g,
        gap,
        y_rear0=y_l_rear0,
        y_rear1=y_l_rear1,
        y_front0=y_l_front0,
        y_front1=y_l_front1,
        y_wall=y_l1,
        toward_room=-1.0,
        z_bot=z_frame,
    )
    if l_wool is not None:
        tools = [s for s in l_frame if s.bounding_box().max.Y > y_l_wool0]
        if bot_t > gap:
            tools.append(
                _box(
                    gap,
                    y_l_wool0,
                    p.predstena_bottom_z + gap,
                    p.room_width - 2 * gap,
                    y_l_wool1 - y_l_wool0,
                    bot_t + gap,
                    "_bass_bot",
                )
            )
        parts.append(_cut_away(l_wool, tools, LABEL_BASS_WOOL) if tools else l_wool)
    parts.extend(l_frame)

    return parts


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
    window_cutters = _eave_window_cutters(p, g, gap)
    structure = _cut_wall_openings(structure, door_cutters + window_cutters)

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
    vata_pts = [
        (min(max(x, gap), p.room_width - gap), z + gap if i < 4 else z - gap)
        for i, (x, z) in enumerate(g.vata_pts())
    ]

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
    # Mineral wool: the void above the CD pack, plus the bays between krokve.
    # Same part. The vent channel above the rafter top stays empty.
    vata = _extrude_y(xz_face(vata_pts, LABEL_PLENUM_WOOL), gap, p.room_length - gap, LABEL_PLENUM_WOOL)
    bay_raw = g.vata_rafter_bay_pts()
    bay_pts = [
        (min(max(x, gap), p.room_width - gap), z - gap) for x, z in bay_raw
    ]
    bay_face = xz_face(bay_pts, LABEL_PLENUM_WOOL)
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

    # 1) NaturHeld 140 room face
    parts.append(_add_band(g.sikmina_nh_pts(), LABEL_SLOPE_NH))

    # 2) Latě // krokvím (spaced along Y) + Flex 50 between them
    rost_parts: list = []
    ribbon = g.sikmina_rost_ribbon_pts()
    half_w = p.rost_w * 0.5
    for yc in g.sikmina_rost_y_stations(y_ceil0, y_ceil1):
        ya, yb = yc - half_w, yc + half_w
        if yb <= ya:
            continue
        rost_parts.append(_extrude_y(xz_face(ribbon, LABEL_SLOPE_BATTENS), ya, yb, LABEL_SLOPE_BATTENS))
    flex_slope = _add_band(g.sikmina_flex_pts(), LABEL_SLOPE_FLEX)
    if rost_parts:
        flex_slope = _cut_away(flex_slope, rost_parts, LABEL_SLOPE_FLEX)
    parts.append(flex_slope)
    parts.extend(rost_parts)

    # Triangle under the lid, above the 40 mm pack, out to the vertical lať.
    # Only the soffit bay has that lid.
    wedge_pts = g.soffit_flex_wedge_pts()
    x_w0 = wedge_pts[0][0] + gap
    z_w_top = g.z_soffit_lid - gap
    wedge = [
        (x_w0, wedge_pts[0][1]),
        (wedge_pts[1][0], wedge_pts[1][1]),
        (wedge_pts[1][0], z_w_top),
        (x_w0, z_w_top),
    ]
    wedge_solid = _extrude_y(xz_face(wedge, LABEL_SLOPE_FLEX), y_soff0, y_soff1, LABEL_SLOPE_FLEX)
    if rost_parts:
        wedge_solid = _cut_away(wedge_solid, rost_parts, LABEL_SLOPE_FLEX)
    parts.append(wedge_solid)

    # 3) SDK
    parts.append(_add_band(g.sikmina_sdk_pts(), LABEL_SLOPE_GKF))

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
        if min(xs) < 1.0 or max(xs) > g.x_furn - 1.0:
            continue
        hang_quad = g.hanger_quad(*st)
        # Window slope stays parallel to the rafters (~80 mm). Direct hanger 125.
        # Cabinet slope opens toward the furniture line. Nonius only there.
        hang_label = LABEL_SLOPE_DIRECT if st[0] < g.x_false else LABEL_SLOPE_NONIUS
        for yc in ceil_rafter_ys:
            zaves_parts.append(
                _extrude_y(
                    xz_face(hang_quad, hang_label),
                    yc - half_hang,
                    yc + half_hang,
                    hang_label,
                )
            )
    parts.extend(zaves_parts)

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

    # Mineral wool must not swallow CD / hangers / pásky.
    if cd_parts or zaves_parts or paska_parts:
        vata = _cut_away(vata, cd_parts + zaves_parts + paska_parts, LABEL_PLENUM_WOOL)
        for i, part in enumerate(parts):
            if part.label == LABEL_PLENUM_WOOL:
                parts[i] = vata
                break

    # --- Soffit bay: ducts under a lid that lands on the pozednice. ---
    # Box: krokve → Nonius → front CD → drop through the lid → vertical latě
    # → bottom latě, wall angle as brace only.
    # Lid edge: continuous steel cleat on the plate cheek. Not a hang point.
    # Ducts: trapeze from the CD, clear of the rost and the column heads.
    t = g.t_nh_face
    x_duct0, x_duct1 = g.soffit_duct_x_extent()
    lat_end = g.x_nh_inner + p.rost_d
    if x_duct0 < lat_end + 8.0:
        raise ValueError(
            f"soffit ducts collide with the front latě ({x_duct0:.1f} < {lat_end + 8:.1f})"
        )
    if x_duct1 > p.room_width - 4.0:
        raise ValueError(f"soffit ducts run through the plaster ({x_duct1:.1f})")
    if g.z_soffit_duct_bot() < g.column_top_z + 10.0:
        raise ValueError(
            f"soffit ducts hit the column heads ({g.z_soffit_duct_bot():.1f} < {g.column_top_z + 10:.1f})"
        )
    if g.z_soffit_duct_crown() > g.z_soffit_lid - 5.0:
        raise ValueError("soffit ducts do not fit under the lid on the pozednice")

    # Top follows the Flex seat down to the vertical lať. 1 mm off each mate.
    z_nh_out = g.z_slope_offset(g.x_nh_outer, t) - gap
    z_nh_in = g.z_slope_plane_offset(g.x_nh_inner, t) - gap
    soffit_nh = [
        (g.x_nh_outer + gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + t - gap),
        (g.x_nh_inner - gap, g.z_nabeh_bot + t - gap),
        (g.x_nh_inner - gap, z_nh_in),
        (g.x_nh_outer + gap, z_nh_out),
    ]
    parts.append(_extrude_y(xz_face(soffit_nh, LABEL_SOFFIT_NH), y_soff0, y_soff1, LABEL_SOFFIT_NH))

    # Flex stays in the acoustic cavity, stopped short of the pipes. No timber cap.
    z_rail_top = g.z_soffit_rail()
    flex_box = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + t + gap),
        (p.room_width - gap, g.z_nabeh_bot + t + gap),
        (p.room_width - gap, z_rail_top - gap),
        (g.x_nh_inner + gap, z_rail_top - gap),
    ]
    flex_solid = _extrude_y(xz_face(flex_box, LABEL_SOFFIT_FLEX), y_soff0, y_soff1, LABEL_SOFFIT_FLEX)

    # Lid from the plane intersection onto the plate. No vertical riser.
    # The joint angle on the rost CD holds the board edge.
    lid_solid = None
    xb = g.x_gkf_kink
    if p.sdk_t > 2 * gap:
        lid = [
            (xb + gap, g.z_soffit_lid + gap),
            (g.poz_r0 - gap, g.z_soffit_lid + gap),
            (g.poz_r0 - gap, g.z_soffit_lid + p.sdk_t - gap),
            (xb + gap, g.z_soffit_lid + p.sdk_t - gap),
        ]
        lid_solid = _extrude_y(xz_face(lid, LABEL_SOFFIT_GKF), y_soff0, y_soff1, LABEL_SOFFIT_GKF)

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

    # Light-gauge angle along the hidden butt: seat on the slope board, leg
    # across the lid, lip up the rost CD. One strip, no second hanger row.
    angle_parts: list = []
    for quad in g.soffit_joint_angle_quads():
        angle_parts.append(
            _extrude_y(
                xz_face(quad, LABEL_SOFFIT_NONIUS),
                y_soff0,
                y_soff1,
                LABEL_SOFFIT_NONIUS,
            )
        )
    parts.extend(angle_parts)

    # Latový rost: verticals up to the lid (beside the ducts), underside latě
    # braced to the wall. The rost CD is the only hang for the lattice. The
    # wall CD carries the duct trapeze, not this frame.
    fm = p.rost_d
    fw = p.rost_w
    half_w = fw * 0.5
    bt = p.wall_bracket_t
    z_wood0 = g.z_nabeh_bot + t + gap + bt
    # Land on the lid. The rost CD is on the attic side of that board; a short
    # drop through the GKF is the screw, not a riser.
    z_lat_top = g.z_soffit_lid - gap
    face_h = z_lat_top - z_wood0
    x_front = g.x_nh_inner + gap
    x_wall = p.room_width - p.wall_plaster - gap
    frame_parts: list = []
    drop_parts: list = []
    bracket_parts: list = []
    soffit_ys = g.soffit_rost_y_stations(
        y_soff0, y_soff1, g.sikmina_rost_y_stations(y_ceil0, y_ceil1)
    )
    if face_h > fm + gap and x_wall - (x_front + fm) > gap and z_rail_top - z_wood0 > fm:
        cd_xs = g.horiz_cd_x_stations()
        for yc in soffit_ys:
            ya, yb = yc - half_w, yc + half_w
            if yb <= ya:
                continue
            # Vertical latě behind the NH face, beside the duct pack (not through it).
            frame_parts.append(
                _box(x_front, ya, z_wood0, fm - gap, yb - ya, face_h, LABEL_SOFFIT_BATTENS)
            )
            # Underside latě spanning toward the wall.
            frame_parts.append(
                _box(
                    x_front + fm,
                    ya,
                    z_wood0,
                    max(x_wall - (x_front + fm), gap),
                    yb - ya,
                    fm - gap,
                    LABEL_SOFFIT_BATTENS,
                )
            )
            # Drop only at the rost CD. The rails over the pipes are not a hang
            # point for the lattice; the joint angle lands on this same CD.
            z_drop1 = g.z_soffit_lid + p.sdk_t
            drop_h = z_drop1 - z_lat_top
            rost_x = g.x_sdk_break + p.cd_w * 0.5
            if drop_h > gap and any(abs(x - rost_x) < 1.0 for x in cd_xs):
                xc = rost_x
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
            # Wall angle: horizontal under lať + vertical up the plaster.
            leg = p.wall_bracket_leg
            z_ang = z_wood0 - bt
            bracket_parts.append(
                _box(x_wall - leg, ya, z_ang, leg - bt, yb - ya, bt, LABEL_SOFFIT_NONIUS)
            )
            bracket_parts.append(
                _box(x_wall - bt, ya, z_ang + bt, bt, yb - ya, leg - bt, LABEL_SOFFIT_NONIUS)
            )

    # Ø160 spiral ducts along the soffit, 2-over-1. Bare metal, warm side of the lid.
    duct_parts: list = []
    r_duct = p.duct_od * 0.5
    for cx, cz in g.soffit_duct_centers():
        duct_parts.append(_cyl_y(cx, y_soff0, y_soff1, cz, r_duct, LABEL_SOFFIT_DUCT))

    # Trapeze: flat bar under the lower duct, rods up to the CD in the side gaps.
    # Room-side rod lands on the front CD; wall-side rod lands on the wall CD.
    trapeze_parts: list = []
    bar_t = p.soffit_drop_t
    # Centre the 2 mm straps in the gaps beside the pack (not on the metal).
    x_rod_room = 0.5 * (lat_end + x_duct0 - bar_t)
    x_rod_wall = 0.5 * (x_duct1 + p.room_width - bar_t)
    z_bar_top = g.z_soffit_duct_bot() - gap
    if z_bar_top - bar_t > z_rail_top + gap and x_rod_wall - x_rod_room > r_duct:
        z_rod_top = g.z_soffit_lid + p.sdk_t
        rod_h = z_rod_top - (z_bar_top - bar_t)
        for yc in soffit_ys:
            ya = yc - p.soffit_drop_w * 0.5
            yb = yc + p.soffit_drop_w * 0.5
            trapeze_parts.append(
                _box(
                    x_rod_room,
                    ya,
                    z_bar_top - bar_t,
                    (x_rod_wall + bar_t) - x_rod_room,
                    yb - ya,
                    bar_t,
                    LABEL_SOFFIT_NONIUS,
                )
            )
            if rod_h > gap:
                for xr in (x_rod_room, x_rod_wall):
                    trapeze_parts.append(
                        _box(
                            xr,
                            ya,
                            z_bar_top,
                            bar_t,
                            yb - ya,
                            z_rod_top - z_bar_top,
                            LABEL_SOFFIT_NONIUS,
                        )
                    )

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

    service_steel = drop_parts + trapeze_parts + bracket_parts + cleat_parts
    if frame_parts:
        if service_steel:
            frame_parts = [_cut_away(f, service_steel, LABEL_SOFFIT_BATTENS) for f in frame_parts]
        flex_solid = _cut_away(flex_solid, frame_parts + service_steel, LABEL_SOFFIT_FLEX)
        parts.append(flex_solid)
        parts.extend(frame_parts)
    else:
        parts.append(flex_solid)
    parts.extend(drop_parts)
    parts.extend(bracket_parts)
    parts.extend(trapeze_parts)
    parts.extend(cleat_parts)
    parts.extend(duct_parts)

    # GKF last so hangers and trapeze rods can pierce the lid.
    pierce = drop_parts + trapeze_parts
    if lid_solid is not None:
        if pierce:
            lid_solid = _cut_away(lid_solid, pierce, LABEL_SOFFIT_GKF)
        parts.append(lid_solid)

    # MW over the soffit bay must clear horizontal CD + Nonius.
    steel_over_soffit = horiz_cd_parts + horiz_zaves + angle_parts
    if steel_over_soffit:
        for i, part in enumerate(parts):
            if part.label == LABEL_PLENUM_WOOL:
                parts[i] = _cut_away(part, steel_over_soffit, LABEL_PLENUM_WOOL)
                break

    # --- Cabinets: clear of right plaster; top leaves furniture_gap under the box. ---
    furn_w = p.furniture_width - gap
    furn_y0, furn_y1 = g.y_furn0 + gap, g.y_furn1 - gap
    furniture = _box(g.x_furn, furn_y0, 0.0, furn_w, furn_y1 - furn_y0, p.furniture_height, LABEL_FURNITURE)
    # 300×300 columns protrude into the cabinet / soffit bay — notch those runs.
    if furn_col_parts:
        furniture = _cut_away(furniture, furn_col_parts, LABEL_FURNITURE)
        soffit_cut_labels = {
            LABEL_SOFFIT_NH,
            LABEL_SOFFIT_FLEX,
            LABEL_SOFFIT_BATTENS,
            LABEL_SOFFIT_GKF,
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
    return parts


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


def build_elevation_slice(params: ObyvakParams | None = None):
    """YZ slice at the ridge, remapped to XZ (drawing X = world Y) like panel B."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    faces = _labeled_slices(_parts(p, g), Plane.YZ.offset(g.x_ridge))
    mapped = []
    for face in faces:
        placed = face.moved(Location((-g.x_ridge, 0.0, 0.0))).rotate(Axis.Z, -90)
        # Snap onto XZ so SVG export stays planar.
        pts = [(v.X, v.Z) for v in placed.vertices()]
        mapped.append(xz_face(pts, face.label))
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(mapped, label=f"{MODEL_NAME}_slice_elevation"), meta


def _tx(en: str, cs: str) -> dict[str, str]:
    return {"en": en, "cs": cs}


def _callout(
    anchor: tuple[float, float, float],
    en: str,
    cs: str,
    offset: tuple[float, float],
) -> dict:
    return {
        "kind": "callout",
        "anchor": [round(v, 1) for v in anchor],
        "text": _tx(en, cs),
        "offset": [round(offset[0], 3), round(offset[1], 3)],
    }


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

    Lattice is head-on to the window slope (true shape of latě // krokvím and CD).
    Section looks along the room through one rafter bay and keeps both slopes
    plus the soffit. Masonry stays so the věnec under the pozednice is in the picture.
    """
    y_near, y_far, raf_a, raf_b = _rafter_window(p, g)
    y_lat0 = y_near
    # Lattice window: a few bays around that same rafter pair, still off the columns.
    y0 = raf_a - p.rafter_spacing * 0.35
    y1 = raf_b + p.rafter_spacing * 0.55
    y_mid = 0.5 * (y0 + y1)

    # Left-slope face. x_false is the end of the 40° run.
    x_face = 0.42 * g.x_false
    t_nh = g.t_nh_face
    t_rost = t_nh + p.rost_d * 0.5
    t_gkf = t_nh + g.t_flex_pack + p.sdk_t * 0.5
    t_cd = t_nh + g.t_flex_pack + p.sdk_t + p.cd_t * 0.5
    t_cd_outer = t_nh + g.t_flex_pack + p.sdk_t + p.cd_t

    def on_face(x: float, y: float, t_perp: float) -> tuple[float, float, float]:
        return (x, y, g.z_slope_offset(x, t_perp))

    # CD stations are spaced along the slope. Pick two on the steep run.
    cd = [st for st in g.sikmina_cd_stations() if st[0] < g.x_false - 80.0]
    cd_a = cd[1] if len(cd) > 2 else cd[0]
    cd_b = cd[2] if len(cd) > 2 else cd[min(1, len(cd) - 1)]

    rost = [y for y in g.sikmina_rost_y_stations(FACE_GAP, p.room_length - FACE_GAP) if y0 < y < y1]
    rost_pair = (rost[0], rost[1]) if len(rost) > 1 else (y_mid - 312.0, y_mid + 313.0)

    # Middle bracing X sits near mid-length, on the rafter underside.
    y_ceil0 = FACE_GAP
    y_span = (p.room_length - FACE_GAP) - y_ceil0
    y_strap = y_ceil0 + 1.5 * y_span / 3.0
    x_strap = 0.5 * g.x_false
    strap_pt = (x_strap, y_strap, g.z_raf(x_strap))

    # Head-on: look along the attic normal, up along the slope.
    # glTF (x, z, −y). Screen right then runs along the room (CAD +Y).
    look_lat = (-g.sin, g.cos, 0.0)
    up_lat = (g.cos, g.sin, 0.0)
    slope_len = g.x_false / g.cos
    pad = 1.62
    lat_target = on_face(0.28 * g.x_false, y_mid, t_rost)
    lattice = {
        "id": "sikmina-lattice",
        "title": _tx("Slopes — lattice", "Šikmina — rošt"),
        "project": "Obývák 1.02",
        "camera": _ortho_pose(
            lat_target,
            look_lat,
            up_lat,
            0.5 * (y1 - y0) * 0.001 * pad,
            0.5 * slope_len * 0.001 * pad,
        ),
        "projection": "ortho",
        "cuts": [
            _cut((0.0, 0.0, -1.0), (g.x_ridge, y0, g.h_start)),
            _cut((0.0, 0.0, 1.0), (g.x_ridge, y1, g.h_start)),
            _cut((-1.0, 0.0, 0.0), (g.x_ridge, y_mid, g.h_start)),
        ],
        "opacity": {
            LABEL_SLOPE_BATTENS: 1,
            LABEL_SLOPE_CD: 1,
            LABEL_SLOPE_DIRECT: 1,
            LABEL_SLOPE_NONIUS: 1,
            LABEL_RAFTERS: 1,
            LABEL_RACKING_STRAP: 1,
            LABEL_WALL_PLATE: 1,
            # Head-on, the NaturHeld face covers the whole grid, so it stays
            # off. Flex and the foil+GKF board are the same ghosts as the
            # section, light enough that the battens and CD stay the picture.
            LABEL_SLOPE_FLEX: 0.18,
            LABEL_SLOPE_GKF: 0.35,
        },
        "opacityDefault": 0,
        "annotations": [
            _callout(
                on_face(0.62 * g.x_false, rost_pair[0], t_rost),
                "KVH battens 60×40\n// rafters @ 625",
                "Latě KVH 60×40\n// krokvím @ 625",
                (0.14, 0.08),
            ),
            _callout(
                on_face(cd_a[0], y_mid, t_cd),
                "CD 60×27 @ 625\nperpendicular to rafters",
                "CD 60×27 @ 625\n⊥ krokvím",
                (-0.22, 0.02),
            ),
            _callout(
                on_face(cd_b[0], raf_b, t_cd_outer + 40.0),
                "Direct hanger 125\nCD → side of rafter",
                "Přímý závěs 125\nCD → bok krokve",
                (0.2, 0.06),
            ),
            _callout(
                strap_pt,
                "Bracing strap 40×2\n45° across rafters",
                "Páska 40×2\n45° přes krokve",
                (0.16, -0.1),
            ),
            _dim(
                on_face(0.48 * g.x_false, rost_pair[0], t_rost),
                on_face(0.48 * g.x_false, rost_pair[1], t_rost),
                0.055,
            ),
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
        ],
    }

    # Section: kitchen → living, both slopes and the soffit, one rafter bay.
    # The soffit is in the picture with no callouts (its own plate comes later).
    y_note = y_near + 30.0
    x_right = g.x_false + 0.62 * (g.x_furn - g.x_false)
    # Each cut face is its own layer, so a sliced solid stacks two of these.
    # Wool stays the lighter tint. Foil is the 1 mm in the GKF solid, so the
    # board is ghosted a step darker and the wood, CD, and hangers stay solid.
    wool = 0.18
    board = 0.35
    frame_x0 = g.left_eave - 80.0
    frame_x1 = g.right_eave + 80.0
    frame_z0 = g.z_nabeh_bot - 180.0
    frame_z1 = p.ridge_z + 180.0
    sec_pad_w = 1.18
    sec_pad_h = 1.08
    section = {
        "id": "sikmina-section",
        "title": _tx(
            "Slopes — section\nperpendicular to the rafters",
            "Šikmina — řez\nkolmo na krokve",
        ),
        "project": "Obývák 1.02",
        "camera": _ortho_pose(
            (
                0.5 * (frame_x0 + frame_x1),
                y_near,
                0.5 * (frame_z0 + frame_z1),
            ),
            (0.0, 0.0, -1.0),
            (0.0, 1.0, 0.0),
            0.5 * (frame_x1 - frame_x0) * 0.001 * sec_pad_w,
            0.5 * (frame_z1 - frame_z0) * 0.001 * sec_pad_h,
        ),
        "projection": "ortho",
        "cuts": [
            _cut((0.0, 0.0, -1.0), (0.5 * g.x_false, y_near, g.h_start)),
            _cut((0.0, 0.0, 1.0), (0.5 * g.x_false, y_far, g.h_start)),
        ],
        "opacity": {
            LABEL_RAFTERS: 1,
            LABEL_WALL_PLATE: 1,
            LABEL_SLOPE_BATTENS: 1,
            LABEL_SOFFIT_BATTENS: 1,
            LABEL_SLOPE_CD: 1,
            LABEL_SOFFIT_CD: 1,
            LABEL_SLOPE_DIRECT: 1,
            LABEL_SLOPE_NONIUS: 1,
            LABEL_SOFFIT_NONIUS: 1,
            LABEL_RACKING_STRAP: 1,
            LABEL_ROOFING: 1,
            LABEL_MASONRY: 1,
            LABEL_EPS: 1,
            LABEL_PLASTER: 1,
            LABEL_PLENUM_WOOL: wool,
            LABEL_SLOPE_NH: wool,
            LABEL_SLOPE_FLEX: wool,
            LABEL_SOFFIT_NH: wool,
            LABEL_SOFFIT_FLEX: wool,
            LABEL_SLOPE_GKF: board,
            LABEL_SOFFIT_GKF: board,
        },
        "opacityDefault": 0,
        "annotations": [
            _callout(
                on_face(0.28 * g.x_false, y_note, t_nh * 0.5),
                "NaturHeld 140, 60 mm\nStoSilent Finish + Basic 2+2 mm",
                "NaturHeld 140, 60 mm\nStoSilent Finish + Basic 2+2 mm",
                (-0.12, -0.05),
            ),
            _callout(
                on_face(0.42 * g.x_false, y_note, t_rost),
                "KVH battens 60×40 @ 625\nNaturHeld Flex 50 between them",
                "Latě KVH 60×40 @ 625\nNaturHeld Flex 50 mezi nimi",
                (-0.12, -0.08),
            ),
            _callout(
                on_face(0.55 * g.x_false, y_note, t_gkf),
                "Foil + GKF 12.5",
                "Fólie + GKF 12,5",
                (-0.1, -0.06),
            ),
            _callout(
                on_face(0.68 * g.x_false, y_note, t_cd),
                "CD 60×27 @ 625\nperpendicular to rafters",
                "CD 60×27 @ 625\n⊥ krokvím",
                (0.06, 0.05),
            ),
            _callout(
                on_face(0.78 * g.x_false, y_note, t_cd_outer + 36.0),
                "Direct hanger 125\nCD → side of rafter",
                "Přímý závěs 125\nCD → bok krokve",
                (0.08, 0.06),
            ),
            _callout(
                # Mid-depth of the rafter bay: the void below and the fill between
                # krokve are one mineral-wool solid.
                on_face(0.5 * g.x_false, y_note, g.t_left + p.rafter_t * 0.5),
                "Mineral wool",
                "Minerální vlna",
                (0.08, 0.05),
            ),
            _callout(
                on_face(x_right, y_note, t_cd_outer + 80.0),
                "Nonius 340/440\nCD → rafter",
                "Nonius 340/440\nCD → krokev",
                (0.1, 0.06),
            ),
        ],
    }
    return [lattice, section]


def scenes(params: ObyvakParams | None = None) -> list[dict]:
    """Named WebGL viewer scenes (see blueprints.scenes).

    Each scene owns its camera / cut / opacity recipe — values may match today
    (e.g. both ISO along kitchen→living) but are free to diverge later.

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
    sz1 = g.z_soffit_lid + p.sdk_t
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
    # CAD +Y (kitchen→living) → glTF −Z. Camera on the kitchen side.
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
    return [soffit, gable, *_sikmina_plates(p, g)]


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
