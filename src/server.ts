import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "graphql-tools";
import { join } from "path";
import { context } from "./context";
import { resolvers } from "./resolvers";
import { permissions } from "./permissions";

const typeDefs = gql(
  readFileSync(join(__dirname, "./graphql/schema-compiled.graphql"), "utf8")
);

interface ServerOptions {
  port: number;
}

export const createApolloServer = async (
  options: ServerOptions = { port: Number(process.env.PORT) || 4000 }
) => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context,
  });

  return server.listen(options);
};
