import {
  Plugin
} from "vite";

export default function cssLoadPlugin(): Plugin {
  const virtualModuleId = "virtual:css-load-plugin";  // 自定义虚拟模块的 ID

  const resolvedVirtualModuleId = `\0${virtualModuleId}`;  // 解析虚拟模块 ID，通常以 '\0' 开头，用来区分普通模块和虚拟模块

  return {
    name: "css-load-plugin", // 插件名称，Vite 在输出警告或错误信息时会显示这个名称
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;  // 如果请求的是 'virtual:my-module'，则返回解析后的虚拟模块 ID
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
          export const cssLoad = async (type) => {
            console.log('🎯 开始加载 CSS...');
            console.log('🎯 开始加载 CSS...');
            try {
              if (type) {
                console.log('🚀 正在加载 Arco Design CSS...');
                await import("@arco-design/web-vue/dist/arco.css");
                console.log('✅ Arco Design CSS 加载完成');
              } else {
                console.log('🚀 正在加载 Element Plus CSS...');
                await import("element-plus/dist/index.css");
                console.log('✅ Element Plus CSS 加载完成');
              }
              return 'CSS 加载成功！';
            } catch (error) {
              console.error('❌ CSS 加载失败:', error);
              throw error;
            }
          }
        `;
      }
    }
  };
}
