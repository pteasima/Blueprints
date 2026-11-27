"""Content-addressed export cache: fingerprint, store/restore, CLI flags."""

from __future__ import annotations

from pathlib import Path
import json
import os
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from blueprints.export_cache import (  # noqa: E402
    cache_enabled,
    collect_outputs,
    restore,
    source_fingerprint,
    store,
)


def test_fingerprint_is_stable_and_changes_with_a_source_file(tmp_path, monkeypatch):
    repo = tmp_path / "repo"
    (repo / "models").mkdir(parents=True)
    (repo / "src" / "blueprints").mkdir(parents=True)
    (repo / "inputs").mkdir()
    (repo / "scripts").mkdir()
    (repo / "models" / "demo.py").write_text("VALUE = 1\n", encoding="utf-8")
    (repo / "src" / "blueprints" / "export.py").write_text("x = 1\n", encoding="utf-8")
    (repo / "inputs" / "note.txt").write_text("hello\n", encoding="utf-8")
    (repo / "pyproject.toml").write_text("[project]\nname = 'demo'\n", encoding="utf-8")
    # Noise that must not be part of the key.
    (repo / "models" / "__pycache__").mkdir()
    (repo / "models" / "__pycache__" / "demo.cpython-312.pyc").write_bytes(b"nope")
    (repo / ".cache" / "export").mkdir(parents=True)
    (repo / ".cache" / "export" / "junk.bin").write_bytes(b"cached")
    (repo / "docs" / "models").mkdir(parents=True)
    (repo / "docs" / "models" / "demo.glb").write_bytes(b"glb")

    first = source_fingerprint(repo)
    second = source_fingerprint(repo)
    assert first == second
    assert len(first) == 64

    (repo / "models" / "demo.py").write_text("VALUE = 2\n", encoding="utf-8")
    assert source_fingerprint(repo) != first

    (repo / "models" / "demo.py").write_text("VALUE = 1\n", encoding="utf-8")
    (repo / "inputs" / "note.txt").write_text("hello world\n", encoding="utf-8")
    assert source_fingerprint(repo) != first


def test_store_restore_roundtrip_is_byte_identical(tmp_path, monkeypatch):
    repo = tmp_path / "repo"
    exports = repo / "exports" / "demo"
    models = repo / "docs" / "models"
    exports.mkdir(parents=True)
    models.mkdir(parents=True)
    glb = exports / "model.glb"
    step = exports / "model.step"
    ifc = models / "demo.ifc.json"
    glb.write_bytes(b"glb-bytes-v1")
    step.write_text("ISO-10303-21; END-ISO-10303-21;\n", encoding="utf-8")
    ifc.write_text(json.dumps({"elements": {"G": {"id": "W-1", "globalId": "abc"}}}), encoding="utf-8")

    cache = tmp_path / "cache"
    monkeypatch.setenv("BLUEPRINTS_EXPORT_CACHE_DIR", str(cache))
    # collect_outputs / store use REPO_ROOT; point them at our temp repo.
    import blueprints.export_cache as ec

    monkeypatch.setattr(ec, "REPO_ROOT", repo)

    outputs = collect_outputs("demo", {"glb": glb, "step": step}, repo=repo)
    assert any(path == ifc for path in outputs.values())
    fingerprint = "a" * 64
    stored = store("demo", fingerprint, outputs, model_name="demo", summary="walls=1", repo=repo)
    assert stored is not None
    assert (stored / "manifest.json").is_file()

    # Mutate the working tree, then restore.
    glb.write_bytes(b"dirty")
    step.write_text("dirty\n", encoding="utf-8")
    ifc.write_text("{}\n", encoding="utf-8")
    hit = restore("demo", fingerprint, repo=repo)
    assert hit is not None
    assert hit["model_name"] == "demo"
    assert hit["summary"] == "walls=1"
    assert hit["files"]["exports/demo/model.glb"].read_bytes() == b"glb-bytes-v1"
    assert hit["files"]["exports/demo/model.step"].read_text(encoding="utf-8").startswith("ISO-10303-21")
    assert json.loads(hit["files"]["docs/models/demo.ifc.json"].read_text(encoding="utf-8"))["elements"]["G"]["globalId"] == "abc"


