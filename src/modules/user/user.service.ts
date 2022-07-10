import { getUserById } from "./jobs/getUserById";
import { getUsers } from "./jobs/getUsers";
import { createUser } from "./jobs/createUser";

export const UserService = {
  getAll: getUsers,
  getById: getUserById,
  create: createUser,
};
