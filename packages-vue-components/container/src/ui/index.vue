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

const props = defineProps<PropsCheckJsonSchema>();

const configProps = getConfigProviderProps();

// TODO 导入这块优化 ！！！
const componentMap = computed(() => (configProps.type === EUiType.ARCO_DESIGN
  ? ArcoComponentMap
  : ElementComponentMap));

const DOM = () => {
  const Component = componentMap.value[props.type as keyof typeof componentMap.value];

  if (!Component) {
    console.warn(`组件 ${props.type} 在当前UI框架中未找到`);

    return <div>组件 {props.type} 未找到</div>;
  }

  // TODO
  return <Component {...props.options as any} />;
};

</script>
<template>
  <DOM />
</template>
