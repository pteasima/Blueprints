from pathlib import Path
import subprocess
import sys
import zipfile

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))
AGENTS_MD = ROOT / "AGENTS.md"

from hello_world import HelloWorldParams, build  # noqa: E402
from pxr import Usd, UsdGeom  # noqa: E402

from blueprints.export_utils import (  # noqa: E402
    _AR_TABLETOP_SPAN_M,
    _prepare_usdz_points,
    _write_arkit_usdz,
    export_shape,
    stl_to_usdz,
    usdz_data_offsets,
)


def test_export_publishes_usdz_to_artifacts(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    exports = tmp_path / "exports"
    artifacts = tmp_path / "artifacts"
    artifacts.mkdir()
    monkeypatch.setattr(eu, "EXPORTS_DIR", exports)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(artifacts))
    monkeypatch.setenv("BLUEPRINTS_SKIP_PREVIEW_UPLOAD", "1")

    shape, _ = build(HelloWorldParams(width=50, depth=40, height=20, fillet_radius=2))
    paths = export_shape(shape, "hello_world", formats=("step", "stl", "svg", "dxf"))

    assert paths["usdz"].exists()
    assert paths["html"].exists()
    assert paths["ar_html"].exists()
    assert (artifacts / "hello_world_3d.usdz").stat().st_size > 0
    assert (artifacts / "hello_world_3d.html").stat().st_size > 0
    assert (artifacts / "hello_world_3d_ar.html").stat().st_size > 0
    assert not (artifacts / "hello_world_3d.step").exists()
    assert "canvas" in (artifacts / "hello_world_3d.html").read_text()
    assert not (artifacts / "hello_world_model.dxf").exists()
    with zipfile.ZipFile(paths["usdz"]) as zf:
        names = zf.namelist()
        assert any(name.endswith(".usdc") for name in names)
        assert not any(name.endswith(".usda") for name in names)
    raw = paths["usdz"].read_bytes()
    offsets = usdz_data_offsets(raw)
    assert offsets
    for off in offsets:
        assert off % 64 == 0

    stage = Usd.Stage.Open(str(paths["usdz"]))
    assert stage is not None
    default_prim = stage.GetDefaultPrim()
    assert default_prim and default_prim.GetPath() == "/Model"
    assert UsdGeom.GetStageUpAxis(stage) == UsdGeom.Tokens.y
    assert UsdGeom.GetStageMetersPerUnit(stage) == 1.0
    mesh = UsdGeom.Mesh(stage.GetPrimAtPath("/Model/Geom"))
    pts = mesh.GetPointsAttr().Get()
    ys = [p[1] for p in pts]
    xs = [p[0] for p in pts]
    zs = [p[2] for p in pts]
    assert min(ys) == pytest.approx(0.0, abs=1e-6)
    assert (min(xs) + max(xs)) / 2 == pytest.approx(0.0, abs=1e-5)
    assert (min(zs) + max(zs)) / 2 == pytest.approx(0.0, abs=1e-5)
    span = max(max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs))
    assert span < 0.1  # 50 mm hello_world stays real-world centimetres
    root_prim = stage.GetDefaultPrim()
    assert root_prim.GetAttribute("preliminary:anchoring:type").Get() == "plane"
    assert root_prim.GetAttribute("preliminary:planeAnchoring:alignment").Get() == "horizontal"
    html = (artifacts / "hello_world_3d.html").read_text()
    assert "attribute vec3 aPos;" in html
    assert "attribute vec3 aPos, aNrm" not in html
    assert "COMPILE_STATUS" in html
    assert 'rel="ar"' in html
    assert "data:model/vnd.usdz+zip;base64," in html
    assert "Otevřít v AR" in html
    script = html.split("<script>", 1)[1].split("</script>", 1)[0]
    subprocess.run(["node", "--check"], input=script, text=True, check=True)
    ar = (artifacts / "hello_world_3d_ar.html").read_text()
    assert "<script" not in ar.lower()
    assert 'rel="ar"' in ar
    assert "data:model/vnd.usdz+zip;base64," in ar


