import { HelloResolvers } from "./modules/hello/hello.resolvers";
import { UserResolvers } from "./modules/user/user.resolvers";
import { Resolvers } from "./types";
import { mergeResolvers } from "./utils/mergeResolvers";

export const resolvers: Resolvers = mergeResolvers([
  HelloResolvers,
  UserResolvers,
]);
