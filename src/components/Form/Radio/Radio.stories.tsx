import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import useForm from "../../../hooks/useForm";

import Radio from "./Radio";

export default {
  title: "Form/Radio",
  component: Radio,
  argTypes: {
    name: {
      defaultValue: "active",
    },
    label: {
      defaultValue: "Active",
    },
    options: {
      defaultValue: [
        {
          label: "Yes",
          value: "1",
        },
        {
          label: "No",
          value: "2",
        },
      ],
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const { errors, fields, setFields } = useForm({
    active: "",
  });

  return (
    <Radio
      error={errors.active}
      value={fields.active}
      onChange={(value) => setFields({ ...fields, active: value })}
      {...args}
    />
  );
};

export const Default = Template.bind({});
