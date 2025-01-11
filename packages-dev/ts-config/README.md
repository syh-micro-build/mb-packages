# mb-ts-config

## 下载

```bash
npm install -D typescript mb-ts-config
```

## 使用

`base`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": ["mb-ts-config/index.json"],
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

`vue`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": ["mb-ts-config/index.json", "mb-ts-config/vue.json"],
  "include": ["src"],
  "exclude": ["node_modules"]
}
```
