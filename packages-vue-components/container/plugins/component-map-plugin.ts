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
    },

    /**
     * 在热更新时，生成一个配置文件，然后读取配置文件
     *
     * 在 provide 处生成配置文件，在这进行读取，然后把 load 里面的内容，想办法，迁移过来
     */
    handleHotUpdate() {

      // console.log(222);
    }
  };
}
