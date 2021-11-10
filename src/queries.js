//

import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache()
});

const LIST_POKEMON = gql`
  query listPokemon($limit: Int) {
    pokemon: pokemon_v2_pokemon(limit: $limit) {
      id
      name
      height
      weight
      stats: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 1 } }) {
        base_stat
        stat_name: pokemon_v2_stat {
          name
          id
          characteristics: pokemon_v2_characteristics(limit: 1) {
            description: pokemon_v2_characteristicdescriptions(
              where: { pokemon_v2_language: { name: { _eq: "en" } } }
            ) {
              description
            }
          }
        }
      }
      moves: pokemon_v2_pokemonmoves(limit: 2) {
        move: pokemon_v2_move {
          name
          moveType: pokemon_v2_type {
            name
          }
          accuracy
          power
          pp
        }
      }
      types: pokemon_v2_pokemontypes(limit: 1) {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const useListPokemonQuery = (options) => useQuery(LIST_POKEMON, options);
