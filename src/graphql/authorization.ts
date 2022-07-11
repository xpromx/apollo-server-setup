import { ApolloError, AuthenticationError } from "apollo-server-express";
import { shield, allow, rule } from "graphql-shield";

const isAuthenticated = rule({ cache: "no_cache" })(async (_, __, ctx) => {
  if (ctx.user !== null) return true;
  return new AuthenticationError("Not authorized!");
});

export const permissions = shield(
  {
    Query: {
      "*": allow,
      me: isAuthenticated,
    },
    Mutation: {
      "*": allow,
    },
  },
  {
    fallbackRule: allow,
    fallbackError: async (error) => {
      if (error instanceof ApolloError) {
        return error;
      } else if (error instanceof Error) {
        return new ApolloError("Internal server error", "ERR_INTERNAL_SERVER");
      } else {
        return new ApolloError("Internal server error", "ERR_INTERNAL_SERVER");
      }
    },
  }
);
