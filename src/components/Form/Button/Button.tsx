import React from "react";

import classNames from "classnames";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isOutlined = false,
  disabled,
  className,
  children,
  size,
  title,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={classNames(
        "button-container",
        variant ? [`btn-${variant}`] : [`btn-primary`],
        isOutlined ? [`btn-outlined-${variant}`] : "",
        className ? className : ""
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
