import { createApolloServer } from "../../../server";

const QUERY = `#graphql
    query allCountries {
      countries {
        id,
        name,
        code
      }
    }
`;

describe("queries/countries", () => {
  const server = createApolloServer();

  it("should return all countries", async () => {
    const response = await server.executeOperation({
      query: QUERY,
    });

    expect(response.errors).toBeFalsy();
    expect(response.data).toMatchObject({
      countries: expect.arrayContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          code: expect.any(String),
        },
      ]),
    });
  });
});
