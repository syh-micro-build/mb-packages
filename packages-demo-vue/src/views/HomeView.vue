<script setup lang="tsx">

import Container from "mb-vue-components-container";

import {
  Test01
} from "../components";

const data: any = {
  type: "Button",
  options: {
    label: "Main Str"
  }
};
</script>

<template>
  <main>
    首页
    <hr />

    <Test01 />

    <Container v-bind="data" />
  </main>
</template>
