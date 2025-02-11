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

function createDemoContainer(md: MarkdownRenderer): IContainerOpts {
  return {
    validate(params) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : "";

        const sourceFileToken = tokens[idx + 2];

        let source = "";

        const sourceFile = sourceFileToken.children?.[0].content ?? "";

        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(path.resolve(docRoot, "examples", `${sourceFile}.vue`), "utf-8");
        }

        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`);
        }

        return `<Demo source="${encodeURIComponent(md.render(`\`\`\` vue\n${source}\`\`\``))}" 
        path="${sourceFile}" raw-source="${encodeURIComponent(source)}" 
        description="${encodeURIComponent(md.render(description))}">
  <template #source><ep-${sourceFile.replaceAll("/", "-")}/></template>`;
      }

      return "</Demo>\n";

    }
  };
}

export default createDemoContainer;
