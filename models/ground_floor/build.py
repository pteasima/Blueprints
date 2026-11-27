"""Assemble the ground-floor solid: walls, openings, furnishings, rooms."""
from __future__ import annotations

import math
from pathlib import Path

from build123d import Align, Box, Compound

from yaml_ifc import footprints

from bathroom_107 import (
    figures as bathroom_107_figures,
    parts as bathroom_107_parts,
)
from bathroom_120 import (
    LABEL_FLOOR,
    LABEL_GROUT,
    LABEL_WALL,
    head_mm as bathroom_head_mm,
    parts as bathroom_parts,
)
from bedroom_111 import parts as bedroom_111_parts
from electrical_rooms import parts as electrical_rooms_parts

from .constants import (
    DEFAULT_WALL_HEIGHT_M,
    EXPORT_KIND,
    GRIDFINITY_ON_DEMAND,
    LABEL_DOOR,
    LABEL_GLAZING,
    MISSING_THICKNESS_M,
    MODEL_NAME,
    SOURCE_COMMIT,
    SOURCE_PATH,
    SOURCE_REPO,
)
from .document import load_document, load_furnishings
from .doors import (
    _door_field,
    _door_motion,
    _glazed_leaf,
    _opens_toward_plus_y,
    _sectional_leaf,
    _shift_door_leaf,
    is_glazed_door,
    is_sectional,
)
from .furnishings import _furnishing_parts, soffit_solids
from .paint import _mm
from .walls import (
    _axis,
    _base_z_m,
    _extrude_plan,
    _height_m,
    _leaf,
    _local_ring_mm,
    _overlap,
    _place,
    _solids,
    _span_y,
    _subtract_opening,
    _thickness_m,
    _void,
    _wall_label,
)
from .windows import _window_motion, _window_sashes


