<script setup lang="ts">
import {
  Button
} from "tdesign-vue-next";

import {
  ButtonProps
} from "@mb-kit/schema-validator";

const {
  children
} = defineProps<ButtonProps>();
</script>
<template>
  <Button>
    {{ children }}
  </Button>
</template>
<style scoped>

</style>
