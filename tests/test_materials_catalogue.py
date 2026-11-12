"""inputs/materials/catalogue.yaml: fields, colours, texture paths, coverage."""

from blueprints.materials import load_catalogue, readme_in_sync, resolve, validate


def test_catalogue_is_valid():
    assert validate() == []


def test_specific_selectors_win():
    cat = load_catalogue()
    assert resolve(cat, "cabinet", "SF-I600a-FRONT") == ["oak-veneer-joinery"]
    assert resolve(cat, "cabinet", "KR-ISL-LEG-SF-E700-S-F") == ["stainless-brushed"]
    assert resolve(cat, "cabinet", "SF-DN-BODY") == ["oak-natural-kaplan"]
    assert resolve(cat, "cabinet", "SF-I600a-BOTTOM") == ["kitchen-carcass-white"]
    assert resolve(cat, "appliance", "EA-TV") == ["tv-panel-black"]
    assert resolve(cat, "worktop", None) == ["silestone-blanco-maple"]


def test_validator_catches_bad_entries():
    bad = [dict(load_catalogue()[0], base_color="#zzz", maps={"color": "docs/materials/nope.jpg"})]
    errors = validate(bad)
    assert any("base_color" in e for e in errors)
    assert any("missing" in e for e in errors)


def test_readme_table_matches_catalogue():
    # Regenerate with: python -m blueprints.materials --write-readme
    assert readme_in_sync()
