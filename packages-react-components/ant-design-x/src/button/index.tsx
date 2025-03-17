import {
  ButtonVariant,
  ButtonProps,
  EType
}from "@mb-kit/schema-validator";
import {
  Button,
  ButtonProps as _ButtonProps
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
  ...rest
}: ButtonProps): React.ReactElement {
  const handleClick = useCallback((e: TButtonClickEvent): void => {
    if (onClick) {
      onClick(e as unknown as MouseEvent);
    }
  }, [onClick]);

  function transformtType(type: EType | undefined):_ButtonProps {
    switch (type) {
      case EType.PRIMARY:
      case EType.INFO:
        return {
          type: EType.PRIMARY
        };
      case EType.SUCCESS:
        return {
          color: "green",
          variant: "solid"
        };
      case EType.WARNING:
        return {
          color: "orange",
          variant: "solid"
        };
      case EType.DANGER:
        return {
          color: "red",
          variant: "solid"
        };
      default:
        return {
          color: "default"
        };
    }
  }

  function transformtVariant(variant: ButtonVariant | undefined): _ButtonProps {
    if(!variant) {
      return {};
    }

    if(variant === ButtonVariant.ROUND || variant === ButtonVariant.CIRCLE) {
      return {
        shape: variant === ButtonVariant.ROUND ? "round" : "circle"
      };
    }

    return {
      variant: variant === ButtonVariant.OUTLINE ? "outlined" : "link"
    };
  }

  const options = useMemo<_ButtonProps>(() => ({
    ...transformtType(rest.type as EType),
    ...transformtVariant(rest.variant as ButtonVariant)
  }), [rest]);

  return <Button
    className={_class}
    disabled={disabled}
    loading={loading}
    onClick={handleClick}
    size={size}
    {...options}
    style={style}>
    {children}
  </Button>;
}
