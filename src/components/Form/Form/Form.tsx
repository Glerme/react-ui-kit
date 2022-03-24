import React, { FormEvent, useEffect, useState } from "react";

import classNames from "classnames";

import useError from "../../../hooks/useError";
import { FormProps } from "./Form.types";

import "./Form.scss";

const Form: React.FC<FormProps> = ({
  id,
  children,
  className,
  columns = 1,
  onSubmit,
  footerComponent,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { withErrorHandling } = useError();

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 1000);

    const handleResize = () => setIsLargeScreen(window.innerWidth > 1000);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = withErrorHandling(async (event: FormEvent) => {
    event.preventDefault();

    if (onSubmit) {
      await onSubmit();
    }
  });

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={classNames("form-container", className ? `${className}` : "")}
    >
      <div
        className={classNames(
          "form-content",
          `${isLargeScreen ? `col-${columns}` : ""}`
        )}
      >
        {children}
      </div>

      {footerComponent && footerComponent}
    </form>
  );
};

export default Form;
