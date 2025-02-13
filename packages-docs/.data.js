import {
  parse
} from "csv-parse/sync";
import fs from "node:fs";

export default {
  watch: ["./examples/**/*.json"],
  load(watchedFiles) {

    // watchFiles 是一个所匹配文件的绝对路径的数组。
    // 生成一个博客文章元数据数组
    // 可用于在主题布局中呈现列表。
    return watchedFiles.map(file => parse(fs.readFileSync(file, "utf-8"), {
      columns: true,
      skip_empty_lines: true
    }));
  }
};
