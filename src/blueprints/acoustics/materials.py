"""Product cards for the Obývák acoustic stack.

Every figure is tagged as a point value, a bound, an absence, or an
assumption. Nothing in this module is a lab absorption coefficient.

A measured flow resistivity for the 4 mm StoSilent coat was not found.
Sto's αw figures (up to about 0.65) belong to StoSilent Top on Sto's own
boards and cavities, not to this wood-fibre ceiling, and are not copied
here. A patent range and the AcousPlan blog's 5 000–20 000 Pa·s/m² were
also rejected: neither is a lab sheet for a few-millimetre seamless plaster.
Until a lab curve for this coat exists, the transfer matrix has one facing
mode: acoustically transparent. That mode is an upper bound on absorption
(the coat is omitted). Replace the mode when a curve is measured; do not
invent a resistivity to fill the gap.

Porosity is not on either Naturheld sheet. ``porosity_estimate`` may store
1 − ρ_bulk/1500 using an assumed solid-timber density of 1500 kg/m³. The
transfer matrix does not read it.
"""

from __future__ import annotations

from dataclasses import dataclass

# 1 kPa·s/m² = 1000 Pa·s/m². Sheets quote the kilopascal form.
KPA_S_M2_TO_PA_S_M2 = 1000.0

# Standard air at about 20 °C. Not a project measurement.
AIR_DENSITY_KG_M3 = 1.20
AIR_SPEED_M_S = 343.0

# TYPICAL, not project data. PE film is commonly around this density.
PE_FOIL_DENSITY_KG_M3 = 950.0
# TYPICAL gypsum board, about 9 kg/m² at 12.5 mm (700–800 kg/m³).
GYPSUM_AREAL_MASS_AT_12_5_KG_M2 = 9.0

# Drawing label is bass_mineral_wool / minerální vlna, not a product card.
# The 10 kPa·s/m² placeholder is not used. See bass_wool_sigma().

# Painted plaster, hard floor, glazing, cabinet fronts, trap bottoms.
# One typical mid-band value, identical in every ceiling case. Not a
# measurement of this room. Without it, specular rays that never meet the
# ceiling do not decay and a T20 is just the bounce cutoff.
TYPICAL_UNTREATED_ALPHA = 0.03
TYPICAL_UNTREATED_NOTE = (
    "ASSUMPTION: 0.03, a typical mid-band figure for painted plaster, "
    "single glazing, a hard floor and smooth cabinet fronts. "
    "Frequency-independent. Not measured in this room. Same in every case."
)

# Assumed solid density behind the unused porosity estimate. Not a sheet value.
SOLID_TIMBER_DENSITY_ASSUMED_KG_M3 = 1500.0


@dataclass(frozen=True)
class Figure:
    """One cited number, or an explicit absence."""

    name: str
    kind: str  # point, lower_bound, upper_bound, range, absent, assumption, typical, table
    value: float | tuple[float, float] | None
    unit: str
    source_url: str
    document_date: str
    note: str


@dataclass(frozen=True)
class PeerBound:
    """Same-density board used only as context, not as a Naturheld measurement."""

    product: str
    density_kg_m3: float
    kind: str
    value_kpa_s_m2: float
    unit: str
    source_url: str
    note: str


NATURHELD_140_URLS = (
    "https://www.naturheld.global/holzfaser-produkte/",
    "https://www.baustoffshop.de/media/pdf/naturheld/Produktdatenblatt_naturheld-140.pdf",
    "https://www.naturheld.global/wp-content/uploads/2025/10/naturheld_Produktuebersicht_2.0_DE_V13-20251023.pdf",
)
# Manufacturer PDF 404'd on 2026-09-29:
# https://www.naturheld.global/wp-content/uploads/2024/08/Produktdatenblatt_DE_20240805_naturheld-140.pdf
NATURHELD_140_DATE = "Produktdatenblatt Stand 01.08.2024; overview Oct 2025"

NATURHELD_FLEX_URL = (
    "https://baunativ-shop.de/pdf_de/Produktdatenblatt_naturheld_20240130_DE_Flex.pdf"
)
NATURHELD_FLEX_DATE = "Produktdatenblatt version 003, valid from 01.03.2024"
# Official URL 404'd:
# https://www.naturheld.global/wp-content/uploads/2024/08/Produktdatenblatt_DE_20240805_naturheld-FLEX.pdf
# The Oct 2025 overview repeats the same airflow sentence.

GUTEX_MULTITHERM = PeerBound(
    product="Gutex Multitherm",
    density_kg_m3=140.0,
    kind="lower_bound",
    value_kpa_s_m2=60.0,
    unit="kPa·s/m²",
    source_url="https://www.gutex.co.uk/Downloads/PDF/Technisches%20Datenblatt%20-%20EN/GUTEX_Multitherm-TDB_en.pdf",
    note="bulk density about 140 kg/m³, airflow resistivity >= 60. Not a measured Naturheld point.",
)
BEST_WOOD_WALL_140 = PeerBound(
    product="best wood WALL 140",
    density_kg_m3=140.0,
    kind="lower_bound",
    value_kpa_s_m2=75.0,
    unit="kPa·s/m²",
    source_url="https://www.schneider-holz.com/en/service/downloads/download/technical-data-sheet-wall-140/",
    note="designation AFr75, linear flow resistance > 75. Same density, still a bound, not a Naturheld measurement.",
)
# STEICOtherm >= 100 is intentionally absent: that board is about 160 kg/m³
# and wet-process, so it is not this product.


