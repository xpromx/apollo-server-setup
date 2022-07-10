import casual from "casual";

export const mocks = {
  Country: () => ({
    id: () => casual.integer(1, 100),
    name: () => casual.country,
    code: () => casual.country_code,
  }),
};
