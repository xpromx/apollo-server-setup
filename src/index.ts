import { createApolloServer } from "./server";

createApolloServer()
  .listen({ port: Number(process.env.PORT) || 4000 })
  .then(({ port }) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at http://localhost:${port}
  `);
  });
