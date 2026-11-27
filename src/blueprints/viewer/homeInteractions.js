/**
 * Lights, switches, windows, interaction feedback, and the Home live section.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { t as tr } from "./i18n.js";
import { swingAngle } from "./doors.js";
import { rotateAboutY } from "./feedback.js";
import {
  LIGHT_OFF_HEX,
  lightLook,
  pressTarget,
  rockersOf,
  saveHomeMode,
} from "./homeLive.js";
import { isSceneSolid } from "./interactions.js";
import { switchTargetCenters } from "./tapTargets.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachHomeInteractions(ctx) {
  /** Live record for an element, only while connected. */
  const liveDevice = (el) => (el && ctx.home ? ctx.home.device(el.globalId) : undefined);

  function eachMaterial(mesh, fn) {
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const next = list.map((mat) => {
      if (!mat) return mat;
      if (mat.userData.bpOwned) return fn(mat);
      const clone = mat.clone();
      clone.userData.bpOwned = true;
      return fn(clone);
    });
    mesh.material = next.length === 1 ? next[0] : next;
  }

  /**
   * Draws a light on or off. Off is a dull grey with no glow; on is the
   * look's colour at full strength, as the base colour (so unlit Solid mode
   * shows it) and as emissive in Realistic. `restore` puts the model's own
   * fixture colour back (offline, as on load).
   * @param {object} element
   * @param {{ on: boolean, level?: number, color: number } | { restore: true }} look
   */
  function setLightLook(element, look) {
    const restore = "restore" in look && look.restore;
    const on = !restore && Boolean(look.on);
    ctx.lightOn.set(element.globalId, on);
    if (restore) ctx.lightLooks.delete(element.globalId);
    else ctx.lightLooks.set(element.globalId, look);
    const level = restore ? 1 : Math.min(Math.max(look.level ?? 1, 0), 1);
    const target = new THREE.Color(restore ? 0 : look.color);
    if (on) {
      // A dimmed light stays clearly lit; only the glow strength drops.
      target.lerp(new THREE.Color(LIGHT_OFF_HEX), 0.35 * (1 - level));
    }
    for (const mesh of ctx.meshesForElement(element)) {
      eachMaterial(mesh, (mat) => {
        if (mat.color) {
          if (mat.userData.bpLightBase == null) mat.userData.bpLightBase = mat.color.getHex();
          if (restore) mat.color.setHex(mat.userData.bpLightBase);
          else mat.color.copy(target);
        }
        if (mat.emissive) {
          if (on) {
            // Kept below 1: ACES tone mapping bleaches a stronger glow to
            // pale cream, which reads as "off" (Petr, 2026-11-12).
            mat.emissive.copy(target);
            mat.emissiveIntensity = 0.3 + 0.35 * level;
          } else {
            mat.emissive.setHex(0x000000);
            mat.emissiveIntensity = 0;
          }
        }
        return mat;
      });
    }
    // A real model glows only in its diffuser.
    ctx.fixtureModels.setLightLook(element, restore ? null : { on, color: target.clone(), level });
    ctx.viewDirty = true;
  }

  function toggleLight(element) {
    const on = !ctx.lightOn.get(element.globalId);
    setLightLook(element, on ? ctx.OFFLINE_LIGHT : ctx.OFFLINE_LIGHT_OFF);
  }

  /** Material mode swaps materials; put the glow back on lit fixtures. */
  function reapplyLightLooks() {
    for (const [gid, look] of [...ctx.lightLooks]) {
      const element = ctx.ifcIndex.elements[gid];
      if (element) setLightLook(element, look);
    }
  }

  // --- Live Home (homeLive.js). Offline behaviour is the fallback. ---

  function reportHomeFailure(res) {
    if (res?.ok) return;
    console.warn("Home command failed", res);
    ctx.homeFlash = `${tr("home.failed")}${res?.status ? ` (${res.status})` : ""}${res?.error ? `: ${res.error}` : ""}`;
    syncHomeStatus();
    window.setTimeout(() => {
      ctx.homeFlash = "";
      syncHomeStatus();
    }, 4000);
  }

  function liveLightTap(element) {
    lightFeedback(element);
    const device = liveDevice(element);
    if (device?.deviceType !== "ColorTemperatureLight") {
      toggleLight(element);
      return;
    }
    // Light state changes only when Home says so (WebSocket `state`).
    ctx.home.command(element.globalId, { type: "toggle" }).then(reportHomeFailure);
  }

  /**
   * Where a tap landed on a switch: up/down from the vertical offset, and
   * left/right as seen from the camera (for double rockers).
   */
  function switchHitOffsets(element, hit) {
    const meshes = ctx.meshesForElement(element);
    if (!hit?.point || !meshes.length) return { dy: 1, side: -1 };
    const b = ctx.worldBoxOf(meshes);
    const c = b.getCenter(new THREE.Vector3());
    const right = new THREE.Vector3().setFromMatrixColumn(ctx.camera.matrixWorld, 0);
    const d = hit.point.clone().sub(c);
    return { dy: d.y, side: d.dot(right) };
  }
  function elementsOfType(type) {
    let list = ctx.elementsByType.get(type);
    if (!list) {
      list = Object.values(ctx.ifcIndex.elements).filter((el) => el.type === type);
      ctx.elementsByType.set(type, list);
    }
    return list;
  }

  /**
   * Extended tap targets (tapTargets.js) for one IFC type: the centre of each
   * shown element's world box, or of each rocker half for a switch.
   * @param {string} type
   * @param {{ camera?: THREE.Camera }} tapCtx
   */
  function tapTargetsFor(type, tapCtx) {
    const cam = tapCtx?.camera || ctx.camera;
    const right = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0);
    const out = [];
    for (const element of elementsOfType(type)) {
      if (ctx.ifcVisibility.isHidden(element.globalId)) continue;
      const meshes = ctx.meshesForElement(element).filter((m) => {
        if (!isSceneSolid(m)) return false;
        for (let n = m; n; n = n.parent) if (!n.visible) return false;
        return true;
      });
      if (type === "IfcWindow") {
        // Only panes that open are targets; fixed glazing has none.
        const opens = new Set(ctx.windowSlides.operableMeshes(element.id, ctx.meshesForElement(element)));
        for (let i = meshes.length - 1; i >= 0; i--) if (!opens.has(meshes[i])) meshes.splice(i, 1);
      }
      if (!meshes.length) continue;
      const box = ctx.worldBoxOf(meshes);
      if (box.isEmpty()) continue;
      const own = new Set(meshes);
      const owns = (obj) => {
        for (let n = obj; n; n = n.parent) if (own.has(n)) return true;
        return ctx.elementFromMesh(obj) === element;
      };
      const object = meshes[0];
      const centers =
        type === "IfcSwitchingDevice"
          ? switchTargetCenters(box, rockersOf(element), right).map((half) => half.center)
          : [box.getCenter(new THREE.Vector3())];
      for (const center of centers) {
        out.push({ element, center, group: element.globalId, hit: { object, point: center }, owns });
      }
    }
    return out;
  }

  // --- Interaction feedback (feedback.js). Called where actions dispatch. ---

  /** World anchor of the pressed rocker half: a quarter of the plate off centre. */
  function switchFeedback(element, target, haptic = true) {
    const meshes = ctx.meshesForElement(element);
    if (!meshes.length) return;
    const b = ctx.worldBoxOf(meshes);
    const c = b.getCenter(new THREE.Vector3());
    const size = b.getSize(new THREE.Vector3());
    const up = target.position === "down" ? -1 : 1;
    c.y += (up * size.y) / 4;
    const rockers = rockersOf(element);
    if (rockers.length > 1) {
      const right = new THREE.Vector3().setFromMatrixColumn(ctx.camera.matrixWorld, 0);
      right.y = 0;
      if (right.lengthSq() > 1e-9) {
        right.normalize();
        const side = target.rocker === rockers[0] ? -1 : 1;
        c.addScaledVector(right, (side * Math.max(size.x, size.z)) / 4);
      }
    }
    if (ctx.fixtureModels.press(element, target)) ctx.viewDirty = true;
    ctx.feedback.showFeedback({ worldPos: c, kind: "switch", direction: target.position, haptic });
  }

  function lightFeedback(element) {
    const meshes = ctx.meshesForElement(element);
    if (!meshes.length) return;
    ctx.feedback.showFeedback({ worldPos: ctx.worldBoxOf(meshes).getCenter(new THREE.Vector3()), kind: "light" });
  }

  /**
   * Drawer: straight arrow along its slide. Sliding door: one straight arrow
   * per panel, along that panel's slide. Sectional door and lift-up front
   * (linkage): up or down arrow.
   * Hinged leaf: arc along the swing.
   */
  function doorFeedback(binding, move) {
    if (!binding?.host || move.from === move.to) return;
    const box = new THREE.Box3().setFromObject(binding.host);
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const opening = move.to > move.from;
    if (binding.sections || binding.joints) {
      ctx.feedback.showFeedback({ worldPos: center, kind: "lift", direction: opening ? "up" : "down" });
      return;
    }
    if (binding.panels) {
      const parent = binding.pivot.parent;
      if (!parent) return;
      parent.updateWorldMatrix(true, false);
      // One haptic tap for the whole door, not one per panel.
      binding.panels.forEach((panel, i) => {
        const at = new THREE.Box3().setFromObject(panel.pivot);
        if (at.isEmpty()) return;
        const dir = panel.slideLocal.clone().transformDirection(parent.matrixWorld);
        if (!opening) dir.negate();
        const worldPos = at.getCenter(new THREE.Vector3());
        ctx.feedback.showFeedback({ worldPos, kind: "slide", worldDir: dir, haptic: i === 0 });
      });
      return;
    }
    if (binding.slideLocal) {
      const parent = binding.pivot.parent;
      if (!parent) return;
      parent.updateWorldMatrix(true, false);
      const dir = binding.slideLocal.clone().transformDirection(parent.matrixWorld);
      if (!opening) dir.negate();
      ctx.feedback.showFeedback({ worldPos: center, kind: "slide", worldDir: dir });
      return;
    }
    const hinge = binding.pivot.getWorldPosition(new THREE.Vector3());
    const delta = swingAngle(move.to, binding.sign) - swingAngle(move.from, binding.sign);
    const to = rotateAboutY(center.toArray(), hinge.toArray(), delta);
    ctx.feedback.showFeedback({ worldPos: center, kind: "hinge", hinge, to });
  }

  function windowFeedback(element, open) {
    const all = ctx.meshesForElement(element);
    const meshes = ctx.windowSlides.operableMeshes(element.id, all);
    const mesh = meshes[0];
    if (!mesh?.parent) return;
    const slide = ctx.windowSlides.slideOf(element.id);
    let dir;
    if (slide) {
      dir = new THREE.Vector3(slide[0], slide[1], slide[2]).normalize();
      if (!open) dir.negate();
    } else {
      mesh.parent.updateWorldMatrix(true, false);
      dir = new THREE.Vector3(open ? 1 : -1, 0, 0).transformDirection(mesh.parent.matrixWorld);
    }
    ctx.feedback.showFeedback({ worldPos: ctx.worldBoxOf(meshes).getCenter(new THREE.Vector3()), kind: "slide", worldDir: dir });
  }

  /** True when `obj` is (inside) a pane of `element` that opens. */
  function windowPaneOperable(element, obj) {
    if (!element) return false;
    return ctx.windowSlides.acceptsHit(element.id, ctx.meshesForElement(element), obj);
  }

  function sendPress(element, target) {
    switchFeedback(element, target);
    pressSwitch(element);
    ctx.localPressAt.set(element.globalId, performance.now());
    ctx.home.press(element.globalId, target).then(reportHomeFailure);
  }

  function liveSwitchTap(element, hit) {
    const device = liveDevice(element);
    const target = pressTarget(element, switchHitOffsets(element, hit));
    if (device?.deviceType !== "GenericSwitch" || !ctx.home.simulation()) {
      switchFeedback(element, target);
      pressSwitch(element);
      return;
    }
    sendPress(element, target);
  }

  function liveSwitchActions(element) {
    const device = liveDevice(element);
    if (device?.deviceType !== "GenericSwitch" || !ctx.home.simulation()) return null;
    const rockers = rockersOf(element);
    const actions = [];
    rockers.forEach((rocker, i) => {
      for (const position of /** @type {const} */ (["up", "down"])) {
        const word = tr(position === "up" ? "home.up" : "home.down");
        actions.push({
          id: `switch-${rocker}-${position}`,
          labelKey: position === "up" ? "home.up" : "home.down",
          label: rockers.length > 1 ? `${i + 1} ${word}` : word,
          run: () => sendPress(element, { rocker, position, kind: "short" }),
        });
      }
    });
    return actions;
  }

  function liveCoverTap(element) {
    const device = liveDevice(element);
    if (device?.deviceType !== "WindowCovering") return;
    const pos = device.state?.windowCovering?.targetPositionLiftPercent100ths;
    const open = pos != null && pos < 5000;
    ctx.home.command(element.globalId, { type: open ? "coverClose" : "coverOpen" }).then(reportHomeFailure);
  }

  function liveCoverActions(element) {
    const device = liveDevice(element);
    if (device?.deviceType !== "WindowCovering") return null;
    return [
      ["coverOpen", "ui.open"],
      ["coverClose", "ui.close"],
      ["coverStop", "home.stop"],
    ].map(([type, labelKey]) => ({
      id: type,
      labelKey,
      run: () => ctx.home.command(element.globalId, { type }).then(reportHomeFailure),
    }));
  }

  function pressSwitch(element) {
    // A real model tips its rocker instead (fixtureModels.press).
    if (ctx.fixtureModels.placedFor(element)?.holder.visible) return;
    for (const mesh of ctx.meshesForElement(element)) {
      if (mesh.userData.bpPressing) continue;
      mesh.userData.bpPressing = true;
      const origin = mesh.position.y;
      mesh.position.y = origin - 0.004;
      window.setTimeout(() => {
        mesh.position.y = origin;
        mesh.userData.bpPressing = false;
        ctx.viewDirty = true;
      }, 160);
    }
    ctx.viewDirty = true;
  }

  function toggleWindow(element) {
    const open = !ctx.windowOpen.get(element.globalId);
    if (!ctx.windowSlides.slide(element.id, ctx.meshesForElement(element), open, performance.now())) return;
    windowFeedback(element, open);
    ctx.windowOpen.set(element.globalId, open);
    ctx.viewDirty = true;
  }

  /**
   * Interaction buttons for the inspector info screen (open/close, light,
   * switch, live cover). Tries each of the element's meshes until a handler
   * claims one, so a window still gets Open from an operable pane.
   * @param {object | null} element
   */
  function actionsForElement(element) {
    if (!element) return [];
    const tapCtx = { now: performance.now() };
    const keep = (item) => isSceneSolid(item.object);
    for (const mesh of ctx.meshesForElement(element)) {
      const found = ctx.doorCtrl.taps.resolve([{ object: mesh }], tapCtx, keep);
      const actions = found?.claim?.actions;
      if (Array.isArray(actions) && actions.length) return actions.slice();
    }
    return [];
  }

  function applyLiveDevice(device) {
    const element = ctx.ifcIndex.elements[device.globalId];
    if (!element) return;
    if (device.deviceType === "ColorTemperatureLight") setLightLook(element, lightLook(device));
  }

  /** Back to the offline view: every light in its model colour, as on load. */
  function resetToOffline() {
    for (const gid of [...ctx.lightOn.keys()]) {
      const element = ctx.ifcIndex.elements[gid];
      if (element) setLightLook(element, { restore: true });
    }
  }

  function syncHomeStatus() {
    if (!ctx.homeStatusEl) return;
    const status = ctx.home ? ctx.home.status() : "off";
    const key =
      status === "live"
        ? ctx.home.simulation()
          ? "home.statusLive"
          : "home.statusLiveNoSim"
        : status === "connecting"
          ? "home.statusConnecting"
          : status === "unreachable"
            ? "home.statusUnreachable"
            : "home.statusOff";
    ctx.homeStatusEl.textContent = ctx.homeFlash || tr(key);
    ctx.homeStatusEl.dataset.status = status;
    ctx.homeStatusEl.title = status === "off" ? "" : ctx.homeConfig.baseUrl;
  }

  function buildHomeSection() {
    if (!ctx.homeCapable) return;
    let section = document.getElementById("section-home");
    if (!section) {
      const anchor = document.getElementById("section-locale");
      if (!anchor?.parentNode) return;
      section = document.createElement("section");
      section.className = "sheet-section";
      section.id = "section-home";
      anchor.parentNode.insertBefore(section, anchor);
    }
    section.replaceChildren();
    const title = document.createElement("h2");
    title.className = "sheet-title";
    title.textContent = tr("home.title");
    const seg = document.createElement("div");
    seg.className = "seg";
    seg.id = "home-mode";
    seg.setAttribute("role", "group");
    seg.setAttribute("aria-label", tr("home.title"));
    for (const [id, labelKey] of [
      ["live", "home.live"],
      ["off", "home.off"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.homeMode = id;
      btn.textContent = tr(labelKey);
      if (id === ctx.homeMode) btn.classList.add("is-active");
      btn.addEventListener("click", () => setHomeMode(/** @type {"live"|"off"} */ (id)));
      seg.append(btn);
    }
    ctx.homeStatusEl = document.createElement("p");
    ctx.homeStatusEl.className = "home-status";
    ctx.homeStatusEl.setAttribute("aria-live", "polite");
    ctx.homeStatusEl.style.cssText =
      "margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)";
    section.append(title, seg, ctx.homeStatusEl);
    syncHomeStatus();
  }

  /** @param {"live" | "off"} mode */
  function setHomeMode(mode) {
    ctx.homeMode = mode;
    saveHomeMode(typeof localStorage !== "undefined" ? localStorage : null, mode);
    document.querySelectorAll("#home-mode button").forEach((el) => {
      el.classList.toggle("is-active", /** @type {HTMLElement} */ (el).dataset.homeMode === mode);
    });
    if (!ctx.home) return;
    if (mode === "live") ctx.home.start();
    else {
      ctx.home.stop();
      resetToOffline();
    }
    syncHomeStatus();
  }

  ctx.liveDevice = liveDevice;
  ctx.eachMaterial = eachMaterial;
  ctx.setLightLook = setLightLook;
  ctx.toggleLight = toggleLight;
  ctx.reapplyLightLooks = reapplyLightLooks;
  ctx.reportHomeFailure = reportHomeFailure;
  ctx.liveLightTap = liveLightTap;
  ctx.switchHitOffsets = switchHitOffsets;
  ctx.elementsOfType = elementsOfType;
  ctx.tapTargetsFor = tapTargetsFor;
  ctx.switchFeedback = switchFeedback;
  ctx.lightFeedback = lightFeedback;
  ctx.doorFeedback = doorFeedback;
  ctx.windowFeedback = windowFeedback;
  ctx.windowPaneOperable = windowPaneOperable;
  ctx.sendPress = sendPress;
  ctx.liveSwitchTap = liveSwitchTap;
  ctx.liveSwitchActions = liveSwitchActions;
  ctx.liveCoverTap = liveCoverTap;
  ctx.liveCoverActions = liveCoverActions;
  ctx.pressSwitch = pressSwitch;
  ctx.toggleWindow = toggleWindow;
  ctx.actionsForElement = actionsForElement;
  ctx.applyLiveDevice = applyLiveDevice;
  ctx.resetToOffline = resetToOffline;
  ctx.syncHomeStatus = syncHomeStatus;
  ctx.buildHomeSection = buildHomeSection;
  ctx.setHomeMode = setHomeMode;
}
