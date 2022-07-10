import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "graphql-tools";
import { context } from "./graphql/context";
import { mocks } from "./graphql/mocks";
import { resolvers } from "./graphql/resolvers";
import { permissions } from "./graphql/authorization";
import { formatError } from "./graphql/formatError";

const typeDefs = gql(
  readFileSync(join(__dirname, "./graphql/schema-compiled.graphql"), "utf8")
);

export const createApolloServer = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context,
    mocks,
    formatError,
    mockEntireSchema: false,
  });

  return server;
};
