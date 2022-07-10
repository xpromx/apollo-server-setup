import { createApolloServer } from "../../../server";

const QUERY = `#graphql
    query sayHello {
      hello
    }
`;

describe("queries/hello", () => {
  const server = createApolloServer();

  it("should return Hello World!", async () => {
    const response = await server.executeOperation({
      query: QUERY,
    });

    expect(response.errors).toBeFalsy();
    expect(response.data?.hello).toBe("Hello World!");
  });
});
