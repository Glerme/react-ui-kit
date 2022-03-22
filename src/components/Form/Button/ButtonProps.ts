export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "error";
  isOutlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  size?: "large" | "normal" | "small";
  className?: string;
  title?: string;
}
