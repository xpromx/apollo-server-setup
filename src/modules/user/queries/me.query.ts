import { AuthenticationError } from "apollo-server-express";
import { extendType } from "nexus";
import { UserType } from "../types/User.type";
import { UserService } from "../user.service";

export const me = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("me", {
      type: UserType,
      resolve: async (_, __, { user }) => {
        if (!user) {
          throw new AuthenticationError("Not Authenticated!");
        }

        const res = await UserService.getById(user?.id);
        if (!res) {
          throw new Error("User not found");
        }
        return res;
      },
    });
  },
});
