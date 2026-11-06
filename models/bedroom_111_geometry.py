"""Room 1.11 measured from the ground-floor wall model.

The clear area is an L. The main wing runs from the south facade to the
satna wall. The entry wing steps east, north of room 1.12, up to the
corridor wall. That polygon is 22.98 m². A dashed line on the floor plan
at the 1.12 head-wall is not a wall: the model has no solid there, and the
area only closes if the room crosses it.

Doors, from the same file, checked against the floor plan:

- OP03, 1.9 m, double pocket, north wall of the main wing, into 1.10 Šatna.
- OP06, hinged, north wall of the entry, swings north.
- OP09, hinged, east wall of the entry, hinge at the south jamb, swings
  west into the room. The corridor is on the other side. Cable 32 belongs
  here.
"""

from __future__ import annotations

import html
from dataclasses import dataclass
from pathlib import Path

from yaml_ifc.yamlio import load as load_yaml

from bedroom_111 import WALLS_PATH


# Jung LS 990 frame. 1-gang is 81 mm, each added gang adds 71 mm
# (2-gang 152, 3-gang 223). Centres are 71 mm apart.
FRAME_PITCH_MM = 71

ARCH_SVG = (
    Path(__file__).resolve().parents[1]
    / "docs"
    / "previews"
    / "bedroom-1.11"
    / "architecture.svg"
)
ARCH_PNG = ARCH_SVG.with_suffix(".png")
GEOMETRY_MD = (
    Path(__file__).resolve().parents[1] / "docs" / "electrical" / "rooms" / "1.11-geometry.md"
)


@dataclass(frozen=True)
class Opening:
    id: str
    kind: str  # window, pocket, hinged
    host: str
    x0: float
    y0: float
    x1: float
    y1: float
    width: float
    height: float
    leaf: float
    swing: str
    hinge: tuple[float, float] | None
    into: str


def _doc() -> dict:
    return load_yaml(WALLS_PATH)


def _walls() -> dict[str, dict]:
    return {wall["id"]: wall for wall in _doc()["walls"]}


def _face(wall: dict, side: str) -> float:
    start = wall["Axis"]["Start"]
    thickness = float(wall["Thickness"])
    if side == "east":
        return float(start[0]) + thickness / 2.0
    if side == "west":
        return float(start[0]) - thickness / 2.0
    if side == "north":
        return float(start[1]) + thickness / 2.0
    if side == "south":
        return float(start[1]) - thickness / 2.0
    raise ValueError(side)


def bounds() -> dict[str, float]:
    """Inner corners of the L, and the outer faces of the two exterior walls."""
    walls = _walls()
    west = walls["W-030"]
    south = walls["W-002"]
    east = walls["W-031"]
    head = walls["W-013"]
    north = walls["W-018"]
    entry = walls["W-033"]
    return {
        "west": _face(west, "east"),
        "west_out": _face(west, "west"),
        "south": _face(south, "north"),
        "south_out": _face(south, "south"),
        "east": _face(east, "west"),
        "entry_south": _face(head, "north"),
        "entry_east": _face(entry, "west"),
        "entry_east_out": _face(entry, "east"),
        "north": _face(north, "south"),
        "north_out": _face(north, "north"),
    }


def polygon() -> list[tuple[float, float]]:
    """Clear interior of 1.11, anticlockwise from the south-west corner."""
    b = bounds()
    return [
        (b["west"], b["south"]),
        (b["east"], b["south"]),
        (b["east"], b["entry_south"]),
        (b["entry_east"], b["entry_south"]),
        (b["entry_east"], b["north"]),
        (b["west"], b["north"]),
    ]


def area() -> float:
    points = polygon()
    total = 0.0
    for index, (x0, y0) in enumerate(points):
        x1, y1 = points[(index + 1) % len(points)]
        total += x0 * y1 - x1 * y0
    return abs(total) / 2.0


