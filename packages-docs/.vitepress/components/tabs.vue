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
  }
});

type TabValue = typeof props.tabs[number]["value"];

const select = ref<TabValue>("html");

const handleClick = (value: TabValue) => {
  select.value = value;
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
}

.item-select {
  border-bottom:2px solid var(--vp-c-brand-1);
}
</style>
