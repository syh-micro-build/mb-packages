<script setup lang="ts">
import {
  Button
} from "@arco-design/web-vue";
import {
  ETypeButton,
  EShapeButton,
  EThemeButton,
  PropsButton
} from "mb-components-vue-check-json-schema";
import {
  withDefaults
} from "vue";

const props = withDefaults(defineProps<PropsButton>(), {
  type: ETypeButton.DEFAULT,
  shape: EShapeButton.DEFAULT,
  theme: EThemeButton.DEFAULT
});
</script>
<template>
  <Button
    :class="props.class"
    :style="props.style"
  >
    <slot>
      {{ props.label }}
    </slot>
  </Button>
</template>
