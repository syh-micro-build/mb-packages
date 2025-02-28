<script setup lang="ts">
import {
  PropsLink
} from "@mb-kit/vue-schema-validator";

import {
  ElLink
} from "element-plus";

const {
  label,
  ...rest
} = defineProps<PropsLink>();
</script>
<template>
  <ElLink
    :type="rest.color"
    :underline="rest.underline"
    :disabled="rest.disabled"
    :href="rest.href"
    :target="rest.target"
    :icon="rest.icon"
  >
    <slot>
      {{ label }}
    </slot>
  </ElLink>
</template>
