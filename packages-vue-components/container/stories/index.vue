<script lang="tsx" setup>
import {
  PropsCheckJsonSchema,
  ETypeButton,
  EThemeButton
} from "mb-vue-components-check-json-schema";
import ConfigProvider, {
  EUiType
} from "mb-vue-components-config-provider";
import {
  EUiEleType
} from "mb-vue-components-enum";

import Container from "../src";

// eslint-disable-next-line no-console
console.log(import.meta.env.VITE_UI_TYPY);

const data: PropsCheckJsonSchema = {
  type: EUiEleType.BUTTON,
  options: {
    label: "Main Str",
    type: ETypeButton.TEXT,
    theme: EThemeButton.SUCCESS
  }
};
</script>

<template>
  <ConfigProvider :type="EUiType.ARCO_DESIGN">
    <Container v-bind="data" />
  </ConfigProvider>
</template>

<style scoped>

</style>
