# mb-eslint-config

[docs](https://eslint.nodejs.cn/)

## 安装

```bash
npm install -D eslint mb-eslint-config
```

## 使用

新建 `eslint.config.js`

`基础`

```js
import EsLint from "mb-eslint-config";

export default EsLint;
```

`vue`

```js
import EsLint, {
  vue
} from "mb-eslint-config";

export default [
  ...EsLint,
  vue
];
```

注：推荐配合 [mb-prettier-config](https://www.npmjs.com/package/mb-prettier-config) 一块使用。

## 插件

| 插件名 | 作用 |
| :--- | :--- |
| eslint | ESLint 的核心包，用于运行代码分析和检查 |
| @eslint/js | 为 JavaScript 项目提供基本的 ESLint 配置和规则 |
| @typescript-eslint/eslint-plugin | 为 TypeScript 项目提供特定的 ESLint 插件，包含 TypeScript 特有的规则 |
| @typescript-eslint/parser | 为 TypeScript 项目提供 ESLint 解析器，确保 ESLint 能够理解和解析 TypeScript 代码 |
| @types/eslint | 为 TypeScript 提供 ESLint 的类型定义，确保 TypeScript 项目能够正确使用 ESLint |
| eslint-plugin-command | 用于处理项目命令规则（如脚本命名或命令约束）|
| eslint-plugin-eslint-comments | 检测和优化代码中的 ESLint 注释使用情况 |
| eslint-plugin-import | 管理模块导入顺序、未使用的导入及模块解析 |
| eslint-plugin-jsdoc | 用于检查 JSDoc 注释的一致性和正确性 |
| eslint-plugin-jsonc | 专门用于 JSON 和 JSONC（带注释 JSON）的代码分析和格式校验 |
| eslint-plugin-perfectionist | 提供了一些高级的代码质量检查规则 |
| eslint-plugin-prettier | 结合 Prettier 代码格式化工具，确保代码风格的一致性 |
| eslint-plugin-regexp | 针对正则表达式的优化和错误检测 |
| eslint-plugin-unused-imports | 用于检测未使用的导入语句 |
|  |  |
| eslint-plugin-vue | 专为 Vue.js 提供的 ESLint 插件，支持模板和脚本的规则分析 |

## TODO List

### 1）事件方法名

- 当文件中只有一个 `click`、`change` 等事件时，方法名为：`handleClick`、`handleChange`

  格式为：`handle事件名`

- 当文件中有多个 `click`、`change` 等事件时，方法名为：`handleXxxClick`、`handleXxxChange`

  格式为：`handle作用事件名`，例如：`handleCreateClick`、`handleEditClick`、`handle DeleteClick`

### 2）变量方法名

- 读取变量，使用 `get` 开头

  格式：get变量名

  例：getLoading

- 设置变量，使用 `set` 开头

  格式：set变量名

  例：setLoading

- 处理变量，使用 `transform` 开头

  格式：transform变量名

  例： transformtLoading

- <del> 其他使用 `other` 开头 </del>

  格式：other变量名

  例：otherLoading

### 3）处理接口返回数据

- 使用 `fixData` 开头

  格式：fixData 接口定义的方法名

  例：fixDataList
