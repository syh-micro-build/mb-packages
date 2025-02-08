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

const props = defineProps<{
  source: string;
  description?: string;
  rawSource: string;
  path: string;
}>();

const decodedSource = computed(() => decodeURIComponent(props.source));

const decodedDescription = computed(() => (props.description ? decodeURIComponent(props.description) : ""));

const idState = inject<Ref<ConfigProviderProps>>(CONFIG_PROVIDER)!;

</script>

<template>
  {{ idState.type }}
  <div class="demo-block">
    <div class="demo-content">
      <slot name="source"></slot>
    </div>
    <div
      v-if="decodedDescription"
      class="demo-description"
      v-html="decodedDescription"
    ></div>
    <div
      v-if="decodedSource"
      class="demo-source"
      v-html="decodedSource"
    ></div>
  </div>
</template>

<style>
.demo-block {
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.demo-content {
  padding: 1.5rem;
}

.demo-description {
  padding: 1rem;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
}

.demo-source {
  padding: 1rem;
  border-top: 1px solid #ddd;
}
</style>
