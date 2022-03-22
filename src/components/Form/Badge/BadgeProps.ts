export interface BadgeProps {
  onClick?: () => void;
  title?: string;
  type?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  color?: string;
}
