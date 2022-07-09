import { Resolvers } from "../../types";

export const HelloResolvers: Resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};
