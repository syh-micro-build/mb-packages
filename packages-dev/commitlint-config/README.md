# @mb-kit/commitlint-config

## 安装

```bash
npm install @commitlint/cli @mb-kit/commitlint-config -D
```

注：package.json 中 type 必须为 module

## 使用

项目下新建 .commitlintrc.js

```js
export { default } from '@mb-kit/commitlint-config';
```

## git commit 规范

| Type     | 作用                                                                                   |
| :------- | :-------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |
