import React from "react";

import classNames from "classnames";

import ErrorMessage from "../ErrorMessage";

import { RadioProps } from "./Radio.types";

import "./Radio.scss";

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  error,
  value,
  className,
  options,
  onChange,
  ...rest
}) => {
  return (
    <section className={classNames("radio-section", className)}>
      {label && <p className={classNames("radio-label")}>{label}</p>}

      <div className={classNames("radio-option-container")}>
        {options.map((item) => {
          const id = `radio-${name}-${item.value}`;

          return (
            <label htmlFor={id} key={id} className={classNames("radio-option")}>
              <input
                type="radio"
                id={id}
                name={name}
                className={!!error ? classNames("is-errored-radio") : ""}
                value={item.value}
                onChange={(e) => onChange(e.target.value, e)}
                checked={item.value === value}
                {...rest}
              />
              <span>{item.label}</span>
            </label>
          );
        })}
      </div>
      {error && <ErrorMessage error={error} />}
    </section>
  );
};

export default Radio;
