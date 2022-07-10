import { users } from "../data";

export const getUserByToken = (token?: string) => {
  if (!token) {
    return null;
  }
  return users.find((user) => String(user.id) === token) || null;
};
