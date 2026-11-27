"""Callouts, dimensions, camera poses, and šikmina plate drawings."""

from __future__ import annotations

import math

from obyvak_geom import (
    LABEL_EPS,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_PLENUM_WOOL,
    LABEL_RACKING_STRAP,
    LABEL_RAFTERS,
    LABEL_ROOFING,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_DIRECT,
    LABEL_SLOPE_FOIL,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
    LABEL_SOFFIT_UD,
    LABEL_SOFFIT_WOOL,
    LABEL_TIE_ROD,
    LABEL_WALL_PLATE,
    ObyvakLayout,
    ObyvakParams,
)

from .bass import bass_cd_centres, bass_soffit_stop_x
from .solids import FACE_GAP


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
