import { useState } from "react";

import { FiUser } from "react-icons/fi";

import { Story, ComponentMeta } from "@storybook/react";

import InputWithIcon from "./InputWithIcon";
import { InputWithIconProps } from "./InputWithIcon.types";

export default {
  title: "Form/Input Icon",
  component: InputWithIcon,
  argTypes: {
    name: {
      defaultValue: "message",
    },
    label: {
      defaultValue: "Message",
    },
    placeholder: {
      defaultValue: "Write your message",
    },
    icon: {
      defaultValue: () => <FiUser />,
    },
  },
} as ComponentMeta<typeof InputWithIcon>;

const Template: Story<InputWithIconProps> = (args) => {
  const [state, setState] = useState("");

  return (
    <InputWithIcon
      {...args}
      onChange={(value) => setState(value)}
      value={state}
    />
  );
};

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  name: "errorInput",
  label: "Error Input",
  error: "Has one error",
};

export const Disabled = Template.bind({});

Disabled.args = {
  name: "disabledIput",
  label: "Disabled Input",
  disabled: true,
};
