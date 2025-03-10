import {
  storybookTest
} from "@storybook/experimental-addon-test/vitest-plugin";
import path from "node:path";
import {
  fileURLToPath
} from "node:url";
import {
  defineConfig
} from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    workspace: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook")
          })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            name: "chromium",
            provider: "playwright"
          },
          setupFiles: [".storybook/vitest.setup.ts"]
        }
      }
    ]
  }
});
