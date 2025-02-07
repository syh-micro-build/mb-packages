<script setup lang="ts">
import {
  computed
} from "vue";

const props = defineProps<{
  source: string;
  description?: string;
  rawSource: string;
  path: string;
}>();

const decodedSource = computed(() => decodeURIComponent(props.source));

const decodedDescription = computed(() => (props.description ? decodeURIComponent(props.description) : ""));
</script>

<template>
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
