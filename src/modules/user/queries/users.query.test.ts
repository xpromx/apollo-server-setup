import { User } from "@prisma/client";
import { createApolloServer } from "../../../server";

// Mocks
const users: Partial<User>[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
  },
];

jest.mock("../user.service", () => ({
  UserService: {
    getAll: () => users,
  },
}));

const QUERY = `#graphql
    query allUsers {
      users {
        id,
        firstName,
        lastName
      }
    }
`;

describe("queries/users", () => {
  const server = createApolloServer();

  it("should return all users", async () => {
    const response = await server.executeOperation({
      query: QUERY,
    });

    expect(response.errors).toBeFalsy();
    expect(response.data?.users.length).toBe(users.length);
    expect(response.data).toMatchObject({
      users: users.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      })),
    });
  });
});
