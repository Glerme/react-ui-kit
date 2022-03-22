import React from "react";

import classNames from "classnames";
import { FiChevronRight } from "react-icons/fi";

import Checkbox from "./Checkbox";

import { TreeItemListProps } from "./TreeItemListProps";

import "../Tree.scss";

export const TreeItemList: React.FC<TreeItemListProps> = ({
  items,
  parentItems,
  onToggleCheck,
  onToggleOpen,
}) => {
  return (
    <ul className={classNames("tree-item-list")}>
      {parentItems.map((node) => {
        const children = items.filter((item) => item.parentId === node.itemId);

        return (
          <li
            key={node.itemId}
            className={classNames("tree-item", node.open ? "is-open" : "")}
          >
            <div className={classNames("tree-item-description")}>
              {children.length > 0 && (
                <button
                  type="button"
                  onClick={() => onToggleOpen(node.itemId)}
                  className={classNames(
                    "tree-item-chevron-button",
                    node.open ? "rotate-icon" : ""
                  )}
                >
                  <FiChevronRight size={18} />
                </button>
              )}
              <Checkbox
                label={node.name}
                name={node.itemId}
                value={node.checked}
                onChange={() => onToggleCheck(node.itemId)}
              />
            </div>

            {children.length > 0 && (
              <TreeItemList
                items={items}
                parentItems={children}
                onToggleCheck={onToggleCheck}
                onToggleOpen={onToggleOpen}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
