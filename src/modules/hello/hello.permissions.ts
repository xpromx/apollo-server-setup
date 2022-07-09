import { deny } from "graphql-shield";

export const HelloPermissions = {
  Query: {
    hello: deny,
  },
};
