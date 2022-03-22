import { Story, ComponentMeta } from "@storybook/react";

import { useForm } from "../../../hooks/useForm";

import { action } from "@storybook/addon-actions";

import Form from "../Form";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import { FormProps } from "./FormProps";

export default {
  title: "Form/Form",
  component: Form,
  argTypes: {
    onSubmit: {
      action: "Hello world",
    },
  },
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => {
  const { fields, errors, setFields, submitHandler, buttonDisabled } = useForm({
    name: "",
    email: "",
    password: "",
    accessGroup: "",
  });

  const handleSubmit = submitHandler({
    callback: async (values) => {
      console.log({
        values,
      });
    },
  });

  return (
    <Form
      {...args}
      onSubmit={async () => {
        action("submit")(await handleSubmit());
      }}
    >
      <Input
        label="Name"
        name="name"
        onChange={(value) => setFields({ ...fields, name: value })}
        value={fields.name}
        error={errors.name}
      />

      <Input
        label="Email"
        name="email"
        onChange={(value) => setFields({ ...fields, email: value })}
        value={fields.email}
        error={errors.email}
        type="email"
      />

      <Input
        label="Password"
        name="password"
        onChange={(value) => setFields({ ...fields, password: value })}
        value={fields.password}
        error={errors.password}
        type="password"
      />

      <Select
        label="Access Group"
        name="accessGroup"
        onChange={(value) => setFields({ ...fields, accessGroup: value })}
        value={fields.accessGroup}
        error={errors.accessGroup}
        placeholder="Select..."
        options={[
          {
            label: "Group 1",
            value: "1",
          },
          {
            label: "Group 2",
            value: "2",
          },
          {
            label: "Group 3",
            value: "3",
          },
        ]}
      />

      <Button
        variant="error"
        isOutlined
        onClick={() => {
          action("cancel");
        }}
        disabled={buttonDisabled}
      >
        Cancel
      </Button>

      <Button variant="success" type="submit" disabled={buttonDisabled}>
        Submit
      </Button>
    </Form>
  );
};

export const Default = Template.bind({});
