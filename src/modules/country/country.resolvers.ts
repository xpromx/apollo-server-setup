import { countries } from "./queries/countries.query";
import { countryById } from "./queries/countryById.query";
import { CountryType } from "./types/Country.type";

export const CountryResolvers = [countries, countryById, CountryType];
