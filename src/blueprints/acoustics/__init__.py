"""Normal-incidence absorption for the Obývák thickness study.

Layered Miki (1990) model for the surfaces whose thickness the study changes
(šikmina pack, and the separate soffit Naturheld / Flex volume). Not a room
solver, and not a substitute for a measured reverberation time.

Next slice: finite element of the air volume up to about 200 Hz, driven by
these surface impedances, and geometrical acoustics above that on the same
shell. A Sabine or Eyring time printed next to the curves is only a cheap
check. Do not read a single RT60 as the result.
"""

__all__ = ["main"]


def main(argv: list[str] | None = None) -> int:
    from blueprints.acoustics.study import main as _main

    return _main(argv)