def test_preview_url_upload_and_qr(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    exports = tmp_path / "exports"
    artifacts = tmp_path / "artifacts"
    artifacts.mkdir()
    monkeypatch.setattr(eu, "EXPORTS_DIR", exports)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(artifacts))
    monkeypatch.delenv("BLUEPRINTS_SKIP_PREVIEW_UPLOAD", raising=False)
    monkeypatch.setenv("BLUEPRINTS_ALLOW_PREVIEW_UPLOAD", "1")
    monkeypatch.setattr(
        eu,
        "upload_preview_file",
        lambda path, **kwargs: "https://litter.catbox.moe/example_ar.html",
    )

    shape, _ = build(HelloWorldParams(width=30, depth=20, height=10, fillet_radius=1))
    paths = export_shape(shape, "hello_world", formats=("stl",))
    assert paths["preview_url"].read_text().strip() == "https://litter.catbox.moe/example_ar.html"
    assert paths["preview_qr"].stat().st_size > 0
    assert (artifacts / "hello_world_3d_url.txt").read_text().startswith("https://")
    assert (artifacts / "hello_world_3d_qr.png").stat().st_size > 0


def test_stl_to_usdz_roundtrip(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(tmp_path / "artifacts"))
    monkeypatch.setenv("BLUEPRINTS_SKIP_PREVIEW_UPLOAD", "1")
    (tmp_path / "artifacts").mkdir()
    shape, _ = build(HelloWorldParams(width=30, depth=20, height=10, fillet_radius=1))
    paths = export_shape(shape, "box", formats=("stl",))
    out = tmp_path / "manual.usdz"
    stl_to_usdz(paths["stl"], out)
    assert out.stat().st_size > 0
    for off in usdz_data_offsets(out.read_bytes()):
        assert off % 64 == 0
    stage = Usd.Stage.Open(str(out))
    assert stage is not None
    assert stage.GetDefaultPrim().GetPath() == "/Model"


def test_usdz_tabletop_scale_for_room_sized_mesh(tmp_path):
    """An 11 m house must shrink to tabletop size or iPad AR never finds a plane."""
    points = [
        (0.0, 0.0, 0.0),
        (11100.0, 0.0, 0.0),
        (0.0, 5350.0, 0.0),
        (0.0, 0.0, 5850.0),
    ]
    prepared = _prepare_usdz_points(points)
    xs = [p[0] for p in prepared]
    ys = [p[1] for p in prepared]
    zs = [p[2] for p in prepared]
    span = max(max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs))
    assert span == pytest.approx(_AR_TABLETOP_SPAN_M, rel=1e-6)
    assert min(ys) == pytest.approx(0.0, abs=1e-9)

    out = tmp_path / "room.usdz"
    _write_arkit_usdz(points, [(0, 1, 2), (0, 2, 3)], out)
    stage = Usd.Stage.Open(str(out))
    mesh = UsdGeom.Mesh(stage.GetPrimAtPath("/Model/Geom"))
    pts = mesh.GetPointsAttr().Get()
    span = max(
        max(p[0] for p in pts) - min(p[0] for p in pts),
        max(p[1] for p in pts) - min(p[1] for p in pts),
        max(p[2] for p in pts) - min(p[2] for p in pts),
    )
    assert span == pytest.approx(_AR_TABLETOP_SPAN_M, rel=1e-5)
    assert UsdGeom.GetStageMetersPerUnit(stage) == 1.0
    assert stage.GetDefaultPrim().GetAttribute("preliminary:anchoring:type").Get() == "plane"


def test_agents_md_requires_preview_url():
    text = AGENTS_MD.read_text(encoding="utf-8")
    assert "preview_url:" in text
    assert "Siri Shortcut" in text
    assert 'href="/opt/cursor/artifacts' not in text
    assert "<img src=\"/opt/cursor/artifacts/" in text
