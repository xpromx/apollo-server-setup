import { Resolvers } from "../../graphql/types";

export const HelloResolvers: Resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};
