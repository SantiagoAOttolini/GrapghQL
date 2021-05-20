import { IResolvers } from "graphql-tools";
import data from "../../data/data.json";

export const characterResolver: IResolvers = {
  Query: {
    getCharacters() {
      return data.characters;
    },
    getCharacter(root: void, args: any){
      const [find] = data.characters.filter(ch => ch._id === args._id)
      return find
    }
  },
  Character: {
    games(root: any){
      const gameList: Array<any> = [];
      root.games.map((gameId: string) =>
      gameList.push(...data.games.filter(game => game._id === gameId))
      )
      return gameList
    }
  }
};
