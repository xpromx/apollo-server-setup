import { User } from "../../../graphql/types";
import { createApolloServer } from "../../../server";

const users: Partial<User>[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
];

jest.mock("../user.service", () => ({
  UserService: {
    getById: (userId: number) =>
      users.find((user) => user.id === userId) || null,
  },
}));

const QUERY = `#graphql
    query me {
      me {
        id,
        firstName,
        lastName
      }
    }
`;

describe("queries/me", () => {
  it("should return the authenticathed user data", async () => {
    const server = createApolloServer({ context: { user: { id: 1 } } });
    const response = await server.executeOperation({
      query: QUERY,
    });

    expect(response.errors).toBeFalsy();
    expect(response.data).toMatchObject({
      me: {
        id: users[0].id,
        firstName: users[0].firstName,
        lastName: users[0].lastName,
      },
    });
  });

  it("should return null if user is not authenticated", async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: QUERY,
    });

    expect(response.errors).toBeTruthy();
  });
});
