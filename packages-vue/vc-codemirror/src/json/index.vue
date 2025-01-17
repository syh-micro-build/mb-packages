<script lang="tsx" setup>
import {
  ref,
  onMounted,
  onUnmounted,
  defineProps,
  defineEmits
} from "vue";

import {
  json
} from "@codemirror/lang-json";
import {
  EditorView,
  basicSetup
} from "codemirror";

import {
  TValue
} from "../types";

const props = defineProps<TValue>();

const emits = defineEmits<{
  (e: "change", value: object): void;
}>();

const editorContainer = ref<HTMLElement>();

let _view: EditorView | null = null;

const handleChange = () => {
  const content: string = _view?.state.doc.toString() || "{}";

  try {
    emits("change", JSON.parse(content));
  } catch (error) {
    console.error("JSON 解析错误:", error);
  }
};

onMounted(() => {
  _view = new EditorView({
    parent: editorContainer.value,
    doc: props.value,
    extensions: [
      basicSetup,
      json(),
      EditorView.updateListener.of(update => {
        if (update.docChanged) {
          handleChange();
        }
      })
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
