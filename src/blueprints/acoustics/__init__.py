"""Obývák acoustics.

``study`` is the normal-incidence Miki thickness table. It is not the
decision. ``room`` is the angle-dependent ray decay in the real volume:
a hit uses α at that arrival angle. A Sabine or Eyring number is only a
cheap check.

Bass modes are not in either model. Below the Schroeder frequency
(about 100–150 Hz here) the rays are not a result.
"""

__all__ = ["main"]


def main(argv: list[str] | None = None) -> int:
    from blueprints.acoustics.study import main as _main

    return _main(argv)
