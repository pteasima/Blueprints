"""Session-scoped model builds shared by the suite.

Default-parameter builds are expensive: on a 2026-11-11 review, about sixteen
tests in ``test_obyvak.py`` each called ``build()`` from scratch. These fixtures
construct each default model once per session. The returned shapes, metadata
and layouts are shared — tests must not mutate them.
"""

from __future__ import annotations

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
_MODELS = str(ROOT / "models")
if _MODELS not in sys.path:
    sys.path.insert(0, _MODELS)


@pytest.fixture(scope="session")
def obyvak_layout():
    """Default ``ObyvakParams`` and the layout derived from them."""
    from obyvak_geom import ObyvakParams, build_layout

    params = ObyvakParams()
    return params, build_layout(params)


@pytest.fixture(scope="session")
def obyvak_model():
    """Default obyvák 3D model: ``(shape, meta)``."""
    from obyvak import build
    from obyvak_geom import ObyvakParams

    return build(ObyvakParams())


@pytest.fixture(scope="session")
def obyvak_section_model():
    """Default obyvák section drawing: ``(shape, meta)``."""
    from obyvak_section import build

    return build()


@pytest.fixture(scope="session")
def obyvak_elevation_model():
    """Default obyvák elevation drawing: ``(shape, meta)``."""
    from obyvak_elevation import build

    return build()


@pytest.fixture(scope="session")
def ground_floor_model():
    """Default ground-floor 3D model, including furnishings and room fit-outs."""
    from ground_floor import build

    return build()


@pytest.fixture(scope="session")
def bathroom_120_layout():
    from bathroom_120 import layout

    return layout()


@pytest.fixture(scope="session")
def bathroom_120_parts():
    from bathroom_120 import parts

    return parts()


@pytest.fixture(scope="session")
def bathroom_107_layout():
    from bathroom_107 import layout

    return layout()


@pytest.fixture(scope="session")
def bathroom_107_parts():
    from bathroom_107 import parts

    return parts()


@pytest.fixture(scope="session")
def bedroom_111_parts():
    from bedroom_111 import parts

    return parts()


@pytest.fixture(scope="session")
def furnishings_doc():
    """Resolved furnishings.yaml. Shared — tests must not mutate it."""
    from ground_floor import load_furnishings

    return load_furnishings()


@pytest.fixture(scope="session")
def kitchen_runs(furnishings_doc):
    """Kitchen monoblock runs for the default furnishings document."""
    import kitchen_cabinet as kc

    return {run.id: run for run in kc.runs(furnishings_doc)}
