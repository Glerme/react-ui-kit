import React from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputProps } from "./InputProps";

import "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  className,
  name,
  label,
  error = "",
  placeholder,
  value,
  onChange,
  disabled = false,
  title,
  ...rest
}) => {
  return (
    <section className={classNames("input-section", className)} title={title}>
      <Label htmlFor={name}>
        {label}
        <input
          type="text"
          className={classNames(
            "input-field",
            !!error ? "is-errored" : "",
            disabled ? "is-disabled" : ""
          )}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
        />
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};

export default Input;
