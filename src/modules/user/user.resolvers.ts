import { users } from "../../data";
import { Resolvers } from "../../graphql/types";
import { withAuth } from "../../utils/withAuth";

export const UserResolvers: Resolvers = {
  Query: {
    users: () => users,
    userById: (_, { userId }) =>
      users.find((user) => user.id === userId) || null,
    me: withAuth(() => users[0]),
  },
};
