<script lang="ts" setup>
import {
  useConfigProviderProps
} from "../../../src";

const obj = useConfigProviderProps();
</script>
<template>
  <div>测试 - 01</div>
  {{ obj }}
</template>