@dataclass(frozen=True)
class Naturheld140Card:
    designation: str
    density: Figure
    lambda_d: Figure
    lambda_b_de: Figure
    mu: Figure
    specific_heat: Figure
    dynamic_stiffness: tuple[Figure, ...]
    airflow: Figure
    peers: tuple[PeerBound, ...]
    porosity_estimate: Figure

    @property
    def declared_minimum_sigma_pa_s_m2(self) -> float:
        """Working value. A floor, not a measured point."""
        assert self.airflow.kind == "lower_bound"
        assert self.airflow.value == 60.0
        return 60.0 * KPA_S_M2_TO_PA_S_M2

    @property
    def wall_140_analogue_sigma_pa_s_m2(self) -> float:
        """Sensitivity only: best wood WALL 140's declared level, same density."""
        return BEST_WOOD_WALL_140.value_kpa_s_m2 * KPA_S_M2_TO_PA_S_M2


def _nh(name: str, kind: str, value, unit: str, note: str) -> Figure:
    return Figure(name, kind, value, unit, NATURHELD_140_URLS[0], NATURHELD_140_DATE, note)


NATURHELD_140 = Naturheld140Card(
    designation="WF-EN 13171-T5-CS(10/Y)100-TR20-DS(70,-)3-AFr60-WS1,0-MU3",
    density=_nh("density", "point", 140.0, "kg/m³", "manufacturer point value"),
    lambda_d=_nh("lambda_D", "point", 0.041, "W/(m·K)", "declared thermal conductivity"),
    lambda_b_de=_nh("lambda_B DE", "point", 0.043, "W/(m·K)", "German design value on the sheet"),
    mu=_nh("mu", "point", 3.0, "1", "water-vapour diffusion resistance factor"),
    specific_heat=_nh("specific heat", "point", 2100.0, "J/(kg·K)", "manufacturer point value"),
    dynamic_stiffness=(
        _nh("dynamic stiffness 60 mm", "upper_bound", 65.0, "MN/m³", "impact sound, not an absorption input"),
        _nh("dynamic stiffness 80 mm", "upper_bound", 50.0, "MN/m³", "impact sound, not an absorption input"),
        _nh("dynamic stiffness 140 mm", "upper_bound", 30.0, "MN/m³", "impact sound, not an absorption input"),
    ),
    airflow=Figure(
        name="Längenbezogener Strömungswiderstand",
        kind="lower_bound",
        value=60.0,
        unit="kPa·s/m²",
        source_url=NATURHELD_140_URLS[1],
        document_date=NATURHELD_140_DATE,
        note=(
            "Sheet says > 60 kPa·s/m². AFr60 means the EN 13171 declared level "
            "is at least 60. This is a lower bound, not a measured point. "
            "Same table on the product page and in the Oct 2025 overview. "
            "Working calculations use 60 kPa·s/m² and must say: declared minimum; "
            "the true value may be higher. Gutex Multitherm (about 140 kg/m³) "
            "is the same >= 60 bound. best wood WALL 140 is AFr75 (> 75) and is "
            "only a sensitivity analogue."
        ),
    ),
    peers=(GUTEX_MULTITHERM, BEST_WOOD_WALL_140),
    porosity_estimate=Figure(
        name="porosity",
        kind="assumption",
        value=1.0 - 140.0 / SOLID_TIMBER_DENSITY_ASSUMED_KG_M3,
        unit="1",
        source_url="",
        document_date="",
        note=(
            "Not on the Naturheld sheet. Estimate only, from an assumed solid "
            "timber density of 1500 kg/m³. Do not feed this into the model."
        ),
    ),
)


@dataclass(frozen=True)
class NaturheldFlexCard:
    designation: str
    density: Figure
    lambda_d: Figure
    lambda_b_de: Figure
    mu: Figure
    specific_heat: Figure
    afr_designation: Figure
    airflow_table: Figure
    porosity_estimate: Figure

    @property
    def table_contradicts_afr10(self) -> bool:
        return True


def _flex(name: str, kind: str, value, unit: str, note: str) -> Figure:
    return Figure(name, kind, value, unit, NATURHELD_FLEX_URL, NATURHELD_FLEX_DATE, note)


