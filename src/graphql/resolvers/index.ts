import GMR from 'graphql-merge-resolvers'
import {character} from './character'
import {game} from './game'

const resolvers:any = GMR.merge([character, game])

export default resolvers