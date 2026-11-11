/**
 * Home live client: config, look and text helpers, and the connect /
 * fallback / reconnect cycle against a fake fetch and WebSocket.
 * Run from this directory: node homeLive.test.mjs
 */
import assert from "node:assert/strict";
import {
  DEFAULT_HOME_URL,
  HOME_MODE_KEY,
  RETRY_MS,
  createHomeClient,
  deviceLines,
  eventsUrl,
  indexHasHomeDevices,
  kelvinToHex,
  lightLook,
  pressTarget,
  pressUrl,
  resolveHomeConfig,
  rockersOf,
} from "./homeLive.js";
import { registerElementActions } from "./elementActions.js";
import { createTapRegistry } from "./interactions.js";

// --- config ---
const store = (v) => ({ getItem: (k) => (k === HOME_MODE_KEY ? v : null) });
assert.deepEqual(resolveHomeConfig({}), { mode: "live", baseUrl: DEFAULT_HOME_URL });
assert.equal(resolveHomeConfig({ storage: store("off") }).mode, "off");
assert.equal(resolveHomeConfig({ storage: store("off"), search: "?home=live" }).mode, "live");
assert.equal(resolveHomeConfig({ search: "?m=ground_floor&home=OFF" }).mode, "off");
assert.equal(resolveHomeConfig({ search: "?home=bogus" }).mode, "live");
assert.equal(
  resolveHomeConfig({ search: "?homeUrl=http://127.0.0.1:8080/" }).baseUrl,
  "http://127.0.0.1:8080",
);
assert.equal(resolveHomeConfig({ search: "?homeUrl=javascript:alert(1)" }).baseUrl, DEFAULT_HOME_URL);
assert.equal(
  resolveHomeConfig({ storage: { getItem() { throw new Error("denied"); } } }).mode,
  "live",
  "storage errors fall back to the default",
);

assert.equal(eventsUrl("https://h.example.net"), "wss://h.example.net/events");
assert.equal(eventsUrl("http://127.0.0.1:8080/"), "ws://127.0.0.1:8080/events");
assert.equal(
  pressUrl("https://h", "0rrGAra69KtRb32JPs4So$"),
  "https://h/simulate/devices/0rrGAra69KtRb32JPs4So%24/press",
  "GlobalId `$` is percent-encoded (openapi.yaml globalId parameter)",
);

assert.equal(indexHasHomeDevices(null), false);
assert.equal(indexHasHomeDevices({ elements: { a: { type: "IfcWall" } } }), false);
assert.equal(indexHasHomeDevices({ elements: { a: { type: "IfcLightFixture" } } }), true);

// --- looks and text ---
const light = (on, extra = {}) => ({
  globalId: "14ZuYBBinKg8wsRph5kS9K",
  blueprintsId: "C12-S",
  deviceType: "ColorTemperatureLight",
  online: true,
  state: {
    onOff: { onOff: on },
    levelControl: { currentLevel: 127 },
    colorControl: { colorTemperatureMireds: 250 },
    derived: { channels: { warm: 50, cool: 50 } },
  },
  ...extra,
});
const look = lightLook(light(true));
assert.equal(look.on, true);
assert.ok(Math.abs(look.level - 0.5) < 0.01);
assert.equal(look.kelvin, 4000);
assert.equal(lightLook(light(true, { online: false })).on, false, "offline device draws as off");
assert.equal(lightLook(light(null)).on, false);
const warm = kelvinToHex(2700);
const cool = kelvinToHex(6500);
assert.ok((warm & 0xff) < (cool & 0xff), "warmer light has less blue");
assert.equal(warm >> 16, 255);

const t = (k) => k;
assert.deepEqual(deviceLines(light(true), t), [
  "home.on",
  "home.level 50 %",
  "4000 K",
  "home.warm 50 % · home.cool 50 %",
]);
assert.deepEqual(
  deviceLines({ deviceType: "ContactSensor", online: false, state: { booleanState: { stateValue: false } } }, t),
  ["home.deviceOffline", "home.contactOpen"],
);
assert.deepEqual(
  deviceLines({ deviceType: "WindowCovering", online: true, state: { windowCovering: { currentPositionLiftPercent100ths: 2500 } } }, t),
  ["home.closedPct 25 %"],
);
assert.deepEqual(deviceLines(undefined, t), []);

