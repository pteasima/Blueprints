"""Angle-dependent ray decay of the Obývák, one ceiling at a time.

The shell is the as-built air volume. A few centimetres of wool do not
rebuild it. Soffit and bass traps keep one build-up in every case. The ray
tracer looks up α at the arrival angle. The Paris coefficient is written
beside the decays so a reader can compare; the rays do not use it.

125 Hz is not marched. In this volume the Schroeder frequency sits near
100–150 Hz when the reverberation time is about half a second to a second,
so a ray decay at 125 Hz would not be a result. Bass modes are not in this
model.

A Sabine/Eyring figure is an appendix column. It does not rank the options.
"""

from __future__ import annotations

import csv
import math
import sys
from dataclasses import dataclass
from pathlib import Path

import numpy as np

from blueprints.acoustics.materials import (
    TYPICAL_UNTREATED_ALPHA,
    TYPICAL_UNTREATED_NOTE,
    bass_wool_sigma,
    flex_table_sigma_pa_s_m2,
    foil_areal_mass_kg_m2,
    gypsum_areal_mass_kg_m2,
)
from blueprints.acoustics.rays import (
    prepare_grids,
    scattering_for,
    trace_decay,
)
from blueprints.acoustics.shell import build_shell
from blueprints.acoustics.study import (
    bass_layers,
    naturheld_sigma,
    open_fraction_from_params,
    soffit_lat_clearance_mm,
    soffit_open_layers,
)
from blueprints.acoustics.transfer import Layer, miki_in_range, paris_absorption

# Octave centres the rays are allowed to speak for. 125 Hz is omitted on purpose.
BANDS_HZ = (250, 500, 1000, 2000)
N_RAYS = 4000
MAX_BOUNCES = 55
SEED0 = 4100

# Same three places in every construction. Receivers are not on the sources.
# Plan 5350 x 11100 mm. Kitchen gable is Y=0, living gable is Y=11100.
SEATS = (
    ("kitchen", (2.00, 1.60, 1.20), (2.70, 2.50, 1.20)),
    ("living", (2.20, 5.50, 1.20), (3.00, 6.60, 1.20)),
    ("gable_seat", (2.00, 9.80, 1.10), (2.80, 8.80, 1.20)),
)


@dataclass(frozen=True)
class Option:
    option_id: str
    title: str
    naturheld_mm: float
    flex_mm: float
    battens: bool
    coat: bool
    sigma_mode: str
    # None: decided from duct clearance. False: forced, still traced as a bound.
    buildable: bool | None
    note: str


def options() -> list[Option]:
    return [
        Option(
            "as_built",
            "as built: naturheld 60 mm, Flex 40 mm, battens",
            60.0,
            40.0,
            True,
            True,
            "declared_minimum",
            None,
            "drawn ceiling",
        ),
        Option(
            "nh40_flex40",
            "naturheld 40 mm, Flex 40 mm, battens",
            40.0,
            40.0,
            True,
            True,
            "declared_minimum",
            None,
            "thinner board, buildable on the duct check",
        ),
        Option(
            "nh40_flex60",
            "naturheld 40 mm, Flex 60 mm, battens",
            40.0,
            60.0,
            True,
            True,
            "declared_minimum",
            None,
            "deeper Flex, still clear of the ducts",
        ),
        Option(
            "no_flex",
            "remove Flex and the battens; board, foil and gypsum remain",
            60.0,
            0.0,
            False,
            True,
            "declared_minimum",
            None,
            "gypsum is carried by the CD grid and the hangers, not by the Flex latě; "
            "no replacement battens; no 40 mm cavity",
        ),
        Option(
            "no_140",
            "remove the naturheld 140 face; keep Flex and battens",
            0.0,
            40.0,
            True,
            False,
            "declared_minimum",
            None,
            "the plaster sits on the 140, so the coat goes with the board",
        ),
        Option(
            "gypsum_foil",
            "no Naturheld: foil and gypsum only",
            0.0,
            0.0,
            False,
            False,
            "declared_minimum",
            None,
            "no 140, no Flex, no battens, no plaster coat",
        ),
        Option(
            "nh60_flex60_not_buildable",
            "naturheld 60 mm, Flex 60 mm (not buildable until the ducts move)",
            60.0,
            60.0,
            True,
            True,
            "declared_minimum",
            False,
            "bound only; duct clearance is negative",
        ),
        Option(
            "as_built_sigma75",
            "as built, slope σ = 75 kPa·s/m² sensitivity",
            60.0,
            40.0,
            True,
            True,
            "wall_140_analogue",
            None,
            "slope board only; soffit and bass stay on their fixed values",
        ),
    ]


