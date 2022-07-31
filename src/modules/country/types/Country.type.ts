import { objectType } from "nexus";

export const CountryType = objectType({
  name: "Country",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("code");
  },
});