NATURHELD_FLEX = NaturheldFlexCard(
    designation="WF-EN 13171-T3-MU1/2-AFr10",
    density=_flex("density", "point", 50.0, "kg/m³", "manufacturer point value"),
    lambda_d=_flex("lambda_D", "point", 0.036, "W/(m·K)", "declared thermal conductivity"),
    lambda_b_de=_flex("lambda_B DE", "point", 0.038, "W/(m·K)", "German design value on the sheet"),
    mu=_flex("mu", "range", (1.0, 2.0), "1", "sheet gives mu 1–2"),
    specific_heat=_flex("specific heat", "point", 2100.0, "J/(kg·K)", "manufacturer point value"),
    afr_designation=_flex(
        "AFr10",
        "lower_bound",
        10.0,
        "kPa·s/m²",
        "Designation claims >= 10 kPa·s/m². Contradicts the thickness table. Recorded, not used.",
    ),
    airflow_table=_flex(
        "Längenbezogener Strömungswiderstand",
        "table",
        None,
        "kPa·s/m²",
        'Sheet table: "5 bis 60mm, 6 ab 80mm". Read as 5 for thickness up to '
        "60 mm and 6 from 80 mm. The model uses this table for the thickness "
        "being simulated. It does not silently pick 10 to match AFr10.",
    ),
    porosity_estimate=Figure(
        name="porosity",
        kind="assumption",
        value=1.0 - 50.0 / SOLID_TIMBER_DENSITY_ASSUMED_KG_M3,
        unit="1",
        source_url="",
        document_date="",
        note="Not on the Flex sheet. Estimate only. Do not feed this into the model.",
    ),
)


def flex_table_sigma_pa_s_m2(thickness_mm: float) -> tuple[float, str]:
    """Table value for the thickness being simulated, in Pa·s/m².

    Between 60 and 80 mm the sheet has no figure. The ≤60 mm value is used
    and the note says so. AFr10 is not substituted.
    """
    if thickness_mm <= 60.0:
        return (
            5.0 * KPA_S_M2_TO_PA_S_M2,
            "Flex table 5 kPa·s/m² for thickness up to 60 mm "
            "(AFr10 claims >= 10; both recorded; model uses the table)",
        )
    if thickness_mm >= 80.0:
        return (
            6.0 * KPA_S_M2_TO_PA_S_M2,
            "Flex table 6 kPa·s/m² from 80 mm "
            "(AFr10 claims >= 10; both recorded; model uses the table)",
        )
    return (
        5.0 * KPA_S_M2_TO_PA_S_M2,
        "Flex table has no value between 60 and 80 mm; using the bis-60 mm "
        "figure 5 kPa·s/m² and saying so (not AFr10)",
    )



def bass_wool_sigma(thickness_mm: float) -> tuple[float, str]:
    """Flow resistivity for gable wool that the drawing does not name.

    The solid is labelled bass_mineral_wool, not Naturheld and not a listed
    product. The Flex table value for that thickness is used, and the note
    says it is an assumption. Callers must keep this fixed across ceiling cases.
    """
    sigma, table_note = flex_table_sigma_pa_s_m2(thickness_mm)
    note = (
        "ASSUMPTION: drawing label bass_mineral_wool (minerální vlna), no product "
        f"card. Flex table value for {thickness_mm:.0f} mm is used "
        f"({sigma / KPA_S_M2_TO_PA_S_M2:.0f} kPa·s/m²), same in every ceiling case. "
        + table_note
    )
    return sigma, note


@dataclass(frozen=True)
class StoSilentCard:
    """Finish + Basic, 2 + 2 mm in this build-up. Flow resistivity unknown."""

    product: str
    flow_resistivity_pa_s_m2: None
    kind: str
    source_note: str


STOSILENT = StoSilentCard(
    product="StoSilent Finish + Basic",
    flow_resistivity_pa_s_m2=None,
    kind="absent",
    source_note=(
        "No published flow resistivity for the 2+2 mm coat was found. "
        "Sto system αw is for StoSilent Top on Sto acoustic boards, not this "
        "wood-fibre ceiling, and is not used. No other citable few-millimetre "
        "seamless plaster resistivity was found (blog ranges and generic patent "
        "spans were rejected). The transfer matrix names the coat and, in the "
        "only shipped mode, treats it as acoustically transparent."
    ),
)


def foil_areal_mass_kg_m2(thickness_mm: float) -> float:
    """TYPICAL PE foil. Not on the Naturheld sheets."""
    return PE_FOIL_DENSITY_KG_M3 * (thickness_mm / 1000.0)


def gypsum_areal_mass_kg_m2(thickness_mm: float) -> float:
    """TYPICAL board, scaled from 9 kg/m² at 12.5 mm. Not a project weighing."""
    return GYPSUM_AREAL_MASS_AT_12_5_KG_M2 * (thickness_mm / 12.5)


DECLARED_MINIMUM_CAVEAT = "declared minimum; the true value may be higher"
WALL_140_ANALOGUE_CAVEAT = (
    "sensitivity: best wood WALL 140 analogue at 75 kPa·s/m² "
    "(AFr75, density 140 kg/m³, still a bound, not a Naturheld measurement)"
)
TRANSPARENT_FACING_CAVEAT = (
    "StoSilent Finish+Basic treated as acoustically transparent because no "
    "citable flow resistivity was found. This is an upper bound on absorption."
)
