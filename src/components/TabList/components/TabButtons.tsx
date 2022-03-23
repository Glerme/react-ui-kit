import React from "react";

import classNames from "classnames";

import { TabButtonsProps } from "./TabButtonsProps";

import "./TabButtons.scss";

export const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  labels,
  onTabClick,
}) => (
  <div className={classNames("tab-buttons-container")}>
    {labels.map((label) => (
      <button
        key={label}
        className={classNames(
          "tab-button",
          activeTab === label ? "active" : ""
        )}
        onClick={() => onTabClick(label)}
        title={`Visualizar ${label}`}
      >
        {label}
      </button>
    ))}
  </div>
);
