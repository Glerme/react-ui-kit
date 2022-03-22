import { Story, ComponentMeta } from "@storybook/react";

import Badge from "./Badge";
import { BadgeProps } from "./BadgeProps";

export default {
  title: "Form/Badge",
  component: Badge,
  argTypes: {
    title: {
      defaultValue: "Default Badge",
    },
    children: {
      defaultValue: "Default Badge",
    },
    type: ["primary", "secondary", "info", "success", "warning", "error"],
  },
} as ComponentMeta<typeof Badge>;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
};
