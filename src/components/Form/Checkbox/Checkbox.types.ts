export type CheckboxAttributesProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "label" | "value" | "checked" | "onChange" | "type"
>;

export interface CheckboxProps extends CheckboxAttributesProps {
  name: string;
  label: string;
  value: boolean;
  title?: string;
  className?: string;
  onChange: (
    value: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
}
