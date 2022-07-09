import { users } from "./data";
import { User } from "./graphql/types";

export interface Context {
  user: User;
}

export const context = (): Context => {
  return {
    user: users[0],
  };
};
