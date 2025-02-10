<script setup lang="ts">
import {
  withDefaults
} from "vue";

import {
  IProps
} from "../types";
const props = withDefaults(defineProps<IProps>(), {
  height: "1.2em",
  width: "1.2em",
  color: "currentColor",
  cursorShape: "default"
});
</script>
<template>
  <svg
    viewBox="0 0 1024 1024"
    :width="props.width"
    :height="props.height"
    :style="{ cursor: props.cursorShape }"
  >
    <path
      :fill="props.color"
      d="M512 320 192 704h639.936z"
    /></svg>
</template>
