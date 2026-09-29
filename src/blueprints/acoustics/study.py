"""Obývák thickness study: absorption from ObyvakParams, not a second table.

Cases are built with ``ObyvakParams``. naturheld_t and flex_t are the same
fields the geometry reads. flex_t is the Flex cavity and the batten depth;
foil stays a 1 mm seat.

Slope stack, room → attic, open fraction only (battens are the parallel path):

    StoSilent Finish+Basic (transparent; upper bound on absorption)
    naturheld 140 of thickness naturheld_t
    naturheld FLEX of thickness flex_t
    PE foil, limp mass (TYPICAL)
    gypsum, limp mass (TYPICAL)
    plenum air of plenum_t
    rigid termination

The CAD fills that plenum with mineral wool. This slice keeps the requested
air termination: that wool has no sheet resistivity here, so it is not given
one.

The soffit is a separate Naturheld + Flex volume. Its Flex depth is the
cavity from the board up to the duct clearance (``z_soffit_rail``), not
flex_t. Underside latě are only flex_t deep inside that cavity; this slice
still area-weights the whole underside with the slope's open fraction, which
overstates the batten blockage. Soffit α therefore moves with naturheld_t
and not with flex_t. Slope α moves with both.

Bass traps keep their own wool / air / gypsum thicknesses and are not swept.
Walls, floor, and glazing are inventoried from the layout and not given an
absorption model (α = 0 in the cheap Sabine / Eyring check, so that check
overestimates reverberation time).

flex 80 mm is not in the grid. That batten depth makes the soffit front lať
collide with the Ø160 ducts (``build`` raises). 40 mm and 60 mm are the
requested cross; 60 mm is already tight on that clearance and is still reported.
"""

from __future__ import annotations

import argparse
import csv
import math
import sys
from dataclasses import dataclass
from pathlib import Path

from blueprints.acoustics.materials import (
    BASS_WOOL_SIGMA_NOTE,
    BASS_WOOL_SIGMA_PA_S_M2,
    DECLARED_MINIMUM_CAVEAT,
    NATURHELD_140,
    TRANSPARENT_FACING_CAVEAT,
    WALL_140_ANALOGUE_CAVEAT,
    flex_table_sigma_pa_s_m2,
    foil_areal_mass_kg_m2,
    gypsum_areal_mass_kg_m2,
)
from blueprints.acoustics.transfer import (
    Layer,
    area_weighted_absorption,
    normal_absorption,
    porous_layers_out_of_range,
    rigid_backed_impedance,
)

# IEC nominal third-octave centres, 63 Hz through 4 kHz.
THIRD_OCTAVE_HZ = (
    63, 80, 100, 125, 160, 200, 250, 315, 400, 500,
    630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000,
)

# Requested cross. flex 80 mm is omitted; see module docstring.
THICKNESS_GRID_MM = tuple(
    (nh, flex)
    for nh in (40.0, 60.0, 80.0)
    for flex in (40.0, 60.0)
)

REPORT_HZ = (125, 250, 500, 1000)


def _ensure_models_on_path() -> None:
    repo = Path(__file__).resolve().parents[3]
    models = str(repo / "models")
    if models not in sys.path:
        sys.path.insert(0, models)


def open_fraction_from_params(params) -> float:
    """(spacing − batten width) / spacing. Not a hardcoded 0.9."""
    spacing = params.rost_spacing
    width = params.rost_w
    if spacing <= width:
        raise ValueError("rost spacing must exceed batten width")
    return (spacing - width) / spacing


def naturheld_sigma(mode: str) -> tuple[float, str]:
    if mode == "declared_minimum":
        return NATURHELD_140.declared_minimum_sigma_pa_s_m2, DECLARED_MINIMUM_CAVEAT
    if mode == "wall_140_analogue":
        return NATURHELD_140.wall_140_analogue_sigma_pa_s_m2, WALL_140_ANALOGUE_CAVEAT
    raise ValueError(mode)


