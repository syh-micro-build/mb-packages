<script setup lang="ts">
import {
  ref,
  onUnmounted,
  watch,
  createApp,
  h
} from "vue";

interface IProps {
  path: string;
}

const props = defineProps<IProps>();

const domRef = ref<HTMLDivElement>();

let appInstance: ReturnType<typeof createApp> | null = null;

watch(
    () => props.path,
    async newPath => {
      if (appInstance) {
        appInstance.unmount(); // 卸载旧应用
      }

      try {
        const componentModule = await import(/* @vite-ignore */ newPath);

        const Component = componentModule.default;

        appInstance = createApp({
          render() {
            return h(Component);
          }
        });

        appInstance.mount(domRef.value as HTMLElement);
      } catch (error) {
        console.error(`加载失败: ${newPath}`, error);
      }
    },
    {
      immediate: true
    }
);

onUnmounted(() => {
  appInstance?.unmount();
});
</script>

<template>
  <div ref="domRef"></div>
</template>
