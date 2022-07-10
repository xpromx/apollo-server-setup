import { shield, allow, rule } from "graphql-shield";

const isAuthenticated = rule({ cache: "contextual" })(async (_, __, ctx) => {
  return ctx.user !== null;
});

export const permissions = shield(
  {
    Query: {
      me: isAuthenticated,
    },
    Mutation: {},
  },
  { fallbackRule: allow }
);
