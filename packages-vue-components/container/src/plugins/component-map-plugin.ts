import {
  EUiType
} from "mb-vue-components-config-provider";

import {
  execSync
} from "child_process";
import {
  Plugin
} from "vite";

export default function componentMapPlugin(): Plugin {
  let uiType: EUiType;

  return {
    name: "component-map-plugin",
    transform(code, id) {
      if (id.endsWith(".vue") || id.endsWith(".tsx") || id.endsWith(".ts") || id.endsWith(".js")) {
        const configProviderRegex = /\$setup\["ConfigProvider"\],\s*\{\s*type:\s*(\$setup\.EUiType\.[A-Z_]+)/g;

        const matches = Array.from(code.matchAll(configProviderRegex));

        if (matches.length > 0) {
          const [selectedMatch] = matches;

          if (selectedMatch) {
            const typeValue = selectedMatch[1];

            const enumValue = typeValue.split(".").pop();

            if (enumValue && enumValue in EUiType) {
              uiType = EUiType[enumValue as keyof typeof EUiType];
            }
          }
        }
      }

      // 只有在 uiType 被赋值后才执行替换
      if (uiType) {
        code = code.replace(/import\.meta\.env\.VITE_UI_TYPY/g, JSON.stringify(uiType));
      }

      return code;
    },

    configResolved(config) {
      try {
        execSync("rm -rf node_modules/.vite", {
          stdio: "inherit"
        });
      } catch (error) {
        console.error("Error deleting node_modules/.vite folder", error);
      }

      if (uiType) {
        config.define["import.meta.env.VITE_UI_TYPY"] = JSON.stringify(uiType);
      }
    }
  };
}
