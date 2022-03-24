import React from "react";

import classNames from "classnames";

import { SpinnerProps } from "./Spinner.types";

import "./Spinner.scss";

const Spinner: React.FC<SpinnerProps> = ({ size = "medium", className }) => (
  <div className={classNames("loading-spinner", `size-${size}`, className)} />
);

export default Spinner;
