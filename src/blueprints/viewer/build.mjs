#!/usr/bin/env node
// Builds the viewer bundles (`npm run build`). Neither is committed; CI builds
// them (pages-content, viewer-js) and so does `npm run build` locally.
//
// - dist/viewer.js + dist/chunks/*.js: ES modules for the Pages site
//   (docs/viewer/index.html imports ./viewer.js). Rarely used features (edit
//   mode, measure, walk, AR export, the Realistic catalogue parser) are split
//   into chunks loaded with import() after the model shows, so the first
//   picture only waits for the entry. Chunk names carry a content hash, so only
//   the entry needs the ?v= stamp (preview_hub.ensure_viewer_shell).
// - viewer.iife.js: one classic script with the same code (dynamic imports
//   inlined), embedded by the offline HTML export (export_utils._viewer_iife).
//
// `node build.mjs --meta` also writes dist/meta.json (esbuild metafile) for
// scripts/bundle_budget.mjs and bundle analysis.
import * as esbuild from "esbuild";
import { rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { inlineAttachPlugin } from "./inlineAttachPlugin.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "dist");
rmSync(dist, { recursive: true, force: true });

// inlineAttachPlugin folds attach*(ctx) modules back into mountViewer so
// minification can rename locals (ctx.property names cannot be shortened).
const common = { absWorkingDir: here, bundle: true, minify: true, logLevel: "warning", legalComments: "none", plugins: [inlineAttachPlugin()] };

const esm = await esbuild.build({
  ...common,
  entryPoints: { viewer: "main.js" },
  format: "esm",
  splitting: true,
  outdir: dist,
  chunkNames: "chunks/[name]-[hash]",
  metafile: true,
});
if (process.argv.includes("--meta")) {
  writeFileSync(join(dist, "meta.json"), JSON.stringify(esm.metafile));
}

await esbuild.build({
  ...common,
  entryPoints: ["main.js"],
  format: "iife",
  globalName: "BlueprintsViewerBundle",
  outfile: join(here, "viewer.iife.js"),
});
