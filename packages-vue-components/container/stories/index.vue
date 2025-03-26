<script lang="tsx" setup>
import ConfigProvider, {
  EUiType
} from "@mb-kit/vue-config-provider";

import {
  PropsCheckJsonSchema,
  EUiEleType
} from "@mb-kit/schema-validator";

import Container from "../src";

// eslint-disable-next-line no-console
console.log(import.meta.env.VITE_UI_TYPY);

const data1: PropsCheckJsonSchema = {
  type: EUiEleType.BUTTON,
  options: {
    children: "Main Str"
  }
};

const data2: PropsCheckJsonSchema = {
  "items": [
    {
      "type": "Button",
      "options": {
        "children": "plain"
      }
    },
    {
      "type": "Button",
      "options": {
        "children": "outline"
      }
    },
    {
      "type": "Button",
      "options": {
        "children": "round"
      }
    },
    {
      "type": "Button",
      "options": {
        "children": "circle"
      }
    },
    {
      "type": "Button",
      "options": {
        "children": "dashed",
        "color": "dashed"
      }
    }
  ]
};

const arr = [1, 2, 3, 4];

const DOM = () => arr.map(item => <span key={item}>{item}</span>);

</script>

<template>
  <ConfigProvider :type="EUiType.ELEMENT">
    <Container :value="data1" />
    <hr />
    <Container :value="data2" />
  </ConfigProvider>
  <hr />

  <DOM />
</template>

<style scoped>

</style>
