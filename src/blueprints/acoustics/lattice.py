"""CD and rail layout on the gable předstěna outline.

The outline comes from ``predstena_pts`` (millimetres). Vertical CD lines and
horizontal joint rails cut that polygon into bays, including the triangles and
trapezoids under the roof.

``625 vertical``, ``1000 horizontal``, and ``400 vertical`` each start at one
edge and step a stock module, then one make-up bay at the far edge. A
1250×2000 board lands its joint on a stud when it is stood up on the 625
module, or laid flat on the 1000 module. The 400 mm module is a stiff check:
a 1250 mm joint does not land on every stud, and the make-up bay is whatever
the real width leaves (150 mm on a 5350 mm gable). ``studs="even"`` keeps the
older equal-bay split (1070 mm on this gable for a 1000 mm target). Sides,
the rake, and the bottom line are simply supported: the 2–5 mm bead sits
outside that screw line. ``studs="inset"`` is the older frame, one inset in,
with a closer at the far edge.

A new layout is a ``LatticeSpec``. Pass explicit centre lists, or a spacing.
The three candidates are ``625 vertical``, ``1000 horizontal``, and
``400 vertical``.
"""

from __future__ import annotations

import math
from dataclasses import dataclass

from blueprints.acoustics.panel import Bay

# Consecutive bay widths above this are "mild" in the contractor note.
# The perimeter inset is reported separately; it is not a stretched module.
MILD_RATIO = 1.4
MILD_DELTA_MM = 250.0


@dataclass(frozen=True)
class LatticeSpec:
    """One way to screw the GKB. Distances are millimetres.

    ``cd_x_mm`` and ``rail_above_bottom_mm``, when set, replace the spacing.
    Rails are heights above the trap bottom (z = 2450), not absolute storey
    heights, so a new room datum does not have to be retyped.
    """

    name: str
    orientation: str
    cd_spacing_mm: float = 625.0
    rail_spacing_mm: float = 2000.0
    inset_mm: float | None = None
    cd_x_mm: tuple[float, ...] | None = None
    rail_above_bottom_mm: tuple[float, ...] | None = None
    board: str = ""
    # ``makeup``: stock module from one edge, one make-up bay at the far edge.
    # ``even``: profile on both edges, equal bays nearest the target module.
    # ``inset``: the older frame, one inset in, with a closer at the far edge.
    studs: str = "makeup"
    # ``supported``: sides, rake, and the bottom line are a screw line.
    # ``free``: the older model, where the outline was an unsupported edge.
    perimeter: str = "supported"

    def cd_lines(self, width_mm: float, default_inset_mm: float) -> tuple[float, ...]:
        if self.cd_x_mm is not None:
            return tuple(sorted(x for x in self.cd_x_mm if 0.0 <= x <= width_mm))
        if self.studs == "even":
            return tuple(_even_stations(width_mm, self.cd_spacing_mm))
        if self.studs == "makeup":
            return tuple(_makeup_stations(width_mm, self.cd_spacing_mm))
        inset = self.inset_mm if self.inset_mm is not None else default_inset_mm
        return tuple(_module_stations(width_mm, self.cd_spacing_mm, inset))

    def rail_heights(self, z_bottom_mm: float, z_max_mm: float) -> tuple[float, ...]:
        if self.rail_above_bottom_mm is not None:
            heights = self.rail_above_bottom_mm
        else:
            heights_list: list[float] = []
            height = self.rail_spacing_mm
            while z_bottom_mm + height < z_max_mm - 1.0:
                heights_list.append(height)
                height += self.rail_spacing_mm
            heights = tuple(heights_list)
        return tuple(
            z_bottom_mm + height
            for height in heights
            if z_bottom_mm + 1.0 < z_bottom_mm + height < z_max_mm - 1.0
        )


