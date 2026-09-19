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
- Šikminy: NaturHeld 140 → latě // krokvím + Flex between → SDK → CD ⊥ krokvím
  → závěsy → MW plenum → krov + pásky. `krov` = roof timber; `dreveny_rost` = NH latě.
- Soffit box: NH L over cabinets (20 mm gap); Flex + latový rost; GKF lid;
  horizontal CD + Nonius from krokve; rost hung from CD and braced to the eave wall.
  Furniture and pozednice are not structural.

    python -m blueprints.export obyvak

450 mm at the cabinets is eave furniture depth — not the living-gable předstěna 450.
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Align, Axis, Box, Color, Compound, Location, Plane, Rotation, Solid

from obyvak_geom import (
    LABEL_CD,
    LABEL_FLEX,
    LABEL_NATURHELD,
    LABEL_PASKA,
    LABEL_ROST,
    LABEL_ZAVES,
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
    """Through-openings in the X=0 eave (terrace: 2× HS + fixed glass)."""
    cutters = []
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
                p.window_h + 2 * gap + 2.0,
                "_window_cut",
            )
        )
    return cutters


def _cut_wall_openings(parts: list, cutters: list) -> list:
    if not cutters:
        return parts
    out = []
    for part in parts:
        if part.label not in {"eps", "zdivo", "omitka", "sdk"}:
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
            _box(gap, y_sdk, gap, p.room_width - 2 * gap, face_t, h, "sdk")
        )
        for gable, x0, width in p.pocket_doors:
            if gable != end:
                continue
            if x0 < p.room_width / 2.0:
                px0 = x0 + width + gap
            else:
                px0 = x0 - width + gap
            px0 = min(max(px0, gap), p.room_width - width - gap)
            pouzdra.append(_box(px0, y_pocket, gap, width - 2 * gap, pocket_d, h, "pouzdro"))

    # Walk-through openings only (not pouzdro bays).
    door_cutters = _pocket_door_cutters(p, g, gap)
    sdk_parts = _cut_wall_openings(sdk_parts, door_cutters)
    return pouzdra + sdk_parts


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
                "sklo",
            )
        )
    return panes


