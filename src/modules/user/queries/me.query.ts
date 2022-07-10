import { QueryResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const me: QueryResolvers["me"] = (_, __, { user }) => {
  const res = UserService.getById(user.id);
  if (!res) {
    throw new Error("User not found");
  }
  return res;
};
