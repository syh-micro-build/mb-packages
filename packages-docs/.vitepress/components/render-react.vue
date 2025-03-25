<script setup lang="ts">
import {
  ref,
  nextTick,
  onUnmounted,
  watch
} from "vue";

import {
  createElement as reactCreateElement
} from "react";
import {
  createRoot as reactCreateRoot,
  Root
} from "react-dom/client";

interface IProps {
  path: string;
}

const props = defineProps<IProps>();

const domRef = ref<HTMLDivElement>(); // 明确DOM类型

let root: Root | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentCache = new Map<string, Promise<any>>();

watch(
    () => props.path,
    async newPath => {
      if (!newPath) {
        return;
      }

      try {
        if (!componentCache.has(newPath)) {
          componentCache.set(newPath, import(/* @vite-ignore */ newPath));
        }

        const componentModule = await componentCache.get(newPath);

        const ReactComponent = componentModule.default || componentModule;

        const path = reactCreateElement(ReactComponent);

        renderReactComponent(path);
      } catch (error) {
        console.error(`加载React组件失败: ${newPath}`, error);
      }
    },
    {
      immediate: true
    }
);

function renderReactComponent(path: string): void {
  nextTick(() => {
    if (!domRef.value || !path) {
      return;
    }

    if (!root) {
      root = reactCreateRoot(domRef.value);
    }

    // 渲染新组件（自动对比更新）
    root?.render(path);
  });
}

onUnmounted(() => {
  root?.unmount();
  root = null;
});

</script>

<template>
  <div ref="domRef"></div>
</template>
