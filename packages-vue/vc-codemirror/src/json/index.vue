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
  EditorState
} from "@codemirror/state";
import {
  EditorView,
  basicSetup
} from "codemirror";

import {
  TValue
} from "../types";

const props = defineProps<TValue>();

const emits = defineEmits<{
  (e: "change", value: Object): void;
}>();

const editorContainer = ref<HTMLElement>();

let _view: EditorView | null = null;

function fixJsonString(str) {

  // 为键添加双引号
  let fixedStr = str.replace(/([{,])(\s*)(\w+)(\s*):/g, "$1\"$3\":");

  // 移除最后的多余逗号
  fixedStr = fixedStr.replace(/,(\s*)\}/g, "$1}");

  return fixedStr;
}

const handleChange = () => {
  const str: string = _view?.state.doc.toString() || "{}";

  try {
    const fixedStr = fixJsonString(str);

    const jsonObj = JSON.parse(fixedStr);

    emits("change", jsonObj);
  } catch (error) {
    console.error("Invalid JSON string:", error);
  }
};

onMounted(() => {
  _view = new EditorView({
    parent: editorContainer.value,
    doc: props.value,
    extensions: [
      basicSetup,
      json(),
      EditorState.readOnly.of(props.readOnly),
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
  max-height: 200px;
}
</style>
