import React from "react";

import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiAlertCircle } from "react-icons/fi";

import ModalConfirm from "./ModalConfirm";

export default {
  title: "Modal/ModalConfirm",
  component: ModalConfirm,
  argTypes: {
    isVisible: {
      defaultValue: true,
    },
    title: {
      defaultValue: "ModalConfirm",
    },
    size: {
      defaultValue: "xl",
    },
    onClose: {
      action: "Close ModalConfirm",
    },
    description: {
      defaultValue: "Really wanna close this modal?",
    },
    icon: {
      defaultValue: () => <FiAlertCircle size={58} />,
    },
  },
} as ComponentMeta<typeof ModalConfirm>;

const Template: ComponentStory<typeof ModalConfirm> = (args) => (
  <ModalConfirm {...args} />
);

export const Default = Template.bind({});