def build(
    path: Path | None = None,
    furnishings_path: Path | None = None,
    electrical_path: Path | None = None,
):
    doc = load_document(path)
    furn_path = furnishings_path
    if furn_path is None:
        furn_path = (path or SOURCE_PATH).with_name("furnishings.yaml")
    furnishings = load_furnishings(furn_path)
    walls = doc.get("walls") or []
    openings = doc.get("openings") or []
    doors = {
        item["FillsOpening"]: item
        for item in (doc.get("doors") or [])
        if item.get("FillsOpening")
    }
    windows = {
        item["FillsOpening"]: item
        for item in (doc.get("windows") or [])
        if item.get("FillsOpening")
    }
    by_wall: dict[str, list] = {}
    for opening in openings:
        by_wall.setdefault(opening["VoidsElement"], []).append(opening)

    storey_z = float((doc.get("storey") or {}).get("Elevation") or 0.0)
    parts = []
    door_motions: list[dict] = []
    window_motions: list[dict] = []
    cut_ids: list[str] = []
    skipped: list[dict[str, str]] = []
    failed: list[str] = []
    thickness_filled: list[str] = []
    uncut_mm3 = 0.0
    cut_mm3 = 0.0
    expected_mm3 = 0.0

    wall_by_id = {wall["id"]: wall for wall in walls}
    for opening in openings:
        if opening["VoidsElement"] not in wall_by_id:
            raise ValueError(f"{opening['id']} voids unknown wall {opening['VoidsElement']}")

    rings = footprints(doc)
    omitted = [wall["id"] for wall in walls if wall["id"] not in rings]

    for wall in walls:
        frame = _axis(wall)
        if frame is None:
            raise ValueError(f"{wall.get('id')} has no axis")
        (sx, sy), (ex, ey), length_m = frame
        thick_m, filled = _thickness_m(wall)
        if filled:
            thickness_filled.append(wall["id"])
        height_m = _height_m(wall)
        length, thickness, height = _mm(length_m), _mm(thick_m), _mm(height_m)
        ux, uy = (ex - sx) / length_m, (ey - sy) / length_m
        ring = rings.get(wall["id"])
        if ring is None:
            if not filled:
                raise ValueError(f"{wall['id']} has a thickness but yaml_ifc.footprints omitted it")
            body = Box(length, thickness, height, align=(Align.MIN, Align.CENTER, Align.MIN))
        else:
            body = _extrude_plan(_local_ring_mm(ring, sx, sy, ux, uy), height)
        uncut_mm3 += float(body.volume)
        y0, y1 = _span_y(body, thickness)
        label = _wall_label(wall["id"])
        window_leaves = []
        door_leaves = []

        for opening in by_wall.get(wall["id"], []):
            void = _void(opening)
            if void is None:
                skipped.append(
                    {
                        "id": opening["id"],
                        "reason": (
                            "HeadHeight only; Height and SillHeight are not in the source, "
                            "so the void is not cut"
                        ),
                    }
                )
                continue
            along_m, width_m, oheight_m, sill_m = void
            along, width, oheight, sill = (
                _mm(along_m),
                _mm(width_m),
                _mm(oheight_m),
                _mm(sill_m),
            )
            ix = _overlap(along, along + width, 0.0, length)
            iz = _overlap(sill, sill + oheight, 0.0, height)
            expected = ix * thickness * iz
            if expected <= 1.0:
                failed.append(opening["id"])
                continue
            body, ok = _subtract_opening(
                body, along, width, sill, oheight, length, y0, y1, height
            )
            if not ok:
                failed.append(opening["id"])
                continue
            cut_ids.append(opening["id"])
            expected_mm3 += expected
            if opening["id"] in doors:
                filler = doors[opening["id"]]
                leaf = _leaf("door", along, width, sill, oheight, thickness, filler)
                if leaf is not None:
                    # FlushFace sits the leaf on the circulation face;
                    # LeafOffset, if set, wins (OP11/OP17 on the W-017 line).
                    # docs/OpeningsSpec.md, Reverse interior doors.
                    leaf = _shift_door_leaf(
                        leaf, filler, thick_m, axis_is_face=filled
                    )
                if leaf is not None and is_sectional(filler):
                    opens = _opens_toward_plus_y(_door_field(filler, "Swing"))
                    leaf = _sectional_leaf(leaf, opens, y0, y1)
                if leaf is not None:
                    door_leaves.append((leaf, filler))
            elif opening["id"] in windows:
                filler = windows[opening["id"]]
                leaf = _leaf("window", along, width, sill, oheight, thickness, filler)
                if leaf is not None:
                    window_leaves.append((_window_sashes(leaf, filler, y1), filler))

        cut_mm3 += float(body.volume)
        angle = math.degrees(math.atan2(ey - sy, ex - sx))
        origin = (_mm(sx), _mm(sy), _mm(_base_z_m(wall, storey_z)))
        for solid in _solids(body):
            placed = _place(solid, origin, angle, label)
            placed.wall_id = wall["id"]
            placed.element_id = wall["id"]
            parts.append(placed)
        for sashes, filler in window_leaves:
            placed_panels = []
            for panel, solid in sashes:
                placed = _place(solid, origin, angle, LABEL_GLAZING)
                placed.element_id = filler["id"]
                parts.append(placed)
                placed_panels.append((panel, placed))
            window_motions.append(_window_motion(filler, placed_panels))
        for leaf, filler in door_leaves:
            if is_glazed_door(filler) and not is_sectional(filler):
                part = _glazed_leaf(leaf, origin, angle, filler["id"])
                parts.append(part)
                # Hinge from the plain slab: it carries the wall-local frame.
                motion = _door_motion(_place(leaf, origin, angle, LABEL_DOOR), filler)
                if motion is not None:
                    door_motions.append(motion)
                continue
            for solid in _solids(leaf):
                part = _place(solid, origin, angle, LABEL_DOOR)
                part.element_id = filler["id"]
                parts.append(part)
                motion = _door_motion(part, filler)
                if motion is not None:
                    door_motions.append(motion)

    # On-demand viewer layers: label -> solids written to <model>.<label>.glb.
    lazy_layers: dict[str, list] | None = {} if GRIDFINITY_ON_DEMAND else None
    furnishing_parts = _furnishing_parts(furnishings, door_motions, lazy_layers)
    parts.extend(furnishing_parts)
    bath_parts = bathroom_parts()
    parts.extend(bath_parts)
    bath107_parts = bathroom_107_parts()
    parts.extend(bath107_parts)
    if electrical_path is None and path is not None:
        electrical_path = Path(path).with_name("bedroom-1.11.yaml")
    bed_parts = bedroom_111_parts(electrical_path)
    parts.extend(bed_parts)
    room_device_parts = electrical_rooms_parts()
    parts.extend(room_device_parts)
    # Petr, 2026-11-20: "lets get the soffit modeled so I see how it works
    # out with the top cabinets." From the obývák model (models/soffit.py).
    soffit_parts = soffit_solids()
    parts.extend(soffit_parts)
    bath107 = bathroom_107_figures()

    assembly = Compound(obj=parts, children=parts, label=MODEL_NAME)
    removed = (uncut_mm3 - cut_mm3) / 1e9
    meta = {
        "kind": EXPORT_KIND,
        "derived": {
            "source": f"{SOURCE_REPO}@{SOURCE_COMMIT}",
            "walls": len(walls),
            "openings": len(openings),
            "openings_cut": len(cut_ids),
            "wall_height_m": DEFAULT_WALL_HEIGHT_M,
            "w017_thickness_m": MISSING_THICKNESS_M,
            "footprints": len(rings),
            "furnishings": len({part.furnishing_id for part in furnishing_parts}),
            "furnishings_commit": SOURCE_COMMIT,
            "bathroom_tiles": sum(
                1 for part in bath_parts if part.label in {LABEL_FLOOR, LABEL_WALL}
            ),
            "bathroom_grout": sum(1 for part in bath_parts if part.label == LABEL_GROUT),
            "bathroom_head_mm": round(bathroom_head_mm(), 3),
            "bathroom_107_tiles": sum(
                1 for part in bath107_parts if part.label in {LABEL_FLOOR, LABEL_WALL}
            ),
            "bathroom_107_head_mm": round(bath107["head_mm"], 3),
            "bathroom_107_drop_mm": round(bath107["drop_mm"], 3),
            "bathroom_107_screed_drain_mm": round(bath107["screed_drain_mm"], 3),
            "bedroom_111": len(bed_parts),
            "electrical_rooms": len(room_device_parts),
            "soffit_parts": len(soffit_parts),
        },
        "footprints_omitted": omitted,
        "openings_cut": cut_ids,
        "openings_skipped": skipped,
        "openings_failed": failed,
        "thickness_filled": thickness_filled,
        "removed_volume_m3": removed,
        "expected_opening_volume_m3": expected_mm3 / 1e9,
        "doors": len(doors),
        "door_motions": door_motions,
        "windows": len(windows),
        "window_motions": window_motions,
        "lazy_layers": lazy_layers or {},
    }
    return assembly, meta
