module.exports = (componentName) => ({
  content: `
// Generated with util/create-component.js
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ${componentName} from "./${componentName}";

export default {
  title: "Foo/${componentName}",
  component: ${componentName},
  argTypes: {},
} as ComponentMeta<typeof ${componentName}>;


const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});

`,
  extension: `.stories.tsx`,
});
