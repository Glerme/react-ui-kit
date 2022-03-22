import { Story, ComponentMeta } from "@storybook/react";

import TabList from "./TabList";
import { TabListProps } from "./TabListProps";

export default {
  title: "Tablist/Tablist",
  component: TabList,
} as ComponentMeta<typeof TabList>;

const Template: Story<TabListProps> = (args) => {
  return (
    <TabList labels={["Label 1", "Label 2", "Label 3"]} {...args}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </TabList>
  );
};

export const Default = Template.bind({});
