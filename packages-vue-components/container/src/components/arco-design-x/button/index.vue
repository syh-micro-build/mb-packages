<script setup lang="tsx">
import {
  Button
} from "@arco-design/web-vue";
import {
  ETypeButton,
  EShapeButton,
  EThemeButton,
  PropsButton
} from "mb-vue-components-check-json-schema";
import {
  computed,
  withDefaults
} from "vue";

const props = withDefaults(defineProps<PropsButton>(), {
  type: ETypeButton.DEFAULT,
  shape: EShapeButton.DEFAULT,
  theme: EThemeButton.DEFAULT
});

const _theme = computed(() => {
  switch(props.theme){
    case EThemeButton.DANGER:
    case EThemeButton.SUCCESS:
    case EThemeButton.WARNING:
      return props.theme;
    default:
      return undefined;
  }
});

const _type = computed(() => {
  if(props.theme === EThemeButton.PRIMARY) {
    return EThemeButton.PRIMARY;
  }

  if(props.type === ETypeButton.TEXT) {
    return ETypeButton.TEXT;
  }

  return undefined;
});

</script>
<template>
  <Button
    :class="props.class"
    :style="props.style"
    :status="_theme"
    :type="_type"
  >
    <slot>
      {{ props.label }}
    </slot>
  </Button>
</template>
