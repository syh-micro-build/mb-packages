<script setup lang="tsx">
import {
  computed
} from "vue";

const props = defineProps<{
  title: string;
  content?: string;
  width?: number;
}>();

const _width = computed(() => `${ props?.width || 300 }px`);

</script>
<template>
  <div class="card">
    <slot name="header">
      <div class="header">
        {{ title }}
      </div>
    </slot>
    <div
      v-if="content"
      class="content"
    >
      <slot>
        {{ content }}
      </slot>
    </div>
  </div>
</template>
<style scoped>
/* card 样式 */
.card {
  width: v-bind(_width);
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
}

/* card 标题样式 */
.header {
  box-sizing: border-box;
  height: 40px;
  padding: 0 10px;
  margin: 0;
  overflow:hidden;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  color: var(--vp-c-text-2);
  text-overflow:ellipsis;
  white-space:nowrap;
  border-radius: 5px 5px 0 0;
}

/* card 内容区域样式 */
.content {
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
