"""2D plan of room 1.11. The drawing is the deliverable; the 3D origins are not moved.

Devices and the unfinished bed come from ``bedroom-1.11.yaml``.
Rules are the short names in ``docs/electrical/PlanNotes.md``.
"""

from __future__ import annotations

import html
from dataclasses import dataclass
from pathlib import Path

from yaml_ifc import footprints
from yaml_ifc.yamlio import load as load_yaml

from bedroom_111 import SOURCE_PATH, WALLS_PATH, device_records, room_faces


PLAN_SVG = (
    Path(__file__).resolve().parents[1] / "docs" / "previews" / "bedroom-1.11" / "plan.svg"
)
PLAN_PNG = PLAN_SVG.with_suffix(".png")
PLAN_HTML = Path(__file__).resolve().parents[1] / "docs" / "electrical" / "1.11.html"

# Centres, millimetres. The first device of a kind sits on the stated centre.
# The next plate in a stack is one 80 mm module above that centre.
SOCKET_CENTRE_MM = 300
SWITCH_CENTRE_MM = 1350
MODULE_MM = 80
ETHERNET_CENTRE_MM = SOCKET_CENTRE_MM + MODULE_MM
FROM_DOOR_MM = 150
FROM_INNER_CORNER_MM = 300
FROM_OUTER_CORNER_OUTDOORS_MM = 300

# Door leaf traced on the floor-plan screenshot (py 386, px 129–178),
# registered to the inner west face. The wall model has no opening here.
DOOR_X0 = 0.676
DOOR_X1 = 1.680

_FILL = {
    "light": "#e6b20a",
    "switch": "#2a78dc",
    "sensor": "#1e9a55",
    "outlet": "#e07a28",
    "socket": "#d64545",
    "actuator": "#8a4db8",
    "strip": "#e07a28",
}
_PARKED_FILL = "#b9b3a8"
# Plan view, metres: west exterior, south exterior, east of the bay, north of W-018.
_VIEW = (-1.4, 2.15, 5.4, 10.55)


@dataclass(frozen=True)
class Mark:
    """One device on the plan. ``current_id`` is empty when Soupis has no row."""

    current_id: str
    proposed_id: str
    kind: str
    x: float
    y: float
    place: str
    stack: str
    rule: str
    note: str
    parked: bool = False


def envelope() -> dict[str, float]:
    """Floor-plan room faces, plus the smaller bay the wall model actually closes.

    The model stops the east partition on the line of W-013. The floor plan
    keeps the room going north through the narrow west window to W-018.
    """
    faces = room_faces()
    doc = load_yaml(WALLS_PATH)
    walls = {wall["id"]: wall for wall in doc["walls"]}
    west = walls["W-030"]
    south = walls["W-002"]
    north = walls["W-018"]
    return {
        "west": faces["west"],
        "east": faces["east"],
        "south": faces["south"],
        "model_north": faces["north"],
        "north": float(north["Axis"]["Start"][1]) - float(north["Thickness"]) / 2.0,
        "west_out": float(west["Axis"]["Start"][0]) - float(west["Thickness"]) / 2.0,
        "south_out": float(south["Axis"]["Start"][1]) - float(south["Thickness"]) / 2.0,
        "north_out": float(north["Axis"]["Start"][1]) + float(north["Thickness"]) / 2.0,
    }


def _opening_span(opening_id: str) -> tuple[float, float]:
    doc = load_yaml(WALLS_PATH)
    opening = next(item for item in doc["openings"] if item["id"] == opening_id)
    wall = next(item for item in doc["walls"] if item["id"] == opening["VoidsElement"])
    start = wall["Axis"]["Start"]
    end = wall["Axis"]["End"]
    horizontal = abs(end[0] - start[0]) >= abs(end[1] - start[1])
    origin = float(start[0] if horizontal else start[1])
    near = origin + float(opening["AlongAxis"])
    return near, near + float(opening["Width"])


