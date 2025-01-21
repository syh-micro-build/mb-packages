<script lang="tsx" setup>
import ConfigProvider, {
  EUiType
} from "mb-components-vue-config-provider";
import {
  EUiEleType
} from "mb-components-vue-enum";

import IntegrationContainer from "../src";

const data = {
  label: "John Doe",
  "type": EUiEleType.BUTTON,
  "options": {
    "street": "123 Main St",
    "city": "Somewhere"
  }
};
</script>

<template>
  <ConfigProvider :type="EUiType.ARCO_DESIGN">
    <IntegrationContainer v-bind="data" />
  </ConfigProvider>
</template>

<style scoped>
div {
  height: 200px;
}
</style>
