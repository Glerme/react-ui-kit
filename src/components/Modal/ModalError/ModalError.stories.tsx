import { Story, ComponentMeta } from "@storybook/react";

import ModalError from "./ModalError";
import { ModalErrorProps } from "./ModalError.types";

export default {
  title: "Modal/Modal Error",
  component: ModalError,
  argTypes: {},
} as ComponentMeta<typeof ModalError>;

const Template: Story<ModalErrorProps> = (args) => <ModalError {...args} />;

export const Default = Template.bind({});
