<script setup lang="tsx">
import {
  computed
} from "vue";

import {
  ButtonProps,
  ButtonVariant
} from "@mb-kit/schema-validator";
import {
  ElButton
} from "element-plus";

type TProps = Partial<ButtonProps>;

const {
  children,
  disabled,
  loading,
  style,
  class: className,
  type,
  size,
  onClick,
  variant,
  color
} = defineProps<TProps>();

const variantComputed = computed(() => {

  if(variant === ButtonVariant.LINK) {
    return {
      link: true
    };
  }

  if(variant === ButtonVariant.TEXT) {
    return {
      text: true
    };
  }

  if(variant === ButtonVariant.CIRCLE) {
    return {
      circle: true
    };
  }

  if(variant === ButtonVariant.ROUND) {
    return {
      round: true
    };
  }

  if(variant === ButtonVariant.DEFAULT || variant === ButtonVariant.SOLID) {
    return {
      color: "#000000"
    };
  }

  if(variant === ButtonVariant.FILLED){
    return {
      text: true,
      bg: true
    };
  }

  if(variant === ButtonVariant.DASHED) {
    return {
      class: `${className} dashed`
    };
  }

  return {};
});

</script>
<template>
  <ElButton
    :disabled="disabled"
    :loading="loading"
    :size="size"
    :class="className"
    :type="type"
    :style="style"
    :color="color"
    v-bind="variantComputed"
    @click="onClick"
  >
    <slot>
      {{ children }}
    </slot>
  </ElButton>
</template>
<style scoped>
.dashed {
  border: 1px dashed var(--el-button-border-color);
}
</style>
