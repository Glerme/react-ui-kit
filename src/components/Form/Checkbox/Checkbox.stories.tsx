import { Story, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./CheckboxProps";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      defaultValue: "active",
    },
    label: {
      defaultValue: "Active",
    },
    title: {
      defaultValue: "Checkbox",
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});

export const Active = Template.bind({});

Active.args = {
  value: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  value: true,
};
