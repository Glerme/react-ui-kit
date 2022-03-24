import React from "react";

import classNames from "classnames";

import { FiChevronDown, FiUser } from "react-icons/fi";

import { AvatarProps } from "./Avatar.types";

import "./Avatar.scss";

const Avatar: React.FC<AvatarProps> = ({
  notificationNumber = undefined,
  hasDropdown,
  href,
  picture,
  label,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <a
        className={classNames("avatar-container-wrapper", className)}
        href={href}
      >
        {picture ? (
          <img className={"avatar-icon"} src={picture} />
        ) : (
          <FiUser className={"avatar-icon"} size={24} />
        )}

        {notificationNumber
          ? notificationNumber > 0 && (
              <span className={"avatar-notification"}>
                {notificationNumber > 99 ? "+99" : notificationNumber}
              </span>
            )
          : undefined}

        {label && <span className={"avatar-text"}>{label}</span>}

        {hasDropdown && <FiChevronDown size={20} />}
      </a>
    );
  }

  return (
    <div
      className={classNames("avatar-container-wrapper", className)}
      onClick={onClick}
    >
      {picture ? (
        <img className={"avatar-icon"} src={picture} />
      ) : (
        <FiUser className={"avatar-icon"} size={24} />
      )}

      {notificationNumber
        ? notificationNumber > 0 && (
            <span className={"avatar-notification"}>
              {notificationNumber > 99 ? "+99" : notificationNumber}
            </span>
          )
        : undefined}

      {label && <span className={"avatar-text"}>{label}</span>}

      {hasDropdown && <FiChevronDown size={20} />}
    </div>
  );
};

export default Avatar;
