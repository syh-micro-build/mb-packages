import fs from "fs";
import path, {
  resolve
} from "path";
import {
  MarkdownRenderer
} from "vitepress";

const projRoot = resolve(__dirname, "..", "..", "..");

// Docs
const docsDirName = "packages-docs";

const docRoot = resolve(projRoot, docsDirName);

interface IContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?: MarkdownRenderer["renderer"]["rules"]["container"];
}

function createJsonContainer(md: MarkdownRenderer): IContainerOpts {
  return {
    validate(params) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      return !!params.trim().match(/^json\s*(.*)$/);
    },

    render(tokens, idx) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const m = tokens[idx].info.trim().match(/^json\s*(.*)$/);

      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";

        const sourceFileToken = tokens[idx + 2];

        let source = "";

        const sourceFile = sourceFileToken.children?.[0].content ?? "";

        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(path.resolve(docRoot, "examples", `${sourceFile}.json`), "utf-8");
        }

        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`);
        }

        return `<DemoJsonAndHtml source="${encodeURIComponent(md.render(`\`\`\` json\n${source}\`\`\``))}" path="${sourceFile}" description="${encodeURIComponent(md.render(description))}" code="${encodeURIComponent(source)}">`;
      }

      return "</DemoJsonAndHtml>\n";

    }
  };
}

export default createJsonContainer;
