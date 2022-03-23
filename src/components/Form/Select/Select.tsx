import React from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { SelectProps } from "./SelectProps";

import "./Select.scss";

const Select: React.FC<SelectProps> = ({
  className,
  name,
  label,
  error,
  value,
  options,
  disabled,
  placeholder,
  title,
  onChange,
  ...rest
}) => {
  return (
    <section
      className={classNames("select-section", className ? className : "")}
      title={title}
    >
      <Label htmlFor={name}>
        {label}
        <select
          className={classNames(
            "select-field",
            !!error ? "is-errored-select" : "",
            disabled ? "is-disabled-select" : ""
          )}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};

export default Select;
