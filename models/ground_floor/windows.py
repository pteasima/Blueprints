"""Window panel splits, sliding sashes, and viewer opening motions."""
from __future__ import annotations

import math

from build123d import Align, Box, Pos

from blueprints.scenes import cad_mm_to_gltf_m

from .constants import SASH_GAP_MM, WINDOW_TRAVEL
from .doors import _door_field, _point_cad


# --- Windows: which panes open --------------------------------------------
# IFC keeps the panel split on IfcWindow.PartitioningType and each panel's
# OperationType on IfcWindowPanelProperties. yaml-ifc passes
# PartitioningType through but has no panel properties, so the operations
# sit in a property set, one IFC IfcWindowPanelOperationEnum name per panel,
# in order along the host wall axis (start jamb to end jamb, the AlongAxis
# direction). Sources and the per-window reading of the drawings:
# docs/design/ground-floor.md, Windows.
WINDOW_PANELS_PSET = "Pset_BlueprintsWindow"
WINDOW_PANELS_PROP = "PanelOperations"
WINDOW_FIXED = "FIXEDCASEMENT"
WINDOW_SLIDING = "SLIDINGHORIZONTAL"
# A window with no panel data keeps the pre-panel behaviour: one pane that
# slides along the wall. It is not a claim about the real window.
WINDOW_UNKNOWN = "NOTDEFINED"
_WINDOW_OPERATIONS = frozenset(
    {
        "SIDEHUNGRIGHTHAND",
        "SIDEHUNGLEFTHAND",
        "TILTANDTURNRIGHTHAND",
        "TILTANDTURNLEFTHAND",
        "TOPHUNG",
        "BOTTOMHUNG",
        "PIVOTHORIZONTAL",
        "PIVOTVERTICAL",
        WINDOW_SLIDING,
        "SLIDINGVERTICAL",
        "REMOVABLECASEMENT",
        WINDOW_FIXED,
        "OTHEROPERATION",
        WINDOW_UNKNOWN,
    }
)
_WINDOW_PARTITIONS = {
    "SINGLE_PANEL": 1,
    "DOUBLE_PANEL_VERTICAL": 2,
    "TRIPLE_PANEL_VERTICAL": 3,
}


def window_panels(filler: dict) -> list[dict]:
    """Panels of one window, along the host wall from its start jamb.

    Each panel is ``{"operation", "span"}``; ``span`` is the share of the
    leaf width, equal splits. No panel data is one ``NOTDEFINED`` panel.
    """
    ops_text = _door_field(filler, WINDOW_PANELS_PROP)
    partition = filler.get("PartitioningType")
    if ops_text is None:
        if partition not in (None, "SINGLE_PANEL", "NOTDEFINED"):
            raise ValueError(f"{filler.get('id')}: {partition} needs {WINDOW_PANELS_PROP}")
        ops = [WINDOW_UNKNOWN]
    else:
        ops = str(ops_text).split()
    for op in ops:
        if op not in _WINDOW_OPERATIONS:
            raise ValueError(f"{filler.get('id')}: unknown window panel operation {op}")
    expected = _WINDOW_PARTITIONS.get(partition) if partition else None
    if partition and expected is None and partition != "NOTDEFINED":
        raise ValueError(f"{filler.get('id')}: unsupported PartitioningType {partition}")
    if expected is not None and expected != len(ops):
        raise ValueError(
            f"{filler.get('id')}: {partition} has {expected} panels, got {len(ops)} operations"
        )
    n = len(ops)
    return [
        {"operation": op, "span": [round(i / n, 6), round((i + 1) / n, 6)]}
        for i, op in enumerate(ops)
    ]


def window_slide_override(filler: dict) -> tuple[int | None, float | None]:
    """``SlideToward`` (start/end) and ``SlideTravel`` (metres) from the pset.

    A lone sliding sash that runs past its own opening, over a neighbouring
    fixed window (the living-room O11 unit, OP27/OP29 over OP28), names its
    direction and travel; nothing else gives them. Either may be None.
    """
    toward = _door_field(filler, "SlideToward")
    travel = _door_field(filler, "SlideTravel")
    sign = None
    if toward is not None:
        text = str(toward).strip().lower()
        if text not in {"start", "end"}:
            raise ValueError(f"{filler.get('id')}: SlideToward must be start or end, got {toward}")
        sign = 1 if text == "end" else -1
    return sign, (float(travel) if travel is not None else None)


def window_slide_sign(panels: list[dict], index: int, toward: int | None = None) -> int:
    """+1 slides toward the end jamb, −1 toward the start, 0 does not move.

    A sliding sash runs over its fixed neighbour. A lone pane (no fixed
    neighbour, e.g. the ``NOTDEFINED`` default) slides toward the end jamb,
    unless ``toward`` (``window_slide_override``) says otherwise.
    """
    op = panels[index]["operation"]
    if op == WINDOW_FIXED:
        return 0
    if op not in (WINDOW_SLIDING, WINDOW_UNKNOWN):
        # Hinged, tilting or pivoting panes are not animated yet.
        return 0
    if toward is not None:
        return toward
    before = index > 0 and panels[index - 1]["operation"] == WINDOW_FIXED
    after = index + 1 < len(panels) and panels[index + 1]["operation"] == WINDOW_FIXED
    if before and after:
        raise ValueError(f"panel {index} is between two fixed panes; slide direction is ambiguous")
    if before:
        return -1
    return 1


