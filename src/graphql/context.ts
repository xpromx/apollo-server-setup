// import { users } from "../modules/user/data";
import { User } from "./types";

export interface Context {
  user?: User;
}

export const context = (): Context => {
  return {
    user: undefined,
  };
};
