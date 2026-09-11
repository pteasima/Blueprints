from pathlib import Path
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from hello_world import HelloWorldParams, build  # noqa: E402
from blueprints.export_utils import export_shape, stl_to_usdz  # noqa: E402


def test_export_publishes_usdz_to_artifacts(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    exports = tmp_path / "exports"
    artifacts = tmp_path / "artifacts"
    artifacts.mkdir()
    monkeypatch.setattr(eu, "EXPORTS_DIR", exports)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(artifacts))

    shape, _ = build(HelloWorldParams(width=50, depth=40, height=20, fillet_radius=2))
    paths = export_shape(shape, "hello_world", formats=("step", "stl", "svg", "dxf"))

    assert paths["usdz"].exists()
    assert (artifacts / "hello_world_3d.usdz").stat().st_size > 0
    assert not (artifacts / "hello_world_3d.step").exists()
    assert not (artifacts / "hello_world_model.dxf").exists()
    with zipfile.ZipFile(paths["usdz"]) as zf:
        assert "mimetype" in zf.namelist()
        assert zf.read("mimetype") == b"model/vnd.usdz+zip"
        assert "model.usda" in zf.namelist()


def test_stl_to_usdz_roundtrip(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(tmp_path / "artifacts"))
    (tmp_path / "artifacts").mkdir()
    shape, _ = build(HelloWorldParams(width=30, depth=20, height=10, fillet_radius=1))
    paths = export_shape(shape, "box", formats=("stl",))
    out = tmp_path / "manual.usdz"
    stl_to_usdz(paths["stl"], out)
    assert out.stat().st_size > 0
