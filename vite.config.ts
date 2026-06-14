import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  nitro: {
    preset: "vercel"
  },
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
  ],
  tanstackStart: {
    server: { entry: "server" },
  },
});
