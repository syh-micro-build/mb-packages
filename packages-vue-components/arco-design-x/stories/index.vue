<script lang="tsx" setup>

import {
  Button,
  Link
} from "../src";

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log(11);
};
</script>

<template>
  @mb-kit/vue-arco-design-x
  <hr />
  <Button
    label="按钮"
    shape="plain"
    @clcik="handleClick"
  />
  <hr />
  <Link
    label="链接"
    color="warning"
    :underline="true"
    :loading="true"
  />
</template>

<style scoped>

</style>