LATTICE_625 = LatticeSpec(
    name="625 vertical",
    orientation="vertical",
    cd_spacing_mm=625.0,
    rail_spacing_mm=2000.0,
    board="1250×2000 boards stood vertical, joints on every second CD, one make-up bay at the far edge",
    studs="makeup",
)
LATTICE_1000 = LatticeSpec(
    name="1000 horizontal",
    orientation="horizontal",
    cd_spacing_mm=1000.0,
    rail_spacing_mm=1250.0,
    board="1250×2000 boards laid horizontally, joints on the studs, one make-up bay at the far edge",
    studs="makeup",
)
# The older equal split. Not a candidate. Pass it to ``run_study`` to compare.
LATTICE_1000_EVEN = LatticeSpec(
    name="1000 horizontal even",
    orientation="horizontal",
    cd_spacing_mm=1000.0,
    rail_spacing_mm=1250.0,
    board="1250×2500 boards cut to two equal bays",
    studs="even",
)
LATTICE_400 = LatticeSpec(
    name="400 vertical",
    orientation="vertical",
    cd_spacing_mm=400.0,
    rail_spacing_mm=2000.0,
    board="1250×2000 boards stood vertical, a stiff check, one make-up bay at the far edge",
    studs="makeup",
)
CANDIDATES: tuple[LatticeSpec, ...] = (LATTICE_625, LATTICE_1000, LATTICE_400)


@dataclass(frozen=True)
class GableLayout:
    spec: LatticeSpec
    bays: tuple[Bay, ...]
    cd_x_mm: tuple[float, ...]
    rail_z_mm: tuple[float, ...]
    outline_mm: tuple[tuple[float, float], ...]
    notes: tuple[str, ...]
    width_mm: float
    z_bottom_mm: float

    @property
    def area(self) -> float:
        return sum(bay.area for bay in self.bays)

    @property
    def n_cut(self) -> int:
        return sum(1 for bay in self.bays if bay.kind != "rectangle")

    @property
    def n_rectangle(self) -> int:
        return sum(1 for bay in self.bays if bay.kind == "rectangle")


def layout_gable(
    outline_mm: list[tuple[float, float]] | tuple[tuple[float, float], ...],
    spec: LatticeSpec,
    *,
    inset_mm: float,
) -> GableLayout:
    """Clip the stud grid to the gable polygon. ``outline_mm`` is ``predstena_pts``."""
    outline = tuple((float(x), float(z)) for x, z in outline_mm)
    width = max(x for x, _ in outline) - min(x for x, _ in outline)
    # The trap spans the full gable width from the window eave.
    x_left = min(x for x, _ in outline)
    x_right = max(x for x, _ in outline)
    z_bottom = min(z for _, z in outline)
    z_max = max(z for _, z in outline)
    # Stations are measured across the gable, from the left eave at x = 0.
    cd_x = spec.cd_lines(x_right - x_left, inset_mm)
    cd_x = tuple(x_left + x for x in cd_x)
    rails = spec.rail_heights(z_bottom, z_max)
    bays = _bays(
        outline,
        cd_x,
        rails,
        x_left,
        x_right,
        z_bottom,
        z_max,
        support_outline=spec.perimeter == "supported",
    )
    notes = _notes(spec, cd_x, rails, x_left, x_right, z_bottom, bays)
    return GableLayout(spec, tuple(bays), cd_x, rails, outline, tuple(notes), width, z_bottom)


def describe_layout(layout: GableLayout) -> str:
    """Plain-language bay count and size spread for the report."""
    spec = layout.spec
    spans = sorted(bay.span_x * 1000.0 for bay in layout.bays)
    heights = sorted(bay.span_z * 1000.0 for bay in layout.bays)
    cut_area = sum(bay.area for bay in layout.bays if bay.kind != "rectangle")
    lines = [
        (
            f"{spec.name}: {spec.board}. "
            f"{_count(len(layout.cd_x_mm), 'vertical CD', 'vertical CDs')}, "
            f"{_count(len(layout.rail_z_mm), 'horizontal rail', 'horizontal rails')}, "
            f"{_count(len(layout.bays), 'field', 'fields')} "
            f"({layout.n_rectangle} rectangles, {layout.n_cut} cut by the roof or the perimeter)."
        ),
        (
            f"Field area {layout.area:.2f} m², of which {cut_area:.2f} m² is cut. "
            f"Widths {spans[0]:.0f}–{spans[-1]:.0f} mm, heights {heights[0]:.0f}–{heights[-1]:.0f} mm."
        ),
    ]
    lines.extend(layout.notes)
    buckets = _size_buckets(layout)
    if buckets:
        lines.append("Size groups (short side × long side, counting the cut outline): " + "; ".join(buckets) + ".")
    return " ".join(lines)


