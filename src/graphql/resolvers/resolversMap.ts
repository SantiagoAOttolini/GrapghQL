import {IResolvers} from 'graphql-tools'

const resolvers: IResolvers = {
    Query:{
        hello(){
            return "world"
        },
        getCharacters(){
            return[{
                id: 1,
                name: "Link",
                race: "Dog"
            },
            {
                id: 2,
                name: "Darck",
                race: "Cat"
            }]
        }
    }
}

export default resolvers