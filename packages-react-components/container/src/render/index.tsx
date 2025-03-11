import {
  ReactElement
} from "react";

import {
  IProps
} from "../types";
import Main from "./ui/main";

export default function Render({
  value
}: IProps): ReactElement {
  return <Main value={value} />;
}
