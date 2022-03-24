import { ChangeEvent, InputHTMLAttributes } from "react";

export interface MultiselectOption {
  label: string;
  value: string;
}

export type MultiselectAttributesProps = Omit<
  InputHTMLAttributes<HTMLSelectElement>,
  "name" | "label" | "value" | "onChange"
>;

export interface MultiselectProps extends MultiselectAttributesProps {
  name: string;
  label: string;
  error?: string;
  value: string[];
  onChange: (
    value: string[],
    event: ChangeEvent<HTMLSelectElement> | MouseEvent
  ) => void;
  options: MultiselectOption[];
  title?: string;
  className?: string;
}
