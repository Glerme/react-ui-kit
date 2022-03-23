import React from "react";

import classNames from "classnames";

import { ErrorMessageProps } from "./ErrorMessageProps";

import "./ErrorMessage.scss";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <section className={classNames("error-message-container")}>
    <span className="body4">{error}</span>
  </section>
);

export default ErrorMessage;
