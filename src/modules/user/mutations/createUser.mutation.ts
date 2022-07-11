import { MutationResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const createUser: MutationResolvers["createUser"] = async (
  _,
  { input }
) => {
  const user = await UserService.create(input);

  return {
    user: { ...user },
  };
};
