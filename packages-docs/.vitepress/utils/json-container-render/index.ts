import {
  PropsContainerRender
} from "@mb-kit/vue-container-render";

export default function jsonContainerRender(value: string): string {

  const data: PropsContainerRender = JSON.parse(value);

  const script = `<script setup lang="ts">
import ContainerRender, {
  PropsContainerRender
} from "@mb-kit/vue-container-render";

/**
 * 推荐 json 数据的引入方式
 * 
 * import jsonData from "json 数据";
 */

const data: PropsContainerRender = ${JSON.stringify(data)};
</script>
  `;

  const template = `<template>
  <ContainerRender :value="data" />
</template>`;

  return `
${script}
${template}
`;
}
