<script lang="tsx" setup>
import {
  ConfigProvider,
  EUiType
} from "mb-components-vue-container";
</script>

<template>
  <ConfigProvider :type="EUiType.ELEMENT">
    nihao
  </ConfigProvider>
</template>

<style scoped>
div {
  height: 200px;
}
</style>
