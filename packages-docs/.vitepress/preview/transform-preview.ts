import fs from "fs";
import path from "path";
import {
  MarkdownRenderer
} from "vitepress";

import {
  IMixFilesItem,
  IComponentsProps,
  IProps,
  EComponentType
} from "../types";
import {
  formatString
} from "../utils";

export default function transformPreview(md: MarkdownRenderer, token, mdFile): string {
  const mixFilesValue = token.content.match(/mixFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/);

  let pathFile: string = "";

  let source: string = "";

  const arr: IComponentsProps[] = [];

  let obj: IProps = {
    items: [],
    defaultFile: "",
    description: ""
  };

  if(mixFilesValue?.[1]) {
    const str = `${formatString(mixFilesValue[1])}`;

    const validJsonString = str.
        replace(/(\w+)\s*:/g, "\"$1\":"). // 给键名加上双引号
        replace(/'([^']+)'/g, "\"$1\""). // 替换单引号为双引号
        replace(/,\s*([\]}])/g, "$1"); // 去除尾随逗号

    obj = JSON.parse(validJsonString);

    obj.items.forEach((item: IMixFilesItem, index) => {
      pathFile = path.join(path.dirname(mdFile.path), `../../examples/${item.file}`).replace(/\\/g, "/");

      source = fs.readFileSync(pathFile, "utf-8");

      const type = item.type === EComponentType.REACT ? "tsx" : item.type;

      if(item.file === obj.defaultFile) {
        arr.push({
          name: item.name || path.basename(pathFile, path.extname(pathFile)),
          path: pathFile,
          source: md.render(`\`\`\` ${type}\n${source}\`\`\``),
          type: item.type
        });

        arr.unshift(arr.splice(index, 1)[0]);

        return;
      }

      arr.push({
        name: item.name || path.basename(pathFile, path.extname(pathFile)),
        path: pathFile,
        source: md.render(`\`\`\` ${type}\n${source}\`\`\``),
        type: item.type
      });
    });
  }

  return `<DemoHtml items="${encodeURIComponent(JSON.stringify(arr))}" description="${obj?.description || ""}"></DemoHtml>`;
}
