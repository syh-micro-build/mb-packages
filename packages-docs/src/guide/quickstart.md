# 快速开始

## 用法

### 确定 UI 框架

```vue
<script setup lang="ts">
import {
  RouterLink,
  RouterView
} from "vue-router";

import {
  EUiType,
  ConfigProvider
} from "mb-vue-components-container-render";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>
  <ConfigProvider :type="EUiType.ARCO_DESIGN">
    <RouterView />
  </ConfigProvider>
</template>
```

注：使用 `ConfigProvider` 包括入口文件，或者包裹一个根标签即可。

### UI 框架类型

注：`ConfigProvider` 标签中的 `type` 属性的值：

> `EUiType.ARCO_DESIGN` [@arco-design/web-vue](https://arco.design/vue/docs/start)
>
> `EUiType.ELEMENT` [element-plus](https://element-plus.org/zh-CN/)

### 使用

```vue
<script setup lang="ts">
import RenderCheck from "mb-vue-components-container-render";

const data = {
  "type": "Button",
  "options": {
    "label": "123 Main St"
  }
}
</script>
<template>
  <RenderCheck :value="data" />
</template>
```

## 导入插件，缩小打包提及

### 安装

```bash
npm  i mb-vue-components-plugins -D
```

### 引用

`vite.config.ts`

```ts
import {
  componentMapPlugin
} from "mb-vue-components-plugins";

export default defineConfig({
  plugins: [
    // ... 其他的额外插件
    componentMapPlugin()
  ]
});
```