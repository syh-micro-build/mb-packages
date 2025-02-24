<script lang="tsx" setup>
import {
  PropsCheckJsonSchema
} from "@mb-kit/vue-schema-validator";
import ConfigProvider, {
  EUiType
} from "@mb-kit/vue-config-provider";
import {
  EUiEleType
} from "@mb-kit/vue-enum";

import Container, {
  Button
} from "../src";

// eslint-disable-next-line no-console
console.log(import.meta.env.VITE_UI_TYPY);

const data1: PropsCheckJsonSchema = {
  type: EUiEleType.BUTTON,
  options: {
    label: "Main Str"
  }
};

const data2: PropsCheckJsonSchema = {
  items: [
    {
      type: EUiEleType.BUTTON,
      options: {
        label: "1"
      }
    },
    {
      type: EUiEleType.BUTTON,
      options: {
        label: "2"
      }
    }
  ],
  margin: "10px",
  class: "test"
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
  <Button>
    222
  </Button>
</template>

<style scoped>

</style>
