import React from "react";

import {
  useProps
} from "../../src";

export default function Test01(): React.ReactElement {
  const {
    type
  } = useProps();

  return <div>
    {type}
  </div>;
}
