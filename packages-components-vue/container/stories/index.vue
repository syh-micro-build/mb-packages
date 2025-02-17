<script lang="tsx" setup>
import {
  PropsCheckJsonSchema,
  ETypeButton,
  EThemeButton
} from "mb-components-vue-check-json-schema";
import ConfigProvider, {
  EUiType
} from "mb-components-vue-config-provider";
import {
  EUiEleType
} from "mb-components-vue-enum";

import Container from "../src";

const data: PropsCheckJsonSchema = {
  type: EUiEleType.BUTTON,
  options: {
    label: "123 Main St",
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
