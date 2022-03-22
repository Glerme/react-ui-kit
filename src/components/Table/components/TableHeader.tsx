import React from "react";

import classNames from "classnames";

import "./TableHeader.scss";

interface TableHeaderProps {
  title: string;
  sideComponent?: () => JSX.Element;
  classNameHeader?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  sideComponent: SideComponent,
  classNameHeader,
}) => {
  return (
    <div className={classNames("table-header-container", classNameHeader)}>
      <h3 className="title">{title}</h3>
      {SideComponent && <SideComponent />}
    </div>
  );
};
