/**
 * Picking, IFC inspector visibility, pulse highlight, and frame-to-element.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { applyOpacityToMeshes } from "./materials.js";
import { subtreeIds } from "./ifcTree.js";
import { isSceneSolid } from "./interactions.js";
import { isRenderedHit } from "./tapTargets.js";
import { meshIdentity } from "./meshIdentity.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachInspect(ctx) {
  function elementFromMesh(obj) {
    let node = obj;
    while (node) {
      const key = node.userData?.bpElementKey || meshIdentity(node.name || "").element;
      if (key) {
        for (const element of Object.values(ctx.ifcIndex.elements)) {
          if (element.id === key) return element;
        }
      }
      node = node.parent;
    }
    return null;
  }

  function meshesForKey(key) {
    return key ? ctx.meshesByKey.get(key) || [] : [];
  }

  function meshesForElement(element) {
    if (!element) return [];
    const own = meshesForKey(element.id);
    if (own.length) return own;
    const found = [];
    for (const id of subtreeIds(ctx.ifcIndex, element.globalId)) {
      const child = ctx.ifcIndex.elements[id];
      if (child && child !== element) found.push(...meshesForKey(child.id));
    }
    return found;
  }

  /**
   * @param {object[]} meshes
   */
  function worldBoxOf(meshes) {
    const box3 = new THREE.Box3();
    const corner = new THREE.Vector3();
    for (const mesh of meshes) {
      const geom = mesh.geometry;
      if (!geom) continue;
      if (!geom.boundingBox) geom.computeBoundingBox();
      const bb = geom.boundingBox;
      if (!bb) continue;
      mesh.updateWorldMatrix(true, false);
      for (const x of [bb.min.x, bb.max.x]) {
        for (const y of [bb.min.y, bb.max.y]) {
          for (const z of [bb.min.z, bb.max.z]) {
            corner.set(x, y, z).applyMatrix4(mesh.matrixWorld);
            box3.expandByPoint(corner);
          }
        }
      }
    }
    return box3;
  }

  function pulseElement(id) {
    const meshes = meshesForElement(ctx.ifcIndex.elements[id]);
    if (meshes.length) startPulse(meshes);
    ctx.viewDirty = true;
  }

  function frameElement(id) {
    const element = ctx.ifcIndex.elements[id];
    const meshes = meshesForElement(element);
    if (!meshes.length) return;
    const box3 = worldBoxOf(meshes);
    if (box3.isEmpty()) return;
    ctx.flyCamera(ctx.framePose(box3));
    startPulse(meshes);
    ctx.viewDirty = true;
  }

  function startPulse(meshes) {
    if (ctx.pulse) finishPulse();
    meshes = [...meshes, ...ctx.fixtureModels.displayMeshesForMeshes(meshes)];
    const clones = [];
    for (const mesh of meshes) {
      if (!mesh.isMesh || !mesh.material) continue;
      const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const next = list.map((mat) => {
        const clone = mat.clone();
        if (clone.emissive) {
          clone.emissive.setHex(0xffb020);
          clone.emissiveIntensity = 0;
        } else if (clone.color) {
          clone.userData.bpPulseBase = clone.color.getHex();
        }
        clones.push(clone);
        return clone;
      });
      mesh.userData.bpPulseMaterial = list;
      mesh.material = next.length === 1 ? next[0] : next;
    }
    ctx.pulse = { meshes, clones, t0: performance.now() };
  }

  function finishPulse() {
    if (!ctx.pulse) return;
    for (const mesh of ctx.pulse.meshes) {
      const saved = mesh.userData.bpPulseMaterial;
      if (saved) mesh.material = saved.length === 1 ? saved[0] : saved;
      delete mesh.userData.bpPulseMaterial;
    }
    for (const mat of ctx.pulse.clones) mat.dispose?.();
    ctx.pulse = null;
  }

  function stepPulse(now) {
    if (!ctx.pulse) return;
    const u = (now - ctx.pulse.t0) / 900;
    if (u >= 1) {
      finishPulse();
      ctx.viewDirty = true;
      return;
    }
    const mag = Math.sin(Math.min(u, 1) * Math.PI);
    for (const mat of ctx.pulse.clones) {
      if (mat.emissive) mat.emissiveIntensity = 0.85 * mag;
      else if (mat.color && mat.userData.bpPulseBase != null) {
        mat.color.setHex(mat.userData.bpPulseBase).offsetHSL(0.08, 0.2, 0.18 * mag);
      }
    }
    ctx.viewDirty = true;
  }

  function applyInspectorVisibility() {
    const hiddenKeys = new Set();
    for (const element of Object.values(ctx.ifcIndex.elements)) {
      if (!element.id) continue;
      if (ctx.ifcVisibility.isHidden(element.globalId)) {
        // A locked element stays drawn whatever hid it.
        if (!ctx.elementLocked(element.globalId)) hiddenKeys.add(element.id);
      }
    }
    for (const [key, meshes] of ctx.meshesByKey) {
      const hidden = hiddenKeys.has(key);
      for (const mesh of meshes) {
        mesh.userData.bpIfcHidden = hidden;
        for (const child of mesh.children || []) {
          if (child?.userData?.isEdgeOverlay || child?.userData?.isSectionCap) {
            child.visible = !hidden;
          }
        }
      }
    }
    for (const binding of ctx.doorCtrl.bindings) {
      // A linkage moves several parts; each hides with its own element.
      for (const host of binding.hosts || [binding.host]) {
        const key = meshIdentity(host?.name || "").element;
        const hidden = Boolean(key && hiddenKeys.has(key));
        if (host) host.userData.bpIfcHidden = hidden;
      }
    }
    for (const [name, meshes] of ctx.parts) {
      applyOpacityToMeshes(meshes, ctx.partOpacity.get(name) ?? 1, { edgeMode: ctx.edgeMode });
    }
    ctx.viewDirty = true;
    ctx.visibilitySigRevision += 1;
    ctx.scheduleVisibilitySave();
  }

  function inspectAtPointer(pt) {
    if (ctx.doorInputBlocked() || ctx.editMode?.blocksTaps()) return;
    const cameraNow = ctx.camera;
    if (!cameraNow || !ctx.root) return;
    const rect = ctx.canvas.getBoundingClientRect();
    const w = rect.width || ctx.canvas.clientWidth || 1;
    const h = rect.height || ctx.canvas.clientHeight || 1;
    ctx.ifcPointer.x = ((pt.clientX - rect.left) / w) * 2 - 1;
    ctx.ifcPointer.y = -((pt.clientY - rect.top) / h) * 2 + 1;
    ctx.ifcRaycaster.setFromCamera(ctx.ifcPointer, cameraNow);
    // Only surfaces drawn at the hit (not under a hidden group, not cut away).
    const hits = ctx.ifcRaycaster
      .intersectObject(ctx.root, true)
      .filter((hit) => isSceneSolid(hit.object) && isRenderedHit(hit));
    let top = ctx.root;
    while (top.parent) top = top.parent;
    const tapCtx = {
      raycaster: ctx.ifcRaycaster,
      now: performance.now(),
      camera: cameraNow,
      root: top,
      tap: { x: pt.clientX - rect.left, y: pt.clientY - rect.top },
      size: { w, h },
    };
    // Same rule as a tap: a direct or extended (44 pt) target wins; else the
    // front solid. Opens the inspector on that element's info screen.
    const found = ctx.doorCtrl.taps.resolve(hits, tapCtx, (item) => isSceneSolid(item.object));
    if (found && (found.kind === "direct" || found.kind === "extended") && found.hit?.object) {
      const obj = found.hit.object;
      const partName = obj.userData?.bpPart || meshIdentity(obj.name || "").part;
      ctx.ifcUi.inspect(elementFromMesh(obj), { partName });
      return;
    }
    const hit = hits[0];
    if (!hit) return;
    const element = elementFromMesh(hit.object);
    const partName = hit.object.userData?.bpPart || meshIdentity(hit.object.name || "").part;
    ctx.ifcUi.inspect(element, { partName });
  }

  ctx.elementFromMesh = elementFromMesh;
  ctx.meshesForKey = meshesForKey;
  ctx.meshesForElement = meshesForElement;
  ctx.worldBoxOf = worldBoxOf;
  ctx.pulseElement = pulseElement;
  ctx.frameElement = frameElement;
  ctx.startPulse = startPulse;
  ctx.finishPulse = finishPulse;
  ctx.stepPulse = stepPulse;
  ctx.applyInspectorVisibility = applyInspectorVisibility;
  ctx.inspectAtPointer = inspectAtPointer;
}
