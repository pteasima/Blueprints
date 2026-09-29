"""Geometry lock for flex_t and regression locks for the Miki slice.

Absorption numbers below are regression locks from this implementation.
They are not laboratory measurements.
"""

from pathlib import Path
import cmath
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak_geom import ObyvakParams, build_layout  # noqa: E402

from blueprints.acoustics.materials import (  # noqa: E402
    BEST_WOOD_WALL_140,
    GUTEX_MULTITHERM,
    NATURHELD_140,
    NATURHELD_FLEX,
    STOSILENT,
    flex_table_sigma_pa_s_m2,
)
from blueprints.acoustics.study import (  # noqa: E402
    CaseSpec,
    evaluate_case,
    open_fraction_from_params,
    slope_open_layers,
    stack_absorption,
)
from blueprints.acoustics.transfer import Layer, miki_zc_k, rigid_backed_impedance  # noqa: E402

# Pre-change eave ceiling. flex_t used to be an unread 60; the drawn batten
# was 40 mm, so the room must stay on this datum.
PRECHANGE_H_START_MM = 3124.406141478

# Regression locks, 125 / 250 / 500 / 1000 Hz. Not lab data.
AS_BUILT_SLOPE = {
    125: 0.24419779,
    250: 0.41515000,
    500: 0.52798830,
    1000: 0.65375901,
}
THICKER_SLOPE = {  # naturheld 80 mm, flex 60 mm, declared-minimum σ
    125: 0.28923988,
    250: 0.39706396,
    500: 0.52329271,
    1000: 0.65902008,
}
AS_BUILT_SOFFIT = {
    125: 0.30504398,
    250: 0.38878573,
    500: 0.51476770,
    1000: 0.65819643,
}


def _alphas(spec: CaseSpec):
    result = evaluate_case(spec)
    return {band.freq_hz: band for band in result.bands}, result


def test_default_room_geometry_unchanged():
    params = ObyvakParams()
    layout = build_layout(params)
    assert params.flex_t == 40.0
    assert params.rost_d == 40.0
    assert params.naturheld_t == 60.0
    assert layout.t_nh_face == params.finish_t + params.basic_t + params.naturheld_t
    assert layout.t_nh_face == 64.0
    assert layout.t_flex_pack == 40.0 + params.foil_t
    assert layout.t_flex_pack == 41.0
    assert abs(layout.t_soft_below_sdk - 117.5) < 1e-9
    assert abs(layout.h_start - PRECHANGE_H_START_MM) < 1e-6


def test_flex_t_sets_batten_depth_and_pack():
    params = ObyvakParams(flex_t=60.0)
    assert params.rost_d == 60.0
    layout = build_layout(params)
    baseline = build_layout(ObyvakParams())
    assert abs(layout.t_flex_pack - (60.0 + params.foil_t)) < 1e-9
    assert layout.t_flex_pack != baseline.t_flex_pack
    assert layout.h_start < baseline.h_start - 20.0
    # Foil is still its own seat, not swallowed into the Flex.
    assert abs(layout.t_flex_pack - params.flex_t - params.foil_t) < 1e-12


def test_naturheld_t_moves_the_face_and_the_ceiling():
    layout = build_layout(ObyvakParams(naturheld_t=80.0))
    baseline = build_layout(ObyvakParams())
    assert layout.t_nh_face == 84.0
    assert layout.t_flex_pack == baseline.t_flex_pack
    assert layout.h_start < baseline.h_start


def test_material_cards_keep_bounds_apart_from_points():
    assert NATURHELD_140.airflow.kind == "lower_bound"
    assert NATURHELD_140.airflow.value == 60.0
    assert NATURHELD_140.density.kind == "point"
    assert NATURHELD_140.declared_minimum_sigma_pa_s_m2 == 60_000.0
    assert "declared minimum" in NATURHELD_140.airflow.note
    assert all(fig.kind == "upper_bound" for fig in NATURHELD_140.dynamic_stiffness)
    assert NATURHELD_140.porosity_estimate.kind == "assumption"
    assert GUTEX_MULTITHERM.value_kpa_s_m2 == 60.0
    assert BEST_WOOD_WALL_140.value_kpa_s_m2 == 75.0
    assert NATURHELD_140.wall_140_analogue_sigma_pa_s_m2 == 75_000.0
    assert NATURHELD_FLEX.table_contradicts_afr10
    assert NATURHELD_FLEX.afr_designation.value == 10.0
    sigma_40, note_40 = flex_table_sigma_pa_s_m2(40.0)
    sigma_80, note_80 = flex_table_sigma_pa_s_m2(80.0)
    sigma_70, note_70 = flex_table_sigma_pa_s_m2(70.0)
    assert sigma_40 == 5_000.0 and "table" in note_40
    assert sigma_80 == 6_000.0
    assert sigma_70 == 5_000.0 and "between" in note_70
    assert 10_000.0 not in (sigma_40, sigma_70, sigma_80)
    assert STOSILENT.flow_resistivity_pa_s_m2 is None
    assert STOSILENT.kind == "absent"


