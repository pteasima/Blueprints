/**
 * TransformControls gizmo, selection outline, overlay render, and canvas picking.
 * Structural split from editMode.js; behavior is unchanged.
 */
import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { snap } from "./fixtureEdits.js";
import { SELECT_COLOR, PLANE_HANDLES } from "./editModeUtils.js";

/**
 * @param {object} em edit-mode session bag shared with createEditMode and the other attach* modules
 */
export function attachEditOverlay(em) {
  const ctx = em.ctx;
  const canvas = em.canvas;
  const controls = em.controls;
  const t = em.t;

  // --- three.js overlay: gizmo and selection box ---
  const overlay = new THREE.Scene();
  overlay.name = "EditOverlay";
  const anchor = new THREE.Object3D();
  anchor.name = "EditAnchor";
  overlay.add(anchor);
  const selBox = new THREE.Box3();
  const selHelper = new THREE.Box3Helper(selBox, SELECT_COLOR);
  selHelper.material.depthTest = false;
  selHelper.material.transparent = true;
  selHelper.renderOrder = 999;
  selHelper.visible = false;
  overlay.add(selHelper);

  const gizmo = new TransformControls(ctx.getCamera(), canvas);
  gizmo.setMode("translate");
  gizmo.setSpace("world");
  gizmo.size = 1;
  gizmo.enabled = false;
  const helper = gizmo.getHelper();
  helper.visible = false;
  overlay.add(helper);
  for (const group of [gizmo._gizmo?.gizmo?.translate, gizmo._gizmo?.picker?.translate]) {
    if (!group) continue;
    for (const child of group.children.slice()) {
      if (PLANE_HANDLES.has(child.name)) group.remove(child);
    }
  }

  /** Orbit is off from the press on an arrow until the drag ends. */
  let orbitHeld = false;
  let orbitPrev = true;
  function holdOrbit() {
    if (orbitHeld) return;
    orbitHeld = true;
    orbitPrev = controls.enabled;
    controls.enabled = false;
  }
  function releaseOrbit() {
    if (!orbitHeld) return;
    orbitHeld = false;
    controls.enabled = orbitPrev;
  }
  gizmo.addEventListener("dragging-changed", (event) => {
    if (event.value) {
      holdOrbit();
      if (em.cableSel) {
        em.dragStart = { anchor: anchor.position.clone(), cable: { points: em.routePoints(em.cableSel.id), prepared: null } };
      } else {
        const edit = em.selectedId ? em.currentTarget(em.selectedId) : null;
        em.dragStart = edit ? { anchor: anchor.position.clone(), target: edit.slice() } : null;
      }
    } else {
      releaseOrbit();
      const wasCable = Boolean(em.dragStart?.cable);
      em.dragStart = null;
      if (wasCable) em.finishCableMove();
      em.save();
      em.renderDetail();
    }
    ctx.markDirty();
  });
  gizmo.addEventListener("change", () => ctx.markDirty());
  gizmo.addEventListener("objectChange", () => {
    if (em.dragStart?.cable && em.cableSel) {
      const world = anchor.position.clone().sub(em.dragStart.anchor);
      const house = em.worldDirToHouse(world);
      const axis = { X: 0, Y: 1, Z: 2 }[gizmo.axis] ?? house.map(Math.abs).indexOf(Math.max(...house.map(Math.abs)));
      const d = [0, 0, 0];
      d[axis] = em.snapStep ? snap(house[axis], em.snapStep) : house[axis];
      anchor.position.copy(em.dragStart.anchor).add(em.houseDirToWorld(d));
      em.applyCableDelta(em.dragStart.cable, d, axis, { save: false });
      return;
    }
    if (!em.dragStart || !em.selectedId) return;
    const world = anchor.position.clone().sub(em.dragStart.anchor);
    const house = em.worldDirToHouse(world);
    const step = em.snapStep;
    const next = em.dragStart.target.map((v, i) => v + (step ? snap(house[i], step) : house[i]));
    // The gizmo follows the snapped position, not the raw pointer.
    const snapped = em.houseDirToWorld(next.map((v, i) => v - em.dragStart.target[i]));
    anchor.position.copy(em.dragStart.anchor).add(snapped);
    em.setTarget(em.selectedId, next, { save: false });
  });


  function updateSelectionBox() {
    if (!em.selectedId) {
      selHelper.visible = false;
      return;
    }
    const box = em.worldBox(em.displayMeshes(em.selectedId));
    if (box.isEmpty()) {
      selHelper.visible = false;
      return;
    }
    // A few millimetres out, so the outline does not sit inside the faces.
    box.expandByScalar(0.006);
    selBox.copy(box);
    selHelper.visible = true;
    if (!em.dragStart) box.getCenter(anchor.position);
    anchor.updateMatrixWorld(true);
  }

  /** Fixture id a mesh belongs to, or null. */
  function fixtureIdOf(obj) {
    let node = obj;
    while (node) {
      if (node.userData?.bpEditAddedId) return node.userData.bpEditAddedId;
      node = node.parent;
    }
    const element = ctx.elementFromMesh(obj);
    const id = element?.id ? String(element.id) : null;
    return id && em.rowsById.has(id) ? id : null;
  }

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  function pickAt(clientX, clientY) {
    const root = ctx.getRoot();
    const camera = ctx.getCamera();
    if (!root || !camera) return null;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 1;
    const h = rect.height || 1;
    ndc.set(((clientX - rect.left) / w) * 2 - 1, -((clientY - rect.top) / h) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster
      .intersectObject(root, true)
      .filter((hit) => ctx.isSceneSolid(hit.object) && ctx.isRenderedHit(hit));
    // Direct hit: the nearest fixture unless an opaque solid is in front.
    for (const hit of hits) {
      const id = fixtureIdOf(hit.object);
      if (id) return id;
      if (ctx.isOpaque(hit.object)) break;
    }
    // 44 pt circle around each visible fixture centre.
    let top = root;
    while (top.parent) top = top.parent;
    const tap = { x: clientX - rect.left, y: clientY - rect.top };
    let best = null;
    for (const row of em.rows) {
      const meshes = em.meshesOf(row.id).filter((m) => m.visible);
      if (!meshes.length) continue;
      const center = em.worldBox(meshes).getCenter(new THREE.Vector3());
      const at = ctx.projectTarget(center, camera, { w, h });
      if (!at) continue;
      const d = Math.hypot(at.x - tap.x, at.y - tap.y);
      if (d > 22 || (best && d >= best.d)) continue;
      const own = new Set(meshes);
      const occluded = ctx.centerOccluded(center, camera, top, (obj) => own.has(obj), {
        keep: (obj) => ctx.isSceneSolid(obj),
      });
      if (!occluded) best = { id: row.id, d };
    }
    return best ? best.id : null;
  }

  /** The cable (and vertex of the selected one) under a tap. */
  function pickCable(clientX, clientY) {
    if (!em.cablesVisible()) return null;
    const camera = ctx.getCamera();
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 1;
    const h = rect.height || 1;
    const at = { x: clientX - rect.left, y: clientY - rect.top };
    if (em.cableSel) {
      const screen = em.cableLayer.screenPoints(em.cableSel.id, camera, w, h);
      let best = null;
      screen.forEach((p, i) => {
        if (!p) return;
        const d = Math.hypot(p.x - at.x, p.y - at.y);
        if (d <= 20 && (!best || d < best.d)) best = { i, d };
      });
      if (best) return { routeId: em.cableSel.id, vertex: best.i };
    }
    return em.cableLayer.pick(camera, at, w, h, 14);
  }

  // Pointer: a press on an arrow turns orbit off before OrbitControls sees it.
  /** @type {{ id: number, x: number, y: number, t: number, onGizmo: boolean } | null} */
  let press = null;
  let pointers = 0;
  function gizmoAxisAt(ev) {
    if (!gizmo.enabled || !gizmo.object) return null;
    const rect = canvas.getBoundingClientRect();
    gizmo.camera = ctx.getCamera();
    gizmo.pointerHover({
      x: ((ev.clientX - rect.left) / (rect.width || 1)) * 2 - 1,
      y: -((ev.clientY - rect.top) / (rect.height || 1)) * 2 + 1,
      button: 0,
    });
    return gizmo.axis;
  }
  window.addEventListener(
    "pointerdown",
    (ev) => {
      if (!em.active || ev.target !== canvas) return;
      pointers += 1;
      const onGizmo = pointers === 1 && Boolean(gizmoAxisAt(ev));
      if (onGizmo) holdOrbit();
      press = pointers === 1 ? { id: ev.pointerId, x: ev.clientX, y: ev.clientY, t: performance.now(), onGizmo } : null;
    },
    true,
  );
  window.addEventListener(
    "pointerup",
    (ev) => {
      if (!em.active) return;
      pointers = Math.max(0, pointers - 1);
      const p = press;
      if (!p || ev.pointerId !== p.id) return;
      press = null;
      if (p.onGizmo) {
        // A drag releases orbit in dragging-changed, after this listener.
        if (!gizmo.dragging) releaseOrbit();
        return;
      }
      const moved = Math.hypot(ev.clientX - p.x, ev.clientY - p.y);
      if (moved > 8 || performance.now() - p.t > 700) return;
      const cableHit = pickCable(ev.clientX, ev.clientY);
      if (cableHit?.vertex != null) {
        em.selectRoute(cableHit.routeId, { mode: "vertex", vertex: cableHit.vertex });
        return;
      }
      // In the Cables tab a cable wins over the fixture behind it.
      if (cableHit && em.view === "cables") {
        em.selectRoute(cableHit.routeId, { mode: "segment", segment: cableHit.segment, scroll: true });
        return;
      }
      const id = pickAt(ev.clientX, ev.clientY);
      if (id) em.select(id, { scroll: true });
      else if (cableHit) em.selectRoute(cableHit.routeId, { mode: "segment", segment: cableHit.segment, scroll: true });
      else if (em.selectedId) em.select(null);
      else if (em.cableSel) em.selectRoute(null);
    },
    true,
  );
  window.addEventListener(
    "pointercancel",
    () => {
      pointers = Math.max(0, pointers - 1);
      press = null;
      // iOS cancels a touch when a system gesture takes it: end the drag.
      if (gizmo.dragging) gizmo.pointerUp({ x: 0, y: 0, button: 0 });
      releaseOrbit();
    },
    true,
  );

  function renderOverlay(renderer, camera) {
    const showCables = em.cablesVisible();
    em.cableLayer.setVisible(showCables);
    if (showCables) em.cableLayer.render(renderer, camera);
    if (!em.active || (!selHelper.visible && !helper.visible)) return;
    gizmo.camera = camera;
    gizmo.size = em.gizmoSize();
    if (em.selectedId && !em.dragStart) updateSelectionBox();
    if (em.cableSel && !em.dragStart) em.syncCableGizmo();
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setRenderTarget(null);
    renderer.clearDepth();
    renderer.render(overlay, camera);
    renderer.autoClear = autoClear;
  }

  /**
   * TransformControls sizes the arrows from the full canvas height. On a
   * portrait phone the panel covers the lower half and the width is narrow,
   * so scale them to the visible part (an arrow is about a quarter of it).
   */
  function gizmoSize() {
    const rect = canvas.getBoundingClientRect();
    const h = rect.height || 1;
    const insets = em.getSafeInsets();
    const visible = Math.min((rect.width || 1) - insets.right, h - insets.bottom);
    return Math.max(0.35, Math.min(1, (1.3 * visible) / h));
  }

  /** Screen point (CSS px) of an arrow, for headless checks. */
  function arrowScreen(axis, along = 0.75) {
    const camera = ctx.getCamera();
    if (!gizmo.object) return null;
    helper.updateMatrixWorld(true);
    const handle = gizmo._gizmo.gizmo.translate.children.find((c) => c.name === axis && c.visible !== false);
    const scale = gizmo._gizmo.gizmo.translate.scale?.x || 1;
    const dir = { X: [1, 0, 0], Y: [0, 1, 0], Z: [0, 0, 1] }[axis];
    if (!dir) return null;
    const worldScale = handle ? handle.getWorldScale(new THREE.Vector3()).x : scale;
    const p = anchor.position.clone().add(new THREE.Vector3(...dir).multiplyScalar(along * worldScale));
    const rect = canvas.getBoundingClientRect();
    const at = ctx.projectTarget(p, camera, { w: rect.width, h: rect.height });
    return at ? { x: at.x + rect.left, y: at.y + rect.top } : null;
  }

  Object.assign(em, {
    overlay,
    anchor,
    selBox,
    selHelper,
    gizmo,
    helper,
    raycaster,
    ndc,
    holdOrbit,
    releaseOrbit,
    updateSelectionBox,
    fixtureIdOf,
    pickAt,
    gizmoAxisAt,
    renderOverlay,
    gizmoSize,
    arrowScreen,
  });
}
