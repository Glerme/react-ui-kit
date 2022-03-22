import { ChangeEvent } from "react";

export interface InputMultiFileProps {
  background?: "primary" | "secondary";
  className?: string;
  isOutlined?: boolean;
  name: string;
  label: string;
  title?: string;
  error?: string;
  value: File[];
  disabled?: boolean;
  onChange: (
    value: FileList | null,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}