def test_porosity_estimate_is_not_in_the_model():
    import blueprints.acoustics.study as study
    import inspect

    source = inspect.getsource(study)
    assert "porosity" not in source
    assert "dynamic_stiffness" not in source


def test_open_fraction_follows_batten_width():
    params = ObyvakParams()
    assert abs(open_fraction_from_params(params) - (625.0 - 60.0) / 625.0) < 1e-12
    wide = ObyvakParams(rost_w=125.0)
    wide_fraction = open_fraction_from_params(wide)
    assert abs(wide_fraction - (625.0 - 125.0) / 625.0) < 1e-12
    layers = slope_open_layers(params, "declared_minimum")
    alpha_drawn, _flag = stack_absorption(layers, 1000.0, open_fraction_from_params(params))
    alpha_wide, _flag = stack_absorption(layers, 1000.0, wide_fraction)
    assert abs(alpha_wide / alpha_drawn - wide_fraction / open_fraction_from_params(params)) < 1e-9


def test_rigid_porous_layer_matches_miki_cot():
    frequency = 1000.0
    sigma = 5_000.0
    thickness = 0.04
    zc, k = miki_zc_k(frequency, sigma)
    expected = -1j * zc / cmath.tan(k * thickness)
    got = rigid_backed_impedance(
        [Layer("flex", "porous", thickness, sigma)],
        frequency,
    )
    assert abs(got - expected) / abs(expected) < 1e-9


def test_absorption_locks_and_thickness_moves_them():
    as_built_bands, as_built = _alphas(
        CaseSpec("as_built", 60.0, 40.0, "declared_minimum", True, False)
    )
    thicker_bands, thicker = _alphas(
        CaseSpec("nh80_flex60", 80.0, 60.0, "declared_minimum", False, False)
    )
    flex_bands, flex = _alphas(
        CaseSpec("nh60_flex60", 60.0, 60.0, "declared_minimum", False, False)
    )
    analogue_bands, _analogue = _alphas(
        CaseSpec("sigma75", 60.0, 40.0, "wall_140_analogue", False, True)
    )
    for freq, locked in AS_BUILT_SLOPE.items():
        assert abs(as_built_bands[freq].alpha_slope - locked) < 1e-8
        assert abs(thicker_bands[freq].alpha_slope - THICKER_SLOPE[freq]) < 1e-8
        assert abs(as_built_bands[freq].alpha_soffit - AS_BUILT_SOFFIT[freq]) < 1e-8
    # 500 Hz is still below 0.01 * 60 000. 1000 Hz is inside the window.
    assert as_built_bands[500].slope_miki_flag.startswith("out of Miki range")
    assert as_built_bands[1000].slope_miki_flag == ""
    assert "declared minimum" in as_built.nh_sigma_note
    assert as_built.nh_sigma_pa_s_m2 == 60_000.0
    assert as_built.flex_sigma_pa_s_m2 == 5_000.0
    for freq in (125, 250, 500, 1000):
        assert abs(flex_bands[freq].alpha_slope - as_built_bands[freq].alpha_slope) > 1e-3
        assert abs(thicker_bands[freq].alpha_slope - as_built_bands[freq].alpha_slope) > 1e-3
        # Soffit cavity does not follow flex_t. Same naturheld_t → same soffit α.
        assert abs(flex_bands[freq].alpha_soffit - as_built_bands[freq].alpha_soffit) < 1e-12
        assert abs(analogue_bands[freq].alpha_slope - as_built_bands[freq].alpha_slope) > 1e-3
    # naturheld_t changes the soffit board and the cavity. At 1 kHz the curve
    # is already near the area-weight ceiling, so lock the move at 125 and 250 Hz.
    for freq in (125, 250):
        assert abs(thicker_bands[freq].alpha_soffit - as_built_bands[freq].alpha_soffit) > 1e-3
    assert flex.flex_sigma_pa_s_m2 == 5_000.0
    # 80 mm of Flex is not a grid point; the table value at that thickness is 6.
    assert flex_table_sigma_pa_s_m2(80.0)[0] == 6_000.0


