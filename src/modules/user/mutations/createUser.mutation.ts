import { arg, inputObjectType, nonNull, objectType } from "nexus";
import { UserType } from "../types/User.type";
import { UserService } from "../user.service";

const CreateUserPayload = objectType({
  name: "CreateUserPayload",
  definition(t) {
    t.field("user", { type: UserType });
  },
});

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("email");
  },
});

export const createUser = objectType({
  name: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: CreateUserPayload,
      args: {
        input: arg({ type: nonNull(CreateUserInput) }),
      },
      resolve: async (_, { input }) => {
        const user = await UserService.create(input);

        return {
          user: { ...user },
        };
      },
    });
  },
});
