import * as Yup from "yup";

export interface SubmitHandlerProps<T> {
  validateSchema?: Yup.AnyObjectSchema;
  callback: (formFields: T) => Promise<void>;
}
