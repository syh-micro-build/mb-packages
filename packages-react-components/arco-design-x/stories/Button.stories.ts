import type {
  Meta,
  StoryObj
} from "@storybook/react";

import {
  Button
} from "./Button";

const meta = {
  title: "Demo",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Primary: TStory = {
  args: {
    label: "Button"
  }
};

export const Secondary: TStory = {
  args: {
    label: "Button"
  }
};

export const Large: TStory = {
  args: {
    label: "Button"
  }
};

export const Small: TStory = {
  args: {
    label: "Button"
  }
};
