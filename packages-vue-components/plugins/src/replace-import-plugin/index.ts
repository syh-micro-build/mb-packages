import type {
  PluginOption
} from "vite";

import {
  EUiType
} from "@mb-kit/vue-config-provider";

import {
  execSync
} from "child_process";
import fs, {
  promises
} from "fs";
import {
  glob
} from "glob";
import path from "path";

const readFilesContent = async (files: string[]) => {
  const contents = await Promise.all(files.map(async filePath => {
    try {
      const content = await promises.readFile(filePath, "utf-8");

      return {
        path: path.normalize(filePath),
        content
      };
    } catch (error) {
      console.error(`🙅 读取文件失败: ${filePath}`, error);

      return null;
    }
  }));

  return contents.filter(Boolean) as { path: string; content: string }[];
};

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

export default function replaceImportPlugin(): PluginOption {
  let uiType: EUiType;

  return {
    name: "replace-import-plugin",
    transform(code: string, id: string) {
      if (uiType) {
        code = code.replace(/import\.meta\.env\.VITE_UI_TYPY/g, JSON.stringify(uiType));
      }

      if (id.includes("container-render") && process.env.NODE_ENV === "production") {
        if (
          id.includes("container-render/dist/container/dist/ui/index.vue.js") ||
          id.includes("container-render/dist/container/dist/utils/load-frame-type.js")
        ) {
          fs.readFile(id, "utf8", (err, data) => {
            if (err) {throw err;}

            let modifiedCode: string = "";

            // 根据 UI 类型动态配置替换规则
            const replacementConfig = {
              [EUiType.ARCO_DESIGN]: {
                pattern: /import\s+([\w$]+)\s+from\s+['"](\.\.[\\/]const[\\/]element-x[\\/]index\.js)['"];?/g,
                replacement: "import $1 from \"../const/arco-design-x/index.js\";"
              },

              default: {
                pattern: /import\s+([\w$]+)\s+from\s+['"](\.\.[\\/]const[\\/]arco-design-x[\\/]index\.js)['"];?/g,
                replacement: "import $1 from \"../const/element-x/index.js\";"
              }
            };

            const config = uiType === EUiType.ARCO_DESIGN
              ? replacementConfig[EUiType.ARCO_DESIGN]
              : replacementConfig.default;

            modifiedCode = data.replace(config.pattern, config.replacement);

            fs.writeFile(id, modifiedCode, "utf8", err => {
              if (err) {throw err;}

              // eslint-disable-next-line no-console
              console.log("✅ 文件修改成功:", id);
            });
          });
        }

        if (id.includes(uiType === EUiType.ARCO_DESIGN ? "container-render/dist/container/dist/arco-design-x" : "container-render/dist/container/dist/element-x")) {
          return "";
        }
      }

      return code;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    configResolved(config: any) {
      if (uiType) {
        config.define["import.meta.env.VITE_UI_TYPY"] = JSON.stringify(uiType);
      }
    },
    config: async () => {
      try {
        execSync("rm -rf node_modules/.vite", {
          stdio: "inherit"
        });
      } catch (error) {
        console.error("Error deleting node_modules/.vite folder", error);
      }

      // 读取文件内容
      const files = await glob("**/*.{vue,tsx}", {
        ignore: "node_modules/**"
      });

      const fileContents = await readFilesContent(files);

      const allTypes = fileContents.flatMap(({
        content,
        path
      }) => extractConfigProviderType(content, path)).filter(Boolean);

      if(allTypes.length > 1 || allTypes.length === 0) {
        throw new Error("🙅 存在多个 ConfigProvider 标签，一个项目中，只能存在一个。");
      }

      uiType = EUiType[allTypes[0] as keyof typeof EUiType];
    }
  };
}
