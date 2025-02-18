import {
  Plugin
} from "vite";

export default function componentMapPlugin(): Plugin {
  const virtualModuleId = "virtual:component-map-plugin";

  const resolvedVirtualModuleId = `\0${virtualModuleId}`;

  return {
    name: "component-map-plugin",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {

        const importPath = true
          ? "@/components/element-x"
          : "@/components/arco-design-x";

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