// --- rockers ---
assert.deepEqual(rockersOf({ objectType: "PushButton" }), ["rocker"]);
assert.deepEqual(rockersOf({ objectType: "DoublePushButton" }), ["rocker-1", "rocker-2"]);
assert.deepEqual(pressTarget({}, { dy: 0.01, side: 0.02 }), { rocker: "rocker", position: "up", kind: "short" });
assert.deepEqual(pressTarget({}, { dy: -0.01, side: 0 }).position, "down");
assert.equal(pressTarget({ objectType: "DoublePushButton" }, { dy: 1, side: -1 }).rocker, "rocker-1");
assert.equal(pressTarget({ objectType: "DoublePushButton" }, { dy: 1, side: 1 }).rocker, "rocker-2");

// --- client against fakes ---
function harness({ healthOk = true, simulation = true } = {}) {
  const calls = [];
  const timers = [];
  const sockets = [];
  let up = healthOk;
  class FakeWS {
    constructor(url) {
      this.url = url;
      sockets.push(this);
    }
    close() {
      this.onclose?.();
    }
    send(obj) {
      this.onmessage?.({ data: JSON.stringify(obj) });
    }
  }
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url, init });
    if (!up) throw new TypeError("Failed to fetch");
    if (url.endsWith("/health")) {
      return { ok: true, status: 200, json: async () => ({ status: "ok", devices: 17, online: 17, simulation, uptimeSeconds: 1 }) };
    }
    if (url.includes("BAD")) {
      return { ok: false, status: 422, json: async () => ({ error: { code: "x", message: "not a light" } }) };
    }
    return { ok: true, status: 200, json: async () => ({ ok: true }) };
  };
  const statuses = [];
  const seen = [];
  const switches = [];
  const client = createHomeClient({
    baseUrl: "https://h.example.net",
    fetchImpl,
    WebSocketImpl: FakeWS,
    setTimer: (fn, ms) => {
      timers.push({ fn, ms });
      return timers.length;
    },
    clearTimer: () => {},
    onStatus: (s) => statuses.push(s),
    onDevice: (d) => seen.push(d),
    onSwitch: (e) => switches.push(e),
  });
  return { client, calls, timers, sockets, statuses, seen, switches, setUp: (v) => (up = v) };
}
const tick = () => new Promise((r) => setImmediate(r));

{
  const h = harness();
  assert.equal(h.client.status(), "off");
  assert.equal((await h.client.command("x", { type: "on" })).ok, false, "no POST while not live");
  assert.equal(h.calls.length, 0);
  h.client.start();
  await tick();
  assert.equal(h.sockets.length, 1);
  assert.equal(h.sockets[0].url, "wss://h.example.net/events");
  assert.equal(h.client.isLive(), false, "not live before the snapshot");
  h.sockets[0].send({ type: "snapshot", devices: [light(false)] });
  assert.equal(h.client.status(), "live");
  assert.equal(h.client.simulation(), true);
  assert.equal(h.client.device("14ZuYBBinKg8wsRph5kS9K").state.onOff.onOff, false);
  h.sockets[0].send({ type: "state", device: light(true) });
  assert.equal(h.client.device("14ZuYBBinKg8wsRph5kS9K").state.onOff.onOff, true);
  assert.equal(h.seen.length, 2);
  h.sockets[0].send({ type: "switch", event: { globalId: "g", event: "initialPress" } });
  assert.equal(h.switches.length, 1);
  h.sockets[0].onmessage({ data: "not json" });
  h.sockets[0].send({ type: "automation", report: {} });

  const ok = await h.client.press("0rrGAra69KtRb32JPs4SoS", { rocker: "rocker", position: "up", kind: "short" });
  assert.equal(ok.ok, true);
  const post = h.calls.at(-1);
  assert.equal(post.url, "https://h.example.net/simulate/devices/0rrGAra69KtRb32JPs4SoS/press");
  assert.equal(post.init.method, "POST");
  assert.equal(post.init.headers["Content-Type"], "application/json");
  assert.deepEqual(JSON.parse(post.init.body), { rocker: "rocker", position: "up", kind: "short" });
  const bad = await h.client.command("BAD", { type: "toggle" });
  assert.deepEqual(bad, { ok: false, status: 422, error: "not a light" });

  // Drop: back to "connecting", device() hides stale state, retry scheduled.
  h.sockets[0].close();
  assert.equal(h.client.status(), "connecting");
  assert.equal(h.client.device("14ZuYBBinKg8wsRph5kS9K"), undefined);
  assert.ok(h.client.lastKnown("14ZuYBBinKg8wsRph5kS9K"), "last known state stays for the inspector");
  assert.equal(h.timers.at(-1).ms, RETRY_MS[0]);
  h.timers.at(-1).fn();
  await tick();
  assert.equal(h.sockets.length, 2);
  h.sockets[1].send({ type: "snapshot", devices: [] });
  assert.equal(h.client.isLive(), true);

  h.client.stop();
  assert.equal(h.client.status(), "off");
  assert.equal(h.client.lastKnown("14ZuYBBinKg8wsRph5kS9K"), undefined);
  const before = h.timers.length;
  await tick();
  assert.equal(h.timers.length, before, "stop does not schedule a retry");
}