def marks() -> list[Mark]:
    """Plan positions. Centres follow the house rules; the along-wall place is from a corner or the door."""
    box = envelope()
    west_in, east_in = box["west"], box["east"]
    south_in, north_in = box["south"], box["north"]
    west_out, south_out = box["west_out"], box["south_out"]
    north_out = box["north_out"]
    south_win0, _south_win1 = _opening_span("OP05")
    _wide0, wide1 = _opening_span("OP01")
    _narrow0, narrow1 = _opening_span("OP02")
    outside = 0.06
    door_switch_x = DOOR_X1 + FROM_DOOR_MM / 1000.0
    east_south_y = south_in + FROM_INNER_CORNER_MM / 1000.0
    east_north_y = north_in - FROM_INNER_CORNER_MM / 1000.0
    outdoor_y = south_out + FROM_OUTER_CORNER_OUTDOORS_MM / 1000.0
    bed_x0, bed_y0, bed_x1, bed_y1 = bed_outline()
    rows = [
        Mark("C12-S", "1.11-L2", "light", (bed_x0 + bed_x1) / 2.0, (bed_y0 + bed_y1) / 2.0, "ceiling", "", "ceiling", "Pendant above the bed. Cable 12."),
        Mark("C3-S", "1.11-L4", "strip", bed_x0, bed_y0, "bed", "", "bed-edge", "LED strip under the bed, all around the unfinished outline. Cable 3."),
        Mark("C11-S", "1.11-L1", "light", east_in - 0.55, north_in - 1.15, "ceiling", "", "ceiling", "Ceiling near the door."),
        Mark("C14-W", "1.11-AP1", "light", (west_in + east_in) / 2.0, north_in - 2.4, "ceiling", "", "ceiling", "Access point on the bedroom ceiling."),
        Mark("C5-S", "1.11-L3", "light", east_in - 0.7, north_in - 1.85, "ceiling", "", "ceiling", "Ceiling light by the north east plates."),
        Mark("C2-S", "1.11-L5", "light", east_in - 1.15, south_in + 0.9, "ceiling", "", "ceiling", "Ceiling light by the south east plates."),
        Mark("C7-S", "1.11-L6", "light", west_in + 0.60, south_in + 0.70, "ceiling", "", "ceiling", "Southwest ceiling pair."),
        Mark("C8-S", "1.11-L7", "light", west_in + 1.30, south_in + 0.70, "ceiling", "", "ceiling", "Southwest ceiling pair."),
        Mark("C32-V-1", "1.11-B2", "switch", door_switch_x, north_in, "wall", "door", "1350", "Bedroom light switch, 150 mm from the door edge. Centre 1350."),
        Mark("C9-R", "1.11-P1", "sensor", door_switch_x, north_in, "wall", "door", "in box", "mmWave inside the bedroom door switch C32-V-1. No dot of its own."),
        Mark("C10-V", "1.11-B1", "switch", door_switch_x, north_in, "wall", "door", "1350+80", "Second button, stacked above 1350."),
        Mark("SOCK-N", "1.11-Z1", "socket", door_switch_x, north_in, "wall", "door", "300", "Power socket, centre 300. No cable."),
        Mark("C13-E", "1.11-D1", "outlet", door_switch_x, north_in, "wall", "door", "380", "Ethernet right above the socket. Centre 380."),
        Mark("C32-M", "1.11-K1", "sensor", DOOR_X1, north_in, "frame", "", "frame", "Door contact in the frame, east jamb."),
        Mark("C32-V-2", "1.11-B3", "switch", door_switch_x, north_out, "corridor", "", "1350", "Hallway switch on the other side of the door. Centre 1350."),
        Mark("C4-2V", "1.11-B4", "switch", east_in, east_north_y, "wall", "east-n", "1350", "300 mm from the inner north-east corner. Centre 1350."),
        Mark("SOCK-EN", "1.11-Z2", "socket", east_in, east_north_y, "wall", "east-n", "300", "Power socket, centre 300. No cable."),
        Mark("C1-2V", "1.11-B5", "switch", east_in, east_south_y, "wall", "east-s", "1350", "300 mm from the inner south-east corner. Centre 1350."),
        Mark("SOCK-ES", "1.11-Z3", "socket", east_in, east_south_y, "wall", "east-s", "300", "Power socket, centre 300. No cable."),
        Mark("C9-M", "1.11-K2", "sensor", south_win0, south_in, "frame", "", "frame", "Contact in the south window frame, west jamb."),
        Mark("C46-B", "1.11-XR1", "actuator", south_win0 - 0.15, south_out - outside, "exterior", "", "facade", "Blind motor outside, west of the south window."),
        Mark("C18-B", "1.11-XR2", "actuator", west_out - outside, wide1 + 0.15, "exterior", "", "facade", "Blind motor outside, north of the wide west window OP01."),
        Mark("C16-B", "1.11-XR3", "actuator", west_out - outside, (narrow1 + north_in) / 2.0, "exterior", "", "facade", "Blind motor outside, beside the narrow west window OP02."),
        Mark("C6-2V", "1.11-XB1", "switch", west_out - outside, outdoor_y, "exterior", "sw", "1350", "Double button, 300 mm from the outer corner. Centre 1350."),
        Mark("C6-V", "1.11-XB2", "switch", west_out - outside, outdoor_y, "exterior", "sw", "1350+80", "Single button on the same cable 6, stacked above."),
        Mark("SOCK-X", "1.11-XZ1", "socket", west_out - outside, outdoor_y, "exterior", "sw", "300", "Outdoor socket, centre 300. No cable."),
        Mark("LAMP-X-W", "1.11-XL1", "light", west_out - outside, outdoor_y + 0.45, "exterior", "", "unused", "UNUSED. Parked. TODO: cable number unresolved.", parked=True),
        Mark("LAMP-X-S", "1.11-XL2", "light", south_win0 - 0.55, south_out - outside, "exterior", "", "unused", "UNUSED. Parked. Not wired.", parked=True),
    ]
    known = {record["id"] for record in device_records()}
    drawn = {mark.current_id for mark in rows if mark.current_id}
    if drawn != known:
        missing = known - drawn
        extra = drawn - known
        raise ValueError(f"plan marks drift from the yaml: missing {missing}, extra {extra}")
    return rows


