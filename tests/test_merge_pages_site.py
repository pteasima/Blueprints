"""Tests for pages-site merge helpers (PR preview isolation)."""

from __future__ import annotations

from pathlib import Path

import pytest

from blueprints.pages_site import (
    merge_preview,
    merge_root,
    preview_url,
    remove_preview,
)


def _fake_docs(root: Path, label: str) -> Path:
    docs = root / f"docs-{label}"
    (docs / "models").mkdir(parents=True)
    (docs / "viewer").mkdir(parents=True)
    (docs / "index.html").write_text(f"<html>{label}</html>\n", encoding="utf-8")
    (docs / "models" / "manifest.json").write_text("[]\n", encoding="utf-8")
    (docs / "viewer" / "index.html").write_text(f"viewer-{label}\n", encoding="utf-8")
    return docs


def test_merge_root_preserves_other_pr_previews(tmp_path: Path):
    site = tmp_path / "pages-site"
    docs_a = _fake_docs(tmp_path, "a")
    docs_prod = _fake_docs(tmp_path, "prod")

    merge_preview(docs_a, site, 12)
    assert (site / "pr-preview" / "pr-12" / "index.html").read_text(encoding="utf-8") == (
        "<html>a</html>\n"
    )

    merge_root(docs_prod, site)
    assert (site / "index.html").read_text(encoding="utf-8") == "<html>prod</html>\n"
    assert (site / ".nojekyll").is_file()
    assert (site / "pr-preview" / "pr-12" / "index.html").is_file()
    assert (site / "pr-preview" / "pr-12" / "viewer" / "index.html").read_text(
        encoding="utf-8"
    ) == "viewer-a\n"


def test_merge_preview_isolates_prs(tmp_path: Path):
    site = tmp_path / "pages-site"
    docs_a = _fake_docs(tmp_path, "a")
    docs_b = _fake_docs(tmp_path, "b")

    merge_preview(docs_a, site, 1)
    merge_preview(docs_b, site, 2)

    assert (site / "pr-preview" / "pr-1" / "index.html").read_text(encoding="utf-8") == (
        "<html>a</html>\n"
    )
    assert (site / "pr-preview" / "pr-2" / "index.html").read_text(encoding="utf-8") == (
        "<html>b</html>\n"
    )

    docs_a2 = _fake_docs(tmp_path, "a2")
    merge_preview(docs_a2, site, 1)
    assert (site / "pr-preview" / "pr-1" / "index.html").read_text(encoding="utf-8") == (
        "<html>a2</html>\n"
    )
    assert (site / "pr-preview" / "pr-2" / "index.html").read_text(encoding="utf-8") == (
        "<html>b</html>\n"
    )


def test_remove_preview_on_close(tmp_path: Path):
    site = tmp_path / "pages-site"
    merge_preview(_fake_docs(tmp_path, "a"), site, 7)
    merge_preview(_fake_docs(tmp_path, "b"), site, 8)

    remove_preview(site, 7)
    assert not (site / "pr-preview" / "pr-7").exists()
    assert (site / "pr-preview" / "pr-8" / "index.html").is_file()

    remove_preview(site, 8)
    assert not (site / "pr-preview").exists()


def test_preview_url():
    assert (
        preview_url("https://pteasima.github.io/Blueprints/", 42)
        == "https://pteasima.github.io/Blueprints/pr-preview/pr-42/"
    )


def test_invalid_pr_number(tmp_path: Path):
    with pytest.raises(ValueError):
        merge_preview(_fake_docs(tmp_path, "x"), tmp_path / "site", 0)
