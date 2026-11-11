/**
 * Live client for the Home state API (pteasima/Home, Plan.md step 7).
 *
 * Home owns the contract: `api/openapi.yaml` and `api/schemas/` in that repo.
 * This file only reads it. Devices are addressed by IFC GlobalId, which is the
 * key of `docs/models/<id>.ifc.json`, so no other mapping is needed.
 *
 * The viewer must keep working with no Home running (docs/Home.md). Every
 * failure here ends in the "unreachable" status, and the viewer then behaves
 * exactly as it does offline. Nothing in this file throws into the caller.
 */

/** Test environment Home (Tailscale Funnel on Petr's VM). docs/Home.md. */
export const DEFAULT_HOME_URL = "https://home-test.tail9f879b.ts.net";

/** `live` (default) or `off`. */
export const HOME_MODE_KEY = "blueprints.homeMode";

/** IFC types that can be Home devices. A model with none never connects. */
export const HOME_DEVICE_TYPES = new Set([
  "IfcLightFixture",
  "IfcSwitchingDevice",
  "IfcSensor",
  "IfcActuator",
]);

/** Reconnect delays (ms). The last one repeats. */
export const RETRY_MS = [2000, 5000, 15000, 30000, 60000];

const HEALTH_TIMEOUT_MS = 5000;

/**
 * @param {{ elements?: Record<string, { type?: string }> } | null | undefined} index
 * @returns {boolean}
 */
export function indexHasHomeDevices(index) {
  for (const element of Object.values(index?.elements || {})) {
    if (element && HOME_DEVICE_TYPES.has(element.type || "")) return true;
  }
  return false;
}

/**
 * Mode and server URL. URL params win over the saved setting:
 * `?home=off|live` and `?homeUrl=https://…` (http(s) only).
 * @param {{ search?: string, storage?: { getItem(k: string): string | null } | null }} [env]
 * @returns {{ mode: "live" | "off", baseUrl: string }}
 */
export function resolveHomeConfig(env = {}) {
  let params;
  try {
    params = new URLSearchParams(env.search || "");
  } catch {
    params = new URLSearchParams();
  }
  let mode = "live";
  let saved = null;
  try {
    saved = env.storage?.getItem(HOME_MODE_KEY) ?? null;
  } catch {
    saved = null;
  }
  if (saved === "off" || saved === "live") mode = saved;
  const q = (params.get("home") || "").trim().toLowerCase();
  if (q === "off" || q === "live") mode = q;
  let baseUrl = DEFAULT_HOME_URL;
  const custom = (params.get("homeUrl") || "").trim();
  if (custom) {
    try {
      const url = new URL(custom);
      if (url.protocol === "https:" || url.protocol === "http:") {
        baseUrl = url.href.replace(/\/+$/, "");
      }
    } catch {
      /* keep the default */
    }
  }
  return { mode: /** @type {"live" | "off"} */ (mode), baseUrl };
}

/**
 * @param {{ setItem(k: string, v: string): void } | null | undefined} storage
 * @param {"live" | "off"} mode
 */
export function saveHomeMode(storage, mode) {
  try {
    storage?.setItem(HOME_MODE_KEY, mode);
  } catch {
    /* private mode */
  }
}

/**
 * @param {string} baseUrl
 * @returns {string}
 */
export function eventsUrl(baseUrl) {
  const url = new URL(baseUrl.replace(/\/+$/, "") + "/events");
  url.protocol = url.protocol === "http:" ? "ws:" : "wss:";
  return url.href;
}

/**
 * @param {string} baseUrl
 * @param {string} globalId
 * @param {string} [suffix]
 */
export function deviceUrl(baseUrl, globalId, suffix = "") {
  return `${baseUrl.replace(/\/+$/, "")}/devices/${encodeURIComponent(globalId)}${suffix}`;
}

/**
 * @param {string} baseUrl
 * @param {string} globalId
 */
export function pressUrl(baseUrl, globalId) {
  return `${baseUrl.replace(/\/+$/, "")}/simulate/devices/${encodeURIComponent(globalId)}/press`;
}

/**
 * Black-body colour, Tanner Helland's fit. Good enough for a tint.
 * @param {number} kelvin
 * @returns {number} 0xRRGGBB
 */
export function kelvinToHex(kelvin) {
  const t = Math.min(Math.max(kelvin, 1000), 40000) / 100;
  let r;
  let g;
  let b;
  if (t <= 66) {
    r = 255;
    g = 99.4708025861 * Math.log(t) - 161.1195681661;
    b = t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  } else {
    r = 329.698727446 * Math.pow(t - 60, -0.1332047592);
    g = 288.1221695283 * Math.pow(t - 60, -0.0755148492);
    b = 255;
  }
  const c = (v) => Math.round(Math.min(Math.max(v, 0), 255));
  return (c(r) << 16) | (c(g) << 8) | c(b);
}

/**
 * How a ColorTemperatureLight record should look.
 * `on` is false unless OnOff is true and the device is online.
 * @param {object | null | undefined} device
 * @returns {{ on: boolean, level: number, kelvin: number | null, color: number }}
 */
