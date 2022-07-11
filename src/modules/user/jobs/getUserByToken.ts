import { db } from "../../../utils/db";

export const getUserByToken = (token?: string) => {
  if (!token) {
    return null;
  }
  return db.user.findFirst({ where: { token } });
};