def layout_svg(layout: GableLayout, subtitle: str = "") -> str:
    """Gable outline, CD studs, joint rails, and every bay including the cut ones."""
    outline = layout.outline_mm
    xs = [p[0] for p in outline]
    zs = [p[1] for p in outline]
    for bay in layout.bays:
        for x, z in bay.polygon:
            xs.append(x * 1000.0)
            zs.append(z * 1000.0)
    min_x, max_x = min(xs), max(xs)
    min_z, max_z = min(zs), max(zs)
    span_x = max(max_x - min_x, 1.0)
    span_z = max(max_z - min_z, 1.0)
    plot_w = 980.0
    scale = plot_w / span_x
    plot_h = span_z * scale
    margin_l, margin_b, margin_r = 56.0, 36.0, 200.0
    margin_t = 68.0 if subtitle else 46.0
    width = margin_l + plot_w + margin_r
    height = margin_t + plot_h + margin_b

    def xy(x_mm: float, z_mm: float) -> tuple[float, float]:
        return margin_l + (x_mm - min_x) * scale, margin_t + (max_z - z_mm) * scale

    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.0f} {height:.0f}">',
        '<rect width="100%" height="100%" fill="#f7f5f1"/>',
        '<style>text{font-family:system-ui,sans-serif;fill:#222}</style>',
        (
            f'<text x="{margin_l}" y="28" font-size="18" font-weight="600">'
            f'{_esc(layout.spec.name)}</text>'
        ),
    ]
    if subtitle:
        parts.append(f'<text x="{margin_l}" y="48" font-size="13">{_esc(subtitle)}</text>')
    for bay in layout.bays:
        pts = " ".join(f"{xy(x * 1000.0, z * 1000.0)[0]:.1f},{xy(x * 1000.0, z * 1000.0)[1]:.1f}" for x, z in bay.polygon)
        fill = "#d5e3f2" if bay.kind == "rectangle" else "#f3d7b0"
        parts.append(f'<polygon points="{pts}" fill="{fill}" stroke="#8a8175" stroke-width="0.6"/>')
    # Studs and rails, clipped to the outline.
    for x in layout.cd_x_mm:
        seg = _vertical_inside(outline, x)
        if seg is None:
            continue
        x0, y0 = xy(x, seg[0])
        x1, y1 = xy(x, seg[1])
        parts.append(
            f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" '
            f'stroke="#1f4e79" stroke-width="2"/>'
        )
    for z in layout.rail_z_mm:
        seg = _horizontal_inside(outline, z)
        if seg is None:
            continue
        x0, y0 = xy(seg[0], z)
        x1, y1 = xy(seg[1], z)
        parts.append(
            f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" '
            f'stroke="#a33b32" stroke-width="2"/>'
        )
    outline_pts = " ".join(f"{xy(x, z)[0]:.1f},{xy(x, z)[1]:.1f}" for x, z in outline)
    parts.append(f'<polygon points="{outline_pts}" fill="none" stroke="#222" stroke-width="1.6"/>')
    # Edge labels.
    left = xy(min_x, layout.z_bottom_mm)
    right = xy(max_x, layout.z_bottom_mm)
    parts.append(
        f'<text x="{left[0]:.1f}" y="{left[1] + 18:.1f}" font-size="11">okna</text>'
    )
    parts.append(
        f'<text x="{right[0] - 36:.1f}" y="{right[1] + 18:.1f}" font-size="11">skříň</text>'
    )
    peak = max(outline, key=lambda p: p[1])
    px, py = xy(peak[0], peak[1])
    parts.append(
        f'<text x="{px + 6:.1f}" y="{py + 12:.1f}" font-size="11">hřeben šikminy</text>'
    )
    legend_x = margin_l + plot_w + 16
    legend_y = margin_t + 8
    entries = (
        ("#1f4e79", "CD"),
        ("#a33b32", "rail under a joint"),
        ("#d5e3f2", "full rectangle"),
        ("#f3d7b0", "cut field"),
    )
    for color, label in entries:
        parts.append(f'<rect x="{legend_x}" y="{legend_y}" width="14" height="10" fill="{color}" stroke="#666"/>')
        parts.append(f'<text x="{legend_x + 20}" y="{legend_y + 10}" font-size="12">{_esc(label)}</text>')
        legend_y += 22
    parts.append(
        f'<text x="{legend_x}" y="{legend_y + 8}" font-size="12">'
        f'{len(layout.bays)} fields, {layout.n_cut} cut</text>'
    )
    parts.append(
        f'<text x="{legend_x}" y="{legend_y + 26}" font-size="12">{layout.area:.2f} m²</text>'
    )
    parts.append("</svg>")
    return "\n".join(parts)


