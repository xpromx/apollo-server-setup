import { extendType, intArg, nonNull } from "nexus";
import { UserType } from "../types/User.type";
import { UserService } from "../user.service";

export const userById = extendType({
  type: "Query",
  definition(t) {
    t.field("userById", {
      type: UserType,
      args: {
        userId: nonNull(intArg()),
      },
      resolve: (root, { userId }) => {
        return UserService.getById(userId);
      },
    });
  },
});
