import { extendType, intArg, nonNull } from "nexus";
import { CountryType } from "./types/Country.type";

const CountryQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("countries", {
      type: CountryType,
      resolve: () => [],
    });
    t.field("countryById", {
      type: CountryType,
      args: {
        countryId: nonNull(intArg()),
      },
    });
  },
});

export const CountryResolvers = [CountryQuery, CountryType];
