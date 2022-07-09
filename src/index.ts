import { createApolloServer } from "./server";

createApolloServer().then(({ port }) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
