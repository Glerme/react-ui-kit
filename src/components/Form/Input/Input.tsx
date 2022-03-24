import React from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputProps } from "./Input.types";

import "./Input.scss";

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
    <section className={classNames("input-section-normal", className)}>
      <Label htmlFor={name}>
        {label}
        <input
          type="text"
          className={classNames(
            "input-field-normal",
            !!error ? "is-errored-normal" : "",
            disabled ? "is-disabled-normal" : "",
            className
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
