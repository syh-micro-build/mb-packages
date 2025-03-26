import {
  PropsComponents
} from "@mb-kit/schema-validator";
import {
  ReactElement
} from "react";

import {
  AntDesignComponentMap
} from "../../const";

interface IProps {
  value: PropsComponents;
}

export default function El({
  value
}: IProps): ReactElement {

  // const {
  //   type
  // } = useProps();

  const {
    type: valueType,
    options
  } = value;

  const Component = AntDesignComponentMap[valueType];

  return <Component {...options} />;
}
