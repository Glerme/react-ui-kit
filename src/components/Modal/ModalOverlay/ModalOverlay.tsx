import React from "react";
import classNames from "classnames";

import { ModalOverlayProps } from "./ModalOverlay.types";

import "./ModalOverlay.scss";

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  className,
  onClick,
}) => (
  <div
    className={classNames("modal-overlay-container", className)}
    onClick={onClick}
  >
    {children}
  </div>
);

export default ModalOverlay;
