import React from "react";

import Context from "../context";
import {
  IModelProviderProps
} from "../types";

export default function Provider({
  children,
  ...props
}: IModelProviderProps): React.ReactElement {
  return <Context.Provider value={props}>
    {children}
  </Context.Provider>;
}
