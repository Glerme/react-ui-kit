import React, { ChangeEvent } from "react";

import classNames from "classnames";

import { FiX } from "react-icons/fi";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { MultiselectProps } from "./Multiselect.types";

import "./Multiselect.scss";

const Multiselect: React.FC<MultiselectProps> = ({
  name,
  label,
  error,
  options,
  value: values,
  title,
  className,
  onChange,
  ...rest
}) => {
  const unselectedOptions = options.filter(
    (option) => !values?.includes(option.value)
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value) {
      onChange([...values, value], event);
    }
  };

  return (
    <section
      className={classNames("multi-select-section", className)}
      title={title}
    >
      <Label htmlFor={name}>
        {label}
        <select
          id={name}
          name={name}
          className={classNames(
            "multi-select-field",
            !!error ? "is-errored-multiselect" : ""
          )}
          onChange={handleChange}
          {...rest}
        >
          <option value="">Selecione...</option>
          {unselectedOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {error && <ErrorMessage error={error} />}

        <div className={classNames("selected-options-container")}>
          {values?.map((value) => {
            const currentOption = options?.find(
              (option) => option.value === value
            );

            return (
              <div key={value} className={classNames("selected-option-item")}>
                {currentOption && currentOption.label}
                <button
                  type="button"
                  title="Remover"
                  onClick={(e: any) =>
                    onChange(
                      values.filter((v) => v !== value),
                      e
                    )
                  }
                >
                  <FiX size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </Label>
    </section>
  );
};

export default Multiselect;
