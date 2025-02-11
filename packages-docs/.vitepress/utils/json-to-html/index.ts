import {
  PropsContainerRender
} from "mb-components-vue-container-render";

import convertOptionsToString from "../convert-options-to-string";

export default function jsonToHtml(value: string): string {

  const data: PropsContainerRender = JSON.parse(value);

  const str = convertOptionsToString(data?.options || {});

  const script = `<script setup lang="tsx">
  
</script>
`;

  const template = data.label ? `<template>
  <${data.type} ${str}>
    ${data.label}
  </${data.type}>
</template>
` : `<template>
  <${data.type} ${str} />
</template>
`;

  const style = `<style scoped>
  
</style>`;

  return `
${script}
${template}
${style}
`;
}
