import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button/Button",
  component: Button,
  argTypes: {
    label: {
      defaultValue: "Hello world",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Hello world!",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click me!",
};
