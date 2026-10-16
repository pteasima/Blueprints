"""Draw the 1.NP floor-build-up plan (PNG, PDF, SVG) into docs/.

    python scripts/export_podlaha_plan.py
"""

from blueprints.podlaha_plan import export


def main() -> None:
    paths = export()
    for key in ("svg", "png", "pdf"):
        print(f"{key}: {paths[key]}")


if __name__ == "__main__":
    main()
