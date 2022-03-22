import { useState } from "react";

import { Story, ComponentMeta } from "@storybook/react";

import Tree from "./Tree";
import { TreeItem, TreeProps } from "./TreeProps";

export default {
  title: "Form/Tree",
  component: Tree,
  argTypes: {},
} as ComponentMeta<typeof Tree>;

const Template: Story<TreeProps> = (args) => {
  const [items, setItems] = useState<TreeItem[]>([
    {
      itemId: "1",
      name: "ITEM 1",
      checked: true,
      open: true,
      parentId: "",
    },
    {
      itemId: "2",
      name: "ITEM 1-1",
      checked: true,
      open: false,
      parentId: "1",
    },
    {
      itemId: "3",
      name: "ITEM 1-2",
      checked: true,
      open: false,
      parentId: "1",
    },
    {
      itemId: "4",
      name: "ITEM 1-3",
      checked: true,
      open: false,
      parentId: "1",
    },
    {
      itemId: "5",
      name: "ITEM 2",
      checked: true,
      open: false,
      parentId: "",
    },
    {
      itemId: "6",
      name: "ITEM 3",
      checked: false,
      open: false,
      parentId: "",
    },
    {
      itemId: "7",
      name: "ITEM 4",
      checked: false,
      open: false,
      parentId: "",
    },
  ]);

  return (
    <Tree items={items} setItems={(newItems) => setItems(newItems)} {...args} />
  );
};

export const Default = Template.bind({});
