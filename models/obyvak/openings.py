"""Pocket-door, eave-window, and gable SDK openings."""

from __future__ import annotations

from obyvak_geom import (
    LABEL_EPS,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_POCKET_FRAME,
    LABEL_WALL_GKF,
    ObyvakLayout,
    ObyvakParams,
)

from .solids import _aabb_hit, _box, _cut_away


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

    Interior plaster, masonry and EPS are the same solids as the rest of the
    wall. The cut ends on the head, so nothing extra is built over the glass.
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
