import React from "react";

import { Story, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

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
    picture: { defaultValue: "https://via.placeholder.com/150" },
    notificationNumber: {
      defaultValue: 10,
    },
    href: { defaultValue: "#" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
