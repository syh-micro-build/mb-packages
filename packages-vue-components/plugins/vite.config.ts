import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.json",
      rollupTypes: true
    })
  ],
  build: {
    target: "node22",
    minify: true,
    sourcemap: false,
    rollupOptions: {
      input: "./src/index.ts",
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "dist",
          preserveModulesRoot: "src"
        }
      ],
      external: ["child_process"]
    },
    lib: {
      entry: "./src/index.ts",
      formats: ["es"]
    }
  }
});
