import {
  ButtonType
} from "@mb-kit/schema-validator";
import {
  useCallback
} from "react";

import {
  Button
} from "../../src";

export default function Index(): React.ReactElement {

  const handleClick = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Button clicked");
  }, []);

  return <>
    <Button children="Default Button"
      onClick={handleClick} />

    <Button type={ButtonType.PRIMARY}>Primary Button</Button>
    <Button type={ButtonType.DASHED}>Dashed Button</Button>
    <Button type={ButtonType.TEXT}>Text Button</Button>
    <Button type={ButtonType.LINK}>Link Button</Button>
  </>;
}
