from pathlib import Path
import sys

from build123d import Box

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))
AGENTS_MD = ROOT / "AGENTS.md"

from blueprints.export_utils import export_shape  # noqa: E402


def _demo_shape() -> Box:
    return Box(50, 40, 20)


def test_export_writes_glb_html_not_usdz(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    exports = tmp_path / "exports"
    artifacts = tmp_path / "artifacts"
    artifacts.mkdir()
    monkeypatch.setattr(eu, "EXPORTS_DIR", exports)
    monkeypatch.setenv("BLUEPRINTS_ARTIFACTS_DIR", str(artifacts))
    monkeypatch.setenv("BLUEPRINTS_SKIP_PREVIEW_SITE", "1")

    paths = export_shape(_demo_shape(), "demo_box", formats=("step", "stl"))

    assert paths["step"].exists()
    assert paths["stl"].exists()
    assert paths["glb"].exists()
    assert paths["html"].exists()
    assert paths["glb"].stat().st_size > 100
    assert "usdz" not in paths
    assert not paths["stl"].with_suffix(".usdz").exists()
    html = paths["html"].read_text(encoding="utf-8")
    assert "BlueprintsViewerBundle" in html
    assert "mountViewer" in html
    assert "data:model/vnd.usdz+zip;base64," not in html
    assert list(artifacts.iterdir()) == []


def test_preview_hub_updates_models_for_pages(tmp_path, monkeypatch, capsys):
    import blueprints.export_utils as eu
    import blueprints.preview_hub as ph

    exports = tmp_path / "exports"
    site = tmp_path / "docs"
    monkeypatch.setattr(eu, "EXPORTS_DIR", exports)
    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", site)
    monkeypatch.delenv("BLUEPRINTS_SKIP_PREVIEW_SITE", raising=False)
    monkeypatch.setenv("BLUEPRINTS_ALLOW_PREVIEW_SITE", "1")
    monkeypatch.setenv("BLUEPRINTS_PAGES_URL", "https://pteasima.github.io/Blueprints/")

    paths = export_shape(_demo_shape(), "demo_box", formats=("stl",))
    assert paths["preview_hub"] == site / "index.html"
    assert (site / "models" / "demo_box.glb").is_file()
    assert not (site / "models" / "demo_box.usdz").exists()
    assert (site / "viewer" / "viewer.js").is_file()
    assert (site / ".nojekyll").is_file()
    manifest = (site / "models" / "manifest.json").read_text(encoding="utf-8")
    assert '"id": "demo_box"' in manifest
    html = (site / "index.html").read_text(encoding="utf-8")
    assert "<script" not in html.lower()
    assert 'rel="ar"' not in html
    assert "data:model/vnd.usdz+zip;base64," not in html
    assert 'href="viewer/?m=demo_box"' in html
    assert ">demo_box</span>" in html
    assert ">Web 3D</span>" not in html
    assert "Otevřít" not in html
    assert "catbox" not in html
    out = capsys.readouterr().out
    assert "preview_url: https://pteasima.github.io/Blueprints/" in out


def test_excluded_hub_models_are_not_published(tmp_path, monkeypatch):
    import blueprints.preview_hub as ph

    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", tmp_path)
    monkeypatch.delenv("BLUEPRINTS_SKIP_PREVIEW_SITE", raising=False)
    monkeypatch.setenv("BLUEPRINTS_ALLOW_PREVIEW_SITE", "1")
    glb = tmp_path / "bath.glb"
    glb.write_bytes(b"glTF" + b"\x00" * 60)
    assert ph.publish_to_preview_site("bathroom_107", glb_path=glb) is None
    assert ph.publish_to_preview_site("bathroom_120", glb_path=glb) is None
    assert not (tmp_path / "models" / "bathroom_107.glb").exists()
    assert not (tmp_path / "models" / "bathroom_120.glb").exists()
    assert ph.publish_to_preview_site("demo_box", glb_path=glb) is not None
    assert (tmp_path / "models" / "demo_box.glb").is_file()
    manifest = (tmp_path / "models" / "manifest.json").read_text(encoding="utf-8")
    assert "bathroom_107" not in manifest
    assert "bathroom_120" not in manifest
    assert '"id": "demo_box"' in manifest


def test_build_preview_hub_script(tmp_path, monkeypatch):
    import blueprints.preview_hub as ph

    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", tmp_path)
    models = tmp_path / "models"
    models.mkdir()
    (models / "manifest.json").write_text(
        '[{"id": "demo", "label": "Demo Model"}]\n', encoding="utf-8"
    )
    (models / "demo.glb").write_bytes(b"glTF" + b"\x00" * 60)
    path = ph.write_preview_hub()
    html = path.read_text(encoding="utf-8")
    assert ">Demo Model</span>" in html
    assert 'href="viewer/?m=demo"' in html
    assert 'rel="ar"' not in html
    assert "data:model/vnd.usdz+zip;base64," not in html
    assert "prefers-color-scheme: dark" in html.lower()


def test_ensure_viewer_shell_copies_esm_build_and_cache_busts(tmp_path, monkeypatch):
    import blueprints.preview_hub as ph

    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", tmp_path)
    monkeypatch.setattr(ph, "REPO_ROOT", tmp_path)
    dist = tmp_path / "src" / "blueprints" / "viewer" / "dist"
    (dist / "chunks").mkdir(parents=True)
    (dist / "viewer.js").write_text("/* entry v1 */", encoding="utf-8")
    (dist / "chunks" / "editMode-AAAA.js").write_text("/* chunk */", encoding="utf-8")
    docs_viewer = tmp_path / "viewer"
    (docs_viewer / "chunks").mkdir(parents=True)
    (docs_viewer / "chunks" / "stale-ZZZZ.js").write_text("/* old */", encoding="utf-8")
    (docs_viewer / "viewer.iife.js").write_text("/* old iife */", encoding="utf-8")
    (docs_viewer / "index.html").write_text(
        '<script>const m = import("./viewer.js");</script>\n', encoding="utf-8"
    )
    assert ph.ensure_viewer_shell()
    html = (docs_viewer / "index.html").read_text(encoding="utf-8")
    assert 'import("./viewer.js?v=' in html
    assert (docs_viewer / "viewer.js").read_text(encoding="utf-8") == "/* entry v1 */"
    assert (docs_viewer / "chunks" / "editMode-AAAA.js").is_file()
    assert not (docs_viewer / "chunks" / "stale-ZZZZ.js").exists()
    assert not (docs_viewer / "viewer.iife.js").exists()
    # A changed chunk alone changes the stamp.
    (dist / "chunks" / "editMode-AAAA.js").write_text("/* chunk v2 */", encoding="utf-8")
    assert ph.ensure_viewer_shell()
    html2 = (docs_viewer / "index.html").read_text(encoding="utf-8")
    assert html2 != html
    assert 'import("./viewer.js?v=' in html2


def test_ensure_viewer_shell_without_build(tmp_path, monkeypatch):
    import blueprints.preview_hub as ph

    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", tmp_path)
    monkeypatch.setattr(ph, "REPO_ROOT", tmp_path)
    assert ph.ensure_viewer_shell() is False


def test_agents_md_points_at_pages_previews():
    text = AGENTS_MD.read_text(encoding="utf-8")
    assert "pteasima.github.io/Blueprints" in text
    assert "pr-preview/pr-" in text
    assert "pages-site" in text
    assert "GitHub Actions" in text
    assert "Git LFS" in text
    assert "catbox" not in text.lower()
    assert "QR" not in text
    assert "/opt/cursor/artifacts" not in text
    assert ".cursor/" not in text
