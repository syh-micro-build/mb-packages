<script lang="tsx" setup>

import {
  Button
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
    @clcik="handleClick"
  />
</template>

<style scoped>

</style>
