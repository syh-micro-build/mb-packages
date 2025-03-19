import {
  Button as _Button,
  ButtonProps as _ButtonProps
} from "@arco-design/web-react";
import {
  ButtonProps,
  ButtonVariant,
  EType
} from "@mb-kit/schema-validator";
import {
  useCallback,
  useMemo
} from "react";

export default function Button({
  children,
  class: className,
  style,
  size,
  disabled,
  loading,
  type,
  variant,
  onClick
}: ButtonProps): React.ReactElement {
  const handleClick = useCallback((e: Event) => {
    if (onClick) {
      onClick(e);
    }
  }, [onClick]);

  const optionsType = useMemo<_ButtonProps>(() => {
    if(type === EType.PRIMARY || type === EType.INFO) {
      return {
        type: "primary"
      };
    }

    if(type === EType.SUCCESS) {
      return {
        type: "primary",
        status: "success"
      };
    }

    if(type === EType.WARNING) {
      return {
        type: "primary",
        status: "warning"
      };
    }

    if(type === EType.DANGER) {
      return {
        type: "primary",
        status: "danger"
      };
    }

    return {};
  }, [type]);

  const optionsVariant = useMemo<_ButtonProps>(() => {
    if(variant === ButtonVariant.CIRCLE || variant === ButtonVariant.ROUND) {
      return {
        shape: variant
      };
    }

    if(variant === ButtonVariant.TEXT || variant === ButtonVariant.OUTLINE || variant === ButtonVariant.DASHED) {
      return {
        type: variant
      };
    }

    return {};
  }, [variant]);

  return <_Button className={className}
    disabled={disabled}
    loading={loading}
    onClick={handleClick}
    size={size}
    {...optionsType}
    {...optionsVariant}
    style={style}>
    {children}
  </_Button>;
}