def _span(opening: dict, wall: dict) -> tuple[float, float, float, float]:
    start = wall["Axis"]["Start"]
    end = wall["Axis"]["End"]
    thickness = float(wall["Thickness"])
    horizontal = abs(end[0] - start[0]) >= abs(end[1] - start[1])
    origin = float(start[0] if horizontal else start[1])
    near = origin + float(opening["AlongAxis"])
    far = near + float(opening["Width"])
    if horizontal:
        y = float(start[1])
        return near, y - thickness / 2.0, far, y + thickness / 2.0
    x = float(start[0])
    return x - thickness / 2.0, near, x + thickness / 2.0, far


def openings() -> list[Opening]:
    """Windows and the three doors that bound 1.11."""
    doc = _doc()
    walls = {wall["id"]: wall for wall in doc["walls"]}
    doors = {item["FillsOpening"]: item for item in doc["doors"]}
    windows = {item["FillsOpening"]: item for item in doc["windows"]}
    # Swing is read off the floor plan. The model stores the leaf, not the arc.
    meta = {
        "OP01": ("window", "exterior", "none", None),
        "OP02": ("window", "exterior", "none", None),
        "OP05": ("window", "exterior", "none", None),
        "OP03": ("pocket", "1.10 Šatna", "pocket", None),
        "OP06": ("hinged", "1.09 Koupelna", "north", "west"),
        "OP09": ("hinged", "chodba", "west", "south"),
    }
    found = []
    for opening in doc["openings"]:
        if opening["id"] not in meta:
            continue
        kind, into, swing, hinge_end = meta[opening["id"]]
        wall = walls[opening["VoidsElement"]]
        x0, y0, x1, y1 = _span(opening, wall)
        filler = doors.get(opening["id"]) or windows.get(opening["id"]) or {}
        hinge = None
        if hinge_end == "west":
            hinge = (min(x0, x1), (y0 + y1) / 2.0)
        elif hinge_end == "south":
            hinge = ((x0 + x1) / 2.0, min(y0, y1))
        found.append(
            Opening(
                id=opening["id"],
                kind=kind,
                host=opening["VoidsElement"],
                x0=min(x0, x1),
                y0=min(y0, y1),
                x1=max(x0, x1),
                y1=max(y0, y1),
                width=float(opening["Width"]),
                height=float(opening["Height"]),
                leaf=float(filler.get("OverallWidth") or opening["Width"]),
                swing=swing,
                hinge=hinge,
                into=into,
            )
        )
    return found


def opening(opening_id: str) -> Opening:
    return next(item for item in openings() if item.id == opening_id)


def contains(x: float, y: float, margin: float = 0.0) -> bool:
    """Even-odd test. A point on the boundary counts as inside when margin is 0."""
    points = polygon()
    inside = False
    for index, (x0, y0) in enumerate(points):
        x1, y1 = points[(index + 1) % len(points)]
        if ((y0 > y) != (y1 > y)) and (
            x < (x1 - x0) * (y - y0) / (y1 - y0 + 0.0) + x0
        ):
            inside = not inside
    if inside:
        return True
    if margin <= 0:
        return False
    return contains(x, y + margin) or contains(x, y - margin) or contains(x + margin, y) or contains(x - margin, y)


