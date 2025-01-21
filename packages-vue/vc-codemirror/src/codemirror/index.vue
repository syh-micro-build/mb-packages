<script setup lang="tsx">
import Json from "../json/index.vue";
import Vue from "../vue/index.vue";
import {
  defineProps,
  defineEmits
} from "vue";

import {
  ECodeMirrorType
} from "..//enum";
import {
  IProps
} from "../types";

const {
  type,
  ...rest
} = defineProps<IProps>();

const emits = defineEmits<{
  (e: "change", value: string | Object): void;
}>();

const handleChange = value => {
  emits("change", value);
};

const DOM = () => {
  if(type === ECodeMirrorType.VUE) {
    return <Vue {...rest} onChange={handleChange} />;
  }

  return <Json {...rest} onChange={handleChange} />;
};

</script>
<template>
  <DOM />
</template>
<style scoped>
@import "../style/index.css";
</style>
