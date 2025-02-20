import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {
  componentMapPlugin
} from "mb-vue-components-container";
import vueDevTools from "vite-plugin-vue-devtools";

import {
  fileURLToPath,
  URL
} from "node:url";
import {
  defineConfig
} from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    componentMapPlugin()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
