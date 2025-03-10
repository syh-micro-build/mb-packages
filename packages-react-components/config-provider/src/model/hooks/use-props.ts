import {
  useMemo
} from "react";

import {
  IModelProps
} from "../types";
import useModelContext from "./_use-model-context";

export default function useModelProps(): IModelProps {
  const {
    props
  } = useModelContext();

  return useMemo(() => props, [props]);
}
