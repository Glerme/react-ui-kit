import { ChangeEvent, InputHTMLAttributes } from "react";

export interface RadioOption {
  label: string;
  value: string;
}

export type RadioAttributesProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "value" | "onChange" | "type"
>;

export interface RadioProps extends RadioAttributesProps {
  name: string;
  label?: string;
  error?: string;
  value: string;
  className?: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  options: RadioOption[];
}
