import { extendType } from "nexus";
import { UserType } from "../types/User.type";
import { UserService } from "../user.service";

export const users = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("users", {
      type: UserType,
      resolve: () => {
        return UserService.getAll();
      },
    });
  },
});
