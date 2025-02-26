<script lang="ts" setup>
import {
  getConfigProviderProps
} from "@micro-test-01/vue-container-render";

const obj = getConfigProviderProps();
</script>
<template>
  <div>测试 - 01</div>
  {{ obj }}
</template>
