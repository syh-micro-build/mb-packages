import {
  EType,
  ButtonVariant
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
    <p>颜色</p>

    <Button children="Default Button"
      onClick={handleClick} />

    <Button type={EType.PRIMARY}>
      Primary
    </Button>

    <Button type={EType.SUCCESS}>
      Primary
    </Button>

    <Button type={EType.INFO}>
      Primary
    </Button>

    <Button type={EType.WARNING}>
      Primary
    </Button>

    <Button type={EType.DANGER}>
      Primary
    </Button>

    <p>形状</p>

    <Button type={EType.WARNING}
      variant={ButtonVariant.OUTLINE}>
      Circle Button
    </Button>

    <Button type={EType.DEFAULT}
      variant={ButtonVariant.CIRCLE}>
      C
    </Button>

    <Button type={EType.DEFAULT}
      variant={ButtonVariant.LINK}>
      Link
    </Button>
  </>;
}