def _parts(p: ObyvakParams, g: ObyvakLayout) -> list:
    gap = FACE_GAP
    # Room-clear eave run: gable plaster owns y∈[-plaster,0] and [L, L+plaster].
    y0, y1 = gap, p.room_length - gap
    ey = y1 - y0
    structure: list = []

    # --- Floor: clear slab only (walls own the perimeter strip below z=0). ---
    structure.append(
        _box(gap, gap, -p.floor_t, p.room_width - 2 * gap, p.room_length - 2 * gap, p.floor_t, "podlaha")
    )

    # --- Eave walls (panel A): mid-span only. Layer stack outside → inside. ---
    structure.append(
        _box(g.xl_eps, y0, -p.floor_t, p.wall_eps - gap, ey, p.eave_wall_z + p.floor_t, "eps")
    )
    structure.append(
        _box(g.xl_mas, y0, -p.floor_t, p.wall_mason - gap, ey, p.eave_wall_z + p.floor_t, "zdivo")
    )
    structure.append(_box(-p.wall_plaster, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, "omitka"))

    structure.append(_box(p.room_width, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, "omitka"))
    structure.append(
        _box(
            p.room_width + p.wall_plaster + gap,
            y0,
            -p.floor_t,
            p.wall_mason - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            "zdivo",
        )
    )
    structure.append(
        _box(
            g.xr_mas + gap,
            y0,
            -p.floor_t,
            p.wall_eps - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            "eps",
        )
    )

    # Wall plates sit on masonry (not on plaster), clear of gables.
    structure.append(
        _box(g.poz_l0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, "pozednice")
    )
    structure.append(
        _box(g.poz_r0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, "pozednice")
    )

    # --- Gable walls (panel B): full X, own the corners; interior shells only (no EPS). ---
    for ya, yb in (
        (g.yl_mas, -p.wall_plaster - gap),
        (p.room_length + p.wall_plaster + gap, g.yr_mas),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t), "zdivo"), ya, yb, "zdivo"
            )
        )
    for ya, yb in (
        (-p.wall_plaster, -gap),
        (p.room_length + gap, p.room_length + p.wall_plaster),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(0.0, p.room_width, 0.0), "omitka"), ya, yb, "omitka"
            )
        )

    door_cutters = _pocket_door_cutters(p, g, gap)
    window_cutters = _eave_window_cutters(p, g, gap)
    structure = _cut_wall_openings(structure, door_cutters + window_cutters)

    # Cutters: everything the roof must not occupy (walls, plates).
    roof_cutters = [s for s in structure if s.label != "podlaha"]

    # --- Roof: krytina above krov above vata; thinned, then notched around walls. ---
    krov_pts = _shrink_band(g.krov_pts(), top_n=3, gap=gap)
    krytina_pts = [(x, z + gap if i < 3 else z) for i, (x, z) in enumerate(g.krytina_pts())]
    vata_pts = [
        (min(max(x, gap), p.room_width - gap), z + gap if i < 4 else z - gap)
        for i, (x, z) in enumerate(g.vata_pts())
    ]

    krov = _cut_away(
        _extrude_y(xz_face(krov_pts, "krov"), g.y_roof0, g.y_roof1, "krov"),
        roof_cutters,
        "krov",
    )
    krytina = _cut_away(
        _extrude_y(xz_face(krytina_pts, "krytina"), g.y_roof0, g.y_roof1, "krytina"),
        roof_cutters,
        "krytina",
    )
    # Vata is the attic fill: keep it inside the room and clear of předstěny later.
    vata = _extrude_y(xz_face(vata_pts, "vata"), gap, p.room_length - gap, "vata")

    parts: list = list(structure)
    parts.extend(_glass_panes(p, g, gap))
    parts.extend([krov, krytina, vata])

    # --- Šikminy: complete acoustic / steel stack (soffit block unchanged below). ---
    # Y-span matches the clear bay between předstěny (they own the gable ends).
    y_ceil0, y_ceil1 = g.y_furn0 + gap, g.y_furn1 - gap

    def _add_band(pts: list[tuple[float, float]], label: str):
        band = _shrink_closed_band(pts, gap)
        return _extrude_y(xz_face(band, label), y_ceil0, y_ceil1, label)

    # 1) NaturHeld 140 room face
    parts.append(_add_band(g.sikmina_nh_pts(), LABEL_NATURHELD))

    # 2) Latě // krokvím (spaced along Y) + Flex 50 between them
    rost_parts: list = []
    ribbon = g.sikmina_rost_ribbon_pts()
    half_w = p.rost_w * 0.5
    for yc in g.sikmina_rost_y_stations(y_ceil0, y_ceil1):
        ya, yb = yc - half_w, yc + half_w
        if yb <= ya:
            continue
        rost_parts.append(_extrude_y(xz_face(ribbon, LABEL_ROST), ya, yb, LABEL_ROST))
    flex_slope = _add_band(g.sikmina_flex_pts(), LABEL_FLEX)
    if rost_parts:
        flex_slope = _cut_away(flex_slope, rost_parts, LABEL_FLEX)
    parts.append(flex_slope)
    parts.extend(rost_parts)

    # 3) SDK
    parts.append(_add_band(g.sikmina_sdk_pts(), "sdk"))

    # 4) CD ⊥ krokvím (spaced along slope, run along Y)
    cd_parts: list = []
    for quad in g.sikmina_cd_quads():
        cd_parts.append(_extrude_y(xz_face(quad, LABEL_CD), y_ceil0, y_ceil1, LABEL_CD))
    parts.extend(cd_parts)

    # 5) Závěsy CD→krokev at rafter × CD crossings
    zaves_parts: list = []
    rafter_ys = g.rafter_y_stations(y_ceil0, y_ceil1)
    half_hang = p.hanger_w * 0.5
    for st in g.sikmina_cd_stations():
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if min(xs) < 1.0 or max(xs) > g.x_furn - 1.0:
            continue
        hang_quad = g.hanger_quad(*st)
        for yc in rafter_ys:
            zaves_parts.append(
                _extrude_y(
                    xz_face(hang_quad, LABEL_ZAVES),
                    yc - half_hang,
                    yc + half_hang,
                    LABEL_ZAVES,
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
                    p0, p1, p.strap_w, p.strap_t, LABEL_PASKA, thin_dir=(nx, ny, nz)
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

    # Guarantee FACE_GAP mates: shave float nicks against krov / hangers.
    if paska_parts:
        tools = [krov] + zaves_parts
        paska_parts = [_cut_away(bar, tools, LABEL_PASKA) for bar in paska_parts]

    parts.extend(paska_parts)

    # MW plenum must not swallow CD / hangers / pásky.
    if cd_parts or zaves_parts or paska_parts:
        vata = _cut_away(vata, cd_parts + zaves_parts + paska_parts, "vata")
        for i, part in enumerate(parts):
            if part.label == "vata":
                parts[i] = vata
                break

    # --- Soffit bay: GKF lid → horizontal CD → Nonius → krokev; box hangs from CD. ---
    t = g.t_nh_face
    soffit_nh = [
        (g.x_nh_outer + gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + t - gap),
        (g.x_nh_inner - gap, g.z_nabeh_bot + t - gap),
        (g.x_nh_inner - gap, g.z_gkf_horiz - gap),
        (g.x_nh_outer + gap, g.z_gkf_horiz - gap),
    ]
    parts.append(_extrude_y(xz_face(soffit_nh, LABEL_NATURHELD), y_ceil0, y_ceil1, LABEL_NATURHELD))

    flex_box = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + t + gap),
        (p.room_width - gap, g.z_nabeh_bot + t + gap),
        (p.room_width - gap, g.z_gkf_horiz - gap),
        (g.x_nh_inner + gap, g.z_gkf_horiz - gap),
    ]
    flex_solid = _extrude_y(xz_face(flex_box, LABEL_FLEX), y_ceil0, y_ceil1, LABEL_FLEX)

    # Horizontal GKF at the break (šikmina → vodorovně ke zdi), continuous with slope SDK.
    lid_solid = None
    if p.sdk_t > 2 * gap:
        lid = [
            (g.x_furn + gap, g.z_gkf_horiz + gap),
            (p.room_width - gap, g.z_gkf_horiz + gap),
            (p.room_width - gap, g.z_gkf_horiz + p.sdk_t - gap),
            (g.x_furn + gap, g.z_gkf_horiz + p.sdk_t - gap),
        ]
        lid_solid = _extrude_y(xz_face(lid, "sdk"), y_ceil0, y_ceil1, "sdk")

    # Horizontal CD on the lid + UD at break and eave wall.
    horiz_cd_parts: list = []
    for xc in g.horiz_cd_x_stations():
        horiz_cd_parts.append(
            _extrude_y(xz_face(g.horiz_cd_quad(xc), LABEL_CD), y_ceil0, y_ceil1, LABEL_CD)
        )
    horiz_cd_parts.append(
        _extrude_y(xz_face(g.horiz_break_ud_pts(), LABEL_CD), y_ceil0, y_ceil1, LABEL_CD)
    )
    horiz_cd_parts.append(
        _extrude_y(xz_face(g.horiz_wall_ud_pts(), LABEL_CD), y_ceil0, y_ceil1, LABEL_CD)
    )
    parts.extend(horiz_cd_parts)

    # Nonius: horizontal CD → krokev (tall plenum over the cabinet bay).
    horiz_zaves: list = []
    half_hang = p.hanger_w * 0.5
    z_cd_top = g.horiz_hanger_bot_z()
    for xc in g.horiz_cd_x_stations():
        z_top = g.horiz_hanger_top_z(xc) - 2.0 * gap
        hang_h = z_top - z_cd_top
        if hang_h < 20.0:
            continue
        for yc in rafter_ys:
            horiz_zaves.append(
                _box(
                    xc - half_hang,
                    yc - half_hang,
                    z_cd_top,
                    p.hanger_w,
                    p.hanger_w,
                    hang_h,
                    LABEL_ZAVES,
                )
            )
    if horiz_zaves:
        horiz_zaves = [_cut_away(z, [krov], LABEL_ZAVES) for z in horiz_zaves]
    parts.extend(horiz_zaves)

    # Latový rost: top rails under GKF, vertical + underside latě, hung from CD, braced to wall.
    fm = p.rost_d
    fw = p.rost_w
    half_w = fw * 0.5
    bt = p.wall_bracket_t
    # Leave a shelf under the underside latě for the wall angle (above NH).
    z_wood0 = g.z_nabeh_bot + t + gap + bt
    z_rail = g.z_gkf_horiz - fm
    face_h = z_rail - z_wood0
    x_front = g.x_nh_inner + gap
    x_wall = p.room_width - p.wall_plaster - gap
    frame_parts: list = []
    drop_parts: list = []
    bracket_parts: list = []
    if face_h > fm + gap and x_wall - (x_front + fm) > gap:
        cd_xs = g.horiz_cd_x_stations()
        for yc in g.sikmina_rost_y_stations(y_ceil0, y_ceil1):
            ya, yb = yc - half_w, yc + half_w
            if yb <= ya:
                continue
            # Top rail under GKF — carries the box; screwed up to CD through the lid.
            frame_parts.append(
                _box(x_front, ya, z_rail, max(x_wall - x_front, gap), yb - ya, fm - gap, LABEL_ROST)
            )
            # Vertical latě behind the NH face.
            frame_parts.append(
                _box(x_front, ya, z_wood0, fm - gap, yb - ya, face_h, LABEL_ROST)
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
                    LABEL_ROST,
                )
            )
            # Drop hangers: horizontal CD + break UD → this top rail (through GKF).
            z_drop0 = z_rail + fm
            z_drop1 = g.z_gkf_horiz + p.sdk_t  # underside of CD
            drop_h = z_drop1 - z_drop0
            if drop_h > gap:
                drop_xs = list(cd_xs) + [g.x_furn + p.cd_t * 0.5]
                for xc in drop_xs:
                    drop_parts.append(
                        _box(
                            xc - p.soffit_drop_w * 0.5,
                            yc - p.soffit_drop_t * 0.5,
                            z_drop0,
                            p.soffit_drop_w,
                            p.soffit_drop_t,
                            drop_h,
                            LABEL_ZAVES,
                        )
                    )
            # Wall angle: horizontal under lať + vertical up the plaster (no shared volume).
            leg = p.wall_bracket_leg
            z_br = z_wood0 - bt
            bracket_parts.append(
                _box(x_wall - leg, ya, z_br, leg - bt, yb - ya, bt, LABEL_ZAVES)
            )
            bracket_parts.append(
                _box(x_wall - bt, ya, z_br + bt, bt, yb - ya, leg - bt, LABEL_ZAVES)
            )
    if frame_parts:
        # Steel mates against timber with FACE_GAP — shave any float nicks.
        steel = drop_parts + bracket_parts
        if steel:
            frame_parts = [_cut_away(f, steel, LABEL_ROST) for f in frame_parts]
        flex_solid = _cut_away(flex_solid, frame_parts + steel, LABEL_FLEX)
        parts.append(flex_solid)
        parts.extend(frame_parts)
        parts.extend(drop_parts)
        parts.extend(bracket_parts)
    else:
        parts.append(flex_solid)

    # GKF lid last so drop hangers can pierce it (FACE_GAP mates).
    if lid_solid is not None:
        if drop_parts:
            lid_solid = _cut_away(lid_solid, drop_parts, "sdk")
        parts.append(lid_solid)

    # MW over the soffit bay must clear horizontal CD + Nonius.
    steel_over_soffit = horiz_cd_parts + horiz_zaves
    if steel_over_soffit:
        for i, part in enumerate(parts):
            if part.label == "vata":
                parts[i] = _cut_away(part, steel_over_soffit, "vata")
                break

    # --- Cabinets: clear of right plaster; top leaves furniture_gap under the box. ---
    furn_w = p.furniture_width - gap
    furn_y0, furn_y1 = g.y_furn0 + gap, g.y_furn1 - gap
    parts.append(
        _box(g.x_furn, furn_y0, 0.0, furn_w, furn_y1 - furn_y0, p.furniture_height, "nabytek")
    )

    # --- Předstěny + pouzdra: inset from plaster and from each other. ---
    pred_pts = []
    for i, (x, z) in enumerate(g.predstena_pts()):
        x = min(max(x, gap), p.room_width - gap)
        z = z + gap if i < 2 else z - gap
        pred_pts.append((x, z))
    pred = xz_face(pred_pts, "predstena")
    pred_k = _extrude_y(pred, gap, p.predstena_kitchen - gap, "predstena")
    pred_l = _extrude_y(pred, g.y_pred_r + gap, p.room_length - gap, "predstena")
    parts.extend([pred_k, pred_l])

    # Attic wool stops at the předstěny (they own that bay).
    for i, part in enumerate(parts):
        if part.label == "vata":
            parts[i] = _cut_away(part, [pred_k, pred_l], "vata")
            break

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


