import { Story, ComponentMeta } from "@storybook/react";

import InputMultiFile from "./InputMultiFile";
import { InputMultiFileProps } from "./InputMultiFile.types";

export default {
  title: "Form/Input Multiple Files",
  component: InputMultiFile,
  argTypes: {
    name: {
      defaultValue: "inputMultiFile",
    },
    label: {
      defaultValue: "Click to send many files",
    },
  },
} as ComponentMeta<typeof InputMultiFile>;

const Template: Story<InputMultiFileProps> = (args) => {
  return <InputMultiFile {...args} />;
};

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  background: "secondary",
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
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