def _coat(params) -> Layer:
    return Layer(
        name="StoSilent Finish+Basic",
        kind="transparent",
        thickness_m=(params.finish_t + params.basic_t) / 1000.0,
        note=TRANSPARENT_FACING_CAVEAT,
    )


def slope_open_layers(params, sigma_mode: str) -> list[Layer]:
    sigma_nh, nh_note = naturheld_sigma(sigma_mode)
    sigma_fx, fx_note = flex_table_sigma_pa_s_m2(params.flex_t)
    return [
        _coat(params),
        Layer(
            "naturheld 140",
            "porous",
            params.naturheld_t / 1000.0,
            sigma_nh,
            note=nh_note,
        ),
        Layer(
            "naturheld FLEX",
            "porous",
            params.flex_t / 1000.0,
            sigma_fx,
            note=fx_note,
        ),
        Layer(
            "PE foil",
            "limp",
            params.foil_t / 1000.0,
            areal_mass_kg_m2=foil_areal_mass_kg_m2(params.foil_t),
            note="TYPICAL PE density 950 kg/m³, not project data",
        ),
        Layer(
            "gypsum",
            "limp",
            params.sdk_t / 1000.0,
            areal_mass_kg_m2=gypsum_areal_mass_kg_m2(params.sdk_t),
            note="TYPICAL ~9 kg/m² at 12.5 mm, not project data",
        ),
        Layer(
            "plenum air",
            "air",
            params.plenum_t / 1000.0,
            note="air termination as specified; CAD plenum wool is not assigned a resistivity",
        ),
    ]


def soffit_flex_depth_mm(layout) -> float:
    """Flex volume above the soffit board, stopped short of the ducts."""
    z0 = layout.z_nabeh_bot + layout.t_nh_face
    return layout.z_soffit_rail() - z0


def soffit_air_gap_mm(layout) -> float:
    """Empty void from the Flex top to the underside of the GKF lid."""
    return layout.z_soffit_lid - layout.z_soffit_rail()


def soffit_open_layers(params, layout, sigma_mode: str) -> list[Layer]:
    flex_mm = soffit_flex_depth_mm(layout)
    air_mm = soffit_air_gap_mm(layout)
    if flex_mm <= 1.0 or air_mm <= 1.0:
        raise ValueError(f"soffit cavity collapsed (flex {flex_mm:.1f} mm, air {air_mm:.1f} mm)")
    sigma_nh, nh_note = naturheld_sigma(sigma_mode)
    sigma_fx, fx_note = flex_table_sigma_pa_s_m2(flex_mm)
    return [
        _coat(params),
        Layer("soffit naturheld 140", "porous", params.naturheld_t / 1000.0, sigma_nh, note=nh_note),
        Layer(
            "soffit naturheld FLEX",
            "porous",
            flex_mm / 1000.0,
            sigma_fx,
            note=fx_note + f"; cavity depth {flex_mm:.1f} mm from the layout, not flex_t",
        ),
        Layer(
            "soffit service void",
            "air",
            air_mm / 1000.0,
            note="duct bay between Flex and the lid; ducts themselves are not absorbers",
        ),
        Layer(
            "soffit gypsum lid",
            "limp",
            params.sdk_t / 1000.0,
            areal_mass_kg_m2=gypsum_areal_mass_kg_m2(params.sdk_t),
            note="TYPICAL gypsum areal mass; no foil on this lid in the model",
        ),
    ]


def bass_layers(wool_mm: float, air_mm: float, gkb_mm: float, name: str) -> list[Layer]:
    """Room → GKB → air → wool → rigid wall. Thicknesses stay on ObyvakParams."""
    return [
        Layer(
            f"{name} GKB",
            "limp",
            gkb_mm / 1000.0,
            areal_mass_kg_m2=gypsum_areal_mass_kg_m2(gkb_mm),
            note="TYPICAL gypsum areal mass",
        ),
        Layer(f"{name} air", "air", air_mm / 1000.0),
        Layer(
            f"{name} mineral wool",
            "porous",
            wool_mm / 1000.0,
            BASS_WOOL_SIGMA_PA_S_M2,
            note=BASS_WOOL_SIGMA_NOTE,
        ),
    ]


