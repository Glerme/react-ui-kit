import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "Avatar/Avatar",
  component: Avatar,
  argTypes: {
    label: {
      defaultValue: "User",
    },
    hasDropdown: {
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
