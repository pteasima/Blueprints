---
name: structure
description: >-
  Use when a prompt asks for structural reasoning (roofs, framing,
  load-bearing or stacked assemblies).
---

# Structure

Parts floating in mid-air, or making no physical sense, is the risk. This came from a gable roof where agents produced physically impossible models. It does not apply to surface finishes (tiling, cladding, furniture placement).

These are **building assemblies**, not decorative meshes. Before coding solids, reason as a house designer / structural engineer / contractor:

- Every layer needs a real thickness, a load path or attachment, and a reason to exist (structure, weather, vapour, acoustics, finish, tolerance).
- Do not invent geometry that cannot be built, hang, or drain. If a detail is load-bearing, say what carries it (rafters, hangers, masonry) and what must *not* carry it (e.g. furniture under a self-supporting soffit).
- Acoustic faces (e.g. NaturHeld + StoSilent on šikminy) are continuous room-facing layers with stated thickness — not paint on a zero-thickness shell.
- When transferring from a řez/detail sheet: if clearances, hangers, vapour order, or bearing are inconsistent, **push back** and say what must change in the structure before modelling. If the sheet is coherent, transfer the stack and tweak later.
- Prefer labelled solids that match contractor language (`NaturHeld 140`,
  `NaturHeld Flex 50`, `dreveny_rost`, `cd`, `zaves`, `paska`, `sdk`, `vata`, `krov`)
  over anonymous blobs. On šikminy: latě // krokvím (⊥ CD); CD ⊥ krokvím; hangers
  CD→krokve; pásky on rafter faces. Keep `krov` separate from `dreveny_rost`.
  Soffit bay: GKF breaks to horizontal at X_FURN; horizontal CD + Nonius from
  krokve; the kastlík CD/UD rost hangs from that CD and braces to the eave wall — not from
  furniture or pozednice.
