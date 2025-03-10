import React from "react";

interface IConfigProviderProps {
  value: string;
}

export default function ConfigProvider({
  value
}: IConfigProviderProps): React.ReactElement {
  return <div>demo {value}</div>;
}
