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

import {
  Button
} from "virtual:component-map-plugin";

import Container from "../src";

const data: PropsCheckJsonSchema = {
  type: EUiEleType.BUTTON,
  options: {
    label: "123 Main Str",
    type: ETypeButton.TEXT,
    theme: EThemeButton.SUCCESS
  }
};
</script>

<template>
  <ConfigProvider :type="EUiType.ARCO_DESIGN">
    <Container v-bind="data" />
  </ConfigProvider>
  <Button>2222</Button>
</template>

<style scoped>

</style>
