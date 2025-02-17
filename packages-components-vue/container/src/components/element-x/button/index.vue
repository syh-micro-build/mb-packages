<script setup lang="tsx">
import {
  ETypeButton,
  EShapeButton,
  EThemeButton,
  PropsButton
} from "mb-components-vue-check-json-schema";
import {
  withDefaults
} from "vue";

import {
  ElButton
} from "element-plus";

const props = withDefaults(defineProps<PropsButton>(), {
  type: ETypeButton.DEFAULT,
  shape: EShapeButton.DEFAULT,
  theme: EThemeButton.DEFAULT
});
</script>
<template>
  <div>
    <ElButton
      :class="props.class"
      :style="props.style"
    >
      <slot>
        {{ props.label }}
      </slot>
    </ElButton>
  </div>
</template>
