<script setup lang="ts">
import {
  PropsLink
} from "@mb-kit/vue-schema-validator";

import {
  ElLink
} from "element-plus";

const {
  label,
  ...rest
} = defineProps<PropsLink>();
</script>
<template>
  <ElLink
    :type="rest.color"
    :underline="rest.underline"
    :disabled="rest.disabled"
    :href="rest.href"
    :target="rest.target"
    :icon="rest.icon"
    class="link"
  >
    <template
      v-if="!rest.loading"
      #icon
    >
      <slot name="icon">
        <div class="sk-fading-circle">
          <div class="sk-circle1 sk-circle"></div>
          <div class="sk-circle2 sk-circle"></div>
          <div class="sk-circle3 sk-circle"></div>
          <div class="sk-circle4 sk-circle"></div>
          <div class="sk-circle5 sk-circle"></div>
          <div class="sk-circle6 sk-circle"></div>
          <div class="sk-circle7 sk-circle"></div>
          <div class="sk-circle8 sk-circle"></div>
          <div class="sk-circle9 sk-circle"></div>
          <div class="sk-circle10 sk-circle"></div>
          <div class="sk-circle11 sk-circle"></div>
          <div class="sk-circle12 sk-circle"></div>
        </div>
      </slot>
    </template>

    <slot>
      {{ label }}
    </slot>
  </ElLink>
</template>
<style scoped>
.sk-fading-circle {
  position: relative;
  width: 12px;
  height: 12px;
}

.sk-fading-circle .sk-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sk-fading-circle .sk-circle::before {
  display: block;
  width: 20%;
  height: 20%;
  margin: 0 auto;
  content: '';
  background-color: var(--el-link-hover-text-color);
  border-radius: 100%;
  animation: sk-circle-fade-delay 1.2s infinite ease-in-out both;
}

.link:hover .sk-fading-circle .sk-circle::before {
  background-color: var(--el-link-hover-text-color);
}

.sk-fading-circle .sk-circle2 {
  transform: rotate(30deg);
}

.sk-fading-circle .sk-circle3 {
  transform: rotate(60deg);
}

.sk-fading-circle .sk-circle4 {
  transform: rotate(90deg);
}

.sk-fading-circle .sk-circle5 {
  transform: rotate(120deg);
}

.sk-fading-circle .sk-circle6 {
  transform: rotate(150deg);
}

.sk-fading-circle .sk-circle7 {
  transform: rotate(180deg);
}

.sk-fading-circle .sk-circle8 {
  transform: rotate(210deg);
}

.sk-fading-circle .sk-circle9 {
  transform: rotate(240deg);
}

.sk-fading-circle .sk-circle10 {
  transform: rotate(270deg);
}

.sk-fading-circle .sk-circle11 {
  transform: rotate(300deg);
}

.sk-fading-circle .sk-circle12 {
  transform: rotate(330deg);
}

.sk-fading-circle .sk-circle2::before {
  animation-delay: -1.1s;
}

.sk-fading-circle .sk-circle3::before {
  animation-delay: -1s;
}

.sk-fading-circle .sk-circle4::before {
  animation-delay: -0.9s;
}

.sk-fading-circle .sk-circle5::before {
  animation-delay: -0.8s;
}

.sk-fading-circle .sk-circle6::before {
  animation-delay: -0.7s;
}

.sk-fading-circle .sk-circle7::before {
  animation-delay: -0.6s;
}

.sk-fading-circle .sk-circle8::before {
  animation-delay: -0.5s;
}

.sk-fading-circle .sk-circle9::before {
  animation-delay: -0.4s;
}

.sk-fading-circle .sk-circle10::before {
  animation-delay: -0.3s;
}

.sk-fading-circle .sk-circle11::before {
  animation-delay: -0.2s;
}

.sk-fading-circle .sk-circle12::before {
  animation-delay: -0.1s;
}

@keyframes sk-circle-fade-delay {
  0%, 39%, 100% { opacity: 0; }

  40% { opacity: 1; }
}
</style>
