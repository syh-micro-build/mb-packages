import {
  ReactNode
} from "react";

import {
  EUiType
} from "../../enum";

export interface IModelProps {
  type: EUiType;
}

export interface IModelValue {
  props: IModelProps;
}

export interface IModelProviderProps extends IModelValue {
  children: ReactNode;
}
