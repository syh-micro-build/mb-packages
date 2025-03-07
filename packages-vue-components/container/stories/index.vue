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
    label: "Main Str"
  }
};

const data2: PropsCheckJsonSchema = {
  "items": [
    {
      "type": "Button",
      "options": {
        "label": "plain",
        "shape": "plain"
      }
    },
    {
      "type": "Button",
      "options": {
        "label": "outline",
        "shape": "outline"
      }
    },
    {
      "type": "Button",
      "options": {
        "label": "round",
        "shape": "round"
      }
    },
    {
      "type": "Button",
      "options": {
        "label": "circle",
        "shape": "circle"
      }
    },
    {
      "type": "Button",
      "options": {
        "label": "dashed",
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
    <Container v-bind="data1" />
    <hr />
    <Container v-bind="data2" />
  </ConfigProvider>
  <hr />

  <DOM />
</template>

<style scoped>

</style>
