const demoReg = [
  /<demo(\s)((.|\n)*)><\/demo>/,
  /<demo(\s)((.|\n)*)\/>/
];

import {
  MarkdownRenderer
} from "vitepress";

import {
  transformPreview
} from "../preview";

const createDemoHtml = (md: MarkdownRenderer) => {

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const defaultHtmlInlineRender = md.renderer.rules.html_inline!;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const defaultHtmlBlockRender = md.renderer.rules.html_block!;

  md.renderer.rules.html_inline = (
      tokens,
      idx,
      options,
      mdFile,
      self
  ) => {
    const token = tokens[idx];

    // 删除注释使注释的 demo 不生效
    token.content = token.content.replace(/<!--[\s\S]*?-->/g, "");

    if (demoReg.some(reg => reg.test(token.content))) {
      return transformPreview(md, token, mdFile);
    }

    return defaultHtmlInlineRender(tokens, idx, options, mdFile, self);
  };

  md.renderer.rules.html_block = (
      tokens,
      idx: number,
      options,
      mdFile,
      self
  ) => {
    const token = tokens[idx];

    // 删除注释使注释的 demo 不生效
    token.content = token.content.replace(/<!--[\s\S]*?-->/g, "");

    if (demoReg.some(reg => reg.test(token.content))) {
      return transformPreview(md, token, mdFile);
    }

    return defaultHtmlBlockRender(tokens, idx, options, mdFile, self);
  };
};

export default createDemoHtml;
