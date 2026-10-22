import path from "node:path";
import { fileURLToPath } from "node:url";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: { "@": path.join(root, "src") },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      router: {
        addExtensions: "jsx",
      },
      server: { entry: "./server.js" },
    }),
    nitro(),
    react(),
  ],
});
