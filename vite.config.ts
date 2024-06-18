import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "Motion UI",
      fileName: (format) => `index.${format}.js`,
    },
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "tailwindcss",
        /\.spec\.(ts|tsx)$/,
        /\.stories\.(ts|tsx)$/,
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
