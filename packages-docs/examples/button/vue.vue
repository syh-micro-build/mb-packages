<script setup lang="ts">
import Container from "@mb-kit/vue-container";

import Json from "./index.json";

</script>
<template>
  <div>
    <Container :value="Json" />
  </div>
</template>
