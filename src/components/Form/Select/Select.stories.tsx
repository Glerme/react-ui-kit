import { Story, ComponentMeta } from "@storybook/react";

import Select from "../Select";
import { SelectProps } from "./Select.types";

export default {
  title: "Form/Select",
  component: Select,
  argTypes: {
    name: {
      defaultValue: "select",
    },
    label: {
      defaultValue: "Select options",
    },
    placeholder: {
      defaultValue: "Select...",
    },
    options: {
      defaultValue: [
        {
          label: "Item 1",
          value: "1",
        },
        {
          label: "Item 2",
          value: "2",
        },
        {
          label: "Item 3",
          value: "3",
        },
        {
          label: "Item 4",
          value: "4",
        },
      ],
    },
  },
} as ComponentMeta<typeof Select>;

const Template: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