export function lightLook(device) {
  const st = device?.state || {};
  const on = Boolean(device?.online && st.onOff?.onOff === true);
  const raw = st.levelControl?.currentLevel;
  const level = Number.isFinite(raw) ? Math.min(Math.max(raw / 254, 0), 1) : 1;
  const mireds = st.colorControl?.colorTemperatureMireds;
  const kelvin = Number.isFinite(mireds) && mireds > 0 ? Math.round(1e6 / mireds) : null;
  const color = kelvin ? kelvinToHex(kelvin) : 0xfff1c2;
  return { on, level, kelvin, color };
}

/**
 * Rocker names for a switch element. Home's hardware.yaml names a single
 * rocker `rocker` and a double one `rocker-1` / `rocker-2`. Which physical
 * half of a double is rocker 1 is not decided in Home yet; the viewer uses
 * the left half as seen facing the switch.
 * @param {{ objectType?: string } | null | undefined} element
 * @returns {string[]}
 */
export function rockersOf(element) {
  return element?.objectType === "DoublePushButton" ? ["rocker-1", "rocker-2"] : ["rocker"];
}

/**
 * Which rocker and position a tap on a switch means: the upper half is up,
 * the lower half down; on a double, the left half (`side < 0`) is rocker 1.
 * @param {{ objectType?: string }} element
 * @param {{ dy: number, side: number }} where offsets from the switch centre
 * @returns {{ rocker: string, position: "up" | "down", kind: "short" }}
 */
export function pressTarget(element, where) {
  const rockers = rockersOf(element);
  const rocker = rockers.length > 1 ? rockers[where.side < 0 ? 0 : 1] : rockers[0];
  return { rocker, position: where.dy >= 0 ? "up" : "down", kind: "short" };
}

/**
 * Text lines for the inspector popover.
 * @param {object | null | undefined} device
 * @param {(key: string) => string} t
 * @returns {string[]}
 */
export function deviceLines(device, t) {
  if (!device) return [];
  const lines = [];
  if (!device.online) lines.push(t("home.deviceOffline"));
  const st = device.state || {};
  switch (device.deviceType) {
    case "ColorTemperatureLight": {
      const onOff = st.onOff?.onOff;
      lines.push(onOff == null ? t("home.unknown") : onOff ? t("home.on") : t("home.off"));
      const look = lightLook({ ...device, online: true });
      if (Number.isFinite(st.levelControl?.currentLevel)) {
        lines.push(`${t("home.level")} ${Math.round(look.level * 100)} %`);
      }
      if (look.kelvin) lines.push(`${look.kelvin} K`);
      const ch = st.derived?.channels;
      if (ch) lines.push(`${t("home.warm")} ${Math.round(ch.warm)} % · ${t("home.cool")} ${Math.round(ch.cool)} %`);
      break;
    }
    case "GenericSwitch": {
      const ev = st.switch?.lastEvent;
      if (ev) lines.push(`${t("home.lastEvent")}: ${ev.rocker} ${ev.position} ${ev.event}`);
      else lines.push(t("home.noEvents"));
      break;
    }
    case "ContactSensor": {
      const v = st.booleanState?.stateValue;
      lines.push(v == null ? t("home.unknown") : v ? t("home.contactClosed") : t("home.contactOpen"));
      break;
    }
    case "OccupancySensor": {
      const occ = st.occupancySensing?.occupancy;
      lines.push(occ == null ? t("home.unknown") : occ.occupied ? t("home.occupied") : t("home.vacant"));
      break;
    }
    case "WindowCovering": {
      const pos = st.windowCovering?.currentPositionLiftPercent100ths;
      lines.push(pos == null ? t("home.unknown") : `${t("home.closedPct")} ${Math.round(pos / 100)} %`);
      break;
    }
    default:
      break;
  }
  return lines;
}

/**
 * @typedef {"off" | "connecting" | "live" | "unreachable"} HomeStatus
 */

/**
 * Connects to Home: GET /health, then WebSocket /events (snapshot first).
 * Reconnects with backoff. Commands fail soft (resolve `{ ok: false }`).
 *
 * @param {{
 *   baseUrl: string,
 *   fetchImpl?: typeof fetch,
 *   WebSocketImpl?: any,
 *   setTimer?: (fn: () => void, ms: number) => any,
 *   clearTimer?: (id: any) => void,
 *   onStatus?: (status: HomeStatus, detail?: string) => void,
 *   onDevice?: (device: object, previous: object | undefined) => void,
 *   onSwitch?: (event: object) => void,
 *   onSnapshot?: (devices: object[]) => void,
 * }} opts
 */
