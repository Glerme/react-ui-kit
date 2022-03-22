import { Story, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";
import { SpinnerProps } from "./SpinnerProps";

export default {
  title: "Loading/Spinner",
  component: Spinner,
  argTypes: {
    size: ["large", "medium", "small"],
  },
} as ComponentMeta<typeof Spinner>;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});

Large.args = {
  size: "large",
};

export const Small = Template.bind({});

Small.args = {
  size: "small",
};
