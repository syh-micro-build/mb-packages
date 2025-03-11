import {
  useProps,
  EUiType
} from "@mb-kit/react-config-provider";
import {
  PropsComponents
} from "@mb-kit/schema-validator";
import {
  ReactElement,
  useMemo
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

  const {
    type
  } = useProps();

  const componentMap = useMemo(() => {
    if (type === EUiType.ANT_DESIGN) {
      return AntDesignComponentMap;
    }

    return AntDesignComponentMap;
  }, [type]);

  const {
    type: valueType,
    options
  } = value;

  const Component = componentMap[valueType];

  return <Component {...options} />;
}