def geometry_markdown() -> str:
    b = bounds()
    main_w = b["east"] - b["west"]
    main_d = b["north"] - b["south"]
    entry_w = b["entry_east"] - b["east"]
    entry_d = b["north"] - b["entry_south"]
    lines = [
        "# Room 1.11 geometry",
        "",
        "Measured from `inputs/ground_floor/ground-floor.yaml`. Lengths are metres. The floor plan agrees with these walls and openings; the earlier 15.43 m² rectangle stopped on a dashed line that is not a wall.",
        "",
        "## Clear outline",
        "",
        "The room is an L.",
        "",
        f"- Main wing: x {b['west']:.3f} to {b['east']:.3f} ({main_w:.3f} m), y {b['south']:.3f} to {b['north']:.3f} ({main_d:.3f} m). Inner east face of W-030, inner west face of W-031, inner north face of W-002, south face of W-018.",
        f"- Entry wing: x {b['east']:.3f} to {b['entry_east']:.3f} ({entry_w:.3f} m), y {b['entry_south']:.3f} to {b['north']:.3f} ({entry_d:.3f} m). North face of W-013, west face of W-033.",
        f"- Area: {main_w:.3f} × {main_d:.3f} + {entry_w:.3f} × {entry_d:.3f} = {area():.2f} m². The room table lists 22.98 m².",
        "",
        "W-013 does not cross the main wing, and the floor plan draws that line dashed. It is a ceiling step, not the north wall. The north wall is W-018, shared with 1.10 Šatna.",
        "",
        "W-018 ends 100 mm short of W-033 in the model (axis end x 5.525, W-033 west face 5.625). The room corner is the two faces extended.",
        "",
        "## Doors",
        "",
        "| Opening | Kind | Clear width | Leaf | Where | Swing | Into |",
        "| --- | --- | --- | --- | --- | --- | --- |",
    ]
    for item in openings():
        if item.kind == "window":
            continue
        where = f"x {item.x0:.3f}–{item.x1:.3f}, y {item.y0:.3f}–{item.y1:.3f}"
        lines.append(
            f"| {item.id} | {item.kind} | {item.width:.2f} | {item.leaf:.2f} | {where} | {item.swing} | {item.into} |"
        )
    lines += [
        "",
        "OP03 is the double pocket into the satna: two leaves, no arc, pockets in W-018. OP06 is hinged; the floor-plan arc is on the north side of W-018, hinge at the west jamb. OP09 is hinged; the arc is on the bedroom side of W-033, hinge at the south jamb, latch at the north jamb. The corridor switch of cable 32 is on the east face of that door.",
        "",
        "## Windows",
        "",
        "| Opening | Host | Clear width | Height | Sill | Where |",
        "| --- | --- | --- | --- | --- | --- |",
    ]
    for item in openings():
        if item.kind != "window":
            continue
        where = f"x {item.x0:.3f}–{item.x1:.3f}, y {item.y0:.3f}–{item.y1:.3f}"
        lines.append(
            f"| {item.id} | {item.host} | {item.width:.2f} | {item.height:.2f} | 0 | {where} |"
        )
    lines += [
        "",
        "OP01 and OP02 are the two west windows. OP05 is the south window. The pier between OP02 and W-018 is 150 mm.",
        "",
        "## Adjacent",
        "",
        "- 1.10 Šatna, north of W-018 and west of W-032, through the pocket door.",
        "- 1.09 Koupelna, east of the satna. OP06 opens north into its south-west side. W-033 is only a partial wall there.",
        "- Chodba, east of W-033 and north of W-013, through OP09. Rooms 1.12 and 1.13 open onto that corridor.",
        "- 1.12 Pokoj, east of W-031 and south of W-013. No door in the party wall.",
        "- Exterior on the west and the south.",
        "",
    ]
    return "\n".join(lines)


def _esc(text: str) -> str:
    return html.escape(text, quote=True)


