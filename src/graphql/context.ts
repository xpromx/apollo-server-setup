import { users } from "../data";
import { User } from "./types";

export interface Context {
  user: User;
}

export const context = (): Context => {
  return {
    user: users[0],
  };
};
