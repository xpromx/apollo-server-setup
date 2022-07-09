import { shield } from "graphql-shield";
import { HelloPermissions } from "./modules/hello/hello.permissions";
import { UserPermissions } from "./modules/user/user.permissions";
import { mergeResolvers } from "./utils/mergeResolvers";

export const permissions = shield(
  mergeResolvers([UserPermissions, HelloPermissions])
);
