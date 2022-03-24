// Generated with util/create-component.js
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ModalOverlay from "./ModalOverlay";

export default {
  title: "Modal/ModalOverlay",
  component: ModalOverlay,
  argTypes: {},
} as ComponentMeta<typeof ModalOverlay>;

const Template: ComponentStory<typeof ModalOverlay> = (args) => (
  <ModalOverlay {...args} />
);

export const Default = Template.bind({});