def bed_outline() -> tuple[float, float, float, float]:
    """UNFINISHED placeholder bed, metres, from BED-1.11 in the device file.

    The rectangle is the floor-plan trace (pixels 184,539 and 267,612 on the
    screenshot, registered to the model bay and rounded to 1 mm). It is not
    a solid. furnishings.yaml has no bedroom furniture.
    """
    doc = load_yaml(SOURCE_PATH)
    bed = next(item for item in doc.get("furniture") or [] if item["id"] == "BED-1.11")
    props: dict = {}
    for group in bed.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            props.update(group.get("Properties") or {})
    if props.get("Status") != "UNFINISHED" or props.get("Placeholder") is not True:
        raise ValueError("BED-1.11 must stay an UNFINISHED placeholder")
    x0, y0, x1, y1 = (float(props[key]) for key in ("X0", "Y0", "X1", "Y1"))
    return min(x0, x1), min(y0, y1), max(x0, x1), max(y0, y1)


def _walls_in_view() -> list[tuple[str, list[list[float]]]]:
    doc = load_yaml(WALLS_PATH)
    rings = footprints(doc)
    view = _VIEW
    kept = []
    for wall_id, ring in rings.items():
        xs = [point[0] for point in ring]
        ys = [point[1] for point in ring]
        if max(xs) < view[0] or min(xs) > view[2] or max(ys) < view[1] or min(ys) > view[3]:
            continue
        kept.append((wall_id, ring))
    return kept


