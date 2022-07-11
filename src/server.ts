import { ApolloServer, gql } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  PluginDefinition,
} from "apollo-server-core";
import { readFileSync } from "fs";
import { join } from "path";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context, context } from "./graphql/context";
import { mocks } from "./graphql/mocks";
import { resolvers } from "./graphql/resolvers";
import { permissions } from "./graphql/authorization";
import { formatError } from "./graphql/formatError";
import http from "http";

const typeDefs = gql(
  readFileSync(join(__dirname, "./graphql/schema-compiled.graphql"), "utf8")
);

interface ServerOptions {
  context?: Context;
  httpServer?: http.Server;
}

export const createApolloServer = (options?: ServerOptions) => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const plugins: PluginDefinition[] = [];

  if (options?.httpServer) {
    plugins.push(
      ApolloServerPluginDrainHttpServer({ httpServer: options.httpServer })
    );
  }

  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: options?.context || context,
    mocks,
    formatError,
    mockEntireSchema: false,
    csrfPrevention: true,
    cache: "bounded",
    plugins,
  });

  return server;
};
