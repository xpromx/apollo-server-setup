import { CountryResolvers } from "../modules/country/country.resolvers";
import { HelloResolvers } from "../modules/hello/hello.resolvers";
import { UserResolvers } from "../modules/user/user.resolvers";

export const resolvers = [
  ...HelloResolvers,
  ...UserResolvers,
  ...CountryResolvers,
];
