<script setup lang="tsx">

import Container from "@micro-test-01/vue-container-render";

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

    <Container :value="data" />
  </main>
</template>
