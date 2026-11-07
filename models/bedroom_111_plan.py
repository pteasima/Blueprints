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

from bedroom_111 import SOURCE_PATH, WALLS_PATH, device_records
from bedroom_111_geometry import FRAME_PITCH_MM, bounds, opening, polygon


PLAN_SVG = (
    Path(__file__).resolve().parents[1] / "docs" / "previews" / "bedroom-1.11" / "plan.svg"
)
PLAN_PNG = PLAN_SVG.with_suffix(".png")
PLAN_HTML = Path(__file__).resolve().parents[1] / "docs" / "electrical" / "1.11.html"

# Centres, millimetres. The first device of a kind sits on the stated centre.
# The next plate in a stack is one 80 mm module above that centre.
SOCKET_CENTRE_MM = 300
SWITCH_CENTRE_MM = 1350
FROM_DOOR_MM = 150
FROM_INNER_CORNER_MM = 300
FROM_OUTER_CORNER_OUTDOORS_MM = 300

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
# Plan view, metres: west exterior, south exterior, the corridor, north of W-018.
_VIEW = (-1.6, 2.15, 7.6, 10.8)


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
    """Clear faces of the L, from the wall model. See bedroom_111_geometry."""
    return bounds()


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


def _strip_span(device_id: str) -> tuple[float, float, float, float]:
    doc = load_yaml(SOURCE_PATH)
    record = next(item for item in doc["lightFixtures"] if item["id"] == device_id)
    props: dict = {}
    for group in record.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            props.update(group.get("Properties") or {})
    return float(props["X0"]), float(props["Y0"]), float(props["X1"]), float(props["Y1"])


