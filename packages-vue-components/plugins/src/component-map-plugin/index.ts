import {
  EUiType
} from "@mb-kit/vue-config-provider";

import {
  execSync
} from "child_process";
import {
  promises as fs
} from "fs";
import {
  glob
} from "glob";
import path from "path";
import {
  Plugin
} from "vite";

const readFilesContent = async (files: string[]) => {
  const contents = await Promise.all(files.map(async filePath => {
    try {
      const content = await fs.readFile(filePath, "utf-8");

      return {
        path: path.normalize(filePath),
        content
      };
    } catch (error) {
      console.error(`读取文件失败: ${filePath}`, error);

      return null;
    }
  }));

  return contents.filter(Boolean) as { path: string; content: string }[];
};

/**
 * https://juejin.cn/post/7115966428343189540
 */
const extractConfigProviderType = (content: string, _filePath: string): string => {

  // 正则表达式匹配所有 ConfigProvider 标签的 :type 属性值
  const regex = /<ConfigProvider\b[^>]*:type="([^"]+)"[^>]*>/g;

  let matche: string = "";

  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match[1]) {

      // 提取 EUiType.XXX 中的 XXX 部分
      const typeValue = match[1].split(".").pop();

      if (typeValue) {
        matche = typeValue;
      }
    }
  }

  return matche;
};

export default function componentMapPlugin(): Plugin {
  let uiType: EUiType;

  return {
    name: "component-map-plugin",
    transform(code, _id) {

      // 这个读取可以省略，因为在 config 中已经获取了
      /*
      if (id.endsWith(".vue") || id.endsWith(".tsx") || id.endsWith(".ts") || id.endsWith(".js")) {
        const configProviderRegex = /\$setup\["ConfigProvider"\],\s*\{\s*type:\s*(\$setup\.EUiType\.[A-Z_]+)/g;

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
      */

      // 只有在 uiType 被赋值后才执行替换
      if (uiType) {
        code = code.replace(/import\.meta\.env\.VITE_UI_TYPY/g, JSON.stringify(uiType));
      }

      return code;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    configResolved(config: any) {
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
    },
    config: async () => {

      // 读取文件内容
      const files = await glob("**/*.{vue,tsx}", {
        ignore: "node_modules/**"
      });

      const fileContents = await readFilesContent(files);

      const allTypes = fileContents.flatMap(({
        content,
        path
      }) => extractConfigProviderType(content, path)).filter(Boolean);

      if(allTypes.length > 1) {
        throw new Error("存在多个 ConfigProvider 标签，一个项目中，只能存在一个。");
      }

      uiType = EUiType[allTypes[0] as keyof typeof EUiType];

      const external = uiType === EUiType.ELEMENT ? ["@mb-kit/vue-arco-design-x"] : ["@mb-kit/vue-element-x"];

      return {
        build: {
          rollupOptions: {
            external
          }
        }
      };
    }
  };
}
