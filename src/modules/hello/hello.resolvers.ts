import { extendType } from "nexus";

const HelloQuery = extendType({
  type: "Query",
  definition(t) {
    t.string("hello", { resolve: () => "Hello World!" });
  },
});

export const HelloResolvers = [HelloQuery];
