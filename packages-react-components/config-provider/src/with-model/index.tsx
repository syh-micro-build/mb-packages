import React from "react";

import Model, {
  ModelProviderProps
} from "../model";

export default function WithModel({
  children,
  ...props
}: ModelProviderProps): React.ReactElement {
  return <Model {...props}>
    {children}
  </Model>;
}
