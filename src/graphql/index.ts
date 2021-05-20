import { GraphQLSchema } from "graphql";
import { makeExecutableSchema, mergeTypeDefs } from "graphql-tools";
import "graphql-import-node";
import game from "./schemas/game.graphql";
import character from "./schemas/character.graphql";
import resolvers from "./resolvers";

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([character, game]),
  resolvers,
});
