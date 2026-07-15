/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    open: true
  },
  test: {
    // Reducers and thunks are pure logic; no DOM is needed.
    environment: "node"
  }
});
