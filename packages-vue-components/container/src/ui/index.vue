<script setup lang="tsx">

import {
  EUiType,
  getConfigProviderProps
} from "@mb-kit/vue-config-provider";
import {
  computed,
  defineProps
} from "vue";

import checkJsonSchema, {
  PropsComponents
} from "@mb-kit/schema-validator";

import {
  ElementComponentMap
} from "../const";
import {
  IProps
} from "../types";
import {
  loadFrameType
} from "../utils";

const {
  value
} = defineProps<IProps>();

const configProps = getConfigProviderProps();

const componentMap = computed(() => {

  if(!import.meta.env.VITE_UI_TYPY) {
    return configProps.type === EUiType.ARCO_DESIGN ? ElementComponentMap : ElementComponentMap;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Component {...options as any} />;
};

const obj:IProps["value"] | undefined = checkJsonSchema(value);

const DOM = computed(() => {
  if(!obj) {
    return <div>JSON 数据错误</div>;
  }

  if ("items" in value && value.items) {
    return <div class={value.class} style={{
      padding: value.padding,
      margin: value.margin
    }}>
      { value.items.map((item, index) => <El key={index} {...item} />) }
    </div>;
  }

  return <El {...value as PropsComponents} />;
});

</script>
<template>
  <DOM />
</template>