def stack_absorption(layers: list[Layer], freq_hz: float, open_fraction: float) -> tuple[float, str]:
    impedance = rigid_backed_impedance(layers, freq_hz)
    alpha_open = normal_absorption(impedance)
    alpha = area_weighted_absorption(alpha_open, open_fraction)
    outside = porous_layers_out_of_range(layers, freq_hz)
    flag = ""
    if outside:
        flag = "out of Miki range: " + ", ".join(outside)
    return alpha, flag


@dataclass(frozen=True)
class Surface:
    id: str
    construction: str
    area_m2: float
    in_thickness_sweep: bool
    note: str


def _polygon_area_mm2(pts: list[tuple[float, float]]) -> float:
    area = 0.0
    for (x1, z1), (x2, z2) in zip(pts, pts[1:] + pts[:1]):
        area += x1 * z2 - x2 * z1
    return abs(area) * 0.5


def _polyline_mm(pts: list[tuple[float, float]]) -> float:
    return sum(math.hypot(b[0] - a[0], b[1] - a[1]) for a, b in zip(pts, pts[1:]))


def room_volume_m3(layout) -> float:
    """Gross air under the acoustic face, extruded along Y. Traps are still inside."""
    params = layout.p
    pts = [(0.0, 0.0), *layout.ceil_pts(), (params.room_width, 0.0)]
    return _polygon_area_mm2(pts) * params.room_length / 1e9


def soffit_lat_clearance_mm(layout) -> float:
    """Millimetres of spare in the 3D duct check. Negative means ``build`` raises."""
    x_duct0, _x_duct1 = layout.soffit_duct_x_extent()
    lat_end = layout.x_nh_inner + layout.p.rost_d
    return x_duct0 - (lat_end + 8.0)


def surface_inventory(layout) -> list[Surface]:
    """Analytical areas. CAD solids are not meshed. Overlaps (furniture, columns) stay in."""
    params = layout.p
    bay_mm = layout.y_furn1 - layout.y_furn0
    slope_mm = _polyline_mm(layout.ceil_pts()[:3])
    slope_area = slope_mm * bay_mm / 1e6
    soffit_under = (params.room_width - layout.x_furn) * bay_mm / 1e6
    bulkhead_h = layout.z_ceil(layout.x_furn) - layout.z_nabeh_bot
    bulkhead = bulkhead_h * bay_mm / 1e6
    bass_one = _polygon_area_mm2(layout.predstena_pts()) / 1e6
    floor = params.room_width * params.room_length / 1e6
    glazing = sum(width * params.window_h for _y0, width in params.eave_windows) / 1e6
    eave_gross = params.room_length * layout.h_start / 1e6
    eave_opaque = eave_gross - glazing
    doors = sum(width * params.pocket_door_h for _end, _x, width in params.pocket_doors) / 1e6
    gable_low = (2.0 * params.room_width * params.predstena_bottom_z) / 1e6 - doors
    cabinet = bay_mm * layout.z_nabeh_bot / 1e6
    return [
        Surface(
            "slope",
            "StoSilent + naturheld 140 + Flex/battens + foil + GKF + plenum air",
            slope_area,
            True,
            "visible šikminy between the bass traps; pack itself runs wall to wall",
        ),
        Surface(
            "soffit_underside",
            "StoSilent + naturheld 140 + deep Flex cavity + air void + GKF lid",
            soffit_under,
            True,
            "horizontal Naturheld/Flex volume over the cabinet bay; Flex depth is the cavity, not flex_t",
        ),
        Surface(
            "soffit_bulkhead",
            "vertical naturheld face at the furniture line",
            bulkhead,
            False,
            "inventoried only; backing is the duct bay, not given its own matrix in this slice",
        ),
        Surface(
            "bass_kitchen",
            f"MW {params.bass_k_wool:.0f} + air {params.bass_k_air:.0f} + GKB {params.bass_k_gkb:.0f}",
            bass_one,
            False,
            "fixed build-up; wool resistivity is a TYPICAL placeholder",
        ),
        Surface(
            "bass_living",
            f"GKB {params.bass_l_gkb:.0f} + air {params.bass_l_air:.0f} + MW {params.bass_l_wool:.0f}",
            bass_one,
            False,
            "fixed build-up, mirrored; same placeholder wool resistivity",
        ),
        Surface("floor", f"floor slab {params.floor_t:.0f} mm", floor, False, "absorption not modeled"),
        Surface("glazing", f"glass {params.glass_t:.0f} mm", glazing, False, "absorption not modeled"),
        Surface(
            "eave_opaque",
            "masonry + plaster, window wall beside and above the glass",
            eave_opaque,
            False,
            "absorption not modeled",
        ),
        Surface(
            "gable_below_traps",
            "gable wall below 2450 mm, door openings removed",
            gable_low,
            False,
            "absorption not modeled",
        ),
        Surface(
            "cabinet_wall",
            "plaster below the soffit, cabinet bay",
            cabinet,
            False,
            "gross face; furniture in front is not subtracted; absorption not modeled",
        ),
    ]


