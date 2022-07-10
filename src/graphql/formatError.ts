import { GraphQLError } from "graphql";

export const formatError = (error: GraphQLError) => {
  return {
    message: error.message,
    code: error.extensions["code"],
    errors: error.extensions.errors,
  };
};
