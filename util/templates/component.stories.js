module.exports = (componentName) => ({
  content: `
import React from "react";

import { Story, ComponentMeta } from "@storybook/react";

import ${componentName} from "./${componentName}";

export default {
  title: "Foo/${componentName}",
  component: ${componentName},
  argTypes: {},
} as ComponentMeta<typeof ${componentName}>;


const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});

`,
  extension: `.stories.tsx`,
});
