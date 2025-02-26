<script setup lang="ts">
import {
  EUiType,
  ConfigProvider
} from "@micro-test-01/vue-container-render";
import {
  RouterLink,
  RouterView
} from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>
  <ConfigProvider :type="EUiType.ARCO_DESIGN">
    <RouterView />
  </ConfigProvider>
</template>

<style scoped>

</style>
