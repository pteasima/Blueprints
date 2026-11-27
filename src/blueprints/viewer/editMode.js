/**
 * Edit mode: correct fixture positions and cable-schedule values in the
 * viewer (Petr, 2026-11-19: "I need an edit mode where I can drag replace
 * items you get wrong. Ideally, Id see a table with the same data we have in
 * the excel/spreadsheet. ... Tapping in table highligts it in model and vice
 * versa. I get arrows to move it along all 3 axes.").
 *
 * - The Edit button replaces taps on doors, switches and lights with
 *   selection, and swaps the controls sheet for the fixture panel.
 * - The panel lists every fixture as a row (fixtureEdits.js). Tapping a row
 *   selects it and flies the camera to it; tapping a fixture in the model
 *   selects its row and scrolls to it.
 * - The selected fixture gets three arrows (three.js TransformControls in
 *   world space, plane handles removed): red x (east), blue y (north),
 *   green z (up). Drags snap the move to 1 cm (or 1 mm, or off).
 * - Edits live for this visit only and export as a JSON patch for
 *   inputs/ground_floor/fixture_overrides.json (docs/electrical/EditMode.md).
 *   A refresh discards them; leaving or refreshing with unsaved edits asks
 *   to confirm. Leftover `blueprints.fixtureEdits.*` keys are removed on load.
 * - The Cables tab lists the cable routes (cables.js draws them). Select a
 *   route from the table or by tapping it, then drag a vertex or a whole
 *   segment with the same arrows (docs/electrical/CableRoutes.md).
 *
 * Structural split: this file is the lazy-loaded entry (`import("./editMode.js")`
 * from main.js). Session wiring lives here; focused modules are attached onto
 * a shared `em` bag. Behavior is unchanged.
 */
import * as THREE from "three";
import {
  STORAGE_PREFIX,
  discardLegacyEdits,
  emptyStore,
  fixtureRows,
} from "./fixtureEdits.js";
import { createCableLayer } from "./cables.js";
import { routeRecords } from "./cableEdits.js";
import { createEditCoords } from "./editCoords.js";
import { attachEditOverlay } from "./editOverlay.js";
import { attachEditFixtures } from "./editFixtures.js";
import { attachEditCables } from "./editCables.js";
import { attachEditExport } from "./editExport.js";
import { attachEditPanel } from "./editPanel.js";

export { HOLD_DELAY_MS, holdRate, shareFileName } from "./editModeUtils.js";

/**
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   renderer: THREE.WebGLRenderer,
 *   controls: { enabled: boolean, target: THREE.Vector3 },
 *   getCamera: () => THREE.Camera,
 *   getRoot: () => THREE.Object3D | null,
 *   index: object,
 *   modelId: string,
 *   meshesForElement: (element: object) => THREE.Mesh[],
 *   elementFromMesh: (obj: object) => object | null,
 *   isSceneSolid: (obj: object) => boolean,
 *   isRenderedHit: (hit: object) => boolean,
 *   isOpaque: (obj: object) => boolean,
 *   centerOccluded: Function,
 *   projectTarget: Function,
 *   flyTo: (pose: { center: THREE.Vector3, position: THREE.Vector3, span: number }) => void,
 *   pulse: (meshes: THREE.Mesh[]) => void,
 *   markDirty: () => void,
 *   onActiveChange?: (active: boolean) => void,
 *   onLayout?: () => void,
 *   t: (key: string) => string,
 *   cables?: { routes?: object[], boards?: object[] } | null,
 *   cablesLayer?: () => boolean,
 * }} ctx
 */
