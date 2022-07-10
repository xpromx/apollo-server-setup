import { users } from "../data";
import { CreateUserInput, User } from "../../../graphql/types";
import { yup, yupValidate } from "../../../utils/yupValidate";

const createUserRules = {
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
};

export const createUser = async (input: CreateUserInput): Promise<User> => {
  await yupValidate<CreateUserInput>(createUserRules, input);

  return {
    id: users.length + 1,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    fullName: "",
  };
};
