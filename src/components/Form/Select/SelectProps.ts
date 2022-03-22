import { ChangeEvent, InputHTMLAttributes } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export type SelectAttibutesProps = Omit<
  InputHTMLAttributes<HTMLSelectElement>,
  "name" | "label" | "value" | "onChange"
>;

export interface SelectProps extends SelectAttibutesProps {
  name: string;
  label: string;
  error?: string;
  value: string;
  onChange: (value: string, event: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  className?: string;
}
