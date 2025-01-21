<script lang="tsx" setup>
import {
  vue
} from "@codemirror/lang-vue";
import {
  ref,
  onMounted,
  onUnmounted,
  defineProps,
  defineEmits,
  watchEffect
} from "vue";

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
  (e: "change", value: string): void;
}>();

const editorContainer = ref<HTMLElement>();

let _view: EditorView | null = null;

const handleChange = () => {
  const str: string = _view?.state.doc.toString() || "{}";

  try {
    emits("change", str);
  } catch (error) {
    console.error("JSON 解析错误:", error);
  }
};

// TODO 处理视图，不更新问题
watchEffect(() => {
  const str = props.value;

  _view?.dispatch({
    changes: {
      from: 0,
      to: _view?.state.doc.length,
      insert: str
    }
  });
});

onMounted(() => {
  _view = new EditorView({
    parent: editorContainer.value,
    doc: props.value,
    extensions: [
      basicSetup,
      vue(),
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
