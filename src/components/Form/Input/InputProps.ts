import { ChangeEvent, InputHTMLAttributes } from "react";

export type InputAttibutesProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "label" | "value" | "onChange"
>;

export interface InputProps extends InputAttibutesProps {
  name: string;
  label: string;
  error?: string;
  value: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
}
