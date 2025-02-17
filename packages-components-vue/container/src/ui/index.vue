<script setup lang="tsx">

import {
  PropsCheckJsonSchema
} from "mb-components-vue-check-json-schema";
import {
  EUiType,
  getConfigProviderProps
} from "mb-components-vue-config-provider";
import {
  defineProps,
  computed,
  ref,
  onMounted
} from "vue";

import {
  Loading
} from "../components";
import {
  ElementComponentMap,
  ArcoComponentMap
} from "../const";

const props = defineProps<PropsCheckJsonSchema>();

const configProps = getConfigProviderProps();

const cssLoaded = ref(false);

const componentMap = computed(() => (configProps.type === EUiType.ARCO_DESIGN
  ? ArcoComponentMap
  : ElementComponentMap));

onMounted(() => {
  if (configProps.type === EUiType.ARCO_DESIGN) {

    // @ts-ignore
    import("@arco-design/web-vue/dist/arco.css").then(() => {
      cssLoaded.value = true;
    });
  } else {

    // @ts-ignore
    import("element-plus/dist/index.css").then(() => {
      cssLoaded.value = true;
    });
  }
});

const DOM = () => {
  if (!cssLoaded.value) {
    return <Loading />;
  }

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
