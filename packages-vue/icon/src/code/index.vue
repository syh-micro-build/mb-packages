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
  color: "currentColor"
});
</script>
<template>
  <svg
    data-v-5009ca8d=""
    viewBox="0 0 24 24"
    :width="props.width"
    :height="props.height"
  >
    <path
      :fill="props.color"
      d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
    /></svg>
</template>
