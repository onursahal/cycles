import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers/index.js";

const port = 4000;

const server = new ApolloServer({ resolvers, typeDefs });

const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
