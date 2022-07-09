import { rule } from "graphql-shield";

export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return !!ctx.user;
});