def build_preview(params: ObyvakParams | None = None):
    """Dollhouse cutaway: drop roof and furniture eave — keep window wall + both gables."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    kept = []
    for part in _parts(p, g):
        bb = part.bounding_box()
        if part.label in {"krov", "krytina", "vata", LABEL_CD, LABEL_ZAVES, LABEL_PASKA}:
            continue
        if part.label in {LABEL_ROST, LABEL_NATURHELD, LABEL_FLEX}:
            # Keep cabinet soffit assembly; drop slope pack.
            if bb.min.X >= g.x_furn - 1.0:
                kept.append(part)
            continue
        if part.label == "sdk" and bb.min.Z >= g.h_start - 50.0:
            # Slope / lid GKF is roof pack — drop; keep gable pocket SDK.
            continue
        if part.label in {"eps", "zdivo", "omitka", "pozednice", "nabytek"}:
            if bb.min.X >= p.room_width - 1.0:
                continue
        kept.append(part)
    return _compound(kept, label=f"{MODEL_NAME}_cutaway"), _meta(p, g)


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
    """XZ slice through a rost lať near mid-length (panel A station from 3D solids)."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    # Discrete latě miss a pure mid-Y cut; snap to the nearest rost centreline.
    y_target = p.room_length / 2.0
    stations = g.sikmina_rost_y_stations(g.y_furn0, g.y_furn1)
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