@dataclass(frozen=True)
class CaseSpec:
    case_id: str
    naturheld_t_mm: float
    flex_t_mm: float
    sigma_mode: str
    as_built: bool
    sensitivity: bool


def case_specs() -> list[CaseSpec]:
    specs = []
    for nh, flex in THICKNESS_GRID_MM:
        as_built = nh == 60.0 and flex == 40.0
        specs.append(
            CaseSpec(
                case_id="as_built" if as_built else f"nh{int(nh)}_flex{int(flex)}",
                naturheld_t_mm=nh,
                flex_t_mm=flex,
                sigma_mode="declared_minimum",
                as_built=as_built,
                sensitivity=False,
            )
        )
    specs.append(
        CaseSpec(
            case_id="as_built_sigma75_wall140_analogue",
            naturheld_t_mm=60.0,
            flex_t_mm=40.0,
            sigma_mode="wall_140_analogue",
            as_built=False,
            sensitivity=True,
        )
    )
    return specs


@dataclass
class BandResult:
    freq_hz: int
    alpha_slope: float
    alpha_soffit: float
    alpha_bass_kitchen: float
    alpha_bass_living: float
    slope_miki_flag: str
    soffit_miki_flag: str
    sabine_s: float
    eyring_s: float


@dataclass
class CaseResult:
    spec: CaseSpec
    open_fraction: float
    nh_sigma_pa_s_m2: float
    nh_sigma_note: str
    flex_sigma_pa_s_m2: float
    flex_sigma_note: str
    soffit_flex_mm: float
    soffit_flex_sigma_pa_s_m2: float
    soffit_flex_sigma_note: str
    duct_clearance_mm: float
    h_start_mm: float
    t_nh_face_mm: float
    t_flex_pack_mm: float
    volume_m3: float
    surfaces: list[Surface]
    bands: list[BandResult]


def _layout_for(spec: CaseSpec):
    _ensure_models_on_path()
    from obyvak_geom import ObyvakParams, build_layout

    params = ObyvakParams(naturheld_t=spec.naturheld_t_mm, flex_t=spec.flex_t_mm)
    return params, build_layout(params)


