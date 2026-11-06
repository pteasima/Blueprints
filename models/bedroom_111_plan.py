"""2D plan of room 1.11. The drawing is the deliverable; the 3D origins are not moved.

Devices come from ``bedroom-1.11.yaml``. Where the plan shows a symbol the
schedule does not name (a red socket, an outdoor lamp), the mark has no
current id. Rules are the short names in ``docs/electrical/PlanNotes.md``.
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

# W-013 is 250 mm. The bedroom's north wall is not in the wall file; the
# plan uses that thickness so the corridor face has a line to draw on.
ASSUMED_NORTH_WALL_M = 0.25

_FILL = {
    "light": "#e6b20a",
    "switch": "#2a78dc",
    "sensor": "#1e9a55",
    "outlet": "#e07a28",
    "socket": "#d64545",
    "actuator": "#8a4db8",
}


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


def envelope() -> dict[str, float]:
    """Inner faces from the wall model, outer faces of the two exterior walls."""
    faces = room_faces()
    doc = load_yaml(WALLS_PATH)
    walls = {wall["id"]: wall for wall in doc["walls"]}
    west = walls["W-030"]
    south = walls["W-002"]
    return {
        **faces,
        "west_out": float(west["Axis"]["Start"][0]) - float(west["Thickness"]) / 2.0,
        "south_out": float(south["Axis"]["Start"][1]) - float(south["Thickness"]) / 2.0,
        "north_out": faces["north"] + ASSUMED_NORTH_WALL_M,
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
    """Plan positions. Along-wall places follow the sketch; the blank offset is not filled in."""
    box = envelope()
    west_in, east_in = box["west"], box["east"]
    south_in, north_in = box["south"], box["north"]
    west_out, south_out = box["west_out"], box["south_out"]
    north_out = box["north_out"]
    south_win0, _south_win1 = _opening_span("OP05")
    _west_win0, west_win1 = _opening_span("OP01")
    # Sketch clusters. The note's set-off from a corner is an empty underscore.
    north_x = west_in + 0.55
    east_upper = 6.45
    east_lower = 4.50
    outside = 0.06
    rows = [
        Mark("C11-S", "1.11-L1", "light", west_in + 0.70, north_in - 0.70, "ceiling", "", "ceiling", "Entrance ceiling, near the north cluster."),
        Mark("C14-W", "1.11-AP1", "light", west_in + 1.15, north_in - 1.15, "ceiling", "", "ceiling", "U7 Pro, the note says na stropě."),
        Mark("C12-S", "1.11-L2", "light", (west_in + east_in) / 2.0, (south_in + north_in) / 2.0, "ceiling", "", "ceiling", "Pendant. The bulb on the plan is marked ?."),
        Mark("C5-S", "1.11-L3", "light", east_in - 0.55, east_upper, "ceiling", "", "ceiling", "Ceiling light for the upper east cluster."),
        Mark("C3-S", "1.11-L4", "light", east_in - 1.05, east_upper - 0.45, "ceiling", "", "ceiling", "Second light. The plan has one bulb for this cluster."),
        Mark("C2-S", "1.11-L5", "light", east_in - 0.55, east_lower, "ceiling", "", "ceiling", "Ceiling light for the lower east cluster."),
        Mark("C7-S", "1.11-L6", "light", west_in + 0.60, south_in + 0.60, "ceiling", "", "ceiling", "Southwest pair, west lamp."),
        Mark("C8-S", "1.11-L7", "light", west_in + 1.25, south_in + 0.60, "ceiling", "", "ceiling", "Southwest pair, east lamp."),
        Mark("C9-R", "1.11-P1", "sensor", south_win0 + 0.40, south_in + 0.45, "ceiling", "", "ceiling", "mmWave inside, by the south window."),
        Mark("C10-V", "1.11-B1", "switch", north_x, north_in, "wall", "north", "stack", "North cluster."),
        Mark("", "1.11-Z1", "socket", north_x, north_in, "wall", "north", "stack", "Red socket in the north cluster. No Soupis row."),
        Mark("C13-E", "1.11-D1", "outlet", north_x, north_in, "wall", "north", "stack", "Data socket in the north cluster."),
        Mark("C32-V-1", "1.11-B2", "switch", west_in + 0.28, north_in, "wall", "", "face", "Bedroom side of cable 32. No (032) mark."),
        Mark("C32-M", "1.11-K1", "sensor", west_in + 0.12, north_in, "frame", "", "frame", "Contact at the assumed northwest door. No opening in the wall file."),
        Mark("C32-V-2", "1.11-B3", "switch", west_in + 0.28, north_out, "corridor", "", "corridor", "Corridor side of the same door."),
        Mark("C4-2V", "1.11-B4", "switch", east_in, east_upper, "wall", "east-upper", "stack", "Upper east cluster."),
        Mark("", "1.11-Z2", "socket", east_in, east_upper, "wall", "east-upper", "stack", "Red socket in the upper east cluster. No Soupis row."),
        Mark("C1-2V", "1.11-B5", "switch", east_in, east_lower, "wall", "east-lower", "stack", "Lower east cluster."),
        Mark("", "1.11-Z3", "socket", east_in, east_lower, "wall", "east-lower", "stack", "Red socket in the lower east cluster. No Soupis row."),
        Mark("C9-M", "1.11-K2", "sensor", south_win0, south_in, "frame", "", "frame", "Contact in the south window frame, west jamb."),
        Mark("C46-B", "1.11-XR1", "actuator", south_win0 - 0.20, south_out - outside, "exterior", "", "facade", "Blind motor on the south facade, west of the window."),
        Mark("C18-B", "1.11-XR2", "actuator", west_out - outside, west_win1 + 0.18, "exterior", "", "facade", "Blind motor on the west facade, north of the window."),
        Mark("C16-B", "1.11-XR3", "actuator", west_out - outside, north_in - 0.35, "exterior", "", "facade", "Blind motor further north on the west facade. Opening not identified."),
        Mark("", "1.11-XL1", "light", west_out - outside, 3.55, "exterior", "sw", "exterior", "Outdoor lamp at the southwest, on the west facade."),
        Mark("C6-2V", "1.11-XB1", "switch", west_out - outside, 3.55, "exterior", "sw", "stack", "Double button outside the southwest corner."),
        Mark("C6-V", "1.11-XB2", "switch", west_out - outside, 3.55, "exterior", "sw", "stack", "Single button of cable 6. The plan shows one 532-4U."),
        Mark("", "1.11-XZ1", "socket", west_out - outside, 3.55, "exterior", "sw", "stack", "Red socket outside the southwest corner. No Soupis row."),
        Mark("", "1.11-XL2", "light", 0.95, south_out - outside, "exterior", "", "exterior", "Second outdoor lamp on the south facade, west of the window."),
    ]
    known = {record["id"] for record in device_records()}
    drawn = {mark.current_id for mark in rows if mark.current_id}
    if drawn != known:
        missing = known - drawn
        extra = drawn - known
        raise ValueError(f"plan marks drift from the yaml: missing {missing}, extra {extra}")
    return rows


def bed_outline() -> tuple[float, float, float, float]:
    """Bed rectangle on the floor-plan screenshot, in storey metres.

    Pixel corners (184, 539) and (267, 612) on the 2206×886 screenshot,
    registered to the inner faces the same way as the device sketch.
    Not a solid in the model. furnishings.yaml has no bed.
    """
    faces = room_faces()

    def world(px: float, py: float) -> tuple[float, float]:
        x = faces["west"] + (px - 118.0) / 161.0 * 3.300
        y = faces["north"] - (py - 462.0) / 212.0 * 4.675
        return x, y

    x0, y1 = world(184.0, 539.0)
    x1, y0 = world(267.0, 612.0)
    return min(x0, x1), min(y0, y1), max(x0, x1), max(y0, y1)


def _walls_in_view() -> list[tuple[str, list[list[float]]]]:
    doc = load_yaml(WALLS_PATH)
    rings = footprints(doc)
    view = (-1.2, 2.2, 5.2, 9.2)
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
        if x1 < -1.2 or x0 > 5.2 or y1 < 2.2 or y0 > 9.2:
            continue
        if opening["VoidsElement"] in {"W-002", "W-030", "W-031", "W-013"}:
            rects.append(rect)
    return rects


def _esc(text: str) -> str:
    return html.escape(text, quote=True)


def _label_offset(mark: Mark, box: dict[str, float]) -> tuple[str, float, float]:
    """(anchor, dx, dy) in SVG pixels. Keeps a stack's words off the wall."""
    if mark.stack == "north":
        return "start", 16, 28
    if mark.current_id == "C32-V-1":
        return "end", -16, -14
    if mark.current_id == "C32-M":
        return "end", -16, 18
    if mark.place == "corridor":
        return "start", 16, -16
    if mark.place == "exterior" and mark.x < box["west_out"]:
        return "end", -14, 4
    if mark.proposed_id == "1.11-XL2":
        return "end", -14, 4
    if mark.current_id == "C46-B":
        return "start", 14, 18
    if mark.current_id == "C12-S":
        return "start", 14, -14
    if mark.current_id == "C9-R":
        return "start", 14, 16
    if mark.current_id == "C9-M":
        return "start", 14, -6
    if abs(mark.x - box["east"]) < 0.02:
        return "start", 16, -6
    return "start", 12, -6


