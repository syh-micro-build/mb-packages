<script setup lang="tsx">

import {
  ElButton
} from "element-plus";

</script>
<template>
  <ElButton>
    <slot>
      Primary Button
    </slot>
  </ElButton>

  <ElButton type="primary">
    Primary
  </ElButton>
  <ElButton type="success">
    Success
  </ElButton>
  <ElButton type="info">
    Info
  </ElButton>
  <ElButton type="warning">
    Warning
  </ElButton>
  <ElButton type="danger">
    Danger
  </ElButton>
</template>
<style scoped>

</style>
