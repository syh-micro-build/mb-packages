<script lang="tsx" setup>
import ConfigProvider, {
  EUiType
} from "mb-components-vue-config-provider";
import {
  EUiEleType
} from "mb-components-vue-enum";

import Container from "../src";

const data = {
  "type": EUiEleType.Select,
  "options": {
    "street": "123 Main St",
    "city": "Somewhere"
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
