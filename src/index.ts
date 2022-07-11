import express from "express";
import http from "http";
import { createApolloServer } from "./server";

const startServer = async (port: number) => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = createApolloServer({ httpServer });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at http://localhost:${port}/graphql
  `);
};

const port = Number(process.env.PORT) || 4000;
startServer(port);
