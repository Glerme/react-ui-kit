import { ChangeEvent, InputHTMLAttributes } from "react";

export type InputColorAttributesProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "label" | "value" | "onChange"
>;

export interface InputColorProps extends InputColorAttributesProps {
  name: string;
  label: string;
  error?: string;
  title?: string;
  value: string;
  className?: string;
  disabled?: boolean;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}
