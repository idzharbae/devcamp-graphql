import {
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
  
  const PokemonType = new GraphQLObjectType({
    name: 'PokemonType',
    fields: {
      name: { type: GraphQLString },
      url: { type: GraphQLString },
    }
  });
  
  export { PokemonType }