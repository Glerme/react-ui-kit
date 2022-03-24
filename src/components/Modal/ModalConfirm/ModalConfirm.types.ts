import { IconBaseProps } from "react-icons";

export interface ModalConfirmProps {
  isVisible: boolean;
  onClose: (isConfirmed: boolean) => void;
  title: string;
  description: string;
  icon: React.ComponentType<IconBaseProps>;
  className?: string;
}
