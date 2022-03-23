import React, { useState } from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputWithIconProps } from "./InputWithIconProps";

import "./InputWithIcon.scss";

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
    <section
      className={classNames("input-section-with-icon", className)}
      title={title}
    >
      <Label htmlFor={name}>
        {label}
        <div
          className={classNames(
            "input-field-container-with-icon",
            inputFocus ? "is-focused-with-icon" : "",
            !!error ? "is-errored-with-icon" : "",
            disabled ? "is-disabled-with-icon" : ""
          )}
        >
          <input
            type="text"
            className={classNames("input-field-with-icon")}
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
