import React from "react";

import { FiChevronDown, FiUser } from "react-icons/fi";

import "./Avatar.module.scss";

export interface AvatarProps {
  picture?: string;
  label?: string;
  hasDropdown?: boolean;
  href?: string;
  onClick?: () => void;
  notificationNumber?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  notificationNumber = undefined,
  hasDropdown,
  href,
  picture,
  label,
  onClick,
}) => {
  if (href) {
    return (
      <a className="avatar-container-wrapper" href={href}>
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
    <div className={"avatar-container-wrapper"} onClick={onClick}>
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
