<script setup lang="tsx">

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
import {
  TProps
} from "../types";

const props = defineProps<TProps>();

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

  return <Component {...props.options}>
    {props.label}
  </Component>;
};

</script>
<template>
  {{ configProps.type }}
  <DOM />
</template>
