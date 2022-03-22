import { Story, ComponentMeta } from "@storybook/react";

import InputFile from "./InputFile";
import { InputFileProps } from "./InputFileProps";

export default {
  title: "Form/Input File",
  component: InputFile,
  argTypes: {
    name: {
      defaultValue: "inputFile",
    },
    label: {
      defaultValue: "Click to send a file",
    },
  },
} as ComponentMeta<typeof InputFile>;

const Template: Story<InputFileProps> = (args) => {
  return <InputFile {...args} />;
};

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  background: "secondary",
};

export const OutlinedPrimary = Template.bind({});

OutlinedPrimary.args = {
  background: "primary",
  isOutlined: true,
};

export const OutlinedSecondary = Template.bind({});

OutlinedSecondary.args = {
  background: "secondary",
  isOutlined: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
