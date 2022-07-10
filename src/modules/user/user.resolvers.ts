import { Resolvers } from "../../graphql/types";
import { withAuth } from "../../utils/withAuth";
import { UserService } from "./user.service";

export const UserResolvers: Resolvers = {
  Query: {
    users: () => UserService.getAll(),
    userById: (_, { userId }) => UserService.getById(userId),
    me: withAuth(() => UserService.getById(1)),
  },
};
