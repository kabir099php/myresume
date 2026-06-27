import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Frontend dev server proxies API calls to the Node backend during development.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
