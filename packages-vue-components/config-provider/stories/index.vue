<script lang="tsx" setup>
import ConfigProvider, {
  EUiType
} from "../src";
import {
  Test01
} from "./components";
</script>

<template>
  <ConfigProvider :type="EUiType.ELEMENT">
    <Test01 />
  </ConfigProvider>
</template>

<style scoped>

</style>
