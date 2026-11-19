"""inputs/materials/catalogue.yaml: fields, colours, texture paths, coverage."""

from blueprints.materials import load_catalogue, readme_in_sync, resolve, validate


def test_catalogue_is_valid():
    assert validate() == []


def test_specific_selectors_win():
    cat = load_catalogue()
    assert resolve(cat, "cabinet", "SF-I600a-FRONT") == ["kitchen-front-cream"]
    assert resolve(cat, "cabinet", "KR-ISL-LEG-SF-E700-S-F") == ["stainless-brushed"]
    assert resolve(cat, "cabinet", "SF-DN70-BODY") == ["oak-natural-kaplan"]
    # Oak furniture fronts and carcasses (2026-11-19); kitchen doors are cream.
    for mesh in ("SF-DN-S1-D1", "SF-LB-S2-DOOR1", "SF-DH-S1-DOOR2", "SF-TC-DOOR1", "SF-F052-SH1-1", "KR-DN-END-W-SF-DN"):
        assert resolve(cat, "cabinet", mesh) == ["oak-natural-kaplan"], mesh
    for mesh in ("SF-T1-DOOR1", "SF-E600b-D1", "SF-T1-FILLER1"):
        assert resolve(cat, "cabinet", mesh) == ["kitchen-front-cream"], mesh
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
