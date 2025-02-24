<script lang="ts" setup>
import {
  getConfigProviderProps
} from "@mb-kit/vue-container-render";

const obj = getConfigProviderProps();
</script>
<template>
  <div>测试 - 01</div>
  {{ obj }}
</template>
