import type {
  Meta,
  StoryObj
} from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Button"
} satisfies Meta<typeof Index>;

type TStory = StoryObj<typeof meta>;

export const Button: TStory = {};

export default meta;
