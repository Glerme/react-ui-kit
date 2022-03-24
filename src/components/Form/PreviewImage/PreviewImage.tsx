import React from "react";

import classNames from "classnames";

import { FiTrash2 } from "react-icons/fi";

import { PreviewImageProps } from "./PreviewImage.types";

import "./PreviewImage.scss";

export const PreviewImage: React.FC<PreviewImageProps> = ({
  images,
  className,
  buttonTitle,
  removeFiles,
}) => {
  return (
    <div className={classNames("img-container", className)}>
      {images.map((image, index) => (
        <figure key={index}>
          <img src={image.url} alt={image.fileName} title={image.fileName} />
          {removeFiles && (
            <button
              type="button"
              aria-label="Clique para remover a imagem."
              title={buttonTitle}
              onClick={() => removeFiles(index)}
            >
              <FiTrash2 size={22} color="var(--error)" />
            </button>
          )}
        </figure>
      ))}
    </div>
  );
};

export default PreviewImage;
