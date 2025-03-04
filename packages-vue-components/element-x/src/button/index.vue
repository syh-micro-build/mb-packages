<script setup lang="tsx">

import {
  EColor,
  ETypeButton,
  EShapeButton,
  PropsButton,
  ESize
} from "@mb-kit/vue-schema-validator";
import {
  computed
} from "vue";

import {
  ElButton
} from "element-plus";

const props = defineProps<PropsButton>();

const emits = defineEmits<{
  (e: "clcik", ev: MouseEvent): void;
}>();

const isValueInEnum = <T extends Record<string, unknown>>(value: unknown, enumObj: T): value is T[keyof T] => Object.values(enumObj).includes(value as T[keyof T]);

const options = computed(() => {

  let obj: Record<string, unknown> = {};

  obj = {
    size: props.size === ESize.MINI ? ESize.SMALL : props.size,
    type: isValueInEnum(props.color, EColor) ? props.color : "info",
    color: !isValueInEnum(props.color, EColor) ? props.color : undefined,
    loading: props.loading,
    disabled: props.disabled,
    class: `${props.class} ${props.long ? "long" : ""}`,
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

  if(props.type) {
    switch(props.type) {
      case ETypeButton.LINK:
        obj.link = true;

        break;
      case ETypeButton.TEXT:
        obj.text = true;

        break;
      default:
        obj.text = false;
        obj.link = false;
    }
  }

  return obj;
});

const handleClick = (e: MouseEvent) => {
  emits("clcik", e);
};

</script>
<template>
  <ElButton
    v-bind="{...options}"
    @click="handleClick"
  >
    <slot>
      {{ props?.label }}
    </slot>
  </ElButton>
</template>
<style scoped>
.dashed {
  border: 1px dashed var(--el-color-info-dark-2);
}

.dashed:hover{
  border: 1px dashed var(--el-button-hover-link-text-color) !important;
}

.long {
  width: 100%;
}
</style>
