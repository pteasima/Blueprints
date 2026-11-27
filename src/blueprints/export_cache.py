"""Content-addressed cache for ``python -m blueprints.export`` outputs.

A cache key is the SHA-256 of the model code, the export package, vendored
yaml-ifc, ``inputs/``, and ``pyproject.toml``. On a hit, the previous
STEP/STL/GLB/HTML and viewer sidecars are copied back so a no-change
re-export skips the CAD build, IFC index, and tessellation.

Bypass with ``--no-cache`` or ``BLUEPRINTS_NO_CACHE=1``. The default
directory is ``.cache/export/`` at the repo root (gitignored). Override
with ``BLUEPRINTS_EXPORT_CACHE_DIR``.
"""

from __future__ import annotations

import hashlib
import json
import os
import shutil
from pathlib import Path
from typing import Iterable


REPO_ROOT = Path(__file__).resolve().parents[2]
CACHE_VERSION = "export-cache-v1"

# Sidecars written next to the Pages GLB. ``manifest.json`` and ``index.html``
# are rebuilt on restore so they stay in sync with the rest of the hub.
VIEWER_SIDECARS = (
    ".glb",
    ".ifc.json",
    ".doors.json",
    ".windows.json",
    ".cables.json",
    ".scenes.json",
    ".parts.json",
    ".layers.json",
    ".gridfinity.glb",
)

_SKIP_DIR_NAMES = {
    "__pycache__",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    "node_modules",
    "dist",
    ".cache",
    ".git",
    ".venv",
}

# Built viewer bundles are derived from the hashed JS sources; including them
# would change the key after the first export builds viewer.iife.js.
_SKIP_FILE_NAMES = {".DS_Store", "viewer.iife.js"}
_SKIP_FILE_SUFFIXES = {".pyc", ".pyo"}


def cache_dir() -> Path:
    override = os.environ.get("BLUEPRINTS_EXPORT_CACHE_DIR", "").strip()
    if override:
        return Path(override)
    return REPO_ROOT / ".cache" / "export"


def cache_enabled(*, no_cache: bool = False) -> bool:
    if no_cache:
        return False
    raw = os.environ.get("BLUEPRINTS_NO_CACHE", "").strip().lower()
    return raw not in {"1", "true", "yes", "on"}


def _iter_source_files(root: Path) -> Iterable[Path]:
    trees = (
        root / "models",
        root / "src" / "blueprints",
        root / "vendor" / "yaml-ifc",
        root / "inputs",
        root / "scripts",
    )
    for tree in trees:
        if not tree.exists():
            continue
        for path in tree.rglob("*"):
            if not path.is_file():
                continue
            if any(part in _SKIP_DIR_NAMES for part in path.parts):
                continue
            if path.name in _SKIP_FILE_NAMES or path.suffix in _SKIP_FILE_SUFFIXES:
                continue
            yield path
    pyproject = root / "pyproject.toml"
    if pyproject.is_file():
        yield pyproject


def source_fingerprint(root: Path | None = None) -> str:
    """Stable SHA-256 of every file that can change export bytes."""
    root = (root or REPO_ROOT).resolve()
    digest = hashlib.sha256()
    digest.update(CACHE_VERSION.encode("utf-8"))
    digest.update(b"\n")
    files = sorted({path.resolve() for path in _iter_source_files(root)}, key=lambda p: p.as_posix())
    for path in files:
        rel = path.relative_to(root).as_posix()
        data = path.read_bytes()
        digest.update(rel.encode("utf-8"))
        digest.update(b"\0")
        digest.update(str(len(data)).encode("ascii"))
        digest.update(b"\0")
        digest.update(data)
        digest.update(b"\n")
    return digest.hexdigest()


def entry_dir(module: str, fingerprint: str) -> Path:
    return cache_dir() / module / fingerprint


def _rel_to_repo(path: Path, root: Path) -> str | None:
    try:
        return path.resolve().relative_to(root.resolve()).as_posix()
    except ValueError:
        return None


def collect_outputs(
    model_name: str,
    export_paths: dict[str, Path] | None = None,
    *,
    repo: Path | None = None,
) -> dict[str, Path]:
    """Repo-relative keys for files a successful export should leave behind."""
    repo = repo or REPO_ROOT
    found: dict[str, Path] = {}
    for key, path in (export_paths or {}).items():
        if key == "preview_hub":
            continue
        if path is not None and Path(path).is_file():
            rel = _rel_to_repo(Path(path), repo)
            found[rel or key] = Path(path)
    models = repo / "docs" / "models"
    for suffix in VIEWER_SIDECARS:
        path = models / f"{model_name}{suffix}"
        if path.is_file():
            found[_rel_to_repo(path, repo) or path.name] = path
    return found


