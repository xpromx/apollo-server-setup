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
    query userById($userId: Int!) {
      userById(userId: $userId) {
        id,
        firstName,
        lastName
      }
    }
`;

describe("queries/userById", () => {
  const server = createApolloServer();

  it("should return the user with valid Id", async () => {
    const response = await server.executeOperation({
      query: QUERY,
      variables: { userId: 1 },
    });

    expect(response.errors).toBeFalsy();
    expect(response.data).toMatchObject({
      userById: {
        id: users[0].id,
        firstName: users[0].firstName,
        lastName: users[0].lastName,
      },
    });
  });

  it("should return null with invalid Id", async () => {
    const response = await server.executeOperation({
      query: QUERY,
      variables: { userId: 100 },
    });

    expect(response.errors).toBeFalsy();
    expect(response.data).toMatchObject({
      userById: null,
    });
  });
});
