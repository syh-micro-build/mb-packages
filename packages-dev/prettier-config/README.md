# mb-prettier-config

[docs](https://prettier.nodejs.cn/)

## 安装

```bash
npm i prettier mb-prettier-config -D
```

## 使用

新建 `prettier.config.mjs` 文件

```js
export { default } from 'mb-prettier-config';
```

## 忽略文件

新建 `.prettierignore` 文件

```.prettierignore
dist
*-dist
.local
.output.js
node_modules
.nvmrc
coverage
CODEOWNERS
.nitro
.output


**/*.svg
**/*.sh

public
.npmrc
**/*-lock.yaml
**/*-lock.json
```
