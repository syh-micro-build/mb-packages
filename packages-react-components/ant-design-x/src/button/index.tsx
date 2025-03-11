import {
  ButtonProps
}from "@mb-kit/schema-validator";
import {
  Button
} from "antd";
import {
  useCallback,
  MouseEvent as _MouseEvent
} from "react";

type TButtonClickEvent = _MouseEvent<HTMLButtonElement, MouseEvent>;

export default function ButtonX({
  label,
  disabled,
  loading,
  style,
  class: _class,
  size,
  onClick

  // ...rest
}: ButtonProps): React.ReactElement {
  const handleClick = useCallback((e: TButtonClickEvent): void => {
    if (onClick) {
      onClick(e);
    }
  }, [onClick]);

  return <Button
    className={_class}
    disabled={disabled}
    loading={loading}
    onClick={handleClick}
    size={size}
    style={style}>
    {label}
  </Button>;
}
