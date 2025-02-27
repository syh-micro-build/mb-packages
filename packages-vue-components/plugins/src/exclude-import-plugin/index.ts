import type {
  PluginOption
} from "vite";

import {
  EUiType
} from "@mb-kit/vue-config-provider";

export default function excludeImportPlugin(): PluginOption {
  let uiType: EUiType;

  return {
    name: "exclude-import-plugin",
    transform(code: string, id: string) {
      if (id.endsWith(".vue") || id.endsWith(".tsx") || id.endsWith(".ts") || id.endsWith(".js")) {
        const configProviderRegex = /<ConfigProvider\b[^>]*:type="([^"]+)"[^>]*>/g;

        const matches = Array.from(code.matchAll(configProviderRegex));

        if (matches.length > 0) {
          const [selectedMatch] = matches;

          if (selectedMatch) {
            const typeValue = selectedMatch[1];

            const enumValue = typeValue.split(".").pop(); // ELEMENT

            if (enumValue && enumValue in EUiType) {
              uiType = EUiType[enumValue as keyof typeof EUiType];
            }
          }
        }
      }

      if (uiType && id.includes(uiType === EUiType.ELEMENT ? "container-render/dist/container/dist/arco-design-x" : "container-render/dist/container/dist/element-x")) {
        return "";
      }
    }
  };
}
