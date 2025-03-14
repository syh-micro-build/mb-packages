/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ButtonProps,
  ButtonVariant
}from "@mb-kit/schema-validator";
import {
  Button
} from "antd";
import {
  useCallback,
  MouseEvent as _MouseEvent,
  useMemo
} from "react";

type TButtonClickEvent = _MouseEvent<HTMLButtonElement, MouseEvent>;

export default function ButtonX({
  children,
  disabled,
  loading,
  style,
  class: _class,
  size,
  onClick,
  type,
  ...rest
}: ButtonProps): React.ReactElement {
  const handleClick = useCallback((e: TButtonClickEvent): void => {
    if (onClick) {
      onClick(e as unknown as MouseEvent);
    }
  }, [onClick]);

  const variant = useMemo((): any => {
    if (rest.variant === ButtonVariant.OUTLINE || rest.variant === ButtonVariant.DASHED || rest.variant === ButtonVariant.SOLID || rest.variant === ButtonVariant.FILLED) {
      return rest.variant;
    }

    return ButtonVariant.DEFAULT;
  }, [rest]);

  const shape = useMemo((): any => {
    if (rest.variant === ButtonVariant.ROUND || rest.variant === ButtonVariant.CIRCLE) {
      return rest.variant;
    }

    return ButtonVariant.DEFAULT;
  }, [rest]);

  return <Button
    className={_class}
    color={rest.color as any}
    disabled={disabled}
    loading={loading}
    onClick={handleClick}
    shape={shape}
    size={size}
    style={style}
    type={type}
    variant={variant}>
    {children}
  </Button>;
}
