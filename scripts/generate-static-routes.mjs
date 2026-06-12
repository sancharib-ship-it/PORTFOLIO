// Pre-render a real HTML file for each client-side route so GitHub Pages
// returns HTTP 200 (not its SPA-fallback 404) for deep links. Without this,
// links like /projects/<slug> render fine in a browser but report 404 to
// crawlers/validators (e.g. LinkedIn), which then reject them.
//
// Runs automatically after `vite build` via the "postbuild" npm script.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");

if (!existsSync(indexHtml)) {
  console.error("[static-routes] dist/index.html not found — run `vite build` first.");
  process.exit(1);
}

const html = readFileSync(indexHtml, "utf-8");

// Extract every project slug from the data source.
const projects = readFileSync(join(root, "src/data/projects.ts"), "utf-8");
const slugs = [...projects.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

// Non-home routes declared in src/App.tsx that should resolve directly.
const routes = ["work-experience", ...slugs.map((s) => `projects/${s}`)];

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}

console.log(`[static-routes] wrote ${routes.length} pre-rendered routes (${slugs.length} projects).`);
