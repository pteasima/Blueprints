"""Merge built docs/ trees into the pages-site content branch layout."""

from __future__ import annotations

import shutil
from pathlib import Path

PREVIEW_UMBRELLA = "pr-preview"


def _clear_dir_except(dest: Path, keep_names: set[str]) -> None:
    if not dest.is_dir():
        dest.mkdir(parents=True, exist_ok=True)
        return
    for child in dest.iterdir():
        if child.name in keep_names:
            continue
        if child.is_dir() and not child.is_symlink():
            shutil.rmtree(child)
        else:
            child.unlink()


def _copy_tree(src: Path, dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    for child in src.iterdir():
        target = dest / child.name
        if child.is_dir() and not child.is_symlink():
            if target.exists():
                shutil.rmtree(target)
            shutil.copytree(child, target, symlinks=False)
        else:
            shutil.copy2(child, target)
    (dest / ".nojekyll").touch()


def merge_root(built_docs: Path, pages_site: Path) -> Path:
    """Replace site root with built_docs, preserving pr-preview/."""
    if not built_docs.is_dir():
        raise FileNotFoundError(f"built docs not found: {built_docs}")
    pages_site.mkdir(parents=True, exist_ok=True)
    _clear_dir_except(pages_site, {PREVIEW_UMBRELLA, ".git"})
    _copy_tree(built_docs, pages_site)
    return pages_site


def merge_preview(built_docs: Path, pages_site: Path, pr_number: int) -> Path:
    """Publish built_docs under pr-preview/pr-<N>/."""
    if pr_number < 1:
        raise ValueError(f"invalid PR number: {pr_number}")
    if not built_docs.is_dir():
        raise FileNotFoundError(f"built docs not found: {built_docs}")
    dest = pages_site / PREVIEW_UMBRELLA / f"pr-{pr_number}"
    if dest.exists():
        shutil.rmtree(dest)
    _copy_tree(built_docs, dest)
    (pages_site / ".nojekyll").touch()
    return dest


def remove_preview(pages_site: Path, pr_number: int) -> Path:
    """Delete pr-preview/pr-<N>/ (no-op if missing)."""
    if pr_number < 1:
        raise ValueError(f"invalid PR number: {pr_number}")
    dest = pages_site / PREVIEW_UMBRELLA / f"pr-{pr_number}"
    if dest.exists():
        shutil.rmtree(dest)
    umbrella = pages_site / PREVIEW_UMBRELLA
    if umbrella.is_dir() and not any(umbrella.iterdir()):
        umbrella.rmdir()
    (pages_site / ".nojekyll").touch()
    return dest


def preview_url(pages_base: str, pr_number: int) -> str:
    base = pages_base.rstrip("/") + "/"
    return f"{base}{PREVIEW_UMBRELLA}/pr-{pr_number}/"