def _opening_rects() -> list[tuple[str, float, float, float, float]]:
    """(id, x0, y0, x1, y1) of each void that cuts a wall in the view."""
    doc = load_yaml(WALLS_PATH)
    walls = {wall["id"]: wall for wall in doc["walls"]}
    rects = []
    for opening in doc["openings"]:
        if opening.get("Height") is None:
            continue
        wall = walls.get(opening["VoidsElement"])
        if wall is None or wall.get("Thickness") is None:
            continue
        start = wall["Axis"]["Start"]
        end = wall["Axis"]["End"]
        thickness = float(wall["Thickness"])
        horizontal = abs(end[0] - start[0]) >= abs(end[1] - start[1])
        near, far = _opening_span(opening["id"])
        if horizontal:
            y = float(start[1])
            rect = (opening["id"], near, y - thickness / 2.0, far, y + thickness / 2.0)
        else:
            x = float(start[0])
            rect = (opening["id"], x - thickness / 2.0, near, x + thickness / 2.0, far)
        x0, y0, x1, y1 = rect[1:]
        if x1 < _VIEW[0] or x0 > _VIEW[2] or y1 < _VIEW[1] or y0 > _VIEW[3]:
            continue
        if opening["VoidsElement"] in {"W-002", "W-030", "W-031", "W-013"}:
            rects.append(rect)
    return rects


def _esc(text: str) -> str:
    return html.escape(text, quote=True)


def _label_offset(mark: Mark, box: dict[str, float]) -> tuple[str, float, float]:
    """(anchor, dx, dy) in SVG pixels. Keeps a stack's words off the wall."""
    if mark.stack == "door":
        return "start", 16, 52
    if mark.current_id == "C32-M":
        return "end", -12, 16
    if mark.place == "corridor":
        return "start", 14, -18
    if mark.place == "exterior" and mark.x < box["west_out"]:
        return "end", -14, 4
    if mark.proposed_id == "1.11-XL2":
        return "end", -12, 14
    if mark.current_id == "C46-B":
        return "start", 12, 16
    if mark.current_id == "C12-S":
        return "start", 58, -4
    if mark.current_id == "C9-M":
        return "start", 12, -8
    if abs(mark.x - box["east"]) < 0.02:
        return "end", -14, -8
    return "start", 12, -8


def _item_label(item: Mark) -> str:
    name = item.current_id or item.proposed_id
    if item.parked:
        return f"{name} UNUSED"
    if item.rule in {"1350", "1350+80", "300", "380", "in box"}:
        return f"{name} {item.rule}"
    return name


