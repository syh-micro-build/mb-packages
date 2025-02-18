declare module "virtual:css-load-plugin" {
  export function cssLoad(isArco: boolean): Promise<void>;
}

declare module "virtual:component-map-plugin" {
  import type {
    Component
  } from "vue";
  export const Button: Component;
}
