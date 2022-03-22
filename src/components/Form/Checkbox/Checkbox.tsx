import React from "react";

import classNames from "classnames";

import { CheckboxProps } from "./CheckboxProps";

import "./Checkbox.scss";

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  value,
  title,
  className,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <section
      className={classNames("checkbox-section", className ? className : "")}
      title={title}
    >
      <label
        htmlFor={name}
        className={classNames("checkbox-label", disabled ? "is-disabled" : "")}
      >
        <input
          type="checkbox"
          id={name}
          checked={value}
          onChange={(e) => onChange(e.target.checked, e)}
          disabled={disabled}
          {...rest}
        />
        <span className={classNames(disabled ? "is-disabled" : "")} />
        {label}
      </label>
    </section>
  );
};

export default Checkbox;
