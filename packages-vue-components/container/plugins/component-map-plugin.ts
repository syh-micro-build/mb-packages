import {
  EUiType
} from "mb-vue-components-config-provider";

import {
  Plugin
} from "vite";

let uiType: EUiType = EUiType.ELEMENT;

export default function componentMapPlugin(): Plugin {
  const virtualModuleId = "virtual:component-map-plugin";

  const resolvedVirtualModuleId = `\0${virtualModuleId}`;

  return {
    name: "component-map-plugin",
    transform(src, id) {

      // 只处理 .vue 文件
      if (id.endsWith(".vue")) {
        const configProviderRegex = /\$setup\["ConfigProvider"\],\s*\{\s*type:\s*(\$setup\.EUiType\.[A-Z_]+)/g;

        // 获取所有匹配项
        const matches = Array.from(src.matchAll(configProviderRegex));

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

      return null;
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {

        const importPath = uiType === EUiType.ELEMENT ? "@/components/element-x" : "@/components/arco-design-x";

        const components = [
          "Button"
        ];

        const importStatement = `import {\n  ${components.join(",\n  ")}\n} from "${importPath}";`;

        const exportStatement = `export {\n  ${components.join(",\n  ")}\n};`;

        return `
          ${importStatement}
          
          ${exportStatement}
        `;
      }
    }
  };
}