def render_architecture_svg() -> str:
    b = bounds()
    xmin, ymin, xmax, ymax = -1.3, 2.3, 8.4, 13.0
    scale = 62.0
    pad = 28.0

    def sx(x: float) -> float:
        return pad + (x - xmin) * scale

    def sy(y: float) -> float:
        return pad + (ymax - y) * scale

    width = pad * 2 + (xmax - xmin) * scale
    height = pad * 2 + (ymax - ymin) * scale + 28
    parts: list[str] = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.0f} {height:.0f}" font-family="ui-sans-serif, sans-serif">',
        f'<rect width="{width:.0f}" height="{height:.0f}" fill="#f7f4ee"/>',
        f'<rect x="{sx(xmin):.1f}" y="{sy(ymax):.1f}" width="{(0 - xmin) * scale:.1f}" '
        f'height="{(ymax - ymin) * scale:.1f}" fill="#e4eef4"/>',
        f'<rect x="{sx(xmin):.1f}" y="{sy(b["south_out"]):.1f}" width="{(xmax - xmin) * scale:.1f}" '
        f'height="{(b["south_out"] - ymin) * scale:.1f}" fill="#e4eef4"/>',
    ]
    ring = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in polygon())
    parts.append(f'<polygon points="{ring}" fill="#fffdf8" stroke="#1c1c1c" stroke-width="1.2"/>')
    # Neighbour floors, drawn under the walls.
    satna = (b["west"], b["north_out"], 4.050, 12.250)
    bath = (4.175, b["north_out"], b["entry_east"], 12.250)
    hall = (b["entry_east_out"], b["entry_south"], 8.0, b["north"])
    room_12 = (3.925, b["south"], 6.850, 7.950)
    for rect, fill in (
        (satna, "#f3efe4"),
        (bath, "#f3efe4"),
        (hall, "#f3efe4"),
        (room_12, "#f3efe4"),
    ):
        x0, y0, x1, y1 = rect
        parts.append(
            f'<rect x="{sx(x0):.1f}" y="{sy(y1):.1f}" width="{(x1 - x0) * scale:.1f}" '
            f'height="{(y1 - y0) * scale:.1f}" fill="{fill}" stroke="none"/>'
        )
    from yaml_ifc import footprints

    view = (xmin, ymin, xmax, ymax)
    for wall_id, ring_pts in footprints(_doc()).items():
        xs = [point[0] for point in ring_pts]
        ys = [point[1] for point in ring_pts]
        if max(xs) < view[0] or min(xs) > view[2] or max(ys) < view[1] or min(ys) > view[3]:
            continue
        points = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in ring_pts)
        parts.append(f'<polygon points="{points}" fill="#d9d3c7" stroke="#5c564c" stroke-width="1"/>')
    for item in openings():
        parts.append(
            f'<rect x="{sx(item.x0):.1f}" y="{sy(item.y1):.1f}" '
            f'width="{(item.x1 - item.x0) * scale:.1f}" height="{(item.y1 - item.y0) * scale:.1f}" '
            f'fill="#fffdf8" stroke="none"/>'
        )
        if item.kind == "window":
            if item.x1 - item.x0 > item.y1 - item.y0:
                mid = (item.y0 + item.y1) / 2.0
                parts.append(
                    f'<line x1="{sx(item.x0):.1f}" y1="{sy(mid):.1f}" x2="{sx(item.x1):.1f}" y2="{sy(mid):.1f}" '
                    f'stroke="#3d8eb8" stroke-width="3"/>'
                )
            else:
                mid = (item.x0 + item.x1) / 2.0
                parts.append(
                    f'<line x1="{sx(mid):.1f}" y1="{sy(item.y0):.1f}" x2="{sx(mid):.1f}" y2="{sy(item.y1):.1f}" '
                    f'stroke="#3d8eb8" stroke-width="3"/>'
                )
            parts.append(
                f'<text x="{sx((item.x0 + item.x1) / 2):.1f}" y="{sy((item.y0 + item.y1) / 2) - 8:.1f}" '
                f'text-anchor="middle" font-size="10" fill="#3d8eb8">{item.id}</text>'
            )
        elif item.kind == "pocket":
            parts.append(
                f'<line x1="{sx(item.x0):.1f}" y1="{sy((item.y0 + item.y1) / 2):.1f}" '
                f'x2="{sx(item.x1):.1f}" y2="{sy((item.y0 + item.y1) / 2):.1f}" '
                f'stroke="#1c1c1c" stroke-width="2" stroke-dasharray="6 3"/>'
            )
            parts.append(
                f'<text x="{sx((item.x0 + item.x1) / 2):.1f}" y="{sy(item.y0) + 14:.1f}" '
                f'text-anchor="middle" font-size="11" fill="#1c1c1c">OP03 double pocket</text>'
            )
        else:
            _swing(parts, sx, sy, item, scale)
    labels = [
        ((b["west"] + b["east"]) / 2, (b["south"] + b["north"]) / 2 - 0.4, "1.11 Ložnice", 16),
        ((b["west"] + 4.050) / 2, (b["north_out"] + 12.250) / 2, "1.10 Šatna", 14),
        ((4.175 + b["entry_east"]) / 2, 11.0, "1.09", 13),
        ((b["entry_east_out"] + 8.0) / 2, (b["entry_south"] + b["north"]) / 2, "chodba", 13),
        ((3.925 + 6.850) / 2, (b["south"] + 7.950) / 2, "1.12 Pokoj", 14),
        (-0.7, 6.0, "exteriér", 12),
    ]
    for x, y, text, size in labels:
        parts.append(
            f'<text x="{sx(x):.1f}" y="{sy(y):.1f}" text-anchor="middle" font-size="{size}" '
            f'fill="#1c1c1c">{_esc(text)}</text>'
        )
    parts.append(
        f'<text x="{pad}" y="22" font-size="16" font-weight="700" fill="#1c1c1c">'
        f'1.11 Ložnice — architecture, {area():.2f} m²</text>'
    )
    bar_y = height - 16
    parts.append(
        f'<line x1="{pad}" y1="{bar_y}" x2="{pad + scale}" y2="{bar_y}" stroke="#1c1c1c" stroke-width="2"/>'
    )
    parts.append(f'<text x="{pad}" y="{bar_y - 6}" font-size="12" fill="#1c1c1c">1 m</text>')
    parts.append(
        f'<text x="{sx(b["west"] + 0.3):.1f}" y="{sy(12.6):.1f}" font-size="14" font-weight="700">N</text>'
    )
    parts.append("</svg>")
    return "".join(parts)


