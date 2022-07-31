import { extendType } from "nexus";
import { CountryType } from "../types/Country.type";

export const countries = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nonNull.field("countries", {
      type: CountryType,
    });
  },
});