def render_svg() -> str:
    box = envelope()
    xmin, ymin, xmax, ymax = -2.7, 1.7, 5.3, 10.7
    scale = 92.0
    pad = 28.0
    legend_w = 460.0

    def sx(x: float) -> float:
        return pad + (x - xmin) * scale

    def sy(y: float) -> float:
        return pad + (ymax - y) * scale

    width = pad * 2 + (xmax - xmin) * scale + legend_w
    height = pad * 2 + (ymax - ymin) * scale + 52.0
    parts: list[str] = []
    parts.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.0f} {height:.0f}" font-family="ui-sans-serif, sans-serif">'
    )
    parts.append(
        "<defs>"
        '<pattern id="gap" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
        '<line x1="0" y1="0" x2="0" y2="9" stroke="#c4b49a" stroke-width="1.4"/>'
        "</pattern>"
        '<pattern id="unfin" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
        '<line x1="0" y1="0" x2="0" y2="8" stroke="#c47b2b" stroke-width="1.6"/>'
        "</pattern>"
        "</defs>"
    )
    parts.append(f'<rect width="{width:.0f}" height="{height:.0f}" fill="#f7f4ee"/>')
    # Exterior ground, west of the outer face and south of it.
    parts.append(
        f'<rect x="{sx(xmin):.1f}" y="{sy(ymax):.1f}" width="{(0 - xmin) * scale:.1f}" '
        f'height="{(ymax - ymin) * scale:.1f}" fill="#e4eef4"/>'
    )
    parts.append(
        f'<rect x="{sx(xmin):.1f}" y="{sy(box["south_out"]):.1f}" width="{(xmax - xmin) * scale:.1f}" '
        f'height="{(box["south_out"] - ymin) * scale:.1f}" fill="#e4eef4"/>'
    )
    parts.append(
        f'<text x="{sx(xmin) + 8:.0f}" y="{sy((ymin + box["south_out"]) / 2):.0f}" '
        f'fill="#3d6d86" font-size="13">exteriér</text>'
    )
    # Room floor.
    parts.append(
        f'<rect x="{sx(box["west"]):.1f}" y="{sy(box["north"]):.1f}" '
        f'width="{(box["east"] - box["west"]) * scale:.1f}" '
        f'height="{(box["north"] - box["south"]) * scale:.1f}" fill="#fffdf8" stroke="none"/>'
    )
    for wall_id, ring in _walls_in_view():
        points = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in ring)
        parts.append(f'<polygon points="{points}" fill="#d9d3c7" stroke="#5c564c" stroke-width="1"/>')
    for opening_id, x0, y0, x1, y1 in _opening_rects():
        parts.append(
            f'<rect x="{sx(min(x0, x1)):.1f}" y="{sy(max(y0, y1)):.1f}" '
            f'width="{abs(x1 - x0) * scale:.1f}" height="{abs(y1 - y0) * scale:.1f}" '
            f'fill="#fffdf8" stroke="none"/>'
        )
        mx, my = (x0 + x1) / 2.0, (y0 + y1) / 2.0
        if abs(x1 - x0) > abs(y1 - y0):
            parts.append(
                f'<line x1="{sx(x0):.1f}" y1="{sy(my):.1f}" x2="{sx(x1):.1f}" y2="{sy(my):.1f}" '
                f'stroke="#3d8eb8" stroke-width="3"/>'
            )
        else:
            parts.append(
                f'<line x1="{sx(mx):.1f}" y1="{sy(y0):.1f}" x2="{sx(mx):.1f}" y2="{sy(y1):.1f}" '
                f'stroke="#3d8eb8" stroke-width="3"/>'
            )
    # Floor the plan keeps and the wall model does not close.
    parts.append(
        f'<rect x="{sx(box["west"]):.1f}" y="{sy(box["north"]):.1f}" '
        f'width="{(box["east"] - box["west"]) * scale:.1f}" '
        f'height="{(box["north"] - box["model_north"]) * scale:.1f}" fill="url(#gap)" stroke="none"/>'
    )
    parts.append(
        f'<line x1="{sx(box["west"]):.1f}" y1="{sy(box["model_north"]):.1f}" '
        f'x2="{sx(box["east"]):.1f}" y2="{sy(box["model_north"]):.1f}" '
        f'stroke="#8a5a2a" stroke-width="1.2" stroke-dasharray="5 3"/>'
    )
    parts.append(
        f'<line x1="{sx(box["east"]):.1f}" y1="{sy(box["model_north"]):.1f}" '
        f'x2="{sx(box["east"]):.1f}" y2="{sy(box["north"]):.1f}" '
        f'stroke="#8a5a2a" stroke-width="1.6" stroke-dasharray="5 3"/>'
    )
    parts.append(
        f'<text x="{sx(box["east"] - 0.08):.1f}" y="{sy(box["model_north"]) + 13:.1f}" '
        f'text-anchor="end" fill="#6b5344" font-size="10">model stops</text>'
    )
    # Door traced on the floor plan. The wall model has no opening on this bay.
    parts.append(
        f'<rect x="{sx(DOOR_X0):.1f}" y="{sy(box["north_out"]):.1f}" '
        f'width="{(DOOR_X1 - DOOR_X0) * scale:.1f}" height="{(box["north_out"] - box["north"]) * scale:.1f}" '
        f'fill="#fffdf8" stroke="none"/>'
    )
    leaf = DOOR_X1 - DOOR_X0
    parts.append(
        f'<line x1="{sx(DOOR_X0):.1f}" y1="{sy(box["north"]):.1f}" x2="{sx(DOOR_X1):.1f}" '
        f'y2="{sy(box["north"]):.1f}" stroke="#1c1c1c" stroke-width="3"/>'
    )
    parts.append(
        f'<line x1="{sx(DOOR_X0):.1f}" y1="{sy(box["north"]):.1f}" x2="{sx(DOOR_X0):.1f}" '
        f'y2="{sy(box["north"] + leaf):.1f}" stroke="#1c1c1c" stroke-width="1.3"/>'
    )
    parts.append(
        f'<path d="M {sx(DOOR_X1):.1f} {sy(box["north"]):.1f} '
        f'A {leaf * scale:.1f} {leaf * scale:.1f} 0 0 1 '
        f'{sx(DOOR_X0):.1f} {sy(box["north"] + leaf):.1f}" '
        f'fill="none" stroke="#1c1c1c" stroke-width="1"/>'
    )
    parts.append(
        f'<text x="{sx(DOOR_X0) - 8:.1f}" y="{sy(box["north"] + leaf * 0.45):.1f}" '
        f'text-anchor="end" fill="#444" font-size="10">floor-plan door</text>'
    )
    bx0, by0, bx1, by1 = bed_outline()
    inset = 0.04
    parts.append(
        f'<rect x="{sx(bx0):.1f}" y="{sy(by1):.1f}" width="{(bx1 - bx0) * scale:.1f}" '
        f'height="{(by1 - by0) * scale:.1f}" fill="url(#unfin)" stroke="#a15c07" '
        f'stroke-width="2.4" stroke-dasharray="7 4"/>'
    )
    parts.append(
        f'<rect x="{sx(bx0 + inset):.1f}" y="{sy(by1 - inset):.1f}" '
        f'width="{(bx1 - bx0 - 2 * inset) * scale:.1f}" '
        f'height="{(by1 - by0 - 2 * inset) * scale:.1f}" fill="none" stroke="#e07a28" stroke-width="3"/>'
    )
    parts.append(
        f'<text x="{sx(bx0) + 8:.1f}" y="{sy(by1) + 20:.1f}" text-anchor="start" '
        f'fill="#7a3e00" font-size="15" font-weight="700">UNFINISHED</text>'
    )
    parts.append(
        f'<text x="{sx(bx0) + 8:.1f}" y="{sy(by1) + 36:.1f}" text-anchor="start" '
        f'fill="#7a3e00" font-size="12" font-weight="700">placeholder furniture</text>'
    )
    parts.append(
        f'<text x="{sx(bx1) - 8:.1f}" y="{sy(by0) - 8:.1f}" text-anchor="end" '
        f'fill="#c2410c" font-size="11" font-weight="600">C3-S strip</text>'
    )
    parts.append(
        f'<text x="{sx(box["west"] + 0.12):.1f}" y="{sy(by0 + 0.55):.1f}" '
        f'fill="#444" font-size="14" font-weight="600">1.11 Ložnice</text>'
    )
    # Devices. One dot per stack. The strip is the bed outline, not a dot.
    groups: dict[tuple, list[Mark]] = {}
    for mark in marks():
        if mark.kind == "strip":
            continue
        groups.setdefault((round(mark.x, 3), round(mark.y, 3)), []).append(mark)
    for (x, y), group in groups.items():
        parked = all(item.parked for item in group)
        fill = _PARKED_FILL if parked else _FILL[group[0].kind]
        radius = 7 if len(group) == 1 else 9
        dash = ' stroke-dasharray="2 2"' if parked else ""
        parts.append(
            f'<circle cx="{sx(x):.1f}" cy="{sy(y):.1f}" r="{radius}" fill="{fill}" '
            f'stroke="#1c1c1c" stroke-width="1"{dash}/>'
        )
        anchor, dx, dy = _label_offset(group[0], box)
        # A corner stack grows up, away from the door labels, which grow down.
        if group[0].stack in {"east-n", "east-s"}:
            dy -= (len(group) - 1) * 13
        tx, ty = sx(x) + dx, sy(y) + dy
        parts.append(
            f'<line x1="{sx(x):.1f}" y1="{sy(y):.1f}" x2="{tx:.1f}" y2="{ty - 4:.1f}" '
            f'stroke="#b7b1a6" stroke-width="0.6"/>'
        )
        for index, item in enumerate(group):
            parts.append(
                f'<text x="{tx:.1f}" y="{ty + index * 13:.1f}" text-anchor="{anchor}" '
                f'font-size="11" fill="#1c1c1c">{_esc(_item_label(item))}</text>'
            )
        rule = group[0].rule
        if not parked and rule not in {"1350", "1350+80", "300", "380", "in box"}:
            parts.append(
                f'<text x="{tx:.1f}" y="{ty + len(group) * 13:.1f}" text-anchor="{anchor}" '
                f'font-size="9" fill="#6b645c">{_esc(rule)}</text>'
            )
    # Scale bar, 1 m, and a north arrow.
    bar_x, bar_y = pad, height - 22
    parts.append(
        f'<line x1="{bar_x}" y1="{bar_y}" x2="{bar_x + scale}" y2="{bar_y}" stroke="#1c1c1c" stroke-width="2"/>'
    )
    parts.append(
        f'<text x="{bar_x}" y="{bar_y - 6}" font-size="12" fill="#1c1c1c">1 m</text>'
    )
    parts.append(
        f'<text x="{sx(box["east"] - 0.15):.1f}" y="{sy(box["north_out"] + 0.32):.1f}" '
        f'text-anchor="end" font-size="14" font-weight="700" fill="#1c1c1c">N</text>'
    )
    # Legend column.
    lx = pad + (xmax - xmin) * scale + 16
    parts.append(f'<text x="{lx}" y="32" font-size="15" font-weight="700" fill="#1c1c1c">Ids</text>')
    parts.append(
        f'<text x="{lx}" y="50" font-size="11" fill="#444">current  ->  proposed (not renamed)</text>'
    )
    line_y = 72
    for mark in marks():
        left = mark.current_id or "—"
        fill = _PARKED_FILL if mark.parked else _FILL[mark.kind]
        parts.append(f'<circle cx="{lx + 6}" cy="{line_y - 4}" r="5" fill="{fill}"/>')
        suffix = "  UNUSED" if mark.parked else ""
        parts.append(
            f'<text x="{lx + 16}" y="{line_y}" font-size="11" fill="#1c1c1c">'
            f'{_esc(left)}  ->  {_esc(mark.proposed_id)}{_esc(suffix)}</text>'
        )
        line_y += 16
    line_y += 8
    for note in (
        "Bed outline: UNFINISHED placeholder.",
        "Hatched strip: on the floor plan, not closed by the wall model.",
        "Drawn room 20.54 m². Table 22.98 m². Model bay 15.43 m².",
        "Centres: socket 300, ethernet 380, button 1350, next +80.",
        "150 from a door. 300 from an inner corner.",
        "300 from an outer corner outdoors.",
    ):
        parts.append(f'<text x="{lx}" y="{line_y}" font-size="11" fill="#444">{_esc(note)}</text>')
        line_y += 15
    parts.append(
        f'<text x="{pad}" y="22" font-size="16" font-weight="700" fill="#1c1c1c">'
        f'1.11 Ložnice — půdorys</text>'
    )
    parts.append("</svg>")
    return "".join(parts)


