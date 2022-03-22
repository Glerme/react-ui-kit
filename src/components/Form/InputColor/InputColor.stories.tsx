import { Story, ComponentMeta } from "@storybook/react";

import InputColor from "./InputColor";
import { InputColorProps } from "../InputColor/InputColorProps";

export default {
  title: "Form/Input Color",
  component: InputColor,
  argTypes: {
    name: {
      defaultValue: "inputColor",
    },
    label: {
      defaultValue: "Input Color",
    },
  },
} as ComponentMeta<typeof InputColor>;

const Template: Story<InputColorProps> = (args) => {
  return <InputColor {...args} />;
};

export const Default = Template.bind({});
