import { Resolvers, User } from "../../types";

const users: User[] = [
  {
    id: 1,
    firstName: "Rodrigo",
    lastName: "Ramirez",
    email: "test@test.com",
  },
  {
    id: 2,
    firstName: "Rodrigo 2",
    lastName: "Ramirez 2",
    email: "test2@test.com",
  },
];

export const UserResolvers: Resolvers = {
  Query: {
    users: () => users,
    userById: (_, { userId }) =>
      users.find((user) => user.id === userId) || null,
  },
};
