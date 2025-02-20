<script setup lang="tsx">

import {
  PropsCheckJsonSchema
} from "mb-vue-components-check-json-schema";
import {
  EUiType,
  getConfigProviderProps
} from "mb-vue-components-config-provider";
import {
  defineProps,
  computed
} from "vue";

import {
  ElementComponentMap,
  ArcoComponentMap
} from "../const";
import {
  loadFrameType
} from "../utils";

const props = defineProps<PropsCheckJsonSchema>();

const configProps = getConfigProviderProps();

const componentMap = computed(() => {
  if(!import.meta.env.VITE_UI_TYPY) {
    return configProps.type === EUiType.ARCO_DESIGN ? ArcoComponentMap : ElementComponentMap;
  }

  return loadFrameType;
});

const DOM = () => {
  const Component = componentMap.value[props.type as keyof typeof componentMap.value];

  if (!Component) {
    console.warn(`组件 ${props.type} 在当前UI框架中未找到`);

    return <div>组件 {props.type} 未找到</div>;
  }

  return <Component {...props.options as any} />;
};

</script>
<template>
  <DOM />
</template>