def render_png(svg: str, path: Path) -> None:
    import cairosvg

    cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(path), output_width=1600)


def _html(svg: str) -> str:
    questions = (
        Path(__file__).resolve().parents[1] / "docs" / "electrical" / "Questions.md"
    ).read_text(encoding="utf-8")
    # Drop the title; the page has its own.
    body = "\n".join(questions.splitlines()[2:])
    paragraphs = []
    for block in body.split("\n\n"):
        text = block.strip()
        if not text:
            continue
        if text.startswith("- "):
            items = "".join(f"<li>{_esc(line[2:])}</li>" for line in text.splitlines())
            paragraphs.append(f"<ul>{items}</ul>")
        else:
            paragraphs.append(f"<p>{_esc(text)}</p>")
    rows = "".join(
        "<tr>"
        f"<td>{_esc(mark.current_id or '—')}</td>"
        f"<td>{_esc(mark.proposed_id)}</td>"
        f"<td>{_esc(mark.rule)}</td>"
        f"<td>{_esc(mark.note)}</td>"
        "</tr>"
        for mark in marks()
    )
    return f"""<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>1.11 Ložnice — půdorys</title>
<style>
  body {{ margin: 0; font-family: ui-sans-serif, sans-serif; color: #1c1c1c; background: #f7f4ee; }}
  main {{ max-width: 72rem; margin: 0 auto; padding: 1.25rem; }}
  h1 {{ font-size: 1.6rem; margin: 0 0 0.25rem; }}
  p.lead {{ margin: 0 0 1rem; color: #444; }}
  .plan {{ background: white; border: 1px solid #ddd; overflow: auto; }}
  .plan svg {{ width: 100%; height: auto; display: block; }}
  table {{ border-collapse: collapse; width: 100%; font-size: 0.92rem; }}
  th, td {{ text-align: left; padding: 0.35rem 0.5rem; border-bottom: 1px solid #e4dfd6; vertical-align: top; }}
  code {{ font-family: ui-monospace, monospace; }}
  a {{ color: #1d4e89; }}
</style>
</head>
<body>
<main>
  <h1>1.11 Ložnice — půdorys</h1>
  <p class="lead">2D review drawing. The 3D boxes are the first pass and are not being moved. The bed outline is UNFINISHED placeholder furniture. North is up. <a href="PlanNotes.md">Plan notes</a> · <a href="Naming.md">Naming</a></p>
  <div class="plan">
{svg}
  </div>
  <h2>Current id → proposed id</h2>
  <p>The proposed ids are not applied yet. Cable number stays a property.</p>
  <table>
    <thead><tr><th>Current</th><th>Proposed</th><th>Rule</th><th>Note</th></tr></thead>
    <tbody>
{rows}
    </tbody>
  </table>
  <h2>Questions</h2>
  {''.join(paragraphs)}
</main>
</body>
</html>
"""


