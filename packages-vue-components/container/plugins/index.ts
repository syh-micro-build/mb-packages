import {
  EUiType
} from "mb-vue-components-config-provider";

import {
  Plugin
} from "vite";

let uiType: EUiType = EUiType.ELEMENT;

function createVirtualPlugin(name: string, virtualId: string, load: (id: string) => string | null): Plugin {
  const resolvedVirtualId = `\0${virtualId}`;

  return {
    name,
    resolveId(id) {
      if (id === virtualId) {
        return resolvedVirtualId;
      }
    },
    load(id) {
      if (id === resolvedVirtualId) {
        return load(id);
      }
    }
  };
}

export default function uiTypeContainerPlugins(): Plugin[] {

  // 组件映射插件
  const componentMapPlugin = {
    transform(src: string, id: string): string | null {
      if (id.endsWith(".vue")) {
        const configProviderRegex = /\$setup\["ConfigProvider"\],\s*\{\s*type:\s*(\$setup\.EUiType\.[A-Z_]+)/g;

        const matches = Array.from(src.matchAll(configProviderRegex));

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

      return null;
    },
    ...createVirtualPlugin("component-map-plugin", "virtual:component-map-plugin", () => {
      const importPath = uiType === EUiType.ELEMENT ? "../components/element-x" : "../components/arco-design-x";

      const components = ["Button"];

      return `
        import { ${components.join(", ")} } from "${importPath}";
        export { ${components.join(", ")} };
      `;
    })
  };

  // CSS 加载插件
  const cssLoadPlugin = createVirtualPlugin("css-load-plugin", "virtual:css-load-plugin", () => `
    export const cssLoad = async (type) => {
      try {
        if (type) {
          await import("@arco-design/web-vue/dist/arco.css");
        } else {
          await import("element-plus/dist/index.css");
        }
        return 'CSS 加载成功！';
      } catch (error) {
        console.error('❌ CSS 加载失败:', error);
        throw error;
      }
    }
  `);

  return [componentMapPlugin, cssLoadPlugin];
}
