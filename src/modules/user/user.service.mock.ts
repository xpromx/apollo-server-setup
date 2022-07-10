import { users } from "./data";
import { UserService } from "./user.service";

export const UserServiceMock: typeof UserService = {
  getAll: () => users,
  getById: (id: number) => users.find((user) => user.id === id) || null,
  create: () => users[0],
};
