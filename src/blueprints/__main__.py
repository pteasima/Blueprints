"""CLI: python -m blueprints <module>  (same as python -m blueprints.export)."""

from blueprints.export import main

if __name__ == "__main__":
    raise SystemExit(main())
