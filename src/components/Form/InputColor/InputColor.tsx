import React from "react";

import classNames from "classnames";

import Label from "../Label";

import "./InputColor.scss";

import { InputColorProps } from "./InputColorProps";

const InputColor: React.FC<InputColorProps> = ({
  label,
  name,
  value,
  title,
  disabled,
  className,
  onChange,
}) => {
  return (
    <section
      className={classNames(
        "input-color-container",
        disabled ? "is-disabled" : "",
        className
      )}
      title={title}
    >
      <Label htmlFor={name}>
        {label}
        <input
          type="color"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
        />
      </Label>
    </section>
  );
};

export default InputColor;
