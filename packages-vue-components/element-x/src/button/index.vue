<script setup lang="tsx">

import {
  EColor,
  EShapeButton,
  PropsButton
} from "@mb-kit/vue-schema-validator";
import {
  computed
} from "vue";

import {
  ElButton
} from "element-plus";

const props = defineProps<PropsButton>();

const isValueInEnum = <T extends Record<string, unknown>>(value: unknown, enumObj: T): value is T[keyof T] => Object.values(enumObj).includes(value as T[keyof T]);

const options = computed(() => {

  let obj: Record<string, unknown> = {};

  obj = {
    size: props.size,
    type: isValueInEnum(props.color, EColor) ? props.color : "info",
    color: !isValueInEnum(props.color, EColor) ? props.color : undefined,
    loading: props.loading,
    disabled: props.disabled,
    class: props.class,
    style: props.style
  };

  if(props.shape) {
    switch (props.shape ){
      case EShapeButton.ROUND:
        obj.round = true;

        break;
      case EShapeButton.CIRCLE:
        obj.circle = true;

        break;
      case EShapeButton.OUTLINE:
        obj.type = "defaut";

        break;
      case EShapeButton.DASHED:
        obj.class = `${obj.class} ${EShapeButton.DASHED}`;

        break;
      case EShapeButton.PLAIN:
        obj.plain = true;

        break;
      default:
        obj.round = false;
    }
  }

  return obj;
});

</script>
<template>
  <ElButton v-bind="{...options}">
    <slot>
      {{ props?.label }}
    </slot>
  </ElButton>
</template>
<style scoped>
.dashed {
  border: 1px dashed var(--el-color-info-dark-2);
}
</style>
