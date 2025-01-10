# mb-eslint-config

[docs](https://eslint.nodejs.cn/)

## 安装

```bash
npm install -D eslint mb-eslint-config
```

## 使用

新建 `eslint.config.js`

```js
import EsLint from "./src/index.js";

export default EsLint;
```

## Install 插件作用

| 插件名 | 作用 |
| :--- | :--- |
| eslint | ESLint 的核心包，用于运行代码分析和检查 |
| @eslint/js | 为 JavaScript 项目提供基本的 ESLint 配置和规则 |
| @types/eslint | 为 TypeScript 提供 ESLint 的类型定义，确保 TypeScript 项目能够正确使用 ESLint |
| @typescript-eslint/eslint-plugin | 为 TypeScript 项目提供特定的 ESLint 插件，包含 TypeScript 特有的规则 |
| @typescript-eslint/parser | 为 TypeScript 项目提供 ESLint 解析器，确保 ESLint 能够理解和解析 TypeScript 代码 |
| eslint-plugin-unused-imports | 用于查找并删除未使用的导入语句，保持代码整洁 |
| globals | 定义全局变量，避免在 ESLint 检查时误报未定义的全局变量 |
