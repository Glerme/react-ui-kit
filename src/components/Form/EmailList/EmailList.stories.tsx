import React from "react";

import { Story, ComponentMeta } from "@storybook/react";

import EmailList from "./EmailList";
import { EmailListProps } from "./EmailList.types";
import useForm from "../../../hooks/useForm";

export default {
  title: "Form/EmailList",
  component: EmailList,
  argTypes: {
    emails: {
      defaultValue: [{ email: "" }],
    },
    setNewEmails: {
      defaultValue: () => {},
    },
    errors: { defaultValue: null },
    className: { defaultValue: "" },
  },
} as ComponentMeta<typeof EmailList>;

const Template: Story<EmailListProps> = (args) => {
  const { fields, setFields } = useForm({
    emails: [{ email: "" }],
  });

  return (
    <EmailList
      emails={fields.emails}
      setNewEmails={(emails) => setFields({ ...fields, emails })}
      {...args}
    />
  );
};

export const Default = Template.bind({});
