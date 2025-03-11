import {
  PropsComponents
} from "@mb-kit/schema-validator";
import {
  ReactElement
} from "react";

import {
  IProps
} from "../../types";
import El from "./el";

export default function Main({
  value
}: IProps): ReactElement {

  if ("items" in value && value.items) {
    return <div className={value.class}
      style={{
        padding: value.padding,
        margin: value.margin
      }}>
      {value.items.map(item => <El key={item.type}
        value={item as PropsComponents} />)}
    </div>;
  }

  return <El value={value as PropsComponents} />;
}
