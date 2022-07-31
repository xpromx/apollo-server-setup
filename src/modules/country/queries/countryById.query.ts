import { extendType, intArg, nonNull } from "nexus";
import { CountryType } from "../types/Country.type";

export const countryById = extendType({
  type: "Query",
  definition(t) {
    t.field("countryById", {
      type: CountryType,
      args: {
        countryId: nonNull(intArg()),
      },
    });
  },
});
