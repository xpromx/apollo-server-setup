import { users } from "../data";

export const getUserById = (userId: number) => {
  return users.find((user) => user.id === userId) || null;
};
