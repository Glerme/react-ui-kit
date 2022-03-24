import React from "react";

import classNames from "classnames";

import { ModalErrorProps } from "./ModalError.types";

import Button from "../../Form/Button";
import ErrorDetails from "../../ErrorDetails";

import "./ModalError.scss";

const ModalError: React.FC<ModalErrorProps> = ({
  error,
  className,
  onClose,
  onShowDetails,
}) => {
  return (
    <div className={classNames("overlay", className)}>
      <div className={classNames("modal-frame")}>
        <ErrorDetails error={error} onShowDetails={onShowDetails} />
        <Button variant="success" onClick={onClose}>
          OK
        </Button>
      </div>
    </div>
  );
};

export default ModalError;