def scenes(params: ObyvakParams | None = None) -> list[dict]:
    """Named WebGL viewer scenes (see blueprints.scenes).

    Soffit: orthographic cross-section of the cabinet soffit. GLB is glTF Y-up
    (CAD Z→Y, CAD Y→−Z). Cut along room length from the kitchen gable; camera
    looks straight along that axis at the soffit with Y up.
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    gap = FACE_GAP
    # Match the soffit box bay (cabinet run, NH L + Flex cavity).
    sx0, sx1 = g.x_furn, g.x_furn + p.furniture_width
    sy0, sy1 = g.y_furn0 + gap, g.y_furn1 - gap
    sz0 = g.z_nabeh_bot + gap
    sz1 = g.z_gkf_horiz - gap
    cx = 0.5 * (sx0 + sx1)
    cy = 0.5 * (sy0 + sy1)
    cz = 0.5 * (sz0 + sz1)
    # View plane is glTF XY (= CAD X width × CAD Z height).
    pad = 1.25
    frame_x0 = g.x_furn - 250.0
    frame_x1 = p.room_width + p.wall_plaster + 50.0
    frame_z0 = p.furniture_height - 150.0
    frame_z1 = g.z_gkf_horiz + 200.0
    half_w = 0.5 * (frame_x1 - frame_x0) * pad * 0.001
    half_h = 0.5 * (frame_z1 - frame_z0) * pad * 0.001
    dist_m = max(half_w, half_h, 0.35) * 5.0
    target = cad_mm_to_gltf_m((cx, cy, cz))
    # CAD +Y (kitchen→living) → glTF −Z. Camera on the kitchen side.
    look = (0.0, 0.0, -1.0)
    position = [
        target[0] - look[0] * dist_m,
        target[1] - look[1] * dist_m,
        target[2] - look[2] * dist_m,
    ]
    return [
        {
            "id": "soffit",
            "label": "Soffit",
            "camera": {
                "target": target,
                "position": position,
                "up": [0.0, 1.0, 0.0],
                "orthoFit": [half_w, half_h],
            },
            "projection": "ortho",
            "cuts": [{"normal": list(look), "t": 0.5}],
            "opacity": {LABEL_FLEX: 1, LABEL_NATURHELD: 1, LABEL_ROST: 1, "omitka": 1},
            "opacityDefault": 0.5,
        }
    ]


def extra_exports(params: ObyvakParams | None = None):
    preview, _ = build_preview(params)
    section, _ = build_section_slice(params)
    elevation, _ = build_elevation_slice(params)
    return [
        ("cutaway", preview, "solid"),
        ("slice_section", section, "section"),
        ("slice_elevation", elevation, "section"),
    ]


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