def _makeup_stations(length_mm: float, spacing_mm: float) -> list[float]:
    """Profile at the start, then exact modules, then one make-up bay at the far edge.

    5350 mm at 625 mm is eight stock bays and a 350 mm bay. A 1250 mm board
    joint then lands on a stud. The far edge is still a screw line.
    """
    if spacing_mm <= 1.0 or length_mm <= 1.0:
        raise ValueError("length and spacing must be positive")
    xs = [0.0]
    x = spacing_mm
    while x < length_mm - 0.5:
        xs.append(x)
        x += spacing_mm
    if length_mm - xs[-1] > 0.5:
        xs.append(length_mm)
    return xs


def _even_stations(length_mm: float, spacing_mm: float) -> list[float]:
    """Profile at both edges, then equal bays as close as possible to ``spacing_mm``.

    The count of bays is the integer nearest ``length / spacing``. The edges
    themselves are in the list, so the drawing shows the perimeter profile.
    """
    if spacing_mm <= 1.0 or length_mm <= 1.0:
        raise ValueError("length and spacing must be positive")
    n_bays = max(1, int(round(length_mm / spacing_mm)))
    step = length_mm / n_bays
    return [step * i for i in range(n_bays + 1)]


def _module_stations(length_mm: float, spacing_mm: float, inset_mm: float) -> list[float]:
    """Centres from ``inset`` stepping by ``spacing``, with a closer at the far inset.

    Same rule as the drawn bass frame (``_bass_cd_x_stations``): the module
    starts one inset in, and a stud is added at the far inset if the last
    step would leave the edge of the board without a screw line.
    """
    if spacing_mm <= 1.0:
        raise ValueError("spacing must be positive")
    x0 = inset_mm
    x1 = length_mm - inset_mm
    if x1 <= x0:
        return []
    xs: list[float] = []
    x = x0
    for _ in range(1000):
        if x > x1 + 1e-6:
            break
        xs.append(x)
        x += spacing_mm
    if not xs or xs[-1] < x1 - 1.0:
        xs.append(x1)
    return xs


