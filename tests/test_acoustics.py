"""Layer-impedance checks for the obývák wool/air and Flex study."""

from __future__ import annotations

import cmath
import math

from blueprints.acoustics.layers import (
    absorption,
    field_absorption,
    miki,
    panel_frequency,
    reactance_zero_hz,
    rigid_backed_wool_alpha,
    surface_impedance,
)
from blueprints.acoustics.obyvak import (
    BASS_BANDS,
    Resistivity,
    _split,
    axial_marks,
    eyring_t,
    room_geometry,
    run_study,
    trap_stack,
)


# Matelys APMR comparison script: 50 mm, σ = 10 kPa·s/m², 18 °C air, rigid backing.
_APMR_RHO = 1.213
_APMR_C = 342.2
_APMR_SIGMA = 10_000.0
_APMR_H = 0.05
# Normal-incidence α at 1 kHz from that script's Miki formula.
_APMR_ALPHA_1K = 0.8842


def test_miki_impedance_matches_matelys_coefficients():
    zc, kc = miki(1000.0, _APMR_SIGMA, rho=_APMR_RHO, c=_APMR_C)
    omega = 2.0 * math.pi * 1000.0
    x = 1.0e3 * 1000.0 / _APMR_SIGMA
    z_ref = _APMR_RHO * _APMR_C * (1.0 + 5.50 * x ** (-0.632) - 1j * 8.43 * x ** (-0.632))
    k_ref = (omega / _APMR_C) * (1.0 + 7.81 * x ** (-0.618) - 1j * 11.41 * x ** (-0.618))
    assert abs(zc - z_ref) / abs(z_ref) < 1e-12
    assert abs(kc - k_ref) / abs(k_ref) < 1e-12
    assert zc.real > 0.0
    assert kc.imag < 0.0


def test_rigid_backed_wool_matches_published_miki_case():
    alpha = rigid_backed_wool_alpha(
        1000.0, _APMR_H, _APMR_SIGMA, rho=_APMR_RHO, c=_APMR_C
    )
    assert abs(alpha - _APMR_ALPHA_1K) < 0.002
    via_matrix = absorption(
        (("porous", _APMR_H, _APMR_SIGMA),),
        1000.0,
        rho=_APMR_RHO,
        c=_APMR_C,
    )
    assert abs(via_matrix - alpha) < 1e-6
    # Transfer matrix and -j Z cot(kd) are the same surface.
    zc, kc = miki(1000.0, _APMR_SIGMA, rho=_APMR_RHO, c=_APMR_C)
    zs = -1j * zc / cmath.tan(kc * _APMR_H)
    assert abs(surface_impedance((("porous", _APMR_H, _APMR_SIGMA),), 1000.0, rho=_APMR_RHO, c=_APMR_C) - zs) < 1e-6


def test_limp_mass_over_air_recovers_panel_frequency():
    mass, depth = 10.0, 0.10
    stack = (("mass", mass, 0.0), ("air", depth, 0.0))
    found = reactance_zero_hz(stack)
    assert found is not None
    assert abs(found - panel_frequency(mass, depth)) / panel_frequency(mass, depth) < 0.02


def test_low_resistivity_wool_approaches_the_air_cavity():
    """σ → 0 is an air cavity. Miki's (f/σ) terms vanish and the panel pitch follows."""
    mass, depth = 10.0, 0.12
    stack = (("mass", mass, 0.0), ("porous", depth, 50.0))
    found = reactance_zero_hz(stack)
    assert found is not None
    expect = panel_frequency(mass, depth)
    assert abs(found - expect) / expect < 0.05


def test_field_absorption_stays_inside_zero_and_one():
    stack = (("porous", 0.05, _APMR_SIGMA),)
    alpha = field_absorption(stack, 1000.0, rho=_APMR_RHO, c=_APMR_C)
    assert 0.5 < alpha < 1.0
    assert absorption((), 1000.0) < 1e-6


def test_eyring_matches_a_hand_calculation():
    # α = 0.2 everywhere, V = 100 m³, S = 200 m², no air term at the function's m(f).
    # Use a low frequency so 4mV is negligible, and compare against the formula with it.
    from blueprints.acoustics.obyvak import air_m
    from blueprints.acoustics.layers import C0

    volume, area, alpha, freq = 100.0, 200.0, 0.2, 31.5
    got = eyring_t(volume, [(area, alpha)], freq)
    absorbed = area * alpha + 4.0 * air_m(freq) * volume
    alpha_bar = absorbed / area
    eyring_area = -area * math.log(1.0 - alpha_bar)
    expect = 55.26 * volume / (C0 * eyring_area)
    assert abs(got - expect) < 1e-9


