import {
  ApolloServerPluginCacheControl,
  ApolloServerPluginDrainHttpServer,
  PluginDefinition,
} from "apollo-server-core";
import responseCachePlugin from "apollo-server-plugin-response-cache";
import http from "http";

interface PluginsOptions {
  httpServer?: http.Server;
}

export const applyPlugins = (options: PluginsOptions = {}) => {
  const plugins: PluginDefinition[] = [
    // @cacheControl directive
    ApolloServerPluginCacheControl({
      defaultMaxAge: 5,
      calculateHttpHeaders: true,
    }),

    //  @cacheCOntrol response rules
    responseCachePlugin({
      sessionId: ({ context }) => (context.user ? context.user.id : null),
      shouldReadFromCache: ({ context }) => !context.user,
      shouldWriteToCache: ({ context }) => !context.user,
    }),
  ];

  // HTTP server drain plugin
  if (options?.httpServer) {
    plugins.push(
      ApolloServerPluginDrainHttpServer({ httpServer: options.httpServer })
    );
  }

  return plugins;
};
