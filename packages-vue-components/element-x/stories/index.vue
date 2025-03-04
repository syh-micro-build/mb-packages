<script lang="tsx" setup>

import {
  Button,
  Link
} from "../src";

</script>

<template>
  @mb-kit/vue-element-x
  <hr />
  <Button
    label="按钮"
    shape="plain"
  />
  <hr />
  <Link
    label="链接"
    color="success"
    :loaing="true"
  />
</template>

<style scoped>

</style>
