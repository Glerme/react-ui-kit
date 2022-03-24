import { Story, ComponentMeta } from "@storybook/react";

import Multiselect from "./Multiselect";
import { MultiselectProps } from "./Multiselect.types";

export default {
  title: "Form/Multiselect",
  component: Multiselect,
  argTypes: {
    name: {
      defaultValue: "Multiselect",
    },
    label: {
      defaultValue: "Multiselect options",
    },
    placeholder: {
      defaultValue: "Multiselect...",
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
} as ComponentMeta<typeof Multiselect>;

const Template: Story<MultiselectProps> = (args) => {
  return (
    <Multiselect
      options={[
        {
          label: "Item 1",
          value: "1",
        },
        {
          label: "Item 2",
          value: "2",
        },
      ]}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
