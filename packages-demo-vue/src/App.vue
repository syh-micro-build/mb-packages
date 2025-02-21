<script setup lang="ts">
import ConfigProvider, {
  EUiType
} from "mb-vue-components-config-provider";
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