def render_svg() -> str:
    box = envelope()
    xmin, ymin, xmax, ymax = -2.6, 1.85, 5.15, 9.05
    scale = 110.0
    pad = 28.0
    legend_w = 430.0

    def sx(x: float) -> float:
        return pad + (x - xmin) * scale

    def sy(y: float) -> float:
        return pad + (ymax - y) * scale

    width = pad * 2 + (xmax - xmin) * scale + legend_w
    height = pad * 2 + (ymax - ymin) * scale + 36.0
    parts: list[str] = []
    parts.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.0f} {height:.0f}" font-family="ui-sans-serif, sans-serif">'
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
    # North wall of 1.11, not in the wall file.
    nx0, nx1 = box["west_out"], box["east"]
    ny0, ny1 = box["north"], box["north_out"]
    parts.append(
        f'<rect x="{sx(nx0):.1f}" y="{sy(ny1):.1f}" width="{(nx1 - nx0) * scale:.1f}" '
        f'height="{(ny1 - ny0) * scale:.1f}" fill="none" stroke="#8a5a2a" '
        f'stroke-width="1.4" stroke-dasharray="5 4"/>'
    )
    bx0, by0, bx1, by1 = bed_outline()
    parts.append(
        f'<rect x="{sx(bx0):.1f}" y="{sy(by1):.1f}" width="{(bx1 - bx0) * scale:.1f}" '
        f'height="{(by1 - by0) * scale:.1f}" fill="none" stroke="#8d8274" '
        f'stroke-width="1.2" stroke-dasharray="4 3"/>'
    )
    parts.append(
        f'<text x="{sx((bx0 + bx1) / 2):.1f}" y="{sy(by1) + 14:.1f}" text-anchor="middle" '
        f'fill="#8d8274" font-size="11">postel z výkresu, není v modelu</text>'
    )
    parts.append(
        f'<text x="{sx(box["east"] - 0.15):.1f}" y="{sy(box["north"] - 0.45):.1f}" '
        f'text-anchor="end" fill="#444" font-size="14" font-weight="600">1.11 Ložnice</text>'
    )
    # Devices. One dot per stack; the label lists every id.
    groups: dict[tuple, list[Mark]] = {}
    for mark in marks():
        groups.setdefault((round(mark.x, 3), round(mark.y, 3)), []).append(mark)
    for (x, y), group in groups.items():
        kind = group[0].kind
        fill = _FILL[kind]
        radius = 7 if len(group) == 1 else 9
        parts.append(
            f'<circle cx="{sx(x):.1f}" cy="{sy(y):.1f}" r="{radius}" fill="{fill}" stroke="#1c1c1c" stroke-width="1"/>'
        )
        label = " / ".join(item.current_id or item.proposed_id for item in group)
        rule = group[0].rule
        anchor, dx, dy = _label_offset(group[0], box)
        tx, ty = sx(x) + dx, sy(y) + dy
        parts.append(
            f'<line x1="{sx(x):.1f}" y1="{sy(y):.1f}" x2="{tx:.1f}" y2="{ty - 4:.1f}" '
            f'stroke="#b7b1a6" stroke-width="0.6"/>'
        )
        parts.append(
            f'<text x="{tx:.1f}" y="{ty:.1f}" text-anchor="{anchor}" font-size="11" fill="#1c1c1c">{_esc(label)}</text>'
        )
        parts.append(
            f'<text x="{tx:.1f}" y="{ty + 12:.1f}" text-anchor="{anchor}" font-size="9" fill="#6b645c">{_esc(rule)}</text>'
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
        f'<text x="{sx(box["west"] + 0.35):.1f}" y="{sy(box["north_out"] + 0.25):.1f}" '
        f'font-size="14" font-weight="700" fill="#1c1c1c">N</text>'
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
        parts.append(f'<circle cx="{lx + 6}" cy="{line_y - 4}" r="5" fill="{_FILL[mark.kind]}"/>')
        parts.append(
            f'<text x="{lx + 16}" y="{line_y}" font-size="11" fill="#1c1c1c">'
            f'{_esc(left)}  ->  {_esc(mark.proposed_id)}</text>'
        )
        line_y += 16
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
  <p class="lead">2D review drawing. The 3D boxes are the first pass and are not being moved in this drawing. North is up. <a href="PlanNotes.md">Plan notes</a> · <a href="Naming.md">Naming</a></p>
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
        "Red power sockets and the two outdoor lamps have no current id: the cable schedule has no row for them.",
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
