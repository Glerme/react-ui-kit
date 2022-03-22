import React, { useState } from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputWithIconProps } from "./InputWithIconProps";

import "./InputWithIcon.module.scss";

const InputWithIcon: React.FC<InputWithIconProps> = ({
  className,
  name,
  label,
  error = "",
  placeholder,
  value,
  title,
  icon: Icon,
  onChange,
  disabled = false,
  ...rest
}) => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <section className={classNames("input-section", className)} title={title}>
      <Label htmlFor={name}>
        {label}
        <div
          className={classNames(
            "input-field-container",
            inputFocus ? "is-focused" : "",
            !!error ? "is-errored" : "",
            disabled ? "is-disabled" : ""
          )}
        >
          <input
            type="text"
            className={classNames("input-field")}
            id={name}
            name={name}
            value={value}
            onFocus={() => setInputFocus(true)}
            onChange={(e) => onChange && onChange(e.target.value, e)}
            onBlur={() => setInputFocus(false)}
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
          <Icon />
        </div>
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};

export default InputWithIcon;
