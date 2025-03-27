# 按钮

## 基础

<demo
  :mixFiles="{
    items: [
      {name: 'React', type: 'react', file: '/button/react.tsx'},
      {name: 'Vue', type: 'vue', file: '/button/vue.vue'},
      {name: 'JSON', type: 'json', file: '/button/index.json'}
    ]
  }" />

## Button API

### Button Attributes

| 属性名             | 说明               | 类型               | Default           |
| ----------------- | ----------------- | ----------------- | ----------------- |
| children | 按钮内容 | string | — |
| disabled | 按钮是否为禁用状态 | boolean | — |
| loading | 是否为加载中状态 | boolean | — |
| style | 内连样式 | string | — |
| class | 类名 | string | — |
| type  | 按钮类型 | `primary`、`success`、`warning`、`danger`、`info`、`default` | — |
| variant | 按钮形状 | `default`、`outline`、`dashed`、`solid`、`filled`、`round`、`circle`、`text`、`link` | — |
| color | 按钮颜色 | string | — |
| size | 按钮形状 | `small`、`default`、`large` | — |
