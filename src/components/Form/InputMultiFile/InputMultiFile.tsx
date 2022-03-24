import React, { useRef } from "react";

import classNames from "classnames";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputMultiFileProps } from "./InputMultiFile.types";

import "./InputMultiFile.scss";

const InputMultiFile: React.FC<InputMultiFileProps> = ({
  background,
  className,
  isOutlined = false,
  name,
  label,
  error = "",
  value,
  title,
  disabled,
  onChange,
}) => {
  const inputMultiFileRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   if (inputMultiFileRef.current) {
  //     if (!value.length) {
  //       inputMultiFileRef.current.value = "";
  //     }
  //   }
  // }, [value]);

  return (
    <section
      title={title}
      className={classNames(
        "input-file-section",
        background ? `btn-${background}` : `btn-primary`,
        isOutlined ? `btn-outlined-${background}` : "",
        disabled ? "is-disabled" : "",
        className
      )}
    >
      <Label htmlFor={name}>
        {label}
        <input
          ref={inputMultiFileRef}
          type="file"
          accept="image/*"
          disabled={disabled}
          multiple
          id={name}
          name={name}
          onChange={(e) => onChange(e.target.files, e)}
        />
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};

export default InputMultiFile;
