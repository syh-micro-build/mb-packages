import {
  PropsContainerRender
} from "@micro-test-01/vue-container-render";

import convertOptionsToString from "../convert-options-to-string";

export default function jsonToHtml(value: string): string {

  const data: PropsContainerRender = JSON.parse(value);

  //   const script = `<script setup lang="tsx">

  // </script>
  // `;

  const renderEls = obj => {
    const {
      type,
      options
    } = obj;

    const {
      label,
      ...rest
    } = options;

    return options.label ? `<${type} ${convertOptionsToString(rest)}>
      ${label}
    </${type}>
    ` : `<template>
    <${type} ${convertOptionsToString(options)} />
  </template>
  `;
  };

  // TODO 暂时写成两个，后面使用 const spaces = ' '.repeat(indent); 进行优化
  const renderEl = obj => {
    const {
      type,
      options
    } = obj;

    const {
      label,
      ...rest
    } = options;

    return options.label ? `<${type} ${convertOptionsToString(rest)}>
  ${label}
</${type}>
` : `<template>
  <${type} ${convertOptionsToString(options)} />
</template>
`;
  };

  const template = () => {
    if("items" in data && data.items) {
      const {
        items, ...rest
      } = data;

      return `<template>
  <div ${convertOptionsToString(rest)}>
    ${items.map(item => renderEls(item)).join("")}
  </div>
</template>`;
    }

    return renderEl(data);
  };

  //   const style = `<style scoped>

  // </style>`;

  return `${template()}
`;
}
