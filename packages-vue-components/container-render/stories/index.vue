<script lang="tsx" setup>
import {
  PropsCheckJsonSchema
} from "@mb-kit/vue-schema-validator";
import {
  EUiEleType
} from "@mb-kit/vue-enum";
import {
  computed,
  reactive
} from "vue";

import Codemirror, {
  CodeMirrorType
} from "mb-vc-codemirror";

import RenderCheck, {
  EUiType,
  ConfigProvider
} from "../src";

const data: PropsCheckJsonSchema = reactive({
  type: EUiEleType.BUTTON,
  options: {
    label: "Main Str"
  }
});

function convertOptionsToString(obj) {
  const parts: string[] = [];

  for (const [key, value] of Object.entries(obj)) {

    // 将键值对以 key="value" 的形式添加到 parts 数组中
    parts.push(`${key}="${value}"`);
  }

  // 使用空格将 parts 数组中的元素连接成一个字符串
  return parts.join(" ");
}

const handleChange = value => {
  Object.assign(data, value);
};

const templateValue = computed(() => {
  const str = convertOptionsToString(data?.options);

  return `<${data.type} ${str}>
  ${data?.options.label}
</${data.type}>`;
});
</script>

<template>
  <ConfigProvider :type="EUiType.ARCO_DESIGN">
    <Codemirror
      :type="CodeMirrorType.JSON"
      :value="JSON.stringify(data, null, 2)"
      @change="handleChange"
    />

    <Codemirror
      :type="CodeMirrorType.VUE"
      :value="templateValue"
      :read-only="true"
    />

    <RenderCheck :value="data" />
  </ConfigProvider>
</template>

<style scoped>
div {
  height: 200px;
}
</style>
