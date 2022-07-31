import { ApolloServer } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import { Context, context } from "./graphql/context";
import { mocks } from "./graphql/mocks";
import { permissions } from "./graphql/authorization";
import { formatError } from "./graphql/formatError";
import { applyPlugins } from "./graphql/plugins";
import http from "http";
import { schema } from "./graphql/schema";

interface ServerOptions {
  context?: Context;
  httpServer?: http.Server;
}

export const createApolloServer = (options?: ServerOptions) => {
  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: options?.context || context,
    mocks,
    formatError,
    mockEntireSchema: false,
    csrfPrevention: true,
    cache: "bounded",
    plugins: applyPlugins({
      httpServer: options?.httpServer,
    }),
  });

  return server;
};
