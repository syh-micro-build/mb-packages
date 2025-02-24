<script setup lang="tsx">

import {
  PropsCheckJsonSchema,
  PropsComponents
} from "mb-vue-components-check-json-schema";
import {
  EUiType,
  getConfigProviderProps
} from "mb-vue-components-config-provider";
import {
  computed,
  defineProps
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

const El = (value: PropsComponents) => {
  const {
    type,
    options
  } = value;

  const Component = componentMap.value[type as keyof typeof componentMap.value];

  if (!Component) {
    console.warn(`组件 ${type} 在当前UI框架中未找到`);

    return <div>组件 {type} 未找到</div>;
  }

  return <Component {...options as any} />;
};

const DOM = computed(() => {
  if ("items" in props && props.items) {
    return <div class={props.class} style={{
      padding: props.padding,
      margin: props.margin
    }}>
      { props.items.map((item, index) => <El key={index} {...item} />) }
    </div>;
  }

  return <El {...props as PropsComponents} />;
});

</script>
<template>
  <DOM />
</template>
