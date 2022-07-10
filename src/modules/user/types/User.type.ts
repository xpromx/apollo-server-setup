import { UserResolvers } from "../../../graphql/types";

export const UserType: UserResolvers = {
  fullName: (user) => `${user.firstName} ${user.lastName}`,
};