def marks() -> list[Mark]:
    """Plan positions after Petr's markup. Centres are millimetres in the rule field."""
    box = envelope()
    west_in, east_in = box["west"], box["east"]
    north_in = box["north"]
    west_out, south_out = box["west_out"], box["south_out"]
    door = opening("OP09")
    wide = opening("OP01")
    narrow = opening("OP02")
    south_win = opening("OP05")
    outside = 0.06
    switch_y = door.y1 + FROM_DOOR_MM / 1000.0
    # Arrow tips: north bedside y=6.85, south bedside y=4.55, both on the east wall.
    north_bed = 6.85
    south_bed = 4.55
    # Arrow from the north-west stack ends on the west wall just under OP02.
    west_stack_y = 8.36
    # Lower ceiling is the 2.50 m band north of the dashed step at y=7.950.
    # It spans the main wing. The access point is centred on that width.
    low_ceiling_south = 7.950
    ap_x = (west_in + east_in) / 2.0
    ap_y = (low_ceiling_south + north_in) / 2.0
    bed_x0, bed_y0, bed_x1, bed_y1 = bed_outline()
    c7 = _strip_span("C7-S")
    c8 = _strip_span("C8-S")
    rows = [
        Mark("C12-S", "1.11-L2", "light", (bed_x0 + bed_x1) / 2.0, (bed_y0 + bed_y1) / 2.0, "ceiling", "", "ceiling", "Pendant above the bed. Cable 12, 120 W."),
        Mark("C3-S", "1.11-L4", "strip", bed_x0, (bed_y0 + bed_y1) / 2.0, "bed", "", "bed-edge", "LED strip on the foot and the two long sides. Not the headboard."),
        Mark("C14-W", "1.11-AP1", "light", ap_x, ap_y, "ceiling", "", "ceiling", "Access point centred on the 2.50 m ceiling north of y=7.950."),
        Mark("SOCK-EN", "1.11-Z2", "socket", east_in, north_bed, "wall", "bed-n", "750", "North bedside socket. Centre 750."),
        Mark("C4-2V", "1.11-B4", "switch", east_in, north_bed, "wall", "bed-n", "821", "North bedside switch, 71 mm above the socket."),
        Mark("C5-S", "1.11-L3", "light", east_in, north_bed, "wall", "bed-n", "892", "North bedside lamp, one pitch above the switch."),
        Mark("SOCK-ES", "1.11-Z3", "socket", east_in, south_bed, "wall", "bed-s", "750", "South bedside socket. Centre 750."),
        Mark("C1-2V", "1.11-B5", "switch", east_in, south_bed, "wall", "bed-s", "821", "South bedside switch, 71 mm above the socket."),
        Mark("C2-S", "1.11-L5", "light", east_in, south_bed, "wall", "bed-s", "892", "South bedside lamp, one pitch above the switch."),
        Mark("C7-S", "1.11-L6", "strip", (c7[0] + c7[2]) / 2.0, (c7[1] + c7[3]) / 2.0, "strip", "", "west-rail", "Curtain-rail LED strip above the west window OP01."),
        Mark("C8-S", "1.11-L7", "strip", (c8[0] + c8[2]) / 2.0, (c8[1] + c8[3]) / 2.0, "strip", "", "south-rail", "Curtain-rail LED strip above the south window OP05."),
        Mark("C32-V-1", "1.11-B2", "switch", box["entry_east"], switch_y, "wall", "hall-door", "1350", "Bedroom light switch, 150 mm from the latch of OP09."),
        Mark("C9-R", "1.11-P1", "sensor", box["entry_east"], switch_y, "wall", "hall-door", "in box", "mmWave inside the bedroom door switch C32-V-1."),
        Mark("C32-M", "1.11-K1", "sensor", box["entry_east"], door.y1, "frame", "", "frame", "Door contact in the latch jamb of OP09."),
        Mark("C32-V-2", "1.11-B3", "switch", box["entry_east_out"], switch_y, "corridor", "", "1350", "Hallway switch on the east face of OP09."),
        Mark("C10-V", "1.11-B1", "switch", west_in, narrow.y0 - FROM_DOOR_MM / 1000.0, "wall", "west-switch", "1350", "West wall, 150 mm south of the south jamb of OP02. Centre 1350."),
        Mark("SOCK-N", "1.11-Z1", "socket", west_in, west_stack_y, "wall", "west-stack", "300", "Moved to the west wall under OP02. Centre 300."),
        Mark("SOCK-N2", "1.11-Z4", "socket", west_in, west_stack_y, "wall", "west-stack", "371", "Same place, 71 mm above SOCK-N."),
        Mark("C13-E", "1.11-D1", "outlet", west_in, west_stack_y, "wall", "west-stack", "442", "Same place, 71 mm above SOCK-N2."),
        Mark("C9-M", "1.11-K2", "sensor", south_win.x0, box["south"], "frame", "", "frame", "Contact in the south window frame, west jamb."),
        Mark("C46-B", "1.11-XR1", "actuator", south_win.x0 - 0.15, south_out - outside, "exterior", "", "facade", "Blind motor outside, west of the south window."),
        Mark("C18-B", "1.11-XR2", "actuator", west_out - outside, wide.y1 + 0.15, "exterior", "", "facade", "Blind motor outside, north of the wide west window OP01."),
        Mark("C16-B", "1.11-XR3", "actuator", west_out - outside, (narrow.y1 + north_in) / 2.0, "exterior", "", "facade", "Blind motor outside, on the pier beside OP02. Cable 16 stays this blind."),
    ]
    known = {record["id"] for record in device_records()}
    drawn = {mark.current_id for mark in rows if mark.current_id}
    if drawn != known:
        missing = known - drawn
        extra = drawn - known
        raise ValueError(f"plan marks drift from the yaml: missing {missing}, extra {extra}")
    return rows


def bed_outline() -> tuple[float, float, float, float]:
    """Bed rectangle, metres, from BED-1.11. Headboard is the east edge."""
    doc = load_yaml(SOURCE_PATH)
    bed = next(item for item in doc.get("furniture") or [] if item["id"] == "BED-1.11")
    props: dict = {}
    for group in bed.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            props.update(group.get("Properties") or {})
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
        if opening["VoidsElement"] in {"W-002", "W-030", "W-031", "W-013", "W-018", "W-033"}:
            rects.append(rect)
    return rects


def _esc(text: str) -> str:
    return html.escape(text, quote=True)


def _label_offset(mark: Mark, box: dict[str, float]) -> tuple[str, float, float]:
    """(anchor, dx, dy) in SVG pixels. Keeps a stack's words off the wall."""
    if mark.stack == "hall-door":
        return "end", -16, 8
    if mark.stack in {"bed-n", "bed-s"}:
        return "end", -14, -6
    if mark.stack == "west-stack":
        return "start", 14, -8
    if mark.stack == "west-switch":
        return "start", 14, 36
    if mark.stack == "ap":
        return "start", 12, 22
    if mark.stack == "pocket":
        return "start", 14, -16
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
    if item.rule in {"1350", "300", "371", "442", "513", "750", "821", "892", "in box"}:
        return f"{name} {item.rule}"
    return name


