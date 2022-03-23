import { useState } from "react";

import _ from "lodash";
import * as Yup from "yup";
import dot from "dot-object";
import { SubmitHandlerProps } from "./types/SubmitHandlerProps";

const useForm = <T>(initialData: T) => {
  const [fields, setFields] = useState<T>(initialData);
  const [errors, setErrors] = useState<any>({});
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validate = async (
    schema: Yup.AnyObjectSchema,
    fields: Record<string, any>
  ) => {
    try {
      setErrors({});

      const validFields = await schema.validate(fields, { abortEarly: false });

      return validFields;
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        let validationErrors = {};

        err.inner.forEach((error: Yup.ValidationError) => {
          if (error.path) {
            validationErrors = _.merge(
              validationErrors,
              dot.object({ [error.path]: error.message })
            );
          }
        });

        setErrors(validationErrors);
      }

      throw err;
    }
  };

  const submitHandler = ({
    validateSchema,
    callback,
  }: SubmitHandlerProps<T>) => {
    return async () => {
      try {
        setButtonDisabled(true);

        let formFields = fields;

        if (validateSchema) {
          formFields = await validate(validateSchema, fields);
        }

        await callback(formFields);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.error(err);
          return;
        }

        throw err;
      } finally {
        setButtonDisabled(false);
      }
    };
  };

  const resetForm = () => {
    setFields(initialData);
    setErrors({});
  };

  return {
    buttonDisabled,
    fields,
    setFields,
    resetForm,
    errors,
    submitHandler,
  };
};

export default useForm;
