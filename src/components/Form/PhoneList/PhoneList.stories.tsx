import React from "react";

import { Story, ComponentMeta } from "@storybook/react";

import PhoneList from "./PhoneList";

import useForm from "../../../hooks/useForm";

import { PhoneListProps } from "./PhoneList.types";

export default {
  title: "Form/Phone List",
  component: PhoneList,
  argTypes: {},
} as ComponentMeta<typeof PhoneList>;

const Template: Story<PhoneListProps> = (args) => {
  const { fields, setFields } = useForm({
    telefones: [{ numero: "", whatsapp: false }],
  });

  return (
    <PhoneList
      telefones={fields.telefones}
      setNewTelefones={(telefones) => setFields({ ...fields, telefones })}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  setNewTelefones: () => [{ numero: "", whatsapp: false }],
  telefones: [{ numero: "", whatsapp: false }],
  className: "",
  errors: {
    numero: "Has one error",
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  setNewTelefones: () => [{ numero: "", whatsapp: false }],
  telefones: [{ numero: "", whatsapp: false }],
  className: "",
  disabled: true,
};
