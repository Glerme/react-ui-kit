import { ChangeEvent, InputHTMLAttributes } from "react";

export type InputWithIconAttibutesProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "label" | "value" | "onChange"
>;

export interface InputWithIconProps extends InputWithIconAttibutesProps {
  name: string;
  label: string;
  error?: string;
  icon: () => JSX.Element;
  value: string;
  title?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}
