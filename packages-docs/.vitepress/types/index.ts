export enum EComponentType {
  VUE = "vue",
  REACT = "react",
  HTML = "html",
}

export interface IMixFilesItem {
  type: EComponentType;
  name?: string;
  file: string;
}

/**
 * 外部 demo 标签接受的参数
 */
export interface IProps {
  items: IMixFilesItem[];
  defaultFile: string;
  description?: string;
}

export interface IComponentsProps {
  name: string;
  path: string;
  source: string;
  type: EComponentType;
}