def _bays(
    outline: tuple[tuple[float, float], ...],
    cd_x: tuple[float, ...],
    rails: tuple[float, ...],
    x_left: float,
    x_right: float,
    z_bottom: float,
    z_max: float,
    *,
    support_outline: bool,
) -> list[Bay]:
    xs = [x_left, *cd_x, x_right]
    xs = _unique(xs)
    # A sentinel above the roof closes the top row. It is not a rail.
    zs = [z_bottom, *rails, z_max + 80.0]
    zs = _unique(zs)
    support_x = {round(x, 3) for x in cd_x}
    support_z = {round(z, 3) for z in rails}
    bays: list[Bay] = []
    for x0, x1 in zip(xs, xs[1:]):
        for z0, z1 in zip(zs, zs[1:]):
            if x1 - x0 < 1.0 or z1 - z0 < 1.0:
                continue
            clipped = _cut_cell(outline, x0, x1, z0, z1)
            clipped = _dedupe(clipped, tol=0.4)
            if len(clipped) < 3:
                continue
            area_mm2 = abs(_shoelace(clipped))
            if area_mm2 < 800.0:
                continue
            left = _edge_label(clipped, outline, support_x, support_outline, x=x0)
            right = _edge_label(clipped, outline, support_x, support_outline, x=x1)
            bottom = _edge_label(clipped, outline, support_z, support_outline, z=z0)
            top = _edge_label(clipped, outline, support_z, support_outline, z=z1)
            poly_m = tuple((x / 1000.0, z / 1000.0) for x, z in clipped)
            bx0 = min(x for x, _ in poly_m)
            bx1 = max(x for x, _ in poly_m)
            bz0 = min(z for _, z in poly_m)
            bz1 = max(z for _, z in poly_m)
            area = area_mm2 / 1.0e6
            kind = _kind(clipped, area_mm2)
            bays.append(Bay(poly_m, area, bx0, bx1, bz0, bz1, left, right, bottom, top, kind))
    return bays


def _notes(
    spec: LatticeSpec,
    cd_x: tuple[float, ...],
    rails: tuple[float, ...],
    x_left: float,
    x_right: float,
    z_bottom: float,
    bays: list[Bay],
) -> list[str]:
    notes: list[str] = []
    # Even stations already include both edges, so the raw list has a zero gap
    # at each end until the duplicates are dropped.
    gaps = _gaps(_unique([x_left, *cd_x, x_right]))
    if spec.studs == "even" and spec.cd_x_mm is None and gaps:
        step = gaps[0]
        n_bays = len(gaps)
        notes.append(
            f"A profile on both edges, then {n_bays} equal bays of {step:.0f} mm "
            f"(target {spec.cd_spacing_mm:.0f} mm)."
        )
        if spec.cd_spacing_mm >= 1000.0 or step >= 1000.0:
            two = 2.0 * step
            notes.append(
                f"Boards are 1250×2500 cut to {two:.0f} mm, two bays each, so the joints "
                "fall on studs. The offcut is waste."
            )
            notes.append(
                "This spacing is at the top of a normal finished wall. "
                "Hairline cracks at the joints are a risk."
            )
    elif spec.studs == "makeup" and spec.cd_x_mm is None and gaps:
        makeup = gaps[-1]
        if abs(makeup - spec.cd_spacing_mm) <= 1.0:
            notes.append(
                f"Studs every {spec.cd_spacing_mm:.0f} mm from edge to edge. "
                "The width is an exact number of modules, so there is no make-up bay."
            )
        else:
            n_stock = len(gaps) - 1
            notes.append(
                f"Studs every {spec.cd_spacing_mm:.0f} mm from the left edge "
                f"({n_stock} bays), then one make-up bay of {makeup:.0f} mm at the far edge."
            )
            if spec.cd_spacing_mm >= 999.0:
                notes.append(
                    "Whole 1250×2000 boards laid horizontally cover two bays, so the joints "
                    "fall on studs. A rail sits under every 1250 mm joint."
                )
                notes.append(
                    "1000 mm is at the top of normal finished-wall spacing. "
                    "Hairline cracks at the joints are a risk."
                )
            elif _module_lands(1250.0, spec.cd_spacing_mm):
                notes.append("Stock 1250 mm boards land their joints on those studs.")
            else:
                notes.append(
                    "This spacing is a stiff check. A 1250 mm board joint does not "
                    "land on every stud."
                )
    elif gaps:
        edge = min(gaps[0], gaps[-1])
        notes.append(
            f"The module starts {edge:.0f} mm in from the gable edge, so the perimeter "
            "strip is a narrow field beside the first stud."
        )
        for left, right in zip(gaps, gaps[1:]):
            small = min(left, right)
            if small <= 1.0:
                continue
            ratio = max(left, right) / small
            delta = abs(left - right)
            if ratio > MILD_RATIO and delta > MILD_DELTA_MM and min(left, right) > edge + 1.0:
                notes.append(
                    f"One step of the CD module is {min(left, right):.0f} mm next to "
                    f"{max(left, right):.0f} mm (ratio {ratio:.2f}). That is more uneven "
                    "than a mild stretch. It is the closer stud at the far inset, not a "
                    "separate layout. Pass cd_x_mm to even it out."
                )
                break
    if spec.perimeter == "supported" and spec.studs in ("even", "makeup"):
        notes.append(
            "Sides, the rake, and the bottom line are simply supported. "
            "The 2–5 mm bead sits outside that screw line."
        )
    if spec.cd_x_mm is not None:
        notes.append("CD centres were passed in as a list.")
    if spec.rail_above_bottom_mm is not None:
        notes.append("Rail heights were passed in as a list.")
    if rails:
        lifted = ", ".join(f"{z - z_bottom:.0f} mm" for z in rails)
        if spec.perimeter == "supported":
            notes.append(f"Horizontal rails sit {lifted} above the bottom screw line.")
        else:
            notes.append(f"Horizontal rails sit {lifted} above the soft joint at the bottom.")
    else:
        notes.append("No horizontal rail lands inside this outline.")
    unsupported = sum(1 for bay in bays if bay.left == bay.right == bay.bottom == bay.top == "free")
    if unsupported:
        notes.append(f"{unsupported} fields do not touch a CD or a rail.")
    return notes


