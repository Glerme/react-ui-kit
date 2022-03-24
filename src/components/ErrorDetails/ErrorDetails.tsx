import React from "react";

import classNames from "classnames";

import { BiError } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { ErrorDetailsProps } from "./ErrorDetails.types";

import Button from "../Form/Button";

import "./ErrorDetails.scss";

const ErrorDetails: React.FC<ErrorDetailsProps> = ({
  error,
  className,
  onShowDetails,
}) => {
  return (
    <div className={classNames("error-details-container", className)}>
      <i>
        <BiError size={72} className="warning" />
      </i>

      <p className="body2 text">{error && error?.error?.message}</p>

      {error ? (
        <>
          <Button
            type="button"
            isOutlined
            variant="secondary"
            onClick={onShowDetails}
            title="Clique para visualizar os detalhes do erro."
          >
            {error.seeDetails ? "Esconder" : "Ver Detalhes"}
            {error.seeDetails ? (
              <FiChevronUp size={22} />
            ) : (
              <FiChevronDown size={22} />
            )}
          </Button>

          {error.seeDetails && (
            <code>
              <pre>{JSON.stringify(error.error, null, 2)}</pre>
            </code>
          )}
        </>
      ) : (
        <p>Nenhum conteúdo recebido pela API.</p>
      )}
    </div>
  );
};

export default ErrorDetails;
