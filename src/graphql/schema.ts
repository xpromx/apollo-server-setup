import { makeSchema } from "nexus";
import path from "path";
import { resolvers } from "./resolvers";

export const schema = makeSchema({
  types: [resolvers],
  outputs: {
    schema: path.join(__dirname, "../../schema-compiled.graphql"),
    typegen: path.join(__dirname, "./types.ts"),
  },
});
