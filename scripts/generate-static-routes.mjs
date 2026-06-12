// Pre-render a real HTML file for each client-side route so GitHub Pages
// returns HTTP 200 (not its SPA-fallback 404) for deep links, AND give each
// project page its own Open Graph tags (title / description / image) so link
// previews (e.g. LinkedIn, Slack) reflect the specific project instead of the
// generic homepage.
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

// Absolute site origin + base path, used to build canonical/OG URLs.
const ORIGIN = process.env.SITE_ORIGIN || "https://sancharib-ship-it.github.io";
const BASE = process.env.VITE_BASE || "/";
const siteRoot = ORIGIN.replace(/\/$/, "") + BASE; // e.g. https://…github.io/PORTFOLIO/

const baseHtml = readFileSync(indexHtml, "utf-8");
const dataSrc = readFileSync(join(root, "src/data/projects.ts"), "utf-8");

// 1) Map image import identifiers -> source asset path (resolve "@/..." -> "src/...").
const imageVars = {};
for (const m of dataSrc.matchAll(/import\s+(\w+)\s+from\s+"(@\/assets\/[^"]+)"/g)) {
  imageVars[m[1]] = m[2].replace(/^@\//, "src/");
}

// 2) Map source asset path -> hashed output file via the Vite manifest.
const manifestPath = join(dist, ".vite", "manifest.json");
const manifest = existsSync(manifestPath)
  ? JSON.parse(readFileSync(manifestPath, "utf-8"))
  : {};
const assetUrl = (varName) => {
  const srcPath = imageVars[varName];
  const entry = srcPath && manifest[srcPath];
  return entry?.file ? siteRoot + entry.file : null;
};

// 3) Pull title / description / cardImage for each project, split into blocks by slug.
const unescape = (s) => s.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const slugRe = /slug:\s*"([^"]+)"/g;
const matches = [...dataSrc.matchAll(slugRe)];
const projects = matches.map((m, i) => {
  const block = dataSrc.slice(m.index, matches[i + 1]?.index ?? dataSrc.length);
  const pick = (re) => (block.match(re)?.[1] ?? null);
  return {
    slug: m[1],
    title: pick(/title:\s*"((?:[^"\\]|\\.)*)"/),
    description: pick(/\n\s*description:\s*"((?:[^"\\]|\\.)*)"/),
    cardImage: pick(/cardImage:\s*(\w+)/),
  };
});

// Replace (or rely on the existing homepage value as fallback for) each meta tag.
function buildHtml({ title, description, image, url }) {
  let html = baseHtml;
  const sub = (pattern, replacement) => {
    if (pattern.test(html)) html = html.replace(pattern, replacement);
  };
  if (title) {
    const t = esc(title);
    sub(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
    sub(/(<meta property="og:title" content=")[\s\S]*?(">)/, `$1${t}$2`);
    sub(/(<meta name="twitter:title" content=")[\s\S]*?(">)/, `$1${t}$2`);
  }
  if (description) {
    const d = esc(description);
    sub(/(<meta name="description" content=")[\s\S]*?(">)/, `$1${d}$2`);
    sub(/(<meta property="og:description" content=")[\s\S]*?(">)/, `$1${d}$2`);
    sub(/(<meta name="twitter:description" content=")[\s\S]*?(">)/, `$1${d}$2`);
  }
  if (image) {
    sub(/(<meta property="og:image" content=")[\s\S]*?(">)/, `$1${esc(image)}$2`);
    sub(/(<meta name="twitter:image" content=")[\s\S]*?(">)/, `$1${esc(image)}$2`);
  }
  // og:url + canonical (added if not already present).
  if (url && !/og:url/.test(html)) {
    html = html.replace(
      /<meta property="og:type"[^>]*>/,
      `$&\n  <meta property="og:url" content="${esc(url)}">\n  <link rel="canonical" href="${esc(url)}">`,
    );
  }
  return html;
}

const routes = [];

// Project case-study pages.
for (const p of projects) {
  const url = `${siteRoot}projects/${p.slug}`;
  const html = buildHtml({
    title: p.title,
    description: p.description,
    image: p.cardImage ? assetUrl(p.cardImage) : null,
    url,
  });
  const dir = join(dist, "projects", p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  routes.push(`projects/${p.slug}`);
}

// Other non-home routes (no per-page meta — fall back to homepage defaults).
for (const route of ["work-experience"]) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), baseHtml);
  routes.push(route);
}

const withImg = projects.filter((p) => p.cardImage && assetUrl(p.cardImage)).length;
console.log(
  `[static-routes] wrote ${routes.length} routes; ${withImg}/${projects.length} project pages have a custom preview image.`,
);
