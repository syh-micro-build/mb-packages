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
    :long="true"
    type="link"
  />
  <hr />
  <Link
    label="sdsd"
    color="default"
  />
</template>

<style scoped>

</style>
