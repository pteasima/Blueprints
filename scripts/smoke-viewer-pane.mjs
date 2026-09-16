/**
 * Smoke: wide right pane (no handle, toggle, reopen) + range scrub without capture.
 * Run: node scripts/smoke-viewer-pane.mjs
 */
import { createServer } from "node:http";
import { readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { chromium } from "playwright";

const root = join(process.cwd(), "docs");
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".glb": "model/gltf-binary",
  ".css": "text/css",
  ".png": "image/png",
  ".usdz": "model/vnd.usdz+zip",
};

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", "http://127.0.0.1");
  let path = decodeURIComponent(url.pathname);
  if (path.endsWith("/")) path += "index.html";
  const file = join(root, path);
  try {
    if (!statSync(file).isFile()) throw new Error("missing");
    res.writeHead(200, { "content-type": mime[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
  } catch {
    res.writeHead(404);
    res.end("missing");
  }
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();
const base = `http://127.0.0.1:${port}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
page.on("pageerror", (e) => console.error("pageerror", e));

await page.goto(`${base}/viewer/?m=obyvak`, { waitUntil: "networkidle" });
await page.waitForFunction(() => document.querySelectorAll("#cuts input[type=range]").length > 0, null, {
  timeout: 15000,
});

const handle = page.locator("#sheet-handle");
const toggle = page.locator("#sheet-toggle");
const sheet = page.locator("#sheet");

if (await handle.isVisible()) throw new Error("wide: handle should be hidden");
if (!(await toggle.isVisible())) throw new Error("wide: toggle should be visible");

const detentOpen = await sheet.getAttribute("data-detent");
if (detentOpen !== "open") throw new Error(`expected open, got ${detentOpen}`);

await toggle.click();
await page.waitForTimeout(400);
if ((await sheet.getAttribute("data-detent")) !== "closed") {
  throw new Error("toggle did not close pane");
}

await toggle.click();
await page.waitForTimeout(400);
if ((await sheet.getAttribute("data-detent")) !== "open") {
  throw new Error("toggle did not reopen pane");
}

// Edge swipe open after close
await toggle.click();
await page.waitForTimeout(400);
await page.mouse.move(1010, 400);
await page.mouse.down();
await page.mouse.move(700, 400, { steps: 12 });
await page.mouse.up();
await page.waitForTimeout(400);
if ((await sheet.getAttribute("data-detent")) !== "open") {
  throw new Error("edge swipe did not open pane");
}

// Body swipe close (start on title, not a control)
const title = page.locator("#section-view .sheet-title");
const box = await title.boundingBox();
if (!box) throw new Error("missing title");
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await page.mouse.down();
await page.mouse.move(box.x + box.width / 2 + 280, box.y + box.height / 2, { steps: 14 });
await page.mouse.up();
await page.waitForTimeout(400);
if ((await sheet.getAttribute("data-detent")) !== "closed") {
  throw new Error("body swipe did not close pane");
}

// Reopen and scrub range in one pointer gesture (native trackpad/mouse path)
await toggle.click();
await page.waitForTimeout(400);
const range = page.locator("#cuts input[type=range]").first();
const rbox = await range.boundingBox();
if (!rbox) throw new Error("missing range");
const y = rbox.y + rbox.height / 2;
const x0 = rbox.x + rbox.width * 0.15;
const x1 = rbox.x + rbox.width * 0.75;
await page.mouse.move(x0, y);
await page.mouse.down();
await page.mouse.move(x1, y, { steps: 10 });
await page.mouse.up();
const value = Number(await range.inputValue());
if (!(value > 0.4)) {
  throw new Error(`range did not scrub in one gesture, value=${value}`);
}

// Capture screenshots for artifacts
await page.screenshot({ path: "/opt/cursor/artifacts/viewer_wide_pane_open.png", fullPage: true });
await toggle.click();
await page.waitForTimeout(350);
await page.screenshot({ path: "/opt/cursor/artifacts/viewer_wide_pane_closed.png", fullPage: true });

console.log("smoke-viewer-pane: ok", { value });
await browser.close();
server.close();