def store(
    module: str,
    fingerprint: str,
    outputs: dict[str, Path],
    *,
    model_name: str | None = None,
    summary: str = "",
    repo: Path | None = None,
) -> Path | None:
    """Copy ``outputs`` into the cache. Returns the entry directory, or None."""
    if not outputs:
        return None
    repo = (repo or REPO_ROOT).resolve()
    dest = entry_dir(module, fingerprint)
    if dest.exists():
        shutil.rmtree(dest)
    files_dir = dest / "files"
    files_dir.mkdir(parents=True)
    recorded: dict[str, str] = {}
    for rel, src in sorted(outputs.items()):
        src = Path(src)
        if not src.is_file():
            continue
        rel_key = _rel_to_repo(src, repo) or rel
        target = files_dir / rel_key
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, target)
        recorded[rel_key] = hashlib.sha256(src.read_bytes()).hexdigest()
    if not recorded:
        shutil.rmtree(dest, ignore_errors=True)
        return None
    manifest = {
        "version": CACHE_VERSION,
        "fingerprint": fingerprint,
        "module": module,
        "model_name": model_name or module,
        "summary": summary,
        "files": recorded,
    }
    (dest / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    pointer = cache_dir() / module / "current.json"
    pointer.parent.mkdir(parents=True, exist_ok=True)
    pointer.write_text(
        json.dumps({"fingerprint": fingerprint, "model_name": model_name or module}, indent=2) + "\n",
        encoding="utf-8",
    )
    return dest


def _load_manifest(module: str, fingerprint: str) -> dict | None:
    path = entry_dir(module, fingerprint) / "manifest.json"
    if not path.is_file():
        return None
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except ValueError:
        return None
    if not isinstance(data, dict) or data.get("fingerprint") != fingerprint:
        return None
    if data.get("version") != CACHE_VERSION:
        return None
    return data


def restore(
    module: str,
    fingerprint: str,
    *,
    repo: Path | None = None,
) -> dict | None:
    """Copy a complete cache entry back into the repo. None on miss or corruption."""
    manifest = _load_manifest(module, fingerprint)
    if manifest is None:
        return None
    repo = (repo or REPO_ROOT).resolve()
    files_dir = entry_dir(module, fingerprint) / "files"
    recorded = manifest.get("files") or {}
    if not recorded or not files_dir.is_dir():
        return None
    # Verify every cached file is present and matches the stored hash before
    # touching the working tree.
    pending: list[tuple[Path, Path]] = []
    for rel, digest in recorded.items():
        src = files_dir / rel
        if not src.is_file():
            return None
        if hashlib.sha256(src.read_bytes()).hexdigest() != digest:
            return None
        pending.append((src, repo / rel))
    restored: dict[str, Path] = {}
    for src, dest in pending:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        restored[dest.relative_to(repo).as_posix()] = dest
    return {
        "model_name": manifest.get("model_name") or module,
        "summary": manifest.get("summary") or "",
        "files": restored,
        "fingerprint": fingerprint,
    }


def republish_preview(model_name: str, restored_files: dict[str, Path]) -> Path | None:
    """Refresh the Pages hub from restored sidecar JSON, without a CAD rebuild."""
    from blueprints.preview_hub import models_dir, preview_site_enabled, publish_to_preview_site

    if not preview_site_enabled():
        return None
    exports_glb = restored_files.get(f"exports/{model_name}/model.glb")
    docs_glb = restored_files.get(f"docs/models/{model_name}.glb")
    dest = models_dir() / f"{model_name}.glb"
    if exports_glb and Path(exports_glb).is_file() and Path(exports_glb).resolve() != dest.resolve():
        glb = Path(exports_glb)
    elif dest.is_file():
        # Already restored into docs/models; copy to a temp name only if
        # publish needs a distinct source. Skip the binary copy instead.
        glb = dest
    elif docs_glb and Path(docs_glb).is_file():
        glb = Path(docs_glb)
    else:
        return None
    scenes = _load_json(restored_files.get(f"docs/models/{model_name}.scenes.json"))
    parts = _load_json(restored_files.get(f"docs/models/{model_name}.parts.json"))
    ifc_index = _load_json(restored_files.get(f"docs/models/{model_name}.ifc.json"))
    if glb.resolve() == dest.resolve():
        # Sidecars are already restored in place; only refresh the hub.
        from blueprints.preview_hub import (
            ensure_viewer_shell,
            pages_url,
            save_manifest,
            upsert_manifest,
            write_preview_hub,
        )

        ensure_viewer_shell()
        entries = upsert_manifest(model_name)
        save_manifest(entries)
        index_path = write_preview_hub(entries)
        print(f"preview_url: {pages_url()}")
        print(f"viewer_url: {pages_url()}viewer/?m={model_name}")
        return index_path
    return publish_to_preview_site(
        model_name,
        glb_path=glb,
        scenes=scenes,
        part_groups=parts,
        ifc_index=ifc_index,
    )



def _load_json(path: Path | None):
    if path is None or not Path(path).is_file():
        return None
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except ValueError:
        return None
