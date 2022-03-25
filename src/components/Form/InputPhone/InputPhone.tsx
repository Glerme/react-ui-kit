import React, { useState } from "react";

import classNames from "classnames";

import { FaWhatsapp } from "react-icons/fa";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { InputPhoneProps } from "./InputPhone.types";

import { phoneMask } from "../../../utils/mask";

import "./InputPhone.scss";

const InputPhone: React.FC<InputPhoneProps> = ({
  isWhatsapp,
  error,
  value,
  className,
  onChange,
  toggleWhatsApp,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className={classNames("input-section", className)}>
      <Label htmlFor="telefone">
        Telefone
        <div
          className={classNames(
            "input-field-container",
            isFocused ? "is-focused-phone" : "",
            !!error ? "is-errored-phone" : ""
          )}
        >
          <input
            type="tel"
            className={classNames(
              "input-field",
              !!error ? "is-errored-phone" : ""
            )}
            id="telefone"
            name="telefone"
            maxLength={15}
            value={value}
            onChange={(e) => onChange(phoneMask(e.target.value), e)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
            }}
            {...rest}
          />
          <FaWhatsapp
            size={24}
            title={isWhatsapp ? "Desmarcar whatsapp" : "Marcar whatsapp"}
            className={classNames(isWhatsapp ? "is-whatsapp" : "")}
            onClick={toggleWhatsApp}
          />
        </div>
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};

export default InputPhone;
