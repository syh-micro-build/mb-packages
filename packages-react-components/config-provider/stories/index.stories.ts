import type {
  Meta,
  StoryObj
} from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Demo"
} satisfies Meta<typeof Index>;

type TStory = StoryObj<typeof meta>;

export const Demo: TStory = {};

export default meta;