def _ensure_models() -> None:
    repo = Path(__file__).resolve().parents[3]
    models = str(repo / "models")
    if models not in sys.path:
        sys.path.insert(0, models)


def slope_layers(option: Option, params) -> list[Layer]:
    """Room → attic. Zero thickness is a real layer, not a crash."""
    layers: list[Layer] = []
    if option.coat:
        layers.append(
            Layer(
                "StoSilent Finish+Basic",
                "transparent",
                (params.finish_t + params.basic_t) / 1000.0,
                note="acoustically transparent; upper bound on absorption",
            )
        )
    sigma_nh, nh_note = naturheld_sigma(option.sigma_mode)
    sigma_fx, fx_note = flex_table_sigma_pa_s_m2(option.flex_mm if option.flex_mm > 0 else 40.0)
    layers.append(
        Layer("naturheld 140", "porous", option.naturheld_mm / 1000.0, sigma_nh, note=nh_note)
    )
    layers.append(
        Layer("naturheld FLEX", "porous", option.flex_mm / 1000.0, sigma_fx, note=fx_note)
    )
    layers.append(
        Layer(
            "PE foil",
            "limp",
            params.foil_t / 1000.0,
            areal_mass_kg_m2=foil_areal_mass_kg_m2(params.foil_t),
            note="TYPICAL PE density 950 kg/m³",
        )
    )
    layers.append(
        Layer(
            "gypsum",
            "limp",
            params.sdk_t / 1000.0,
            areal_mass_kg_m2=gypsum_areal_mass_kg_m2(params.sdk_t),
            note="TYPICAL ~9 kg/m² at 12.5 mm",
        )
    )
    layers.append(
        Layer(
            "plenum air",
            "air",
            params.plenum_t / 1000.0,
            note="air then rigid; CAD plenum wool has no sheet resistivity and is not given one",
        )
    )
    return layers


def _out_of_range(layers: list[Layer], freq_hz: float) -> list[str]:
    names = []
    for layer in layers:
        if layer.kind != "porous" or layer.thickness_m <= 0.0 or layer.sigma_pa_s_m2 is None:
            continue
        if not miki_in_range(freq_hz, layer.sigma_pa_s_m2):
            names.append(layer.name)
    return names


def _areas(shell) -> dict[str, float]:
    tris = shell.triangles
    cross = np.cross(tris[:, 1] - tris[:, 0], tris[:, 2] - tris[:, 0])
    area = 0.5 * np.linalg.norm(cross, axis=1)
    out: dict[str, float] = {}
    for sid, name in enumerate(shell.surface_names):
        out[name] = float(area[shell.surface_ids == sid].sum())
    return out


def _sabine_eyring(volume: float, areas: dict[str, float], paris: dict[str, float], residual: float) -> tuple[float, float]:
    absorbing = 0.0
    total = 0.0
    for name, area in areas.items():
        total += area
        if name in paris:
            absorbing += paris[name] * area
        else:
            absorbing += residual * area
    if absorbing <= 1e-6:
        return math.inf, math.inf
    sabine = 0.161 * volume / absorbing
    mean = min(absorbing / total, 0.999)
    eyring = 0.161 * volume / (-total * math.log(1.0 - mean))
    return sabine, eyring


