import { Story, ComponentMeta } from "@storybook/react";

import ErrorDetails from "./ErrorDetails";
import { ErrorDetailsProps } from "./ErrorDetails.types";

export default {
  title: "Error/ErrorDetails",
  component: ErrorDetails,
  argTypes: {
    error: {
      defaultValue: {
        isErrored: true,
        seeDetails: false,
      },
    },
  },
} as ComponentMeta<typeof ErrorDetails>;

const Template: Story<ErrorDetailsProps> = (args) => <ErrorDetails {...args} />;

export const Default = Template.bind({});