def evaluate_case(spec: CaseSpec) -> CaseResult:
    params, layout = _layout_for(spec)
    fraction = open_fraction_from_params(params)
    sigma_nh, nh_note = naturheld_sigma(spec.sigma_mode)
    sigma_fx, fx_note = flex_table_sigma_pa_s_m2(params.flex_t)
    soffit_layers = soffit_open_layers(params, layout, spec.sigma_mode)
    soffit_flex = next(layer for layer in soffit_layers if layer.name == "soffit naturheld FLEX")
    slope_layers = slope_open_layers(params, spec.sigma_mode)
    kitchen = bass_layers(params.bass_k_wool, params.bass_k_air, params.bass_k_gkb, "kitchen bass")
    living = bass_layers(params.bass_l_wool, params.bass_l_air, params.bass_l_gkb, "living bass")
    surfaces = surface_inventory(layout)
    by_id = {surface.id: surface for surface in surfaces}
    volume = room_volume_m3(layout)
    total_area = sum(surface.area_m2 for surface in surfaces)
    bands: list[BandResult] = []
    for freq in THIRD_OCTAVE_HZ:
        alpha_slope, slope_flag = stack_absorption(slope_layers, freq, fraction)
        alpha_soffit, soffit_flag = stack_absorption(soffit_layers, freq, fraction)
        alpha_kitchen, _kitchen_flag = stack_absorption(kitchen, freq, 1.0)
        alpha_living, _living_flag = stack_absorption(living, freq, 1.0)
        # Bass flags are not the thickness study. The wool placeholder is out of
        # range on its own terms and is not mixed into the slope flag.
        absorption_area = (
            alpha_slope * by_id["slope"].area_m2
            + alpha_soffit * by_id["soffit_underside"].area_m2
            + alpha_kitchen * by_id["bass_kitchen"].area_m2
            + alpha_living * by_id["bass_living"].area_m2
        )
        # Unmodeled surfaces contribute α = 0, so Sabine/Eyring are high.
        sabine = 0.161 * volume / absorption_area
        mean = absorption_area / total_area
        eyring = 0.161 * volume / (-total_area * math.log(1.0 - mean))
        bands.append(
            BandResult(
                freq_hz=freq,
                alpha_slope=alpha_slope,
                alpha_soffit=alpha_soffit,
                alpha_bass_kitchen=alpha_kitchen,
                alpha_bass_living=alpha_living,
                slope_miki_flag=slope_flag,
                soffit_miki_flag=soffit_flag,
                sabine_s=sabine,
                eyring_s=eyring,
            )
        )
    return CaseResult(
        spec=spec,
        open_fraction=fraction,
        nh_sigma_pa_s_m2=sigma_nh,
        nh_sigma_note=nh_note,
        flex_sigma_pa_s_m2=sigma_fx,
        flex_sigma_note=fx_note,
        soffit_flex_mm=soffit_flex.thickness_m * 1000.0,
        soffit_flex_sigma_pa_s_m2=soffit_flex.sigma_pa_s_m2 or 0.0,
        soffit_flex_sigma_note=soffit_flex.note,
        duct_clearance_mm=soffit_lat_clearance_mm(layout),
        h_start_mm=layout.h_start,
        t_nh_face_mm=layout.t_nh_face,
        t_flex_pack_mm=layout.t_flex_pack,
        volume_m3=volume,
        surfaces=surfaces,
        bands=bands,
    )


def run_study() -> list[CaseResult]:
    return [evaluate_case(spec) for spec in case_specs()]


def _repo_root() -> Path:
    return Path(__file__).resolve().parents[3]


def write_outputs(results: list[CaseResult], out_dir: Path) -> tuple[Path, Path]:
    out_dir.mkdir(parents=True, exist_ok=True)
    csv_path = out_dir / "obyvak_miki_normal.csv"
    md_path = out_dir / "obyvak_miki_normal.md"
    _write_csv(results, csv_path)
    _write_md(results, md_path)
    return csv_path, md_path


