<script setup lang="ts">
import RenderReact from "./render-react.vue";
import RenderVue from "./render-vue.vue";
import Tabs from "./tabs.vue";
import {
  computed,
  reactive,
  ref
} from "vue";

import {
  Code,
  CaretTop
} from "@mb-kit/vc-icon";

import {
  EComponentType
} from "../types";

interface IProps {
  description?: string;
  items: string;
}

const props = defineProps<IProps>();

const items = computed(() => {
  const arr = JSON.parse(decodeURIComponent(props.items));

  return arr.map((item, index) => ({
    label: item.name,
    value: index,
    other: item
  }));
});

const decodedDescription = computed(() => (props.description ? decodeURIComponent(props.description) : ""));

const isExpanded = ref(false); // 控制展开状态

const handleClick = () => {
  isExpanded.value = !isExpanded.value;
};

const obj = reactive({
  type: items.value[0].other.type,
  path: items.value[0].other.path,
  code: items.value[0].other.source
});

const handleChange = value => {
  obj.type = value.other.type;
  obj.path = value.other.path;
  obj.code = value.other.source;
};
</script>
<template>
  <div class="demo-html">
    <div
      v-if="decodedDescription"
      class="description"
      v-html="decodedDescription"
    ></div>
    <div class="container">
      <div class="code-show">
        <RenderReact
          v-if="obj.type === EComponentType.REACT"
          :path="obj.path"
        />
        <RenderVue
          v-if="obj.type === EComponentType.VUE"
          :path="obj.path"
        />
      </div>
      <div class="show-icon">
        <div></div>
        <Tabs
          :tabs="items"
          @change="handleChange"
        />
        <Code
          cursor-shape="pointer"
          @click="handleClick"
        />
      </div>
      <transition name="expand">
        <div
          v-if="isExpanded"
          class="code"
          v-html="obj.code"
        >
        </div>
      </transition>
      <div
        v-if="isExpanded"
        class="hide-code"
        @click="handleClick"
      >
        <CaretTop
          color="#DCDFE7"
          cursor-shape="pointer"
        />
        隐藏源代码
      </div>
    </div>
  </div>
</template>
<style scoped>
.demo-html {
  font-size: 16px;
}

.container {
  border: 1px solid #DCDFE7;
  border-radius: 4px;
}

.description {
  margin-bottom: 16px;
}

.code-show {
  padding: 1.5rem;
  border-bottom: 1px solid #DCDFE7;
}

.show-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
}

.hide-code {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  color: #DCDFE7;
  border-top: 1px solid #DCDFE7;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}
</style>