def _window_sashes(leaf, filler: dict, face_y: float | None = None) -> list[tuple[dict, object]]:
    """Split the glazing slab into one solid per panel.

    A moving sash steps off the frame centre by one pane plus
    ``SASH_GAP_MM`` toward local +Y so it can slide over the fixed pane.
    A sash with ``SlideTravel`` runs past its own opening, so it sits on the
    local +Y (indoor) wall face ``face_y`` plus ``SASH_GAP_MM``, clear of the
    posts between the openings.
    """
    panels = window_panels(filler)
    toward, travel = window_slide_override(filler)
    if travel is not None and face_y is not None and len(panels) == 1:
        if window_slide_sign(panels, 0, toward) != 0:
            bb = leaf.bounding_box()
            t = float(bb.max.Y - bb.min.Y)
            yc = float(bb.min.Y + bb.max.Y) / 2.0
            moved = Pos(0.0, face_y + SASH_GAP_MM + t / 2.0 - yc, 0.0) * leaf
            return [(dict(panels[0], index=0), moved)]
    if len(panels) == 1:
        return [(dict(panels[0], index=0), leaf)]
    bb = leaf.bounding_box()
    x0, w = float(bb.min.X), float(bb.max.X - bb.min.X)
    t, h = float(bb.max.Y - bb.min.Y), float(bb.max.Z - bb.min.Z)
    z0, yc = float(bb.min.Z), float((bb.min.Y + bb.max.Y) / 2.0)
    out = []
    for i, panel in enumerate(panels):
        a, b = panel["span"]
        y = yc
        if window_slide_sign(panels, i) != 0:
            y = yc + (t + SASH_GAP_MM)
        solid = Pos(x0 + w * a, y, z0) * Box(
            w * (b - a), t, h, align=(Align.MIN, Align.CENTER, Align.MIN)
        )
        out.append((dict(panel, index=i), solid))
    return out


def _window_motion(filler: dict, placed_panels: list[tuple[dict, object]]) -> dict:
    """Viewer record for one window, glTF metres.

    ``start``/``end`` are the leaf's jamb ends (mid-height). Each panel has
    its world box (``min``/``max``, to sort the glTF face meshes into
    panels), ``centre``, and ``slide``, the full opening move (zero for a
    fixed pane). ``operable`` is false when no panel moves: the viewer then
    leaves the window out of taps and tap targets.
    """
    panels = [panel for panel, _ in placed_panels]
    boxes = []
    for _, part in placed_panels:
        bb = part.bounding_box()
        a = cad_mm_to_gltf_m((bb.min.X, bb.min.Y, bb.min.Z))
        b = cad_mm_to_gltf_m((bb.max.X, bb.max.Y, bb.max.Z))
        boxes.append(([min(p, q) for p, q in zip(a, b)], [max(p, q) for p, q in zip(a, b)]))
    # Wall direction from the leaf's own placement: local +X is the axis.
    loc = placed_panels[0][1].location
    o = cad_mm_to_gltf_m(_point_cad(loc, 0.0, 0.0, 0.0))
    u = cad_mm_to_gltf_m(_point_cad(loc, 1000.0, 0.0, 0.0))
    axis = [q - p for p, q in zip(o, u)]
    norm = math.sqrt(sum(v * v for v in axis)) or 1.0
    axis = [v / norm for v in axis]
    lo = [min(b[0][k] for b in boxes) for k in range(3)]
    hi = [max(b[1][k] for b in boxes) for k in range(3)]
    mid = [(p + q) / 2.0 for p, q in zip(lo, hi)]
    half_w = sum(abs(axis[k]) * (hi[k] - lo[k]) for k in range(3)) / 2.0
    start = [mid[k] - axis[k] * half_w for k in range(3)]
    end = [mid[k] + axis[k] * half_w for k in range(3)]
    toward, travel = window_slide_override(filler)
    out_panels = []
    for i, panel in enumerate(panels):
        lo_i, hi_i = boxes[i]
        width = sum(abs(axis[k]) * (hi_i[k] - lo_i[k]) for k in range(3))
        sign = window_slide_sign(panels, i, toward)
        run = travel if travel is not None else width * WINDOW_TRAVEL
        slide = [round(axis[k] * sign * run, 6) + 0.0 for k in range(3)]
        out_panels.append(
            {
                "operation": panel["operation"],
                "span": panel["span"],
                "center": [round((p + q) / 2.0, 6) for p, q in zip(lo_i, hi_i)],
                "min": [round(v, 6) for v in lo_i],
                "max": [round(v, 6) for v in hi_i],
                "slide": slide,
            }
        )
    return {
        "id": filler["id"],
        "kind": "window",
        "partitioning": filler.get("PartitioningType") or "SINGLE_PANEL",
        "operable": any(window_slide_sign(panels, i, toward) != 0 for i in range(len(panels))),
        "start": [round(v, 6) for v in start],
        "end": [round(v, 6) for v in end],
        "panels": out_panels,
    }
