<script setup lang="ts">
import {
  ButtonProps,
  Button
} from "@arco-design/web-vue";
import {
  PropsButton,
  EColor,
  EShapeButton
} from "@mb-kit/vue-schema-validator";
import {
  computed
} from "vue";

const props = defineProps<PropsButton>();

const isValueInEnum = <T extends Record<string, unknown>>(value: unknown, enumObj: T): value is T[keyof T] => Object.values(enumObj).includes(value as T[keyof T]);

const options = computed(() => ({
  status: props?.color && isValueInEnum(props.color, EColor) ? props.color : undefined,
  color: props?.color && isValueInEnum(props.color, EColor) ? undefined : props.color,
  type: props?.shape && Object.values(EShapeButton).includes(props.color as EShapeButton) ? props.shape : undefined,
  size: props.size,
  long: props.long,
  loading: props.loading,
  disabled: props.disabled,
  style: props.style,
  class: props.class
} as ButtonProps & { color: string }));

</script>
<template>
  <Button
    v-bind="{...options}"
    class="style"
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
