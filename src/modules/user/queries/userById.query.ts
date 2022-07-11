import { QueryResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const userById: QueryResolvers["userById"] = async (_, { userId }) => {
  return UserService.getById(userId);
};
