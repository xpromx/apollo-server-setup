import { MutationResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const createUser: MutationResolvers["createUser"] = async (
  _,
  { input }
) => {
  const user = UserService.create(input);

  return {
    user,
  };
};
