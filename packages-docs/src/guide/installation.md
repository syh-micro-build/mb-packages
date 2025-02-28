# 安装

## Install

```bash
npm i @mb-kit/vue-container-render
```

## 导入插件，缩小打包提及

### Install plugins

```bash
npm  i @mb-kit/vue-plugins -D
```

### 引用

`vite.config.ts`

```ts
import {
  replaceImportPlugin
} from "@mb-kit/vue-plugins";

export default defineConfig({
  plugins: [
    replaceImportPlugin()
    // ... 其他的额外插件
  ]
});
```

注：🔔 确保 `replaceImportPlugin` 放在 `plugins` 中第一个元素。