def _size_buckets(layout: GableLayout) -> list[str]:
    groups: dict[tuple[int, int], list[float]] = {}
    for bay in layout.bays:
        short = min(bay.span_x, bay.span_z) * 1000.0
        long = max(bay.span_x, bay.span_z) * 1000.0
        key = (int(round(short / 50.0) * 50), int(round(long / 50.0) * 50))
        groups.setdefault(key, []).append(bay.area)
    ordered = sorted(groups.items(), key=lambda item: -sum(item[1]))
    lines = []
    for (short, long), areas in ordered[:6]:
        lines.append(f"{len(areas)}× about {short:.0f}×{long:.0f} mm ({sum(areas):.2f} m²)")
    return lines


def _count(n: int, singular: str, plural: str) -> str:
    return f"{n} {singular if n == 1 else plural}"


def _module_lands(joint_mm: float, spacing_mm: float) -> bool:
    """True when ``joint_mm`` is a whole number of modules."""
    if spacing_mm <= 1.0:
        return False
    count = round(joint_mm / spacing_mm)
    return count >= 1 and abs(count * spacing_mm - joint_mm) < 1.0


def _gaps(stations: list[float]) -> list[float]:
    return [b - a for a, b in zip(stations, stations[1:])]


def _unique(values: list[float]) -> list[float]:
    ordered = sorted(values)
    out: list[float] = []
    for value in ordered:
        if not out or abs(value - out[-1]) > 0.5:
            out.append(value)
    return out


def _kind(poly: list[tuple[float, float]], area_mm2: float) -> str:
    xs = [p[0] for p in poly]
    zs = [p[1] for p in poly]
    bbox = (max(xs) - min(xs)) * (max(zs) - min(zs))
    axis = True
    for (x0, z0), (x1, z1) in zip(poly, poly[1:] + poly[:1]):
        if abs(x1 - x0) > 1.5 and abs(z1 - z0) > 1.5:
            axis = False
            break
    if len(poly) == 4 and axis and bbox > 0.0 and area_mm2 >= 0.97 * bbox:
        return "rectangle"
    if len(poly) == 3:
        return "triangle"
    if len(poly) == 4:
        return "trapezoid"
    return "polygon"


def _edge_label(
    poly: list[tuple[float, float]],
    outline: tuple[tuple[float, float], ...],
    supports: set[float],
    support_outline: bool,
    *,
    x: float | None = None,
    z: float | None = None,
) -> str:
    """``perimeter`` stays simply supported. ``supported`` follows the sheet model."""
    if support_outline and _on_outline(poly, outline, x=x, z=z):
        return "perimeter"
    if _on_support(poly, supports, x=x, z=z):
        return "supported"
    return "free"


