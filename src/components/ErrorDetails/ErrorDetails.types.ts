export interface ErrorDetailsProps {
  error: {
    isErrored: boolean;
    error: Error | null;
    seeDetails: boolean;
  };
  className?: string;
  onShowDetails: () => void;
}
