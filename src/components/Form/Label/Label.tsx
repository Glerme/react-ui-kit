import React from "react";

import classNames from "classnames";

import { LabelProps } from "./LabelProps";

import "./Label.scss";

const Label: React.FC<LabelProps> = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={classNames("label-container", className)}>
    {children}
  </label>
);

export default Label;
