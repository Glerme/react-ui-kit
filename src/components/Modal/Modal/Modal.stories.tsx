import React from "react";

import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Modal from "./Modal";

export default {
  title: "Modal/Modal",
  component: Modal,
  argTypes: {
    isVisible: {
      defaultValue: true,
    },
    title: {
      defaultValue: "Modal",
    },
    size: {
      defaultValue: "xl",
    },
    onClose: {
      action: "Close Modal",
    },
    loadingComponent: {
      defaultValue: <></>,
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <div>teste</div>
  </Modal>
);

export const Default = Template.bind({});