def _write_csv(results: list[CaseResult], path: Path) -> None:
    fields = [
        "case_id",
        "as_built",
        "sensitivity",
        "naturheld_t_mm",
        "flex_t_mm",
        "nh_sigma_Pa_s_m2",
        "nh_sigma_note",
        "flex_sigma_Pa_s_m2",
        "flex_sigma_note",
        "soffit_flex_mm",
        "soffit_flex_sigma_Pa_s_m2",
        "open_fraction",
        "facing",
        "freq_hz",
        "alpha_slope",
        "alpha_soffit",
        "slope_miki_flag",
        "soffit_miki_flag",
        "sabine_rt60_s_cheap_check",
        "eyring_rt60_s_cheap_check",
        "duct_clearance_mm",
    ]
    with path.open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        for result in results:
            for band in result.bands:
                writer.writerow(
                    {
                        "case_id": result.spec.case_id,
                        "as_built": int(result.spec.as_built),
                        "sensitivity": int(result.spec.sensitivity),
                        "naturheld_t_mm": result.spec.naturheld_t_mm,
                        "flex_t_mm": result.spec.flex_t_mm,
                        "nh_sigma_Pa_s_m2": result.nh_sigma_pa_s_m2,
                        "nh_sigma_note": result.nh_sigma_note,
                        "flex_sigma_Pa_s_m2": result.flex_sigma_pa_s_m2,
                        "flex_sigma_note": result.flex_sigma_note,
                        "soffit_flex_mm": f"{result.soffit_flex_mm:.2f}",
                        "soffit_flex_sigma_Pa_s_m2": result.soffit_flex_sigma_pa_s_m2,
                        "open_fraction": f"{result.open_fraction:.6f}",
                        "facing": "stosilent_transparent_upper_bound",
                        "freq_hz": band.freq_hz,
                        "alpha_slope": f"{band.alpha_slope:.6f}",
                        "alpha_soffit": f"{band.alpha_soffit:.6f}",
                        "slope_miki_flag": band.slope_miki_flag,
                        "soffit_miki_flag": band.soffit_miki_flag,
                        "sabine_rt60_s_cheap_check": f"{band.sabine_s:.4f}",
                        "eyring_rt60_s_cheap_check": f"{band.eyring_s:.4f}",
                        "duct_clearance_mm": f"{result.duct_clearance_mm:.2f}",
                    }
                )


def _band_map(result: CaseResult) -> dict[int, BandResult]:
    return {band.freq_hz: band for band in result.bands}


