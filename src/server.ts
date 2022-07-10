import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { context } from "./graphql/context";
import { resolvers } from "./graphql/resolvers";

const typeDefs = gql(
  readFileSync(join(__dirname, "./graphql/schema-compiled.graphql"), "utf8")
);

interface ServerOptions {
  port: number;
}

export const createApolloServer = async (
  options: ServerOptions = { port: Number(process.env.PORT) || 4000 }
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  return server.listen(options);
};
