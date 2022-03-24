export interface ModalProps {
  title: string;
  isVisible: boolean;
  onClose: () => void;
  size?: "sm" | "lg" | "xl";
  loadingComponent?: JSX.Element;
  className?: string;
}
