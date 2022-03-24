import { useState } from "react";

import { Story, ComponentMeta } from "@storybook/react";

import Input from "./Input";
import { InputProps } from "./Input.types";

export default {
  title: "Form/Input",
  component: Input,
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
  },
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => {
  const [state, setState] = useState("");

  return (
    <Input {...args} onChange={(value) => setState(value)} value={state} />
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
