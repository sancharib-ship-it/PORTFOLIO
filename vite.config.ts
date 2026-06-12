import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for deployment. Defaults to "/" for local dev; CI (GitHub Pages)
  // sets VITE_BASE to "/<repo>/" so assets and routes resolve under the subpath.
  base: process.env.VITE_BASE || "/",
  // Emit a build manifest so the postbuild step can resolve each project's
  // hashed image asset to a real URL for per-page Open Graph tags.
  build: {
    manifest: true,
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
