<script lang="ts" setup>
import {
  getConfigProviderProps
} from "mb-vue-components-container-render";

const obj = getConfigProviderProps();
</script>
<template>
  <div>测试 - 01</div>
  {{ obj }}
</template>