def test_as_built_splits_match_the_190_and_450_stacks():
    import sys
    from pathlib import Path

    sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "models"))
    from obyvak_geom import ObyvakParams

    p = ObyvakParams()
    geom = room_geometry(p)
    wool_k, air_k = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    wool_l, air_l = _split(geom.living_cavity, geom.living_wool_fraction)
    assert abs(wool_k * 1000.0 - p.bass_k_wool) < 1e-6
    assert abs(air_k * 1000.0 - p.bass_k_air) < 1e-6
    assert abs(wool_l * 1000.0 - p.bass_l_wool) < 1e-6
    assert abs(air_l * 1000.0 - p.bass_l_air) < 1e-6
    assert abs((wool_k + air_k) * 1000.0 + p.bass_k_gkb - p.predstena_kitchen) < 1e-6
    assert abs((wool_l + air_l) * 1000.0 + p.bass_l_gkb - p.predstena_living) < 1e-6
    # Both faces are GKB toward the room, then air, then wool.
    stack = trap_stack(wool_k, air_k, geom.gkb_mass, Resistivity().mineral_wool)
    assert stack[0][0] == "mass"
    assert stack[1][0] == "air"
    assert stack[2][0] == "porous"


def test_nearby_axials_share_one_chart_mark():
    marks = axial_marks({"Y1": 15.5, "Y2": 30.9, "X1": 32.1, "Y3": 46.4})
    assert [label for _, label in marks] == ["Y1", "Y2 X1", "Y3"]


def test_room_areas_are_in_the_building_range():
    geom = room_geometry()
    assert 180.0 < geom.volume < 280.0
    assert 60.0 < geom.slope < 90.0
    assert 6.0 < geom.kitchen_trap < 20.0
    assert geom.living_trap == geom.kitchen_trap
    assert 20.0 < geom.glass < 28.0
    assert geom.timber_fraction == 0.0
    assert geom.soffit_board == 0.04
    assert geom.soffit_wool_depth > 0.3


def test_study_ranks_splits_and_states_the_fem_decision():
    study = run_study()
    for freq, bands in study.as_built_alpha.items():
        for alpha in bands.values():
            assert 0.0 <= alpha <= 1.0
    for curve in study.delta_t.values():
        assert set(curve) == set(study.as_built_t)
    text = study.report
    assert "Kitchen gable" in text
    assert "Living gable" in text
    assert "bass FEM" in text
    assert "5%" in text
    assert "80 mm" in text and "300 mm" in text and "130.5 mm" in text
    assert "20 mm" in text
    assert "No slope latě" in text
    assert "cut" in text
    assert "625 vertical" in text and "1000 horizontal" in text
    assert "simply supported" in text
    assert "Hairline cracks" in text
    assert "31.5 Hz benefit" in text
    assert "Slope Flex" not in text
    assert "flex-0" not in study.delta_t
    # Axials from the full plan size, as marks rather than a solved mode.
    assert abs(study.axials["Y1"] - 343.0 / (2.0 * 11.1)) < 1e-6
    assert abs(study.axials["X1"] - 343.0 / (2.0 * 5.35)) < 1e-6
    # Loose-sheet notes stay in the windows the limp model already had.
    assert study.kitchen_limp_hz is not None and 38.0 < study.kitchen_limp_hz < 48.0
    assert study.living_limp_hz is not None and 24.0 < study.living_limp_hz < 32.0
    # Closer studs raise the note. If this fails, the lattice is not in the model.
    by_name = {run.name: run for run in study.lattices}
    assert by_name["625 vertical"].kitchen_peak_hz > by_name["1000 horizontal"].kitchen_peak_hz
    assert by_name["625 vertical"].living_peak_hz > by_name["1000 horizontal"].living_peak_hz
    # Kitchen wool never eats the 20 mm clearance in front of the CD.
    for family in study.kitchen_alpha.values():
        assert 0.0 in family
        for fraction in family:
            air = study.geometry.kitchen_cavity * (1.0 - fraction)
            assert air >= 0.047 - 1e-6
    for family in study.living_alpha.values():
        assert 0.0 in family and 1.0 in family
    for row in study.robustness:
        snippet = f"{row.case}: {row.winner}"
        assert snippet in text
        if row.flipped:
            assert f"{row.case}: {row.winner} (flips the winner)" in text
        else:
            assert f"{row.case}: {row.winner} (same winner)" in text
    kitchen_bass = [study.as_built_alpha[f]["kitchen"] for f in BASS_BANDS]
    assert max(kitchen_bass) > min(kitchen_bass)