export function createEditMode(ctx) {
  const { canvas, controls, t } = ctx;
  const storageKey = STORAGE_PREFIX + (ctx.modelId || "model");
  const storage = typeof localStorage !== "undefined" ? localStorage : null;
  discardLegacyEdits(storage);
  const wideMq = window.matchMedia("(min-width: 768px)");

  const rows = fixtureRows(ctx.index);
  /** @type {Map<string, object>} */
  const rowsById = new Map(rows.map((row) => [row.id, row]));
  /** yaml id → IFC element. */
  const elementsById = new Map();
  for (const element of Object.values(ctx.index.elements || {})) {
    if (element?.id) elementsById.set(String(element.id), element);
  }

  const routes = routeRecords(ctx.cables);
  /** `?cables=1` shows the cables outside edit mode too. */
  const cablesParam = (() => {
    try {
      return new URLSearchParams(window.location.search).get("cables") === "1";
    } catch {
      return false;
    }
  })();

  const em = {
    ctx,
    canvas,
    controls,
    t,
    storageKey,
    storage,
    wideMq,
    active: false,
    /** Bumped on every geometry change, so the peel batches rebuild. */
    revision: 0,
    rows,
    rowsById,
    elementsById,
    /** Mesh → its local position in the deployed model. */
    meshBase: new Map(),
    /** Fixture id → deployed position (house metres), or null. */
    deployedBase: new Map(),
    /** Added fixture id → cloned meshes. */
    addedMeshes: new Map(),
    store: emptyStore(ctx.modelId),
    /** @type {string | null} */
    selectedId: null,
    snapStep: 0.01,
    filterText: "",
    collapsed: false,
    bound: false,
    /** Phone: the schedule fields start folded; remember when Petr opens them. */
    detailsOpen: false,
    routes,
    routesById: new Map(routes.map((r) => [r.id, r])),
    /** What the table lists: "fixtures" or "cables". */
    view: "fixtures",
    /** The Cables switch in edit mode. */
    cablesOn: true,
    cablesParam,
    /** @type {{ id: string, mode: "vertex" | "segment", vertex: number, segment: number } | null} */
    cableSel: null,
    cableLayer: createCableLayer({ routes, boards: ctx.cables?.boards || [], getRoot: ctx.getRoot }),
    dragStart: null,
  };
  if (!em.store.cables) em.store.cables = {};

  Object.assign(em, createEditCoords(() => em.ctx.getRoot()));
  attachEditOverlay(em);
  attachEditFixtures(em);
  attachEditCables(em);
  attachEditExport(em);
  attachEditPanel(em);

  return {
    get active() {
      return em.active;
    },
    setActive: em.setActive,
    toggle: () => em.setActive(!em.active),
    showButton(show) {
      em.button.hidden = !show;
      if (show) {
        em.button.textContent = em.t("ui.edit");
        // In-session edits show in the model outside edit mode too.
        em.bind();
      }
    },
    blocksTaps: () => em.active,
    hasFixtures: () => em.rows.length > 0,
    revision: () => em.revision,
    getSafeInsets: em.getSafeInsets,
    renderOverlay: em.renderOverlay,
    refreshLocale: em.onLocale,
    select: (id, opts) => em.select(id, opts),
    get selectedId() {
      return em.selectedId;
    },
    rows: () => em.rows.map((row) => ({ ...row, position: em.currentTarget(row.id), state: em.rowState(row.id) })),
    store: () => JSON.parse(JSON.stringify(em.store)),
    hasUnsavedEdits: em.hasUnsavedEdits,
    discardAll: em.discardAll,
    setPosition: (id, target) => em.setTarget(id, target),
    patch: () => em.currentPatch(),
    cables: {
      routes: () => em.routes.map((r) => ({ ...r, points: em.routePoints(r.id), edited: em.routeEdited(r.id) })),
      select: (id, opts) => em.selectRoute(id, opts),
      get selection() {
        return em.cableSel ? { ...em.cableSel } : null;
      },
      points: (id) => em.routePoints(id),
      /** Screen points (CSS px, page) of a route's vertices. */
      screen: (id) => {
        const rect = em.canvas.getBoundingClientRect();
        return em.cableLayer
          .screenPoints(id, em.ctx.getCamera(), rect.width, rect.height)
          .map((p) => (p ? { x: p.x + rect.left, y: p.y + rect.top } : null));
      },
      visible: () => em.cablesVisible(),
      frame: (id) => em.frameRoute(id || null),
      setView: em.setView,
      get view() {
        return em.view;
      },
    },
    patchText: em.patchText,
    compactPatchText: em.compactPatchText,
    position: (id) => em.currentTarget(id),
    worldCenter: (id) => {
      const box = em.worldBox(em.displayMeshes(id));
      return box.isEmpty() ? null : box.getCenter(new THREE.Vector3()).toArray();
    },
    arrowScreen: em.arrowScreen,
    gizmoAxis: () => em.gizmo.axis,
  };
}
