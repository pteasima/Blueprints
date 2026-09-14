from pathlib import Path
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
    monkeypatch.setenv("BLUEPRINTS_SKIP_PREVIEW_SITE", "1")

    shape, _ = build(HelloWorldParams(width=50, depth=40, height=20, fillet_radius=2))
    paths = export_shape(shape, "hello_world", formats=("step", "stl", "svg", "dxf"))

    assert paths["usdz"].exists()
    assert paths["glb"].exists()
    assert paths["html"].exists()
    assert paths["glb"].stat().st_size > 100
    html = paths["html"].read_text(encoding="utf-8")
    assert "BlueprintsViewerBundle" in html
    assert "mountViewer" in html
    assert (artifacts / "hello_world_3d.usdz").stat().st_size > 0
    assert (artifacts / "hello_world_3d.html").stat().st_size > 0
    assert (artifacts / "hello_world_3d.glb").stat().st_size > 0
    assert not (artifacts / "hello_world_3d.step").exists()
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


def test_preview_hub_updates_models_for_pages(tmp_path, monkeypatch, capsys):
    import blueprints.export_utils as eu
    import blueprints.preview_hub as ph

    exports = tmp_path / "exports"
    artifacts = tmp_path / "artifacts"
    site = tmp_path / "docs"
    artifacts.mkdir()
    monkeypatch.setattr(eu, "EXPORTS_DIR", exports)
    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", site)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(artifacts))
    monkeypatch.delenv("BLUEPRINTS_SKIP_PREVIEW_SITE", raising=False)
    monkeypatch.setenv("BLUEPRINTS_ALLOW_PREVIEW_SITE", "1")
    monkeypatch.setenv("BLUEPRINTS_PAGES_URL", "https://pteasima.github.io/Blueprints/")

    shape, _ = build(HelloWorldParams(width=30, depth=20, height=10, fillet_radius=1))
    paths = export_shape(shape, "hello_world", formats=("stl",))
    assert paths["preview_hub"] == site / "index.html"
    assert (site / "models" / "hello_world.usdz").is_file()
    assert (site / "models" / "hello_world.glb").is_file()
    assert (site / "viewer" / "viewer.iife.js").is_file()
    assert (site / ".nojekyll").is_file()
    manifest = (site / "models" / "manifest.json").read_text(encoding="utf-8")
    assert '"id": "hello_world"' in manifest
    html = (site / "index.html").read_text(encoding="utf-8")
    assert "<script" not in html.lower()
    assert 'rel="ar"' in html
    assert "data:model/vnd.usdz+zip;base64," in html
    assert ">Quick Look</span>" in html
    assert 'href="viewer/?m=hello_world"' in html
    assert ">Web 3D</span>" in html
    assert "Otevřít" not in html
    assert "catbox" not in html
    out = capsys.readouterr().out
    assert "preview_url: https://pteasima.github.io/Blueprints/" in out


def test_build_preview_hub_script(tmp_path, monkeypatch):
    import blueprints.preview_hub as ph

    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", tmp_path)
    models = tmp_path / "models"
    models.mkdir()
    (models / "manifest.json").write_text(
        '[{"id": "demo", "label": "Quick Look"}]\n', encoding="utf-8"
    )
    # Minimal zip-shaped payload is enough for hub embedding
    (models / "demo.usdz").write_bytes(b"PK\x03\x04" + b"\x00" * 60)
    path = ph.write_preview_hub()
    html = path.read_text(encoding="utf-8")
    assert ">Quick Look</span>" in html
    assert "data:model/vnd.usdz+zip;base64," in html


def test_stl_to_usdz_roundtrip(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(tmp_path / "artifacts"))
    monkeypatch.setenv("BLUEPRINTS_SKIP_PREVIEW_SITE", "1")
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


def test_obyvak_usdz_has_layer_materials(tmp_path, monkeypatch):
    """Each construction layer must keep its own UsdPreviewSurface colour in the USDZ."""
    import blueprints.export_utils as eu
    from obyvak import build as build_obyvak
    from pxr import UsdShade

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(tmp_path / "artifacts"))
    monkeypatch.setenv("BLUEPRINTS_SKIP_PREVIEW_SITE", "1")
    (tmp_path / "artifacts").mkdir()

    shape, _ = build_obyvak()
    paths = export_shape(shape, "obyvak", formats=("stl",))
    stage = Usd.Stage.Open(str(paths["usdz"]))
    assert stage is not None

    expected = {
        "eps": (217 / 255, 232 / 255, 200 / 255),
        "zdivo": (207 / 255, 200 / 255, 188 / 255),
        "krov": (196 / 255, 165 / 255, 116 / 255),
        "predstena": (200 / 255, 232 / 255, 240 / 255),
        "krytina": (139 / 255, 46 / 255, 26 / 255),  # stroke used when fill is None
        "vata": (217 / 255, 232 / 255, 200 / 255),
        "nabytek": (232 / 255, 213 / 255, 163 / 255),
    }
    for name, rgb in expected.items():
        mesh_prim = stage.GetPrimAtPath(f"/Model/Geom/{name}")
        assert mesh_prim.IsValid(), name
        mat_prim = stage.GetPrimAtPath(f"/Model/Looks/{name}")
        assert mat_prim.IsValid(), name
        shader = UsdShade.Shader(stage.GetPrimAtPath(f"/Model/Looks/{name}/PreviewSurface"))
        diffuse = shader.GetInput("diffuseColor").Get()
        assert diffuse[0] == pytest.approx(rgb[0], abs=1e-5)
        assert diffuse[1] == pytest.approx(rgb[1], abs=1e-5)
        assert diffuse[2] == pytest.approx(rgb[2], abs=1e-5)


def test_agents_md_points_at_rolling_pages():
    text = AGENTS_MD.read_text(encoding="utf-8")
    assert "pteasima.github.io/Blueprints" in text
    assert "GitHub Actions" in text
    assert "Git LFS" in text
    assert "catbox" not in text.lower()
    assert "QR" not in text
    assert 'href="/opt/cursor/artifacts' not in text
    assert "<img src=\"/opt/cursor/artifacts/" in text
