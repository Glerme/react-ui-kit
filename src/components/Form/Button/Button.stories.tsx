import React from "react";

import { Story, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Button from "./Button";
import { ButtonProps } from "./ButtonProps";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    variant: ["primary", "secondary", "success", "error"],
    children: {
      defaultValue: "Button Primary",
    },
    onClick: {
      action: "Hello world",
    },
    size: {
      defaultValue: "normal",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Button Secondary",
  onClick: action("Hello world"),
};

export const Success = Template.bind({});

Success.args = {
  variant: "success",
  children: "Button Success",
  onClick: action("Hello world"),
};

export const Error = Template.bind({});

Error.args = {
  variant: "error",
  children: "Button Error",
  onClick: action("Hello world"),
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: "primary",
  children: "Button Outlined Primary",
  disabled: true,
};

export const OutlinedPrimary = Template.bind({});

OutlinedPrimary.args = {
  variant: "primary",
  isOutlined: true,
  children: "Button Outlined Primary",
  onClick: action("Hello world"),
};

export const OutlinedSecondary = Template.bind({});

OutlinedSecondary.args = {
  variant: "secondary",
  isOutlined: true,
  children: "Button Outlined Secondary",
  onClick: action("Hello world"),
};

export const OutlinedSuccess = Template.bind({});

OutlinedSuccess.args = {
  variant: "success",
  isOutlined: true,
  children: "Button Outlined Success",
  onClick: action("Hello world"),
};

export const OutlinedError = Template.bind({});

OutlinedError.args = {
  variant: "error",
  isOutlined: true,
  children: "Button Outlined Error",
  onClick: action("Hello world"),
};