def write_outputs(
    svg_path: Path | None = None,
    png_path: Path | None = None,
    html_path: Path | None = None,
) -> dict[str, Path]:
    svg = render_svg()
    svg_path = svg_path or PLAN_SVG
    png_path = png_path or PLAN_PNG
    html_path = html_path or PLAN_HTML
    svg_path.parent.mkdir(parents=True, exist_ok=True)
    svg_path.write_text(svg, encoding="utf-8")
    render_png(svg, png_path)
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(_html(svg), encoding="utf-8")
    naming = html_path.with_name("Naming.md")
    naming.write_text(_naming_md(), encoding="utf-8")
    return {"svg": svg_path, "png": png_path, "html": html_path, "naming": naming}


def _naming_md() -> str:
    lines = [
        "# Device ids for room 1.11",
        "",
        "Nothing has been renamed. The current id is what the model uses today. The proposed id is Cody's pattern, for Petr to accept or change.",
        "",
        "## Current scheme",
        "",
        "The id is `C<cable>-<code>`. The cable number is also the property `CableNumber`. A second device of the same code on one cable gets `-1` or `-2`.",
        "",
        "| Letter | Meaning |",
        "| --- | --- |",
        "| S | light (Soupis: Světlo) |",
        "| V | one wall button |",
        "| 2V | double button, Jung 532-4U |",
        "| R | mmWave radar |",
        "| M | door or window contact |",
        "| E | ethernet socket |",
        "| W | Wi-Fi access point |",
        "| B | blind motor |",
        "",
        "Power sockets (`SOCK-`) have a current id and no cable number: the schedule has no row, and wiring is skipped. The two outdoor lamps (`LAMP-X-`) are kept and marked UNUSED. They are not wired, not on a panel, and not counted. The bed `BED-1.11` is UNFINISHED placeholder furniture, not a device id.",
        "",
        "## Proposed scheme",
        "",
        "`<room>-<type><n>`, counted inside the room. The cable number is only a property, because one cable can feed several devices.",
        "",
        "| Letter | Device |",
        "| --- | --- |",
        "| L | light |",
        "| B | button |",
        "| Z | power socket |",
        "| D | data socket |",
        "| P | presence (mmWave) |",
        "| K | window or door contact |",
        "| R | blind motor |",
        "| AP | access point |",
        "",
        "An exterior device is named from the room where its cable comes through the wall, with `X` before the type: `1.11-XL1`, `1.11-XB1`, `1.11-XR1`. A button on the corridor side of the bedroom door is not exterior, so it has no `X`.",
        "",
        "## Side by side",
        "",
        "| Current | Proposed | Where | Rule |",
        "| --- | --- | --- | --- |",
    ]
    for mark in marks():
        lines.append(
            f"| {mark.current_id or '—'} | {mark.proposed_id} | {mark.place} | {mark.rule} |"
        )
    lines.append("")
    return "\n".join(lines)
