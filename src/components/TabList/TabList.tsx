import React, { cloneElement, useEffect, useState } from "react";

import classNames from "classnames";

import { TabButtons } from "./components/TabButtons";

import { TabListProps } from "./TabList.types";

import "./TabList.scss";

const TabList: React.FC<TabListProps> = ({
  children,
  labels = [""],
  defaultTab,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(labels[defaultTab || 0]);
  const [applyAnimation, setApplyAnimation] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setApplyAnimation(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [applyAnimation]);

  const handleChangeTab = (label: string) => {
    setApplyAnimation(true);
    setActiveTab(label);
  };

  return (
    <div className={classNames("tabListContainer", className)}>
      <TabButtons
        labels={labels}
        activeTab={activeTab}
        onTabClick={handleChangeTab}
      />

      <div
        className={classNames("tabContent", applyAnimation ? "animate" : "")}
      >
        {cloneElement(
          children[labels.findIndex((value) => value === activeTab)]
        )}
      </div>
    </div>
  );
};

export default TabList;