export function createHomeClient(opts) {
  const fetchImpl = opts.fetchImpl || globalThis.fetch?.bind(globalThis);
  const WS = opts.WebSocketImpl || globalThis.WebSocket;
  const setTimer = opts.setTimer || ((fn, ms) => setTimeout(fn, ms));
  const clearTimer = opts.clearTimer || ((id) => clearTimeout(id));
  /** @type {Map<string, object>} */
  const devices = new Map();
  /** @type {HomeStatus} */
  let status = "off";
  let simulation = false;
  let running = false;
  let attempt = 0;
  let generation = 0;
  /** @type {any} */
  let socket = null;
  /** @type {any} */
  let retryTimer = null;

  function setStatus(next, detail) {
    if (status === next && !detail) return;
    status = next;
    try {
      opts.onStatus?.(next, detail);
    } catch (err) {
      console.error("home onStatus", err);
    }
  }

  function safe(fn, ...args) {
    try {
      fn?.(...args);
    } catch (err) {
      console.error("home handler", err);
    }
  }

  function scheduleRetry(gen) {
    if (!running || gen !== generation) return;
    const ms = RETRY_MS[Math.min(attempt, RETRY_MS.length - 1)];
    attempt += 1;
    retryTimer = setTimer(() => {
      retryTimer = null;
      if (running && gen === generation) connect(gen);
    }, ms);
  }

  function upsert(device) {
    if (!device || typeof device.globalId !== "string") return;
    const prev = devices.get(device.globalId);
    devices.set(device.globalId, device);
    safe(opts.onDevice, device, prev);
  }

  function handleMessage(raw) {
    let msg;
    try {
      msg = JSON.parse(typeof raw === "string" ? raw : String(raw));
    } catch {
      return;
    }
    if (!msg || typeof msg !== "object") return;
    if (msg.type === "snapshot" && Array.isArray(msg.devices)) {
      attempt = 0;
      for (const device of msg.devices) upsert(device);
      setStatus("live");
      safe(opts.onSnapshot, msg.devices);
    } else if (msg.type === "state" && msg.device) {
      upsert(msg.device);
    } else if (msg.type === "switch" && msg.event) {
      safe(opts.onSwitch, msg.event);
    }
  }

  async function connect(gen) {
    if (!fetchImpl || !WS) {
      setStatus("unreachable", "no fetch/WebSocket");
      return;
    }
    setStatus(status === "live" ? "connecting" : status === "unreachable" ? "unreachable" : "connecting");
    let health = null;
    try {
      const ctrl = typeof AbortController === "function" ? new AbortController() : null;
      const timer = setTimer(() => ctrl?.abort(), HEALTH_TIMEOUT_MS);
      try {
        const res = await fetchImpl(`${opts.baseUrl.replace(/\/+$/, "")}/health`, {
          signal: ctrl?.signal,
          cache: "no-store",
        });
        if (res.ok) health = await res.json();
      } finally {
        clearTimer(timer);
      }
    } catch {
      health = null;
    }
    if (!running || gen !== generation) return;
    if (!health || health.status !== "ok") {
      setStatus("unreachable");
      scheduleRetry(gen);
      return;
    }
    simulation = Boolean(health.simulation);
    let ws;
    try {
      ws = new WS(eventsUrl(opts.baseUrl));
    } catch {
      setStatus("unreachable");
      scheduleRetry(gen);
      return;
    }
    socket = ws;
    ws.onmessage = (ev) => {
      if (gen === generation) handleMessage(ev.data);
    };
    ws.onclose = () => {
      if (socket === ws) socket = null;
      if (!running || gen !== generation) return;
      setStatus(status === "live" ? "connecting" : "unreachable");
      scheduleRetry(gen);
    };
    ws.onerror = () => {
      /* onclose follows */
    };
  }

  async function post(url, body) {
    if (!fetchImpl || status !== "live") return { ok: false, status: 0 };
    try {
      const res = await fetchImpl(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let error = "";
      if (!res.ok) {
        try {
          const data = await res.json();
          error = data?.error?.message || data?.error?.code || "";
        } catch {
          /* not JSON */
        }
      }
      return { ok: res.ok, status: res.status, error };
    } catch (err) {
      return { ok: false, status: 0, error: String(err?.message || err) };
    }
  }

  return {
    start() {
      if (running) return;
      running = true;
      attempt = 0;
      generation += 1;
      connect(generation);
    },
    stop() {
      running = false;
      generation += 1;
      if (retryTimer != null) clearTimer(retryTimer);
      retryTimer = null;
      const ws = socket;
      socket = null;
      try {
        ws?.close();
      } catch {
        /* ignore */
      }
      devices.clear();
      simulation = false;
      setStatus("off");
    },
    /** @returns {HomeStatus} */
    status: () => status,
    isLive: () => status === "live",
    simulation: () => simulation,
    /** @param {string} globalId */
    device: (globalId) => (status === "live" ? devices.get(globalId) : undefined),
    /** Last known record, also while reconnecting. */
    lastKnown: (globalId) => devices.get(globalId),
    devices: () => [...devices.values()],
    /** POST /devices/{globalId}/commands */
    command: (globalId, body) => post(deviceUrl(opts.baseUrl, globalId, "/commands"), body),
    /** POST /simulate/devices/{globalId}/press (test environment only) */
    press: (globalId, body) => post(pressUrl(opts.baseUrl, globalId), body),
  };
}
