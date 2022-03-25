import { Story, ComponentMeta } from "@storybook/react";

import ErrorMessage from "./ErrorMessage";
import { ErrorMessageProps } from "./ErrorMessage.types";

export default {
  title: "Form/Error Message",
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
