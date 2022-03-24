import React, { useEffect } from "react";

import classNames from "classnames";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

import { ModalConfirmProps } from "./ModalConfirm.types";

import Button from "../../Form/Button";
import ModalOverlay from "../ModalOverlay";

import "./ModalConfirm.scss";

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  isVisible,
  title,
  description,
  icon: Icon,
  className,
  onClose,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const keyEvent = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose(false);
        }
      };

      window.addEventListener("keydown", keyEvent);

      return () => window.removeEventListener("keydown", keyEvent);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <ModalOverlay onClick={() => onClose(false)}>
      <div
        className={classNames("modal-confirm-frame-container", className)}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="heading1 gray500">{title}</h1>

        {Icon && <Icon />}

        <p className="body3 gray500">{description}</p>

        <div className={classNames("modal-confirm-frame-buttons")}>
          <Button
            autoFocus
            type="button"
            variant="success"
            onClick={() => onClose(true)}
          >
            <FiCheckCircle size={22} />
            Sim
          </Button>
          <Button
            type="button"
            variant="error"
            isOutlined
            onClick={() => onClose(false)}
          >
            <FiXCircle size={22} />
            Não
          </Button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default ModalConfirm;
