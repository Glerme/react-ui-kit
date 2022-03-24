import { ChangeEvent } from "react";

export interface InputFileProps {
  background?: "primary" | "secondary";
  className?: string;
  isOutlined?: boolean;
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
  onChange: (
    value: FileList | null,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  title?: string;
}
