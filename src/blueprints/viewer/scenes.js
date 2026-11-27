/**
 * Named custom scenes, view buttons, and the shareable ?scene= URL.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { expandOpacityGroups } from "./materials.js";
import { t as tr } from "./i18n.js";
import { cadMmToGltf } from "./annotations.js";
import { writeSceneQuery } from "./viewerBoot.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachScenes(ctx) {
  /**
   * Apply a named custom scene (camera, optional FOV/ISO, cuts, opacities).
   * @param {object} spec
   */
  function applyScene(spec) {
    if (!ctx.root || !spec) return;
    if (ctx.walk?.active) ctx.walk.exit({ keepCamera: true });
    ctx.activeSceneSpec = spec;
    ctx.setVerticalExaggeration(spec.verticalExaggeration);
    const zScale = ctx.verticalExaggeration;

    const hasOpacity =
      spec.opacityDefault != null ||
      (spec.opacity && typeof spec.opacity === "object");
    if (hasOpacity) {
      const def =
        spec.opacityDefault != null ? Number(spec.opacityDefault) : 1;
      const rawOverrides =
        spec.opacity && typeof spec.opacity === "object" ? spec.opacity : {};
      const overrides = expandOpacityGroups(rawOverrides, ctx.partOutline);
      for (const name of ctx.parts.keys()) {
        if (ctx.lazyLayers.has(name)) continue;
        const raw =
          Object.prototype.hasOwnProperty.call(overrides, name)
            ? overrides[name]
            : def;
        // One clip + edge rebuild after the loop. Per-part applyClipping
        // rebuilt every fat line once per leaf and made scene changes stall.
        ctx.setPartOpacity(name, raw, { skipUi: true, skipClip: true });
      }
      ctx.updateBox();
      ctx.syncPartOpacityUi();
    }

    if (Object.prototype.hasOwnProperty.call(spec, "cuts")) {
      const list = Array.isArray(spec.cuts) ? spec.cuts : [];
      ctx.cuts.length = 0;
      for (const c of list) {
        const n = c?.normal;
        if (!Array.isArray(n) || n.length < 3) continue;
        const normal = new THREE.Vector3(
          Number(n[0]) || 0,
          Number(n[1]) || 0,
          Number(n[2]) || 0,
        );
        if (normal.lengthSq() < 1e-12) continue;
        normal.normalize();
        /** @type {THREE.Vector3 | null} */
        let anchor = null;
        let cutT = Math.min(1, Math.max(0, Number(c.t) || 0));
        if (Array.isArray(c.anchor) && c.anchor.length >= 3) {
          anchor = cadMmToGltf(c.anchor);
          anchor.y *= zScale;
          const { near, far } = ctx.projectBoxOntoNormal(normal);
          const s = anchor.dot(normal);
          cutT = Math.min(1, Math.max(0, (s - near) / Math.max(far - near, 1e-6)));
        }
        ctx.cuts.push({
          id: ctx.nextCutId++,
          normal,
          t: cutT,
          anchor,
          locked: true,
          label: ctx.formatAngleLabel(normal),
        });
      }
      ctx.cameraMovedSinceLock = false;
      ctx.applyClipping();
      ctx.ensureDraftCut();
      ctx.buildCutUI();
      ctx.chromeApi?.refreshPartialHeight();
    }

    if (spec.projection === "ortho") {
      if (ctx.projection !== "ortho") ctx.enterOrtho();
      else ctx.syncFovUi();
    } else if (spec.hFovDeg != null && Number.isFinite(Number(spec.hFovDeg))) {
      ctx.setHFov(Number(spec.hFovDeg), { reframe: false });
    }

    const cam = spec.camera;
    if (cam && Array.isArray(cam.target) && Array.isArray(cam.position)) {
      ctx.withSuppressedCameraChange(() => {
        ctx.suppressViewZoomSync = true;
        const up = new THREE.Vector3(0, 1, 0);
        if (Array.isArray(cam.up) && cam.up.length >= 3) {
          up.set(
            Number(cam.up[0]) || 0,
            Number(cam.up[1]) || 0,
            Number(cam.up[2]) || 0,
          );
          if (up.lengthSq() < 1e-12) up.set(0, 1, 0);
          else up.normalize();
        }
        // Keep both projection cameras in sync — enterOrtho switches objects.
        ctx.perspCamera.up.copy(up);
        ctx.orthoCamera.up.copy(up);
        ctx.camera.up.copy(up);
        ctx.controls.target.set(
          Number(cam.target[0]) || 0,
          (Number(cam.target[1]) || 0) * zScale,
          Number(cam.target[2]) || 0,
        );
        ctx.camera.position.set(
          Number(cam.position[0]) || 0,
          (Number(cam.position[1]) || 0) * zScale,
          Number(cam.position[2]) || 0,
        );
        ctx.camera.lookAt(ctx.controls.target);
        if (
          ctx.projection === "ortho" &&
          Array.isArray(cam.orthoFit) &&
          cam.orthoFit.length >= 2
        ) {
          ctx.sizeOrthoToContent(
            Number(cam.orthoFit[0]) || 0.1,
            (Number(cam.orthoFit[1]) || 0.1) * zScale,
          );
        }
        ctx.updateBox();
        ctx.updateCameraClipPlanes();
        ctx.controls.update();
        ctx.suppressViewZoomSync = false;
      });
    }

    ctx.maybeSpawnDraftFromCamera();
    ctx.scheduleCameraSave();
    const edge = spec.edges;
    if (edge === "none" || edge === "transparent" || edge === "opaque") {
      ctx.edgeMode = edge;
      ctx.refreshEdges();
    }
    ctx.annotations.setSpec(spec);
    ctx.syncDrawingButton();
    ctx.syncLabelButton();
  }

  /**
   * @param {string} sceneId
   * @returns {object | null}
   */
  function findCustomScene(sceneId) {
    const want = String(sceneId || "").trim();
    if (!want) return null;
    for (const spec of ctx.customScenes) {
      if (String(spec?.id || "").trim() === want) return spec;
    }
    return null;
  }

  /** Mirror the active custom scene (or lack of one) into `?scene=`. */
  function syncSceneUrl() {
    const preset = ctx.activeCameraPreset;
    if (preset && preset.startsWith("scene:")) {
      writeSceneQuery(preset.slice("scene:".length));
    } else {
      writeSceneQuery(null);
    }
  }

  function viewButtons() {
    return document.querySelectorAll("#cams button, #scenes button");
  }

  function clearCameraPresetHighlight() {
    if (ctx.activeCameraPreset == null) return;
    ctx.activeCameraPreset = null;
    viewButtons().forEach((el) => {
      el.classList.remove("is-active");
    });
    syncSceneUrl();
  }

  function sceneButtonHost() {
    let host = document.getElementById("scenes");
    if (!host) {
      const cams = document.getElementById("cams");
      host = document.createElement("div");
      host.id = "scenes";
      host.className = "scene-list";
      cams?.insertAdjacentElement("afterend", host);
    }
    return host;
  }

  function buildCameraButtons() {
    const host = document.getElementById("cams");
    if (!host) return;
    host.replaceChildren();
    const scenesHost = sceneButtonHost();
    scenesHost.replaceChildren();

    /** @param {HTMLElement} parent @param {string} id @param {string} label @param {() => void} onClick */
    function addBtn(parent, id, label, onClick) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.preset = id;
      btn.textContent = label;
      if (id === ctx.activeCameraPreset) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        ctx.activeCameraPreset = id;
        viewButtons().forEach((el) => {
          el.classList.toggle("is-active", el.dataset.preset === id);
        });
        onClick();
        syncSceneUrl();
      });
      parent.append(btn);
    }

    for (const [id, labelKey] of [
      ["iso", "ui.iso"],
      ["front", "ui.front"],
      ["side", "ui.side"],
      ["top", "ui.top"],
    ]) {
      addBtn(host, id, tr(labelKey), () => ctx.setCameraPreset(id));
    }
    for (const spec of ctx.customScenes) {
      const id = String(spec?.id || "").trim();
      if (!id) continue;
      const label = tr(`scene.${id}`);
      addBtn(scenesHost, `scene:${id}`, label, () => applyScene(spec));
    }
    scenesHost.hidden = scenesHost.childElementCount === 0;
  }

  ctx.applyScene = applyScene;
  ctx.findCustomScene = findCustomScene;
  ctx.syncSceneUrl = syncSceneUrl;
  ctx.viewButtons = viewButtons;
  ctx.clearCameraPresetHighlight = clearCameraPresetHighlight;
  ctx.sceneButtonHost = sceneButtonHost;
  ctx.buildCameraButtons = buildCameraButtons;
}
