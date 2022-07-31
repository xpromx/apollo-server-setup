import { objectType } from "nexus";

export const UserType = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("fullName", {
      resolve: (t) => `${t.firstName} ${t.lastName}`,
    });
    t.nonNull.string("email");
  },
});
