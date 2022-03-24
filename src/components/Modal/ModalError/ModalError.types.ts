export interface ModalErrorProps {
  error: {
    isErrored: boolean;
    error: Error | null;
    seeDetails: boolean;
  };
  onClose: () => void;
  onShowDetails: () => void;
  className?: string;
}
