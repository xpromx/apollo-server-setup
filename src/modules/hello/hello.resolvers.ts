import { queryType } from "nexus";

const HelloQuery = queryType({
  definition(t) {
    t.string("hello", { resolve: () => "Hello World!" });
  },
});

export const HelloResolvers = [HelloQuery];
