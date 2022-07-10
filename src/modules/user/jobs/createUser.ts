import { users } from "../data";
import { CreateUserInput, User } from "../../../graphql/types";

export const createUser = (input: CreateUserInput): User => {
  return {
    id: users.length + 1,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    fullName: "",
  };
};
