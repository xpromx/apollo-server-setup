import { AuthenticationError } from "apollo-server-express";
import { QueryResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const me: QueryResolvers["me"] = async (_, __, { user }) => {
  if (!user) {
    throw new AuthenticationError("Not Authenticated!");
  }

  const res = await UserService.getById(user?.id);
  if (!res) {
    throw new Error("User not found");
  }
  return res;
};
