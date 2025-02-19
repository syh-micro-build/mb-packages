# mb-vue-components-container

这块可以在拆，分 ui 库拆

## 1、使用

```bash
pnpm add mb-vue-components-container
```

## 2、使用

```js
// 必须引入这个样式文件
import "mb-vue-components-container/dist/index.css";
```

```tsx
import checkJsonSchema, {
  PropsCheckJsonSchema
} from "mb-vue-components-check-json-schema";
import Container from "mb-vue-components-container";

import {
  VNode
} from "vue";

export default function Integration(props: PropsCheckJsonSchema): VNode {

  const obj = checkJsonSchema(props);

  if(!obj) {
    return <div>JSON 数据错误</div>;
  }

  return <Container {...obj} />;
}
```
