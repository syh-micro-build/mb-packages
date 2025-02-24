<script setup lang="tsx">
import {
  ETypeButton,
  EShapeButton,
  EThemeButton,
  PropsButton
} from "mb-vue-components-check-json-schema";
import {
  withDefaults,
  computed
} from "vue";

import {
  ElButton
} from "element-plus";

const props = withDefaults(defineProps<PropsButton>(), {
  type: ETypeButton.DEFAULT,
  shape: EShapeButton.DEFAULT,
  theme: EThemeButton.DEFAULT
});

const isInvalidTheme = computed(() => Object.values(EThemeButton).includes(props.theme as EThemeButton));

</script>
<template>
  <ElButton
    :class="props.class"
    :style="props.style"
    :type="(isInvalidTheme ? props.theme : EThemeButton.DEFAULT) as EThemeButton"
    :link="props.type === ETypeButton.LINK"
    :text="props.type === ETypeButton.TEXT"
    :color="!isInvalidTheme ? props.theme : undefined"
  >
    <slot>
      {{ props.label }}
    </slot>
  </ElButton>
</template>
