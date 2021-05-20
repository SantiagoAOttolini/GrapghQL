import { IResolvers } from "graphql-tools";

export const character: IResolvers = {
  Query: {
    hello() {
      return "world";
    },
    getCharacters() {
      return [
        {
          id: 1,
          name: "Link",
          race: "Dog",
        },
        {
          id: 2,
          name: "Darck",
          race: "Cat",
        },
      ];
    },
  },
};

