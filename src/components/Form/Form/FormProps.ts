import { ReactNode } from "react";

export interface FormProps {
  id?: string;
  children: ReactNode;
  className?: string;
  columns?: number;
  onSubmit?: () => Promise<void>;
  footerComponent?: JSX.Element;
}

export interface FormErrorState {
  visible: boolean;
  error: Error | null;
  mostrarDetalhes: boolean;
}