def render_svg() -> str:
    box = envelope()
    xmin, ymin, xmax, ymax = -2.4, 1.7, 7.2, 10.6
    scale = 78.0
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
    # Room floor, the L.
    ring = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in polygon())
    parts.append(f'<polygon points="{ring}" fill="#fffdf8" stroke="none"/>')
    for wall_id, ring in _walls_in_view():
        points = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in ring)
        parts.append(f'<polygon points="{points}" fill="#d9d3c7" stroke="#5c564c" stroke-width="1"/>')
    for opening_id, x0, y0, x1, y1 in _opening_rects():
        parts.append(
            f'<rect x="{sx(min(x0, x1)):.1f}" y="{sy(max(y0, y1)):.1f}" '
            f'width="{abs(x1 - x0) * scale:.1f}" height="{abs(y1 - y0) * scale:.1f}" '
            f'fill="#fffdf8" stroke="none"/>'
        )
        if opening_id not in {"OP01", "OP02", "OP05"}:
            continue
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
    bx0, by0, bx1, by1 = bed_outline()
    inset = 0.04
    parts.append(
        f'<rect x="{sx(bx0):.1f}" y="{sy(by1):.1f}" width="{(bx1 - bx0) * scale:.1f}" '
        f'height="{(by1 - by0) * scale:.1f}" fill="#f3e6d0" stroke="#8a5a2a" stroke-width="1.4"/>'
    )
    parts.append(
        f'<line x1="{sx(bx1):.1f}" y1="{sy(by0):.1f}" x2="{sx(bx1):.1f}" y2="{sy(by1):.1f}" '
        f'stroke="#8a5a2a" stroke-width="5"/>'
    )
    # Foot and the two long sides. The headboard edge is bare.
    parts.append(
        f'<polyline points="{sx(bx1 - inset):.1f},{sy(by1 - inset):.1f} '
        f'{sx(bx0 + inset):.1f},{sy(by1 - inset):.1f} '
        f'{sx(bx0 + inset):.1f},{sy(by0 + inset):.1f} '
        f'{sx(bx1 - inset):.1f},{sy(by0 + inset):.1f}" '
        f'fill="none" stroke="#e07a28" stroke-width="3"/>'
    )
    parts.append(
        f'<text x="{sx((bx0 + bx1) / 2):.1f}" y="{sy((by0 + by1) / 2):.1f}" text-anchor="middle" '
        f'fill="#7a3e00" font-size="13" font-weight="700">postel 2000×1800</text>'
    )
    parts.append(
        f'<text x="{sx(bx1) - 8:.1f}" y="{sy((by0 + by1) / 2) + 16:.1f}" text-anchor="end" '
        f'fill="#7a3e00" font-size="11">hlava</text>'
    )
    parts.append(
        f'<text x="{sx(bx1) - 8:.1f}" y="{sy(by0) - 8:.1f}" text-anchor="end" '
        f'fill="#c2410c" font-size="11" font-weight="600">C3-S strip</text>'
    )
    for strip_id in ("C7-S", "C8-S"):
        x0, y0, x1, y1 = _strip_span(strip_id)
        parts.append(
            f'<line x1="{sx(x0):.1f}" y1="{sy(y0):.1f}" x2="{sx(x1):.1f}" y2="{sy(y1):.1f}" '
            f'stroke="#e07a28" stroke-width="4"/>'
        )
        parts.append(
            f'<text x="{sx((x0 + x1) / 2) + 6:.1f}" y="{sy((y0 + y1) / 2):.1f}" font-size="11" '
            f'fill="#c2410c">{strip_id}</text>'
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
        if group[0].stack in {"east-n", "east-s", "bed-n"}:
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
        if not parked and rule not in {"1350", "300", "371", "442", "513", "750", "821", "892", "in box", "bed-edge", "west-strip"}:
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
        "Bed 2000×1800, headboard on the east wall.",
        "Bedside stacks: socket 750, switch 821, lamp 892.",
        "Jung LS 990 pitch 71 mm. Sockets 300 and 371, ethernet 442.",
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
  <p class="lead">2D review drawing. The 3D boxes are the first pass and are not being moved. The bed is 2000×1800, headboard on the east wall. North is up. <a href="PlanNotes.md">Plan notes</a> · <a href="Naming.md">Naming</a></p>
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
        "Power sockets (`SOCK-`) have a current id and no cable number: the schedule has no row, and wiring is skipped. Cable 6 and cable 11 are off the plan for now. The bed `BED-1.11` is 2000×1800 and is not a device id.",
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
