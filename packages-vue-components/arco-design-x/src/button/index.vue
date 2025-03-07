<script setup lang="ts">
import {
  ButtonProps,
  Button
} from "@arco-design/web-vue";
import {
  PropsButton,
  EColor,
  EButtonShape,
  EButtonType
} from "@mb-kit/schema-validator";
import {
  computed,
  useAttrs
} from "vue";

const props = defineProps<PropsButton>();

const emits = defineEmits<{
  (e: "clcik", ev: MouseEvent): void;
}>();

const handleClick = (e: MouseEvent) => {
  emits("clcik", e);
};

// 获取所有非 props 属性
const attrs = useAttrs();

const isValueInEnum = <T extends Record<string, unknown>>(value: unknown, enumObj: T): value is T[keyof T] => Object.values(enumObj).includes(value as T[keyof T]);

const options = computed(() => {
  const obj = {
    status: props?.color && isValueInEnum(props.color, EColor) ? props.color : undefined,
    color: props?.color && isValueInEnum(props.color, EColor) ? undefined : props.color,
    type: "secondary",
    size: props.size,
    long: props.long,
    loading: props.loading,
    disabled: props.disabled,
    style: props.style,
    class: `${props.class}`,
    ...attrs
  } as ButtonProps & { color: string } as any;

  if(props?.color && !isValueInEnum(props.color, EColor)) {
    obj.class = `${obj.class} style`;
  }

  if(props.shape) {
    switch(props.shape) {
      case EButtonShape.DEFAULT:
        obj.type = "secondary";

        break;
      case EButtonShape.PLAIN:
        obj.type = "primary";

        break;
      case EButtonShape.DASHED:
        obj.type = "dashed";

        break;
      case EButtonShape.OUTLINE:
        obj.type = "outline";

        break;
      case EButtonShape.CIRCLE:
        obj.shape = "circle";

        break;
      case EButtonShape.ROUND:
        obj.shape = "round";

        break;
      default:
    }
  }

  if(props.type === EButtonType.TEXT) {
    obj.type = EButtonType.TEXT;
  }

  return obj;
});
</script>
<template>
  <Button
    v-bind="{...options}"
    @click="handleClick"
  >
    <slot>
      {{ props.label }}
    </slot>
  </Button>
</template>
<style scoped>
.style {
  color: v-bind("options.color");
}
</style>
