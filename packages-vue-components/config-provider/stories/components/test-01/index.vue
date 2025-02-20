<script lang="ts" setup>
import {
  getConfigProviderProps
} from "../../../src";

const obj = getConfigProviderProps();
</script>
<template>
  <div>测试 - 01</div>
  {{ obj }}
</template>
