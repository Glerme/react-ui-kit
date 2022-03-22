import { Story, ComponentMeta } from "@storybook/react";

import Label from "./Label";
import { LabelProps } from "./LabelProps";

export default {
  title: "Form/Label",
  component: Label,
  argTypes: {
    title: {
      defaultValue: "Default Label",
    },
    children: {
      defaultValue: "Default Label",
    },
    htmlFor: {
      defaultValue: "paragraph",
    },
  },
} as ComponentMeta<typeof Label>;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
