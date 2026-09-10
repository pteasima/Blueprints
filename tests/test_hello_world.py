from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from hello_world import HelloWorldParams, build  # noqa: E402
from blueprints.export_utils import export_shape  # noqa: E402


def test_hello_world_builds_and_exports(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    shape, meta = build(HelloWorldParams(width=50, depth=40, height=20, fillet_radius=2))
    assert shape is not None
    assert meta["params"]["width"] == 50
    paths = export_shape(shape, "hello_world", formats=("step", "stl", "svg", "dxf"))
    assert paths["step"].exists()
    assert paths["stl"].exists()
    assert paths["svg"].exists()
    assert paths["dxf"].exists()
    assert paths["step"].stat().st_size > 0
