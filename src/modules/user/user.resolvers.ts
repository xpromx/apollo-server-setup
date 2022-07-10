import { Resolvers } from "../../graphql/types";
import { createUser } from "./mutations/createUser.mutation";
import { me } from "./queries/me.query";
import { userById } from "./queries/userById.query";
import { users } from "./queries/users.query";
import { UserType } from "./types/User.type";

export const UserResolvers: Resolvers = {
  Query: {
    users,
    userById,
    me,
  },
  Mutation: {
    createUser,
  },
  User: UserType,
};
