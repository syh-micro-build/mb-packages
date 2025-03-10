import react from "@vitejs/plugin-react";
import {
  resolve
} from "path";
import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(() => {
  const isWatchMode = process.argv.includes("--watch");

  return {
    build: {
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "react-config-provider",
        fileName: "index"
      },
      rollupOptions: {
        external: ["path", "react", "react-dom"]
      },
      emptyOutDir: !isWatchMode
    },
    plugins: [
      react(),
      dts({
        tsconfigPath: "./tsconfig.app.json",
        rollupTypes: false,
        strictOutput: true
      })
    ]
  };
});
