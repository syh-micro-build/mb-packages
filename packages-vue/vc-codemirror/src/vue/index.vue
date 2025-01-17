<script lang="tsx" setup>
import {
  vue
} from "@codemirror/lang-vue";
import {
  ref,
  onMounted,
  onUnmounted
} from "vue";

import {
  EditorView,
  basicSetup
} from "codemirror";

import {
  TValue
} from "../types";

const props = defineProps<TValue>();

const editorContainer = ref<HTMLElement>();

let _view: EditorView | null = null;

onMounted(() => {
  _view = new EditorView({
    parent: editorContainer.value,
    doc: props.value,
    extensions: [
      basicSetup,
      vue()
    ]
  });
});

onUnmounted(() => {
  _view = null;
});
</script>

<template>
  <div ref="editorContainer"></div>
</template>

<style scoped>
div {
  height: 100%;
}

</style>
