<script setup lang="ts" name="demo-block">
import {
  CONFIG_PROVIDER,
  ConfigProviderProps
} from "mb-components-vue-config-provider";
import {
  computed,
  Ref,
  inject
} from "vue";

import {
  Code
} from "mb-vc-icon";

const props = defineProps<{
  source: string;
  description?: string;
  rawSource: string;
  path: string;
}>();

const decodedSource = computed(() => decodeURIComponent(props.source));

const decodedDescription = computed(() => (props.description ? decodeURIComponent(props.description) : ""));

// eslint-disable-next-line unused-imports/no-unused-vars
const idState = inject<Ref<ConfigProviderProps>>(CONFIG_PROVIDER)!;

</script>

<template>
  <div class="demo">
    <div
      v-if="decodedDescription"
      class="description"
      v-html="decodedDescription"
    ></div>
    <div class="container">
      <div class="code-show">
        <slot name="source"></slot>
      </div>
      <div class="icon">
        <Code />
      </div>
      <div
        v-if="decodedSource"
        class="code"
        v-html="decodedSource"
      >
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  font-size: 16px;
}

.container {
  border: 1px solid #DCDFE7;
  border-radius: 4px;
}
</style>
