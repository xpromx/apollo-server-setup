import { getUserById } from "./jobs/getUserById";
import { getUsers } from "./jobs/getUsers";
import { createUser } from "./jobs/createUser";
import { getUserByToken } from "./jobs/getUserByToken";
export const UserService = {
  getAll: getUsers,
  getById: getUserById,
  create: createUser,
  getByToken: getUserByToken,
};
