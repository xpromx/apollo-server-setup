/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserInputError } from "apollo-server";
import * as yup from "yup";

export interface ErrorFormat {
  [key: string]: string;
}

const formatYupError = (err: yup.ValidationError) => {
  const errors: ErrorFormat = {};

  err.inner.forEach((e) => {
    if (e.path && e.type) {
      errors[e.path] = err.message;
    }
  });

  return errors;
};

const yupValidate = async <T>(
  rules: Record<keyof T, yup.AnySchema>,
  data: T | null | undefined
): Promise<T> => {
  const schema = yup.object().shape(rules as any);
  try {
    return await schema.validate(data, { abortEarly: false });
  } catch (error: any) {
    throw new UserInputError("VALIDATION_FAILED", {
      errors: formatYupError(error),
    });
  }
};

export { yupValidate, yup };
