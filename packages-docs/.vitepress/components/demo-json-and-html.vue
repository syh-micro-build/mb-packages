<script setup lang="ts">
import Tabs from "./tabs.vue";
import ContainerRender, {
  PropsContainerRender
} from "@micro-test-01/vue-container-render";
import {
  ref,
  computed,
  ComputedRef
} from "vue";

import {
  Code,
  CaretTop
} from "@micro-test-01/vc-icon";

import {
  TABS
} from "../const";
import {
  EValueType
} from "../enum";

const props = defineProps<{
  sourceData: string;
  source: string;
  description?: string;
  code: string;
  path: string;
}>();

const decodedSource = computed(() => decodeURIComponent(props.source));

const decodedDescription = computed(() => (props.description ? decodeURIComponent(props.description) : ""));

const decodedCode = computed(() => (decodeURIComponent(props.code)));

const decodedSourceData:ComputedRef<PropsContainerRender> = computed(() => JSON.parse(decodeURIComponent(props.sourceData)));

const isExpanded = ref(false); // 控制展开状态

const handleClick = () => {
  isExpanded.value = !isExpanded.value;
};

const select = ref(EValueType.JSON);

const handleChange = value => {
  select.value = value;
};

</script>

<template>
  <div class="demo">
    <div
      v-if="decodedDescription"
      class="description"
      v-html="decodedDescription"
    ></div>
    <div class="container">
      <div class="code-show">
        <ContainerRender :value="decodedSourceData" />
      </div>
      <div class="show-icon">
        <Code
          cursor-shape="pointer"
          @click="handleClick"
        />
      </div>
      <transition name="expand">
        <div v-if="decodedSource && isExpanded">
          <Tabs
            :tabs="TABS"
            @change="handleChange"
          />
          <div
            v-if="EValueType.JSON === select"
            class="code"
            v-html="decodedSource"
          ></div>
          <div
            v-else
            class="code"
            v-html="decodedCode"
          ></div>
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
.demo {
  font-size: 16px;
}

.container {
  border: 1px solid #DCDFE7;
  border-radius: 4px;
}

.code-show {
  padding: 1.5rem;
  border-bottom: 1px solid #DCDFE7;
}

.show-icon {
  display: flex;
  justify-content: flex-end;
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
