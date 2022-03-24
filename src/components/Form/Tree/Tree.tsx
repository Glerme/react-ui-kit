import React from "react";

import classNames from "classnames";

import { TreeItem, TreeProps } from "./Tree.types";

import { TreeItemList } from "./components/TreeItemList";

import "./Tree.scss";

const Tree: React.FC<TreeProps> = ({ items, setItems, className }) => {
  const updateParent = (items: TreeItem[], parent_id: string | null) => {
    const parentIndex = items.findIndex((item) => item.itemId === parent_id);
    const parent = items[parentIndex];

    if (!parent) {
      return;
    }

    items[parentIndex] = { ...parent, checked: true };

    updateParent(items, parent.parentId);
  };

  const updateChildren = (
    items: TreeItem[],
    acesso_id: string,
    checked: boolean
  ) => {
    const children = items.filter((item) => item.parentId === acesso_id);

    if (!children.length) {
      return;
    }

    for (const child of children) {
      const childIndex = items.findIndex(
        (item) => item.itemId === child.itemId
      );

      items[childIndex] = { ...child, checked };

      updateChildren(items, child.itemId, checked);
    }
  };

  const onToggleCheck = (acesso_id: string) => {
    const index = items.findIndex((item) => item.itemId === acesso_id);
    const item = items[index];

    const newItems = [...items];

    newItems[index] = { ...item, checked: !item.checked };

    if (!item.checked) {
      updateParent(newItems, item.parentId);
    }

    updateChildren(newItems, item.itemId, !item.checked);

    setItems(newItems);
  };

  const onToggleOpen = (acesso_id: string) => {
    const index = items.findIndex((item) => item.itemId === acesso_id);
    const item = items[index];

    const newItems = [...items];

    newItems[index] = { ...item, open: !item.open };

    setItems(newItems);
  };

  return (
    <div className={classNames("tree-view-container", className)}>
      <TreeItemList
        items={items}
        parentItems={items.filter((item) => item.parentId == null)}
        onToggleOpen={onToggleOpen}
        onToggleCheck={onToggleCheck}
      />
    </div>
  );
};

export default Tree;
