import { NexusGenInputs } from "../../../graphql/types";
import { db } from "../../../utils/db";
import { yup, yupValidate } from "../../../utils/yupValidate";

type CreateUserInput = NexusGenInputs["CreateUserInput"];

const createUserRules = {
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
};

export const createUser = async (input: CreateUserInput) => {
  await yupValidate<CreateUserInput>(createUserRules, input);
  const user = await db.user.create({
    data: { ...input, token: `token-${input.email}` },
  });

  return user;
};
