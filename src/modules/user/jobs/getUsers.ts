import { db } from "../../../utils/db";

export const getUsers = () => {
  return db.user.findMany({ orderBy: { id: "asc" } });
};
