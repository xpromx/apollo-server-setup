import { QueryResolvers } from "../../../graphql/types";
import { UserService } from "../user.service";

export const users: QueryResolvers["users"] = () => UserService.getAll();
