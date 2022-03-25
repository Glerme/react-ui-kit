import { useState } from "react";

import { Story, ComponentMeta } from "@storybook/react";

import InputPhone from "./InputPhone";

import { InputPhoneProps } from "./InputPhone.types";

export default {
  title: "Form/Input Phone",
  component: InputPhone,
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
    isWhatsapp: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof InputPhone>;

const Template: Story<InputPhoneProps> = (args) => {
  const [state, setState] = useState("");

  return (
    <InputPhone {...args} onChange={(value) => setState(value)} value={state} />
  );
};

export const Default = Template.bind({});

Default.args = {
  setNewTelefones: () => [{ numero: "", whatsapp: false }],
  telefones: [{ numero: "", whatsapp: false }],
  className: "",
  errors: null,
};

export const Error = Template.bind({});

Error.args = {
  name: "errorInputPhone",
  label: "Error InputPhone",
  error: "Has one error",
};

export const Disabled = Template.bind({});

Disabled.args = {
  name: "disabledIput",
  label: "Disabled InputPhone",
  disabled: true,
};