def _on_outline(
    poly: list[tuple[float, float]],
    outline: tuple[tuple[float, float], ...],
    *,
    x: float | None = None,
    z: float | None = None,
) -> bool:
    return _outline_overlap(poly, outline, x=x, z=z) > 30.0


def _outline_overlap(
    poly: list[tuple[float, float]],
    outline: tuple[tuple[float, float], ...],
    *,
    x: float | None = None,
    z: float | None = None,
) -> float:
    """Length of this cell edge that also lies on the gable outline."""
    total = 0.0
    boundary = list(zip(outline, outline[1:] + outline[:1]))
    for (x0, z0), (x1, z1) in zip(poly, poly[1:] + poly[:1]):
        if x is not None:
            if abs(x0 - x) > 1.5 or abs(x1 - x) > 1.5:
                continue
            lo, hi = sorted((z0, z1))
        else:
            if z is None or abs(z0 - z) > 1.5 or abs(z1 - z) > 1.5:
                continue
            lo, hi = sorted((x0, x1))
        for (a0, b0), (a1, b1) in boundary:
            if x is not None:
                if abs(a0 - x) > 1.5 or abs(a1 - x) > 1.5:
                    continue
                olo, ohi = sorted((b0, b1))
            else:
                if abs(b0 - z) > 1.5 or abs(b1 - z) > 1.5:
                    continue
                olo, ohi = sorted((a0, a1))
            total += max(0.0, min(hi, ohi) - max(lo, olo))
    return total


def _on_support(poly: list[tuple[float, float]], supports: set[float], *, x: float | None = None, z: float | None = None) -> bool:
    if x is not None and round(x, 3) not in supports:
        return False
    if z is not None and round(z, 3) not in supports:
        return False
    return _overlap(poly, x=x, z=z) > 30.0


def _overlap(poly: list[tuple[float, float]], *, x: float | None = None, z: float | None = None, tol: float = 1.5) -> float:
    length = 0.0
    for (x0, z0), (x1, z1) in zip(poly, poly[1:] + poly[:1]):
        if x is not None and abs(x0 - x) <= tol and abs(x1 - x) <= tol:
            length += abs(z1 - z0)
        if z is not None and abs(z0 - z) <= tol and abs(z1 - z) <= tol:
            length += abs(x1 - x0)
    return length


def _shoelace(poly: list[tuple[float, float]]) -> float:
    area = 0.0
    for (x0, z0), (x1, z1) in zip(poly, poly[1:] + poly[:1]):
        area += x0 * z1 - x1 * z0
    return 0.5 * area


def _dedupe(poly: list[tuple[float, float]], tol: float) -> list[tuple[float, float]]:
    if not poly:
        return []
    out = [poly[0]]
    for point in poly[1:]:
        if math.hypot(point[0] - out[-1][0], point[1] - out[-1][1]) > tol:
            out.append(point)
    if len(out) > 1 and math.hypot(out[0][0] - out[-1][0], out[0][1] - out[-1][1]) <= tol:
        out.pop()
    return out


def _cut_cell(
    outline: tuple[tuple[float, float], ...],
    x0: float,
    x1: float,
    z0: float,
    z1: float,
) -> list[tuple[float, float]]:
    """Rectangle ∩ gable. The outline is a ceiling profile, not a convex shape.

    Every vertical line meets the outline twice (floor and roof). The piece
    inside the cell is the band between those, cut again by the cell's own
    top and bottom. A convex clip drops the roof peak, because the profile
    turns back on itself where the slope meets the flat run over the cabinets.
    """
    xs = {x0, x1}
    for x, _z in outline:
        if x0 + 1e-6 < x < x1 - 1e-6:
            xs.add(x)
    count = len(outline)
    for i in range(count):
        ax, az = outline[i]
        bx, bz = outline[(i + 1) % count]
        if abs(bz - az) < 1e-9:
            continue
        for level in (z0, z1):
            t = (level - az) / (bz - az)
            if -1e-8 <= t <= 1.0 + 1e-8:
                x = ax + t * (bx - ax)
                if x0 - 1e-6 <= x <= x1 + 1e-6:
                    xs.add(min(x1, max(x0, x)))
    ordered = sorted(xs)
    bottom: list[tuple[float, float]] = []
    top: list[tuple[float, float]] = []
    for x in ordered:
        span = _vertical_inside(outline, x)
        if span is None:
            continue
        z_floor, z_roof = span
        lo = max(z0, z_floor)
        hi = min(z1, z_roof)
        # Keep the tips where the roof crosses the cell (hi == lo). Dropping
        # those left the peak cap as a single point and threw the triangle away.
        if hi < lo - 0.05:
            continue
        hi = max(hi, lo)
        bottom.append((x, lo))
        top.append((x, hi))
    if len(bottom) < 2:
        return []
    return bottom + top[::-1]


