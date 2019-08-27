import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
  } from 'graphql';
  import { PokemonType } from './pokemon';
  
  const PokemonListType = new GraphQLObjectType({
    name: 'PokemonListType',
    fields: {
      results: { type: new GraphQLList(PokemonType) },
      hasNextPage: { type: GraphQLBoolean },
      totalData: { type: GraphQLInt },
    }
  })
  
  export { PokemonListType }