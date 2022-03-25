import React from "react";

import { Story, ComponentMeta, Meta } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

export default {
  title: "Avatar/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Complete = Template.bind({});

Complete.args = {
  label: "User",
  hasDropdown: true,
  picture: "https://via.placeholder.com/150",
  notificationNumber: 10,
  href: "",
  onClick: action("clicked"),
};

export const Link = Template.bind({});

Link.args = {
  label: "User",
  hasDropdown: true,
  picture: "https://via.placeholder.com/150",
  notificationNumber: 10,
  href: "#",
};

export const WithoutDropdown = Template.bind({});

WithoutDropdown.args = {
  label: "User",
  picture: "https://via.placeholder.com/150",
  notificationNumber: 10,
};

export const WithoutName = Template.bind({});

WithoutName.args = {
  picture: "https://via.placeholder.com/150",
  notificationNumber: 10,
};

export const WithoutNotification = Template.bind({});

WithoutNotification.args = {
  picture: "https://via.placeholder.com/150",
};

export const WithoutAvatar = Template.bind({});

WithoutAvatar.args = {};
