import { ChangeEvent, InputHTMLAttributes } from "react";

export type InputPhoneAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "label" | "value" | "onChange"
>;

export interface InputPhoneProps {
  isWhatsapp: boolean;
  error?: string;
  value: string;
  className?: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  toggleWhatsApp: () => void;
}
