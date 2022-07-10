import { users } from "../../data";

export const UserService = {
  getAll: () => users,
  getById: (userId: number) => users.find((user) => user.id === userId) || null,
};
