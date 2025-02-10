<script lang="ts" setup>
import {
  ref,
  PropType
} from "vue";

interface IItem {
  label: string;
  value: string | number;
}
const props = defineProps({
  tabs: {
    type: Array as PropType<IItem[]>,
    required: true
  },
  defaultValue: {
    type: String as PropType<string | number>,
    default: () => ""
  }
});

type TabValue = typeof props.tabs[number]["value"];

// eslint-disable-next-line vue/define-macros-order
const emits = defineEmits<{
  (e: "change", value: TabValue): void;
}>();

const select = ref<TabValue>(props.defaultValue || props.tabs[0].value);

const handleClick = (value: TabValue) => {
  select.value = value;
  emits("change", value);
};

</script>
<template>
  <div class="tabs">
    <div
      v-for="item in props.tabs"
      :key="item.value"
      class="item"
      :class="[item.value === select ? 'item-select' : '']"
      @click="handleClick(item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>
<style scoped>
.tabs {
  display: flex;
  justify-content: center;
}

.item {
  padding: 0 8px;
  cursor: pointer;
}

.item:hover {
  color: var(--vp-c-brand-1);
}

.item-select {
  color: var(--vp-c-brand-1);
  border-bottom:2px solid var(--vp-c-brand-1);
}
</style>
