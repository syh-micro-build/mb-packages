import Index from "./index.vue";
import Success from "./success.vue";
import type {
  Meta, StoryObj
} from "@storybook/vue3";

const meta = {
  component: Index,
  title: "Demo",
  argTypes: {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    isSuccess: {
      control: "boolean"
    }
  }
} satisfies Meta<typeof Index>;

type TStory = StoryObj<typeof meta>;

const Template: TStory["render"] = args => ({
  components: {
    Index,
    Success
  },
  setup: () => ({
    args
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  template: args.isSuccess ? "<Success v-bind=\"args\" />" : "<Index v-bind=\"args\" />"
});

export const Demo: TStory = {
  render: Template,
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    isSuccess: false
  }
};

export const SuccessState: TStory = {
  render: Template,
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    isSuccess: true
  }
};

export default meta;
