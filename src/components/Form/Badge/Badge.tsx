import React from "react";

import classNames from "classnames";

import { BadgeProps } from "./Badge.types";

import "./Badge.scss";

const Badge: React.FC<BadgeProps> = ({
  children,
  title,
  type = "primary",
  color,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "badge-container",
        type ? `btn-${type}` : "btn-primary",
        onClick ? "is-clickable" : ""
      )}
      onClick={onClick}
      title={title && title}
      style={{ backgroundColor: `${color}`, borderColor: `${color}` }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Badge;
