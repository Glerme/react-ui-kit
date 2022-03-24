import React from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputFileProps } from "./InputFile.types";

import "./InputFile.scss";

const InputFile: React.FC<InputFileProps> = ({
  background,
  className,
  isOutlined = false,
  name,
  label,
  error = "",
  title,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <section
      className={classNames(
        "input-file-section",
        background ? `btn-${background}` : `btn-primary`,
        isOutlined ? `btn-outlined-${background}` : "",
        disabled ? "is-disabled" : "",
        className ? className : ""
      )}
      title={title}
    >
      <Label htmlFor={name}>
        {label}
        <input
          type="file"
          accept="image/*"
          disabled={disabled}
          id={name}
          name={name}
          onChange={(e) => onChange(e.target.files, e)}
          {...rest}
        />
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};

export default InputFile;