def _swing(parts: list[str], sx, sy, item: Opening, scale: float) -> None:
    """Quarter-circle on the swing side. Radius is the leaf width."""
    radius = item.leaf
    if item.id == "OP06":
        hinge_x, hinge_y = item.x0, (item.y0 + item.y1) / 2.0
        tip_x, tip_y = hinge_x, hinge_y + radius
        latch_x = item.x1
        latch_y = hinge_y
        sweep = 0
    elif item.id == "OP09":
        hinge_x, hinge_y = (item.x0 + item.x1) / 2.0, item.y0
        tip_x, tip_y = hinge_x - radius, hinge_y
        latch_x = hinge_x
        latch_y = item.y1
        sweep = 0
    else:
        return
    parts.append(
        f'<line x1="{sx(hinge_x):.1f}" y1="{sy(hinge_y):.1f}" x2="{sx(tip_x):.1f}" y2="{sy(tip_y):.1f}" '
        f'stroke="#1c1c1c" stroke-width="1.4"/>'
    )
    parts.append(
        f'<path d="M {sx(latch_x):.1f} {sy(latch_y):.1f} A {radius * scale:.1f} {radius * scale:.1f} '
        f'0 0 {sweep} {sx(tip_x):.1f} {sy(tip_y):.1f}" fill="none" stroke="#1c1c1c" stroke-width="1"/>'
    )
    parts.append(
        f'<text x="{sx(hinge_x):.1f}" y="{sy(hinge_y) + 12:.1f}" font-size="10" fill="#1c1c1c">{item.id}</text>'
    )


def write_architecture(
    svg_path: Path | None = None,
    png_path: Path | None = None,
    md_path: Path | None = None,
) -> dict[str, Path]:
    svg_path = svg_path or ARCH_SVG
    png_path = png_path or ARCH_PNG
    md_path = md_path or GEOMETRY_MD
    svg = render_architecture_svg()
    svg_path.parent.mkdir(parents=True, exist_ok=True)
    svg_path.write_text(svg, encoding="utf-8")
    import cairosvg

    cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(png_path), output_width=1400)
    md_path.parent.mkdir(parents=True, exist_ok=True)
    md_path.write_text(geometry_markdown(), encoding="utf-8")
    return {"svg": svg_path, "png": png_path, "md": md_path}
