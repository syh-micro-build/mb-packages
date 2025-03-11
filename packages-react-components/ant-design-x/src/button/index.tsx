import {
  Button
} from "antd";
import React from "react";

interface IProps {
  children: React.ReactNode | string | number | boolean;
}

export default function _Button({
  children
}: IProps): React.ReactElement {
  return <Button>
    {children}
  </Button>;
}