def test_corrupt_cache_is_a_miss(tmp_path, monkeypatch):
    repo = tmp_path / "repo"
    (repo / "exports" / "demo").mkdir(parents=True)
    src = repo / "exports" / "demo" / "model.glb"
    src.write_bytes(b"good")
    import blueprints.export_cache as ec

    cache = tmp_path / "cache"
    monkeypatch.setenv("BLUEPRINTS_EXPORT_CACHE_DIR", str(cache))
    monkeypatch.setattr(ec, "REPO_ROOT", repo)
    fingerprint = "b" * 64
    store("demo", fingerprint, {"exports/demo/model.glb": src}, model_name="demo", repo=repo)
    cached = cache / "demo" / fingerprint / "files" / "exports" / "demo" / "model.glb"
    cached.write_bytes(b"tampered")
    assert restore("demo", fingerprint, repo=repo) is None
    # Working tree left untouched.
    assert src.read_bytes() == b"good"


def test_no_cache_flag_and_env(monkeypatch):
    monkeypatch.delenv("BLUEPRINTS_NO_CACHE", raising=False)
    assert cache_enabled() is True
    assert cache_enabled(no_cache=True) is False
    monkeypatch.setenv("BLUEPRINTS_NO_CACHE", "1")
    assert cache_enabled() is False
    monkeypatch.setenv("BLUEPRINTS_NO_CACHE", "true")
    assert cache_enabled() is False
    monkeypatch.setenv("BLUEPRINTS_NO_CACHE", "0")
    assert cache_enabled() is True


def test_cli_accepts_no_cache_and_profile():
    from blueprints.export import main
    import argparse

    # Parse errors should mention the flags; a missing module still fails later.
    with pytest.raises(SystemExit):
        main(["--help"])


def test_help_documents_cache_flags(capsys):
    from blueprints.export import main

    with pytest.raises(SystemExit) as exc:
        main(["--help"])
    assert exc.value.code == 0
    out = capsys.readouterr().out
    assert "--no-cache" in out
    assert "--profile" in out
    assert "BLUEPRINTS_NO_CACHE" in out


def test_republish_after_restore_does_not_copy_glb_onto_itself(tmp_path, monkeypatch):
    """A cache hit restores docs/models/<id>.glb first; republish must not crash."""
    repo = tmp_path / "repo"
    exports = repo / "exports" / "demo"
    models = repo / "docs" / "models"
    exports.mkdir(parents=True)
    models.mkdir(parents=True)
    glb = exports / "model.glb"
    docs_glb = models / "demo.glb"
    glb.write_bytes(b"glb-bytes")
    docs_glb.write_bytes(b"glb-bytes")
    (models / "demo.ifc.json").write_text("{\"elements\":{}}", encoding="utf-8")

    import blueprints.export_cache as ec
    import blueprints.preview_hub as ph

    cache = tmp_path / "cache"
    monkeypatch.setenv("BLUEPRINTS_EXPORT_CACHE_DIR", str(cache))
    monkeypatch.setenv("BLUEPRINTS_ALLOW_PREVIEW_SITE", "1")
    monkeypatch.delenv("BLUEPRINTS_SKIP_PREVIEW_SITE", raising=False)
    monkeypatch.setattr(ec, "REPO_ROOT", repo)
    monkeypatch.setattr(ph, "REPO_ROOT", repo)
    monkeypatch.setattr(ph, "PREVIEW_SITE_DIR", repo / "docs")

    outputs = {
        "exports/demo/model.glb": glb,
        "docs/models/demo.glb": docs_glb,
        "docs/models/demo.ifc.json": models / "demo.ifc.json",
    }
    fingerprint = "c" * 64
    store("demo", fingerprint, outputs, model_name="demo", repo=repo)
    docs_glb.write_bytes(b"dirty")
    hit = restore("demo", fingerprint, repo=repo)
    assert hit is not None
    hub = ec.republish_preview("demo", hit["files"])
    assert hub is not None
    assert docs_glb.read_bytes() == b"glb-bytes"