{
  // Unreachable Home: no socket, status unreachable, growing backoff.
  const h = harness({ healthOk: false });
  h.client.start();
  await tick();
  assert.equal(h.client.status(), "unreachable");
  assert.equal(h.sockets.length, 0);
  // Timers: the /health timeout, then the retry (the last one set).
  assert.equal(h.timers.at(-1).ms, RETRY_MS[0]);
  h.timers.at(-1).fn();
  await tick();
  assert.equal(h.client.status(), "unreachable");
  assert.equal(h.timers.at(-1).ms, RETRY_MS[1], "backoff grows");
  // Comes back.
  h.setUp(true);
  h.timers.at(-1).fn();
  await tick();
  assert.equal(h.sockets.length, 1);
  h.sockets[0].send({ type: "snapshot", devices: [] });
  assert.equal(h.client.status(), "live");
  h.client.stop();
}

{
  // Server without simulation hooks.
  const h = harness({ simulation: false });
  h.client.start();
  await tick();
  h.sockets[0].send({ type: "snapshot", devices: [] });
  assert.equal(h.client.simulation(), false);
  h.client.stop();
}

// --- element actions: live-only cover, rocker buttons ---
{
  const registry = createTapRegistry();
  const log = [];
  let live = false;
  registerElementActions(registry, {
    elementOf: (obj) => obj.el,
    isLive: () => live,
    onSwitch: (el, hit) => log.push(`press:${hit.point}`),
    switchActions: () =>
      live
        ? [
            { id: "up", labelKey: "home.up", label: "Up", run: () => log.push("up") },
            { id: "down", labelKey: "home.down", label: "Down", run: () => log.push("down") },
          ]
        : null,
    onCover: () => log.push("cover"),
    coverActions: () => [{ id: "coverOpen", labelKey: "ui.open", run: () => log.push("open") }],
  });
  const sw = { object: { el: { type: "IfcSwitchingDevice" } }, point: "p" };
  const blind = { object: { el: { type: "IfcActuator" } } };
  assert.deepEqual(registry.actionsFor([sw], {}).map((a) => a.labelKey), ["ui.press"], "offline: one Press");
  assert.equal(registry.dispatch([blind], {}), false, "offline: blind motor is not interactive");
  live = true;
  assert.deepEqual(registry.actionsFor([sw], {}).map((a) => a.id), ["up", "down"]);
  registry.dispatch([sw], {});
  assert.deepEqual(log, ["press:p"], "tap passes the hit to onSwitch");
  assert.equal(registry.dispatch([blind], {}), true);
  assert.deepEqual(registry.actionsFor([blind], {}).map((a) => a.id), ["coverOpen"]);
}

console.log("homeLive.test.mjs ok");
