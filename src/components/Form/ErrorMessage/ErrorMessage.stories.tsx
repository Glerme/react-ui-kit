import { Story, ComponentMeta } from "@storybook/react";

import ErrorMessage from "./ErrorMessage";
import { ErrorMessageProps } from "./ErrorMessageProps";

export default {
  title: "Form/ErrorMessage",
  component: ErrorMessage,
  argTypes: {
    error: {
      defaultValue: "Has error",
    },
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: Story<ErrorMessageProps> = (args) => {
  return <ErrorMessage {...args} />;
};

export const Default = Template.bind({});
