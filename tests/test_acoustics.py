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
    board_only_stack,
    eyring_t,
    flex_depth_sweep,
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
    assert geom.timber_fraction == 60.0 / 625.0


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
    assert "Slope Flex" in text
    assert "bass FEM" in text
    assert "80 mm" in text and "300 mm" in text
    assert "Leave the last 20 mm empty" in text
    assert "Sylomer" in text
    assert "Do not bed the wool on the board" in text
    assert "Keep the as-built" in text
    assert "Keep the flush" in text
    assert "100 mm stays inside 5%" in text
    assert study.delta_t["flex-0"][125.0] > 0.05 * study.as_built_t[125.0]
    assert study.delta_t["kitchen-1"][31.5] < -0.05 * study.as_built_t[31.5]
    assert study.delta_t["living-0"][31.5] > 0.05 * study.as_built_t[31.5]
    # Axials from the full plan size, as marks rather than a solved mode.
    assert abs(study.axials["Y1"] - 343.0 / (2.0 * 11.1)) < 1e-6
    assert abs(study.axials["X1"] - 343.0 / (2.0 * 5.35)) < 1e-6
    # As-built bass absorption is finite and the grid includes the empty and full cavities.
    assert 0.0 in study.kitchen_alpha and 1.0 in study.kitchen_alpha
    kitchen_bass = [study.as_built_alpha[f]["kitchen"] for f in BASS_BANDS]
    assert max(kitchen_bass) > min(kitchen_bass)


def test_soffit_is_the_deep_pack_not_the_slope_lat():
    geom = room_geometry()
    assert geom.soffit_flex_z > 0.30
    assert geom.soffit_flex_z > 5.0 * geom.rost_depth
    assert geom.soffit_air_z > 0.20
    assert geom.soffit_horizontal + geom.soffit_vert_flex + geom.soffit_vert_air == geom.soffit
    study = run_study()
    # At the kitchen/slope handoff the deep pack beats a 40 mm clone of the slope.
    assert study.as_built_alpha[80.0]["soffit"] > study.as_built_alpha[80.0]["slope"] + 0.15


def test_bare_naturheld_boards_against_the_flex_slope():
    stack = board_only_stack(0.060, 0.004, Resistivity())
    assert [layer[0] for layer in stack] == ["porous", "porous"]
    assert all(layer[1] > 0.0 for layer in stack)
    study = run_study()
    reference = study.as_built_t[125.0]
    assert study.board_delta[60.0][125.0] > 0.05 * reference
    assert abs(study.board_delta[100.0][125.0]) < 0.05 * reference
    for freq in (63.0, 125.0, 250.0):
        assert study.board_alpha[100.0][freq] > study.board_alpha[40.0][freq]


def test_flex_depth_for_a_living_room_stops_at_40_mm():
    geom = room_geometry()
    sweep = flex_depth_sweep(geom, Resistivity(), 0.004, 0.060)
    rigid = sweep["rigid_t"]
    plenum = sweep["plenum_t"]
    # 500 Hz does not get shorter if the lať grows from 40 mm to 120 mm.
    assert rigid[120.0][500.0] >= rigid[40.0][500.0]
    # 60 mm still moves 125 Hz past 5%, and stays inside 5% at 250 Hz.
    assert rigid[40.0][125.0] - rigid[60.0][125.0] > 0.05 * rigid[40.0][125.0]
    assert rigid[40.0][250.0] - rigid[60.0][250.0] < 0.05 * rigid[40.0][250.0]
    # The following 20 mm, 80 → 100, is inside 5% at 125 Hz.
    assert rigid[80.0][125.0] - rigid[100.0][125.0] < 0.05 * rigid[80.0][125.0]
    # A hung GKF with the wool plenum behind it: more Flex lengthens 63 Hz.
    assert plenum[120.0][63.0] > plenum[0.0][63.0] + 0.05
    # Speech frequencies do not depend on that backing.
    assert abs(plenum[40.0][500.0] - rigid[40.0][500.0]) < 0.02
    assert "For this living room, leave the Flex at 40 mm." in run_study().report
