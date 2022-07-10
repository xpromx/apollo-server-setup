import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { context } from "./graphql/context";
import { mocks } from "./graphql/mocks";
import { resolvers } from "./graphql/resolvers";

const typeDefs = gql(
  readFileSync(join(__dirname, "./graphql/schema-compiled.graphql"), "utf8")
);

export const createApolloServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    mocks,
    mockEntireSchema: false,
  });

  return server;
};
