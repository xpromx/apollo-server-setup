import { QueryResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const me: QueryResolvers["me"] = (_, __, { user }) => {
  return UserService.getById(user.id)!;
};
