/**
 * Cameras, FOV, ortho/perspective, presets, remembered camera, and fly-to.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { createCooperativeRange } from "./coopRange.js";
import { t as tr } from "./i18n.js";
import {
  HEIGHT_DETENTS_CM,
  HEIGHT_MAX_CM,
  HEIGHT_MIN_CM,
  eyeHeightM,
  snapHeightCm,
  yawPitchOf,
} from "./walkBasics.js";
import { CAMERA_VERSION, loadCamera, saveCamera } from "./cameraState.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachCameraNav(ctx) {
  function canvasAspect() {
    const w = Math.max(1, ctx.canvas.clientWidth);
    const h = Math.max(1, ctx.canvas.clientHeight);
    return w / h;
  }

  /**
   * Horizontal FOV (deg) → vertical FOV (rad) for Three.js PerspectiveCamera.
   * @param {number} hDeg
   * @param {number} aspect
   */
  function hFovDegToVFovRad(hDeg, aspect) {
    const hRad = (hDeg * Math.PI) / 180;
    return 2 * Math.atan(Math.tan(hRad / 2) / Math.max(aspect, 1e-6));
  }

  /** Apply stored horizontal FOV onto the perspective camera. */
  function applyPerspFovFromState() {
    const aspect = canvasAspect();
    ctx.perspCamera.aspect = aspect;
    ctx.perspCamera.fov = (hFovDegToVFovRad(ctx.hFovDeg, aspect) * 180) / Math.PI;
    ctx.perspCamera.updateProjectionMatrix();
  }

  /**
   * Size ortho frustum so visible height at `dist` matches perspective FOV.
   * @param {number} dist
   * @param {number} vFovRad
   */
  function sizeOrthoFrustum(dist, vFovRad) {
    const aspect = canvasAspect();
    const halfH = Math.max(dist, 1e-6) * Math.tan(vFovRad / 2);
    const halfW = halfH * aspect;
    ctx.orthoCamera.left = -halfW;
    ctx.orthoCamera.right = halfW;
    ctx.orthoCamera.top = halfH;
    ctx.orthoCamera.bottom = -halfH;
    ctx.orthoCamera.updateProjectionMatrix();
  }

  /** Keep ortho width/height ratio after resize (preserve half-height). */
  function refreshOrthoAspect() {
    const aspect = canvasAspect();
    const halfH = Math.max(ctx.orthoCamera.top, 1e-6);
    const halfW = halfH * aspect;
    ctx.orthoCamera.left = -halfW;
    ctx.orthoCamera.right = halfW;
    ctx.orthoCamera.updateProjectionMatrix();
  }

  /**
   * Size ortho frustum to cover content half-extents (metres) with letterboxing.
   * @param {number} contentHalfW
   * @param {number} contentHalfH
   */
  function sizeOrthoToContent(contentHalfW, contentHalfH) {
    const aspect = canvasAspect();
    const wantW = Math.max(contentHalfW, 1e-6);
    const wantH = Math.max(contentHalfH, 1e-6);
    let halfH = wantH;
    let halfW = halfH * aspect;
    if (halfW < wantW) {
      halfW = wantW;
      halfH = halfW / Math.max(aspect, 1e-6);
    }
    ctx.viewZoom = 1;
    ctx.orthoCamera.left = -halfW;
    ctx.orthoCamera.right = halfW;
    ctx.orthoCamera.top = halfH;
    ctx.orthoCamera.bottom = -halfH;
    ctx.orthoCamera.updateProjectionMatrix();
    applyCombinedZoom();
  }

  /**
   * Move camera along the look vector so distance to target becomes `dist`.
   * @param {number} dist
   */
  function setCameraDistance(dist) {
    const d = Math.max(dist, 1e-4);
    const dir = ctx._look.copy(ctx.camera.position).sub(ctx.controls.target);
    if (dir.lengthSq() < 1e-12) dir.set(0, 0, 1);
    else dir.normalize();
    ctx.camera.position.copy(ctx.controls.target).addScaledVector(dir, d);
  }

  /**
   * @param {THREE.PerspectiveCamera | THREE.OrthographicCamera} next
   */
  function setActiveCamera(next) {
    if (next === ctx.camera) return;
    next.position.copy(ctx.camera.position);
    next.quaternion.copy(ctx.camera.quaternion);
    next.up.copy(ctx.camera.up);
    next.near = ctx.camera.near;
    next.far = ctx.camera.far;
    ctx.camera = next;
    ctx.controls.object = ctx.camera;
    ctx.controls.update();
  }

  function combinedZoom() {
    const fz =
      Math.abs(ctx.frameOffX) > 0.05 ||
      Math.abs(ctx.frameOffY) > 0.05 ||
      Math.abs(ctx.frameZoom - 1) > 0.001
        ? ctx.frameZoom
        : 1;
    return ctx.viewZoom * fz;
  }

  function applyCombinedZoom() {
    ctx.camera.zoom = combinedZoom();
    ctx.camera.updateProjectionMatrix();
  }

  function syncViewZoomFromCamera() {
    if (ctx.suppressViewZoomSync || ctx.suppressCameraChange) return;
    if (!ctx.camera.isOrthographicCamera) return;
    const fz =
      Math.abs(ctx.frameOffX) > 0.05 ||
      Math.abs(ctx.frameOffY) > 0.05 ||
      Math.abs(ctx.frameZoom - 1) > 0.001
        ? ctx.frameZoom
        : 1;
    ctx.viewZoom = Math.max(ctx.camera.zoom / Math.max(fz, 1e-6), 1e-6);
  }

  function enterOrtho() {
    // Known issue (see viewer README “Known ISO issues”):
    // FOV → ISO can show a phantom near-plane clip that looks like a section
    // cut with no cut active. Orbiting alone in ISO usually does not.
    // Likely near/far or frustum handoff below — not fixed yet.
    // Coplanar face fights are handled by applyLayerDepthBias, not polygonOffset.
    if (ctx.projection === "ortho") return;
    ctx.lastHFovDeg = ctx.hFovDeg;
    const dist = ctx.camera.position.distanceTo(ctx.controls.target);
    const vFovRad = hFovDegToVFovRad(ctx.hFovDeg, canvasAspect());
    sizeOrthoFrustum(dist, vFovRad);
    ctx.viewZoom = 1;
    withSuppressedCameraChange(() => {
      ctx.suppressViewZoomSync = true;
      setActiveCamera(ctx.orthoCamera);
      ctx.projection = "ortho";
      applyCombinedZoom();
      ctx.suppressViewZoomSync = false;
    });
    syncFovUi();
  }

  /**
   * @param {number} [restoreHFov]
   */
  function leaveOrtho(restoreHFov) {
    if (ctx.projection !== "ortho") return;
    const targetFov = clampFov(
      restoreHFov != null ? restoreHFov : ctx.lastHFovDeg,
    );
    const halfH = Math.max(ctx.orthoCamera.top, 1e-6) / Math.max(ctx.viewZoom, 1e-6);
    const vFovRad = hFovDegToVFovRad(targetFov, canvasAspect());
    const dist = halfH / Math.max(Math.tan(vFovRad / 2), 1e-8);
    ctx.hFovDeg = targetFov;
    ctx.lastHFovDeg = targetFov;
    ctx.viewZoom = 1;
    withSuppressedCameraChange(() => {
      ctx.suppressViewZoomSync = true;
      setActiveCamera(ctx.perspCamera);
      ctx.projection = "perspective";
      applyPerspFovFromState();
      setCameraDistance(dist);
      applyCombinedZoom();
      updateCameraClipPlanes();
      ctx.controls.update();
      ctx.suppressViewZoomSync = false;
    });
    syncFovUi();
  }

  /**
   * @param {number} deg
   * @param {{ reframe?: boolean }} [opts]
   */
  function setHFov(deg, opts = {}) {
    const next = clampFov(deg);
    if (ctx.projection === "ortho") {
      leaveOrtho(next);
      return;
    }
    const aspect = canvasAspect();
    const oldV = hFovDegToVFovRad(ctx.hFovDeg, aspect);
    const newV = hFovDegToVFovRad(next, aspect);
    const dist = ctx.camera.position.distanceTo(ctx.controls.target);
    ctx.hFovDeg = next;
    ctx.lastHFovDeg = next;
    withSuppressedCameraChange(() => {
      applyPerspFovFromState();
      if (opts.reframe !== false) {
        const scale = Math.tan(oldV / 2) / Math.max(Math.tan(newV / 2), 1e-8);
        setCameraDistance(dist * scale);
        updateCameraClipPlanes();
        ctx.controls.update();
      }
      applyCombinedZoom();
    });
    syncFovUi();
  }

  function toggleFovIso() {
    if (ctx.projection === "ortho") leaveOrtho(ctx.lastHFovDeg);
    else enterOrtho();
  }

  /**
   * @param {number} v
   */
  function clampFov(v) {
    return Math.min(ctx.FOV_MAX, Math.max(ctx.FOV_MIN, v));
  }

  function sliderValueFromState() {
    return ctx.projection === "ortho" ? ctx.ISO_SLIDER : ctx.hFovDeg;
  }

  function formatFovSlider(v) {
    if (v > ctx.FOV_MAX) return "ISO";
    return `${Math.round(v)}°`;
  }

  function syncFovUi() {
    if (ctx.fovRange) ctx.fovRange.value = sliderValueFromState();
    if (ctx.fovValueEl) {
      ctx.fovValueEl.textContent =
        ctx.projection === "ortho" ? "ISO" : `${Math.round(ctx.hFovDeg)}°`;
    }
    ctx.fovRange?.refresh();
  }

  /**
   * @param {number} v
   */
  function applyFovSliderValue(v) {
    if (v > ctx.FOV_MAX) {
      if (ctx.projection !== "ortho") enterOrtho();
      else syncFovUi();
      return;
    }
    const fov = clampFov(v);
    if (ctx.projection === "ortho") leaveOrtho(fov);
    else setHFov(fov, { reframe: true });
  }

  function buildFovControl() {
    const host = document.getElementById("fov");
    if (!host) return;
    host.replaceChildren();

    const row = document.createElement("div");
    row.className = "fov-row";

    const label = document.createElement("span");
    label.className = "fov-label";
    label.textContent = tr("ui.fov");

    ctx.fovValueEl = document.createElement("span");
    ctx.fovValueEl.className = "fov-value";
    ctx.fovValueEl.textContent = `${Math.round(ctx.hFovDeg)}°`;

    ctx.fovRange = createCooperativeRange({
      min: ctx.FOV_MIN,
      max: ctx.ISO_SLIDER,
      step: 1,
      value: sliderValueFromState(),
      ariaLabel: "Field of view",
      formatAriaValue: formatFovSlider,
      onInput: (v) => applyFovSliderValue(v),
      onChange: (v) => applyFovSliderValue(v),
      onTap: () => toggleFovIso(),
    });
    ctx.fovRange.el.classList.add("fov-range");

    // Visual detent mark at the FOV→ISO boundary.
    const detent = document.createElement("div");
    detent.className = "fov-detent";
    detent.setAttribute("aria-hidden", "true");
    const t = (ctx.FOV_MAX - ctx.FOV_MIN) / (ctx.ISO_SLIDER - ctx.FOV_MIN);
    detent.style.left = `${t * 100}%`;
    const track = ctx.fovRange.el.querySelector(".coop-range-track");
    track?.append(detent);

    row.append(label, ctx.fovRange.el, ctx.fovValueEl);
    host.append(row);
    syncFovUi();
  }

  /**
   * Person height for walk mode (View section, under FOV). Snaps to the
   * 174 and 186 cm detents (walkPhysics.js).
   */
  function buildWalkHeightControl() {
    const host = document.getElementById("walk-height");
    if (!host) return;
    host.replaceChildren();
    const row = document.createElement("div");
    row.className = "fov-row";
    const label = document.createElement("span");
    label.className = "fov-label";
    label.textContent = tr("ui.personHeight");
    const value = document.createElement("span");
    value.className = "fov-value";
    const cm = ctx.walk ? ctx.walk.heightCm : snapHeightCm(Number.NaN);
    value.textContent = `${cm} cm`;
    const apply = (v) => {
      const snapped = ctx.walk ? ctx.walk.setHeight(v) : snapHeightCm(v);
      if (ctx.walkHeightRange && ctx.walkHeightRange.value !== snapped) ctx.walkHeightRange.value = snapped;
      value.textContent = `${snapped} cm`;
    };
    ctx.walkHeightRange = createCooperativeRange({
      min: HEIGHT_MIN_CM,
      max: HEIGHT_MAX_CM,
      step: 1,
      value: cm,
      ariaLabel: tr("ui.personHeight"),
      formatAriaValue: (v) => `${Math.round(v)} cm`,
      onInput: apply,
      onChange: apply,
    });
    ctx.walkHeightRange.el.classList.add("fov-range");
    const track = ctx.walkHeightRange.el.querySelector(".coop-range-track");
    for (const d of HEIGHT_DETENTS_CM) {
      const mark = document.createElement("div");
      mark.className = "fov-detent";
      mark.setAttribute("aria-hidden", "true");
      mark.style.left = `${((d - HEIGHT_MIN_CM) / (HEIGHT_MAX_CM - HEIGHT_MIN_CM)) * 100}%`;
      track?.append(mark);
    }
    row.append(label, ctx.walkHeightRange.el, value);
    host.append(row);
  }

  /** Keep near/far tight around the model so depth precision stays usable. */
  function updateCameraClipPlanes() {
    const span = Math.max(ctx.size.x, ctx.size.y, ctx.size.z, 0.01);
    const dist = ctx.camera.position.distanceTo(ctx.controls.target);
    // Pull near plane in when close; keep far just past the far side of the model.
    // Quantize so sub-millimetre orbit noise does not dirty the projection
    // every frame and defeat the idle redraw skip.
    const near =
      Math.round(
        Math.min(Math.max(dist / 200, span / 5000, 0.001), dist / 10) * 1e4,
      ) / 1e4;
    const far =
      Math.round(Math.max(dist + span * 4, span * 8, 10) * 1e4) / 1e4;
    if (ctx.camera.near === near && ctx.camera.far === far) return;
    ctx.camera.near = near;
    ctx.camera.far = far;
    ctx.camera.updateProjectionMatrix();
  }

  function withSuppressedCameraChange(fn) {
    ctx.suppressCameraChange = true;
    try {
      fn();
    } finally {
      requestAnimationFrame(() => {
        ctx.suppressCameraChange = false;
      });
    }
  }

  function frameIso() {
    if (!ctx.root) return;
    withSuppressedCameraChange(() => {
      ctx.updateBox();
      ctx.controls.target.copy(ctx.center);
      const span = Math.max(ctx.size.x, ctx.size.y, ctx.size.z, 1);
      const dist = span * 1.85;
      ctx.camera.position.set(
        ctx.center.x + dist * 0.75,
        ctx.center.y + dist * 0.55,
        ctx.center.z + dist * 0.75,
      );
      updateCameraClipPlanes();
      ctx.controls.update();
    });
    ctx.maybeSpawnDraftFromCamera();
    scheduleCameraSave();
  }

  function setCameraPreset(name) {
    if (!ctx.root) return;
    if (ctx.walk?.active) ctx.walk.exit({ keepCamera: true });
    ctx.activeSceneSpec = null;
    ctx.annotations.clear();
    ctx.setVerticalExaggeration(1);
    ctx.resetDefaultOpacities();
    ctx.syncDrawingButton();
    ctx.syncLabelButton();
    // Builtin presets assume default world-up (Three Y).
    ctx.perspCamera.up.set(0, 1, 0);
    ctx.orthoCamera.up.set(0, 1, 0);
    ctx.camera.up.set(0, 1, 0);
    if (name === "iso") {
      frameIso();
      return;
    }
    withSuppressedCameraChange(() => {
      ctx.updateBox();
      const span = Math.max(ctx.size.x, ctx.size.y, ctx.size.z, 1);
      const dist = span * 1.85;
      const c = ctx.center;
      // Front/side: eye-level (same Y as target) so look is horizontal —
      // true elevation in ISO; no foreshortened floor. Top keeps a tiny
      // Z nudge so OrbitControls up does not align with the look axis.
      // Side from −X (window wall), not +X.
      if (name === "front") {
        ctx.camera.position.set(c.x, c.y, c.z + dist);
      } else if (name === "top") {
        ctx.camera.position.set(c.x, c.y + dist, c.z + span * 0.01);
      } else if (name === "side") {
        ctx.camera.position.set(c.x - dist, c.y, c.z);
      }
      ctx.controls.target.copy(c);
      updateCameraClipPlanes();
      ctx.controls.update();
    });
    ctx.maybeSpawnDraftFromCamera();
    scheduleCameraSave();
  }

  function cameraBounds() {
    ctx.updateBox();
    return {
      min: [ctx.box.min.x, ctx.box.min.y, ctx.box.min.z],
      max: [ctx.box.max.x, ctx.box.max.y, ctx.box.max.z],
    };
  }

  function collectCameraState() {
    return {
      v: CAMERA_VERSION,
      mode: ctx.walk?.active ? "walk" : "orbit",
      position: [ctx.camera.position.x, ctx.camera.position.y, ctx.camera.position.z],
      target: [ctx.controls.target.x, ctx.controls.target.y, ctx.controls.target.z],
      heightCm: ctx.walk?.heightCm,
    };
  }

  function flushCameraSave() {
    if (ctx.camSaveTimer) clearTimeout(ctx.camSaveTimer);
    ctx.camSaveTimer = 0;
    if (!ctx.visModelId || ctx.camRestoring || !ctx.cameraReady || !ctx.root) return;
    saveCamera(ctx.visStorage, ctx.visModelId, collectCameraState());
  }

  function scheduleCameraSave() {
    if (!ctx.visModelId || ctx.camRestoring || !ctx.cameraReady) return;
    if (ctx.camSaveTimer) clearTimeout(ctx.camSaveTimer);
    ctx.camSaveTimer = setTimeout(flushCameraSave, 300);
  }

  function restoreSavedCamera() {
    if (!ctx.visModelId || !ctx.root) return;
    const saved = loadCamera(ctx.visStorage, ctx.visModelId, cameraBounds());
    if (!saved) return;
    ctx.camRestoring = true;
    try {
      withSuppressedCameraChange(() => {
        ctx.camera.position.set(saved.position[0], saved.position[1], saved.position[2]);
        ctx.controls.target.set(saved.target[0], saved.target[1], saved.target[2]);
        ctx.camera.lookAt(ctx.controls.target);
        updateCameraClipPlanes();
        ctx.controls.update();
      });
      if (saved.mode === "walk" && !ctx.walk) {
        // Walk mode is a lazy chunk; it re-enters once it loads.
        ctx.pendingWalkRestore = saved;
      } else if (saved.mode === "walk" && ctx.walk) {
        if (saved.heightCm != null) ctx.walk.setHeight(saved.heightCm);
        const eye = eyeHeightM(ctx.walk.heightCm);
        const feet = [
          saved.position[0],
          saved.position[1] - eye,
          saved.position[2],
        ];
        const look = yawPitchOf(ctx.camera);
        ctx.walk.enter({ pose: { feet, yaw: look.yaw, pitch: look.pitch }, lock: false });
      }
    } finally {
      ctx.camRestoring = false;
    }
  }

  function easeInOutCubic(t) {
    const x = Math.min(1, Math.max(0, t));
    return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
  }

  /**
   * End pose for framing `box3`, keeping the current view direction.
   * @param {THREE.Box3} box3
   */
  function framePose(box3) {
    const fit = box3.getSize(ctx._corner);
    const span = Math.max(fit.x, fit.y, fit.z, 0.2);
    const center = box3.getCenter(new THREE.Vector3());
    const dir = ctx.camera.position.clone().sub(ctx.controls.target);
    if (dir.lengthSq() < 1e-8) dir.set(0.75, 0.55, 0.75);
    else dir.normalize();
    let dist;
    if (ctx.camera.isOrthographicCamera) {
      dist = Math.max(ctx.camera.position.distanceTo(ctx.controls.target), span * 1.4);
    } else {
      const vFov = ((ctx.camera.fov || 45) * Math.PI) / 180;
      dist = Math.max((span * 0.62) / Math.max(Math.tan(vFov / 2), 1e-3), span * 1.25);
    }
    return { center, position: center.clone().addScaledVector(dir, dist), span };
  }

  /**
   * @param {ReturnType<typeof framePose>} pose
   */
  function flyCamera(pose) {
    ctx.camFly = {
      t0: performance.now(),
      fromPos: ctx.camera.position.clone(),
      toPos: pose.position,
      fromTarget: ctx.controls.target.clone(),
      toTarget: pose.center,
      span: pose.span,
    };
    ctx.viewDirty = true;
  }

  function stepCamFly(now) {
    if (!ctx.camFly) return;
    const t = Math.min(1, (now - ctx.camFly.t0) / ctx.CAM_FLY_MS);
    const e = easeInOutCubic(t);
    ctx.camera.position.lerpVectors(ctx.camFly.fromPos, ctx.camFly.toPos, e);
    ctx.controls.target.lerpVectors(ctx.camFly.fromTarget, ctx.camFly.toTarget, e);
    if (ctx.camera.isOrthographicCamera) sizeOrthoToContent(ctx.camFly.span * 0.62, ctx.camFly.span * 0.62);
    ctx.suppressCameraChange = true;
    ctx.controls.update();
    ctx.updateBox();
    updateCameraClipPlanes();
    ctx.viewDirty = true;
    if (t >= 1) {
      ctx.camFly = null;
      requestAnimationFrame(() => {
        ctx.suppressCameraChange = false;
      });
      scheduleCameraSave();
    }
  }

  ctx.canvasAspect = canvasAspect;
  ctx.hFovDegToVFovRad = hFovDegToVFovRad;
  ctx.applyPerspFovFromState = applyPerspFovFromState;
  ctx.sizeOrthoFrustum = sizeOrthoFrustum;
  ctx.refreshOrthoAspect = refreshOrthoAspect;
  ctx.sizeOrthoToContent = sizeOrthoToContent;
  ctx.setCameraDistance = setCameraDistance;
  ctx.setActiveCamera = setActiveCamera;
  ctx.combinedZoom = combinedZoom;
  ctx.applyCombinedZoom = applyCombinedZoom;
  ctx.syncViewZoomFromCamera = syncViewZoomFromCamera;
  ctx.enterOrtho = enterOrtho;
  ctx.leaveOrtho = leaveOrtho;
  ctx.setHFov = setHFov;
  ctx.toggleFovIso = toggleFovIso;
  ctx.clampFov = clampFov;
  ctx.sliderValueFromState = sliderValueFromState;
  ctx.formatFovSlider = formatFovSlider;
  ctx.syncFovUi = syncFovUi;
  ctx.applyFovSliderValue = applyFovSliderValue;
  ctx.buildFovControl = buildFovControl;
  ctx.buildWalkHeightControl = buildWalkHeightControl;
  ctx.updateCameraClipPlanes = updateCameraClipPlanes;
  ctx.withSuppressedCameraChange = withSuppressedCameraChange;
  ctx.frameIso = frameIso;
  ctx.setCameraPreset = setCameraPreset;
  ctx.cameraBounds = cameraBounds;
  ctx.collectCameraState = collectCameraState;
  ctx.flushCameraSave = flushCameraSave;
  ctx.scheduleCameraSave = scheduleCameraSave;
  ctx.restoreSavedCamera = restoreSavedCamera;
  ctx.easeInOutCubic = easeInOutCubic;
  ctx.framePose = framePose;
  ctx.flyCamera = flyCamera;
  ctx.stepCamFly = stepCamFly;
}
