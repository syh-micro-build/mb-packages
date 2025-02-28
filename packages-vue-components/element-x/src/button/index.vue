<script setup lang="tsx">
import {
  ETypeButton,
  EShapeButton,
  EColor,
  PropsButton
} from "@mb-kit/vue-schema-validator";
import {
  withDefaults,
  computed
} from "vue";

import {
  ElButton
} from "element-plus";

const props = withDefaults(defineProps<Omit<PropsButton, "label"> & { label?: string }>(), {
  type: ETypeButton.DEFAULT,
  shape: EShapeButton.DEFAULT,
  color: EColor.DEFAULT,
  label: ""
});

const isInvalidTheme = computed(() => Object.values(EColor).includes(props.color as EColor));

</script>
<template>
  <ElButton
    :class="props.class"
    :style="props.style"
    :type="(isInvalidTheme ? props.color : EColor.DEFAULT) as EColor"
    :link="props.type === ETypeButton.LINK"
    :text="props.type === ETypeButton.TEXT"
    :color="!isInvalidTheme ? props.color : undefined"
  >
    <slot>
      {{ props?.label }}
    </slot>
  </ElButton>
</template>
