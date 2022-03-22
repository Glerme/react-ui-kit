import React from "react";

import classNames from "classnames";

import "./TableHeader.scss";

interface TableHeaderProps {
  title: string;
  sideComponent?: () => JSX.Element;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  sideComponent: SideComponent,
}) => {
  return (
    <div className={classNames("table-header-container")}>
      <h3 className="title">{title}</h3>
      {SideComponent && <SideComponent />}
    </div>
  );
};
