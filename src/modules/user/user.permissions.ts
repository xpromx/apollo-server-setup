import { isAuthenticated } from "../../rules";

export const UserPermissions = {
  Query: {
    me: isAuthenticated,
  },
};