def board_options() -> list[Option]:
    """140 at 60 mm or thicker. Clearance is not a constraint.

    Below 60 mm of 140 is structurally out and is not here. Flex, when it
    is present, stays at the drawn 40 mm batten. A 40 mm versus 60 mm Flex
    check on the 60 mm board (previous run) did not move EDT.
    """
    out: list[Option] = []
    for nh in (60.0, 80.0, 100.0, 120.0):
        out.append(
            Option(
                f"nh{int(nh)}_only",
                f"naturheld 140 {int(nh)} mm, no Flex, no battens",
                nh,
                0.0,
                False,
                True,
                "declared_minimum",
                True,
                "board, foil and gypsum; gypsum stays on the CD grid. "
                "Ceiling may move inward; duct clearance is not a constraint.",
            )
        )
        out.append(
            Option(
                f"nh{int(nh)}_flex40",
                f"naturheld 140 {int(nh)} mm plus Flex 40 mm and battens",
                nh,
                40.0,
                True,
                True,
                "declared_minimum",
                True,
                "drawn Flex thickness. Ceiling may move inward; "
                "duct clearance is not a constraint.",
            )
        )
    return out


def run(
    n_rays: int = N_RAYS,
    chosen: list[Option] | None = None,
    bands: tuple[int, ...] = BANDS_HZ,
) -> list[dict]:
    _ensure_models()
    from obyvak_geom import ObyvakParams, build_layout

    drawn = ObyvakParams()
    drawn_layout = build_layout(drawn)
    shell = build_shell(drawn_layout)
    areas = _areas(shell)
    names = {name: i for i, name in enumerate(shell.surface_names)}
    phi = open_fraction_from_params(drawn)
    # Soffit and bass are frozen on the drawn room. Bass wool uses the Flex
    # table for its own thickness (no product card), and that value is not swept.
    soffit = soffit_open_layers(drawn, drawn_layout, "declared_minimum")
    kitchen = bass_layers(drawn.bass_k_wool, drawn.bass_k_air, drawn.bass_k_gkb, "kitchen bass")
    living = bass_layers(drawn.bass_l_wool, drawn.bass_l_air, drawn.bass_l_gkb, "living bass")
    k_sigma, _k_note = bass_wool_sigma(drawn.bass_k_wool)
    l_sigma, _l_note = bass_wool_sigma(drawn.bass_l_wool)
    assert k_sigma == kitchen[-1].sigma_pa_s_m2
    assert l_sigma == living[-1].sigma_pa_s_m2
    spacing_m = drawn.rost_spacing / 1000.0
    rows: list[dict] = []
    for option in (options() if chosen is None else chosen):
        probe = build_layout(
            ObyvakParams(naturheld_t=option.naturheld_mm, flex_t=max(option.flex_mm, 0.0))
        )
        clearance = soffit_lat_clearance_mm(probe)
        buildable = clearance >= 0.0 if option.buildable is None else option.buildable
        layers = slope_layers(option, drawn)
        open_fraction = phi if option.battens else 1.0
        for freq in bands:
            slope_flag = _out_of_range(layers, freq)
            soffit_flag = _out_of_range(soffit, freq)
            bass_flag = _out_of_range(kitchen, freq) + _out_of_range(living, freq)
            extrapolated = bool(slope_flag or soffit_flag or bass_flag)
            paris = {
                "slope": paris_absorption(layers, freq, open_fraction),
                "soffit": paris_absorption(soffit, freq, phi),
                "bass_kitchen": paris_absorption(kitchen, freq, 1.0),
                "bass_living": paris_absorption(living, freq, 1.0),
            }
            sabine, eyring = _sabine_eyring(shell.volume_m3, areas, paris, TYPICAL_UNTREATED_ALPHA)
            grids = prepare_grids(
                {
                    names["slope"]: (layers, open_fraction),
                    names["soffit"]: (soffit, phi),
                    names["bass_kitchen"]: (kitchen, 1.0),
                    names["bass_living"]: (living, 1.0),
                },
                freq,
            )
            scatter = scattering_for(
                shell.surface_names, freq, spacing_m, option.battens, True
            )
            for seat_i, (seat, source, receiver) in enumerate(SEATS):
                result = trace_decay(
                    shell,
                    np.array(source, dtype=float),
                    np.array(receiver, dtype=float),
                    alpha_grids=grids,
                    scatter=scatter,
                    freq_hz=freq,
                    miki_extrapolated=extrapolated,
                    n_rays=n_rays,
                    max_bounces=MAX_BOUNCES,
                    seed=SEED0 + seat_i,
                    residual_alpha=TYPICAL_UNTREATED_ALPHA,
                )
                row = {
                    "option_id": option.option_id,
                    "title": option.title,
                    "buildable": int(buildable),
                    "note": option.note,
                    "duct_clearance_mm": f"{clearance:.1f}",
                    "seat": seat,
                    "freq_hz": freq,
                    "valid_rays": int(result.valid_rays),
                    "t20_s": "" if result.t20_s is None else f"{result.t20_s:.4f}",
                    "t30_s": "" if result.t30_s is None else f"{result.t30_s:.4f}",
                    "edt_s": "" if result.edt_s is None else f"{result.edt_s:.4f}",
                    "received_hits": result.received_hits,
                    "energy_checksum": f"{result.energy_checksum:.6f}",
                    "miki_extrapolated": int(extrapolated),
                    "miki_slope": "; ".join(slope_flag),
                    "miki_soffit": "; ".join(soffit_flag),
                    "paris_slope": f"{paris['slope']:.4f}",
                    "paris_soffit": f"{paris['soffit']:.4f}",
                    "paris_bass_kitchen": f"{paris['bass_kitchen']:.4f}",
                    "paris_bass_living": f"{paris['bass_living']:.4f}",
                    "sabine_s_cheap_check": f"{sabine:.3f}",
                    "eyring_s_cheap_check": f"{eyring:.3f}",
                    "slope_scatter": f"{scatter[names['slope']]:.3f}",
                    "residual_alpha": f"{TYPICAL_UNTREATED_ALPHA:.2f}",
                    "n_rays": n_rays,
                    "seed": SEED0 + seat_i,
                    "volume_m3": f"{shell.volume_m3:.2f}",
                    "area_slope_m2": f"{areas['slope']:.2f}",
                    "area_soffit_m2": f"{areas['soffit']:.2f}",
                    "area_bass_kitchen_m2": f"{areas['bass_kitchen']:.2f}",
                    "area_bass_living_m2": f"{areas['bass_living']:.2f}",
                }
                rows.append(row)
                print(
                    f"{option.option_id:28} {seat:11} {freq:5} "
                    f"T20={row['t20_s'] or 'NA':>7} EDT={row['edt_s'] or 'NA':>7} "
                    f"build={buildable} extrap={extrapolated}",
                    flush=True,
                )
    return rows


def write_csv(rows: list[dict], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)


def main(argv: list[str] | None = None) -> None:
    import sys as _sys

    argv = list(_sys.argv[1:] if argv is None else argv)
    root = Path(__file__).resolve().parents[3]
    if argv[:1] == ["board"]:
        out = root / "exports" / "acoustics" / "obyvak_room_board.csv"
        rows = run(chosen=board_options(), bands=(500, 1000))
    else:
        out = root / "exports" / "acoustics" / "obyvak_room.csv"
        rows = run()
    write_csv(rows, out)
    print(f"wrote {out} ({len(rows)} rows)")
    print(TYPICAL_UNTREATED_NOTE)


if __name__ == "__main__":
    main()
