#!/usr/bin/env python3
"""CLI for merging built docs/ into the pages-site content branch."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from blueprints.pages_site import merge_preview, merge_root, remove_preview  # noqa: E402


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="mode", required=True)

    root = sub.add_parser("root", help="Publish production site at root")
    root.add_argument("built_docs", type=Path)
    root.add_argument("pages_site", type=Path)

    preview = sub.add_parser("preview", help="Publish PR preview subpath")
    preview.add_argument("built_docs", type=Path)
    preview.add_argument("pages_site", type=Path)
    preview.add_argument("pr_number", type=int)

    remove = sub.add_parser("remove", help="Remove PR preview subpath")
    remove.add_argument("pages_site", type=Path)
    remove.add_argument("pr_number", type=int)

    args = parser.parse_args(argv)
    if args.mode == "root":
        path = merge_root(args.built_docs, args.pages_site)
    elif args.mode == "preview":
        path = merge_preview(args.built_docs, args.pages_site, args.pr_number)
    else:
        path = remove_preview(args.pages_site, args.pr_number)
    print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
