export interface AvatarProps {
  picture?: string;
  label?: string;
  hasDropdown?: boolean;
  href?: string;
  onClick?: () => void;
  notificationNumber?: number;
  className?: string;
}
