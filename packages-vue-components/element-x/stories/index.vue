<script lang="tsx" setup>

import {
  Link,
  Button
} from "../src";

</script>

<template>
  @mb-kit/vue-element-x
  <hr />
  <Button>
    Primary
  </Button>

  <Button type="primary">
    Primary
  </Button>
  <Button type="success">
    Success
  </Button>
  <Button type="info">
    Info
  </Button>
  <Button type="warning">
    Warning
  </Button>
  <Button type="danger">
    Danger
  </Button>
  <hr />
  <Link
    label="链接"
    color="success"
    :loading="false"
  />
</template>

<style scoped>

</style>