def _clip(subject: list[tuple[float, float]], clip: tuple[tuple[float, float], ...]) -> list[tuple[float, float]]:
    """Sutherland–Hodgman. ``clip`` is the convex gable."""
    sign = 1.0 if _shoelace(list(clip)) > 0.0 else -1.0
    output = subject
    count = len(clip)
    for i in range(count):
        a = clip[i]
        b = clip[(i + 1) % count]
        output = _clip_edge(output, a, b, sign)
        if len(output) < 3:
            return []
    return output


def _clip_edge(
    poly: list[tuple[float, float]],
    a: tuple[float, float],
    b: tuple[float, float],
    sign: float,
) -> list[tuple[float, float]]:
    if not poly:
        return []

    def inside(point: tuple[float, float]) -> bool:
        cross = (b[0] - a[0]) * (point[1] - a[1]) - (b[1] - a[1]) * (point[0] - a[0])
        return sign * cross >= -1e-6

    def crossing(p: tuple[float, float], q: tuple[float, float]) -> tuple[float, float]:
        dx, dz = q[0] - p[0], q[1] - p[1]
        ex, ez = b[0] - a[0], b[1] - a[1]
        denom = dx * ez - dz * ex
        if abs(denom) < 1e-12:
            return q
        t = ((a[0] - p[0]) * ez - (a[1] - p[1]) * ex) / denom
        t = max(0.0, min(1.0, t))
        return (p[0] + t * dx, p[1] + t * dz)

    result: list[tuple[float, float]] = []
    for i, start in enumerate(poly):
        end = poly[(i + 1) % len(poly)]
        start_in, end_in = inside(start), inside(end)
        if start_in and end_in:
            result.append(end)
        elif start_in and not end_in:
            result.append(crossing(start, end))
        elif not start_in and end_in:
            result.append(crossing(start, end))
            result.append(end)
    return result


def _vertical_inside(outline: tuple[tuple[float, float], ...], x: float) -> tuple[float, float] | None:
    hits: list[float] = []
    count = len(outline)
    for i in range(count):
        x0, z0 = outline[i]
        x1, z1 = outline[(i + 1) % count]
        if abs(x1 - x0) < 1e-9:
            if abs(x0 - x) <= 1.0:
                hits.extend((z0, z1))
            continue
        t = (x - x0) / (x1 - x0)
        if -1e-8 <= t <= 1.0 + 1e-8:
            hits.append(z0 + t * (z1 - z0))
    if len(hits) < 2:
        return None
    return min(hits), max(hits)


def _horizontal_inside(outline: tuple[tuple[float, float], ...], z: float) -> tuple[float, float] | None:
    hits: list[float] = []
    count = len(outline)
    for i in range(count):
        x0, z0 = outline[i]
        x1, z1 = outline[(i + 1) % count]
        if abs(z1 - z0) < 1e-9:
            if abs(z0 - z) <= 1.0:
                hits.extend((x0, x1))
            continue
        t = (z - z0) / (z1 - z0)
        if -1e-8 <= t <= 1.0 + 1e-8:
            hits.append(x0 + t * (x1 - x0))
    if len(hits) < 2:
        return None
    return min(hits), max(hits)


def _esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
