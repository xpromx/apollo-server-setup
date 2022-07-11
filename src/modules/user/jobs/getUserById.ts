import { db } from "../../../utils/db";

export const getUserById = (userId: number) => {
  return db.user.findUnique({ where: { id: userId } });
};
