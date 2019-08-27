import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { PokemonListType }  from '../../types/pokemonList';
// import { ProductType }  from '../../types/product';
import { getPokemon } from '../../models/pokemon';

const GetPokemon = {
  type: PokemonListType,
  args: {
    offset: { type: GraphQLInt, defaultValue: 1 },
    limit: { type: GraphQLInt, defaultValue: 10 },
  },
  resolve: getPokemon
}

export { GetPokemon }