import { createApolloServer } from "../../../server";

const QUERY = `#graphql
    query countryById($countryId: Int!) {
      countryById(countryId: $countryId) {
        id,
        name,
        code
      }
    }
`;

describe("queries/countryId", () => {
  const server = createApolloServer();

  it("should return the country with valid Id", async () => {
    const response = await server.executeOperation({
      query: QUERY,
      variables: { countryId: 1 },
    });

    expect(response.errors).toBeFalsy();
    expect(response.data).toMatchObject({
      countryById: {
        id: expect.any(Number),
        name: expect.any(String),
        code: expect.any(String),
      },
    });
  });
});
