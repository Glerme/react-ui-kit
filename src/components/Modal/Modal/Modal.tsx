import React, { useEffect } from "react";

import classNames from "classnames";
import { FiX } from "react-icons/fi";

import ModalOverlay from "../ModalOverlay";

import { ModalProps } from "./Modal.types";

import "./Modal.scss";

const Modal: React.FC<ModalProps> = ({
  title,
  isVisible,
  onClose,
  size = "xl",
  children,
  loadingComponent,
  className,
  ...rest
}) => {
  useEffect(() => {
    const keyEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", keyEvent);

    return () => window.removeEventListener("keydown", keyEvent);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <div
        className={`${classNames(
          "modal-frame-container",
          `modal-${size}`,
          className
        )}}`}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {loadingComponent && loadingComponent}
        <header className={classNames("modal-frame-header")}>
          <h1 className={classNames("heading1", "title")}>{title}</h1>
          <button
            aria-label="Clique para fechar a janela"
            onClick={onClose}
            title="Fechar janela"
          >
            <FiX size={22} />
          </button>
        </header>

        <main className={classNames("modal-frame-main-container")}>
          {children}
        </main>
      </div>
    </ModalOverlay>
  );
};

export default Modal;
