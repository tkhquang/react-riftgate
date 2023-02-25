import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@react-riftgate/utils",
      formats: ["es", "umd"],
      fileName: (format) => `@react-riftgate/utils.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {},
    },
  },
});
