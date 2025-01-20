<script lang="ts">
import {
  defineComponent
} from "vue";

export default defineComponent({
  name: "VcLoading",
  props: {
    text: {
      type: String,
      default: "加载中..."
    },
    color: {
      type: String,
      default: "#165dff"
    },
    textColor: {
      type: String,
      default: "#86909c"
    }
  }
});
</script>

<template>
  <div
    class="vc-container-loading"
    :style="{ color: textColor }"
  >
    <div
      class="loading-spinner"
      :style="{
        borderColor: `${textColor}20`,
        borderTopColor: color
      }"
    ></div>
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.vc-container-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  animation: loading-spin 1s linear infinite;
}

@keyframes loading-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