def test_oblique_matches_normal_at_zero_and_locks_two_angles():
    """Regression locks. Not laboratory data."""
    import math

    from blueprints.acoustics.transfer import oblique_absorption

    params = ObyvakParams()
    layers = slope_open_layers(params, "declared_minimum")
    fraction = open_fraction_from_params(params)
    alpha_0 = oblique_absorption(layers, 1000.0, 0.0, fraction)
    assert abs(alpha_0 - AS_BUILT_SLOPE[1000]) < 1e-8
    alpha_45 = oblique_absorption(layers, 1000.0, math.radians(45.0), fraction)
    alpha_60 = oblique_absorption(layers, 1000.0, math.radians(60.0), fraction)
    assert abs(alpha_45 - 0.75159467) < 1e-8
    assert abs(alpha_60 - 0.80886884) < 1e-8


def test_zero_thickness_layer_is_identity_not_a_crash():
    import math

    from blueprints.acoustics.transfer import Layer, oblique_absorption

    params = ObyvakParams()
    full = slope_open_layers(params, "declared_minimum")
    removed = []
    for layer in full:
        if layer.name == "naturheld FLEX":
            removed.append(Layer(layer.name, "porous", 0.0, layer.sigma_pa_s_m2, note="removed"))
        else:
            removed.append(layer)
    alpha = oblique_absorption(removed, 1000.0, math.radians(45.0), 1.0)
    assert 0.0 < alpha < 1.0
    # No acoustic thickness at all is still an error, not a silent α.
    import pytest

    with pytest.raises(ValueError):
        oblique_absorption([Layer("gone", "porous", 0.0, 5000.0)], 1000.0, 0.0, 1.0)


def test_bass_wool_uses_flex_table_not_a_placeholder():
    from blueprints.acoustics.materials import bass_wool_sigma
    from blueprints.acoustics.study import bass_layers

    sigma_80, note_80 = bass_wool_sigma(80.0)
    sigma_300, note_300 = bass_wool_sigma(300.0)
    assert sigma_80 == 6_000.0
    assert sigma_300 == 6_000.0
    assert "ASSUMPTION" in note_80 and "ASSUMPTION" in note_300
    kitchen = bass_layers(80.0, 97.5, 12.5, "kitchen bass")
    living = bass_layers(300.0, 137.5, 12.5, "living bass")
    assert kitchen[-1].sigma_pa_s_m2 == 6_000.0
    assert living[-1].sigma_pa_s_m2 == 6_000.0
    assert kitchen[-1].sigma_pa_s_m2 != 10_000.0


def test_tiny_ray_decay_is_deterministic():
    """Few rays, fixed seed. Checksum is this implementation, not a measurement."""
    import numpy as np

    from blueprints.acoustics.rays import prepare_grids, scattering_for, trace_decay
    from blueprints.acoustics.shell import build_shell
    from blueprints.acoustics.study import bass_layers, soffit_open_layers

    params = ObyvakParams()
    layout = build_layout(params)
    shell = build_shell(layout)
    names = {name: i for i, name in enumerate(shell.surface_names)}
    fraction = open_fraction_from_params(params)
    layers = slope_open_layers(params, "declared_minimum")
    grids = prepare_grids(
        {
            names["slope"]: (layers, fraction),
            names["soffit"]: (soffit_open_layers(params, layout, "declared_minimum"), fraction),
            names["bass_kitchen"]: (bass_layers(params.bass_k_wool, params.bass_k_air, params.bass_k_gkb, "k"), 1.0),
            names["bass_living"]: (bass_layers(params.bass_l_wool, params.bass_l_air, params.bass_l_gkb, "l"), 1.0),
        },
        1000.0,
    )
    scatter = scattering_for(shell.surface_names, 1000.0, params.rost_spacing / 1000.0, True, True)
    result = trace_decay(
        shell,
        np.array([2.2, 5.5, 1.2]),
        np.array([3.0, 6.6, 1.2]),
        alpha_grids=grids,
        scatter=scatter,
        freq_hz=1000,
        miki_extrapolated=False,
        n_rays=24,
        max_bounces=12,
        seed=11,
        residual_alpha=0.03,
    )
    again = trace_decay(
        shell,
        np.array([2.2, 5.5, 1.2]),
        np.array([3.0, 6.6, 1.2]),
        alpha_grids=grids,
        scatter=scatter,
        freq_hz=1000,
        miki_extrapolated=False,
        n_rays=24,
        max_bounces=12,
        seed=11,
        residual_alpha=0.03,
    )
    assert result.energy_checksum == again.energy_checksum
    assert result.received_hits == again.received_hits
    assert abs(result.energy_checksum - TINY_RAY_CHECKSUM) < 1e-6
    assert result.received_hits == TINY_RAY_HITS
    assert result.t20_s is not None
    assert abs(result.t20_s - TINY_RAY_T20) < 1e-6


# Filled from the 24-ray seed-11 trace. Not a measured reverberation time.
TINY_RAY_CHECKSUM = 4.2843820287058465
TINY_RAY_HITS = 6
TINY_RAY_T20 = 0.3012243608952153
