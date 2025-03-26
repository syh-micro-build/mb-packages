<script setup lang="ts">
import Card from "./card.vue";
</script>
<template>
  <div class="overview-base">
    <Card
      title="按钮"
      link="/components/button/"
    />
  </div>
</template>
<style scoped>
.overview-base {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1em;
}
</style>
