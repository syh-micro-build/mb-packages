import {
  useContext
} from "react";

import Context from "../context";
import {
  IModelValue
} from "../types";

export default function useModelContext(): IModelValue {
  return useContext(Context)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
}
