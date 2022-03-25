import { Story, ComponentMeta } from "@storybook/react";

import ErrorDetails from "./ErrorDetails";
import { ErrorDetailsProps } from "./ErrorDetails.types";

export default {
  title: "Error/Error Details",
  component: ErrorDetails,
} as ComponentMeta<typeof ErrorDetails>;

const Template: Story<ErrorDetailsProps> = (args) => <ErrorDetails {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: {
    defaultValue: {
      isErrored: true,
      seeDetails: false,
      error: {
        name: "Error",
        message: "Error message",
      },
    },
  },
};
