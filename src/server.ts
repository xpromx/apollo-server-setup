import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "./resolvers";

const typeDefs = gql(readFileSync(join(__dirname, "./schema.gql"), "utf8"));

interface ServerOptions {
  port: number;
}

export const createApolloServer = async (
  options: ServerOptions = { port: Number(process.env.PORT) || 4000 }
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  return server.listen(options);
};
