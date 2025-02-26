import {
  EUiType
} from "@micro-test-01/vue-config-provider";

import {
  Plugin
} from "vite";

export default function dynamicEnvPlugin(): Plugin {
  let uiType: EUiType;

  return {
    name: "dynamic-env-plugin",

    // 在 transform 中计算 uiType
    async transform(code, id) {
      if (id.endsWith(".vue") || id.endsWith(".tsx") || id.endsWith(".ts") || id.endsWith(".js")) {
        const configProviderRegex = /\$setup\["ConfigProvider"\],\s*\{\s*type:\s*(\$setup\.EUiType\.[A-Z_]+)/g;

        const matches = Array.from(code.matchAll(configProviderRegex));

        if (matches.length > 0) {
          const [selectedMatch] = matches;

          if (selectedMatch) {
            const typeValue = selectedMatch[1];

            const enumValue = typeValue.split(".").pop();

            console.warn("Enum value:", enumValue);

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

    // 在 configResolved 钩子中动态修改 define 配置
    configResolved(config) {
      if (uiType) {
        config.define["import.meta.env.VITE_UI_TYPY"] = JSON.stringify(uiType);
      }
    }
  };
}