def _write_md(results: list[CaseResult], path: Path) -> None:
    as_built = next(result for result in results if result.spec.as_built)
    lines = [
        "# Obývák normal-incidence absorption (Miki 1990)",
        "",
        "Expert result of this slice: normal-incidence absorption of the slope pack",
        "and the soffit pack versus third-octave frequency. Not a measured RT60,",
        "and not a wave solution of the room.",
        "",
        TRANSPARENT_FACING_CAVEAT,
        "No second facing was run: a citable flow resistivity for a few-millimetre",
        "seamless acoustic plaster was not found. Sto system αw was not copied.",
        "",
        "naturheld 140 working resistivity is the declared minimum 60 kPa·s/m².",
        DECLARED_MINIMUM_CAVEAT + ".",
        "Gutex Multitherm (about 140 kg/m³) publishes the same >= 60 bound and is not used as a point.",
        "One sensitivity case uses 75 kPa·s/m² from best wood WALL 140 (AFr75, same density),",
        "still a bound, not a Naturheld measurement. STEICOtherm was not used.",
        "Flex uses the sheet table (5 kPa·s/m² up to 60 mm, 6 from 80 mm), not AFr10.",
        "",
        "Out-of-range Miki bands (0.01 < f/σ < 1, σ in Pa·s/m²) are computed and flagged.",
        "They are not lab-grade. At 60 kPa·s/m² the naturheld 140 floor puts centres",
        "at and below 500 Hz outside the window.",
        "",
        "Sabine and Eyring columns are a cheap check only. Walls, floor, glazing, and the",
        "soffit bulkhead are in the area sum with α = 0, so those times are high.",
        "Bass-trap wool uses a TYPICAL 10 kPa·s/m² placeholder and is not swept.",
        "",
        f"Open fraction from rost_w / rost_spacing = {as_built.open_fraction:.6f}.",
        f"As-built ceiling datum h_start = {as_built.h_start_mm:.3f} mm,",
        f"t_nh_face = {as_built.t_nh_face_mm:.1f} mm, t_flex_pack = {as_built.t_flex_pack_mm:.1f} mm.",
        "",
        "## Slope absorption at 125 / 250 / 500 / 1000 Hz",
        "",
        "| case | nh mm | flex mm | σ140 | duct clearance mm | 125 | 250 | 500 | 1000 |",
        "| --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: |",
    ]
    for result in results:
        bands = _band_map(result)
        role = "75 analogue" if result.spec.sensitivity else "60 floor"
        cells = " | ".join(f"{bands[freq].alpha_slope:.3f}" for freq in REPORT_HZ)
        lines.append(
            f"| {result.spec.case_id} | {result.spec.naturheld_t_mm:.0f} | "
            f"{result.spec.flex_t_mm:.0f} | {role} | {result.duct_clearance_mm:.1f} | {cells} |"
        )
    lines.extend(
        [
            "",
            "## Soffit underside at the same frequencies",
            "",
            "Flex depth is the layout cavity (about "
            f"{as_built.soffit_flex_mm:.0f} mm as-built), table σ for that thickness.",
            "Area weight uses the batten fraction of the whole face and overstates the blockage.",
            "",
            "| case | soffit flex mm | 125 | 250 | 500 | 1000 |",
            "| --- | ---: | ---: | ---: | ---: | ---: |",
        ]
    )
    for result in results:
        bands = _band_map(result)
        cells = " | ".join(f"{bands[freq].alpha_soffit:.3f}" for freq in REPORT_HZ)
        lines.append(
            f"| {result.spec.case_id} | {result.soffit_flex_mm:.1f} | {cells} |"
        )
    lines.extend(["", "## As-built third octaves (slope)", ""])
    lines.append("| Hz | α slope | α soffit | Miki flag | Sabine s (cheap) | Eyring s (cheap) |")
    lines.append("| ---: | ---: | ---: | --- | ---: | ---: |")
    for band in as_built.bands:
        flag = band.slope_miki_flag or "in range"
        lines.append(
            f"| {band.freq_hz} | {band.alpha_slope:.4f} | {band.alpha_soffit:.4f} | "
            f"{flag} | {band.sabine_s:.2f} | {band.eyring_s:.2f} |"
        )
    lines.extend(["", "## Surface inventory (as-built, analytical)", ""])
    lines.append("| id | area m² | swept | construction |")
    lines.append("| --- | ---: | --- | --- |")
    for surface in as_built.surfaces:
        lines.append(
            f"| {surface.id} | {surface.area_m2:.2f} | {surface.in_thickness_sweep} | {surface.construction} |"
        )
    lines.extend(
        [
            "",
            "Bass traps, walls, glass, and floor are not retuned. Their areas follow the",
            "ceiling only where the existing outline already does (trap face, eave wall).",
            "",
        ]
    )
    path.write_text("\n".join(lines))


def _print_summary(results: list[CaseResult]) -> None:
    print("Obývák Miki normal-incidence absorption. Not an RT60.")
    print(TRANSPARENT_FACING_CAVEAT)
    print("Facing mode shipped: transparent only (no citable plaster resistivity).")
    header = f"{'case':<36} {'125':>7} {'250':>7} {'500':>7} {'1000':>7}  note"
    print(header)
    for result in results:
        bands = _band_map(result)
        note = result.nh_sigma_note
        if result.duct_clearance_mm < 0:
            note = f"soffit lať/duct clearance {result.duct_clearance_mm:.1f} mm; " + note
        alphas = " ".join(f"{bands[freq].alpha_slope:7.3f}" for freq in REPORT_HZ)
        print(f"{result.spec.case_id:<36} {alphas}  {note}")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Obývák normal-incidence absorption study")
    parser.add_argument(
        "--out",
        type=Path,
        default=None,
        help="output directory (default: exports/acoustics)",
    )
    args = parser.parse_args(argv)
    out = args.out
    if out is None:
        out = _repo_root() / "exports" / "acoustics"
    results = run_study()
    csv_path, md_path = write_outputs(results, out)
    _print_summary(results)
    print(f"csv: {csv_path}")
    print(f"markdown: {md_path}")
    return 0
