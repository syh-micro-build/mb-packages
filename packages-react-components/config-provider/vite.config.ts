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
        external: ["fs", "path", "react", "react-dom"],
        output: {
          globals: {
            fs: "fs"
          }
        }
      },
      emptyOutDir: !isWatchMode
    },
    plugins: [
      dts({
        entryRoot: "src/index",
        rollupTypes: true,
        strictOutput: true
      })
    ]
  };
});
