import React from "react";
import Pokemon from "../components/Pokemon";
// import { useListPokemonQuery } from '../queries';

const pokemon = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 69,
  stats: [
    {
      base_stat: 45,
      stat_name: {
        name: "hp",
        id: 1,
        characteristics: [
          {
            description: [
              {
                description: "Loves to eat"
              }
            ]
          }
        ]
      }
    }
  ],
  moves: [
    {
      move: {
        name: "swords-dance",
        moveType: {
          name: "normal"
        },
        accuracy: null,
        power: null,
        pp: 20
      }
    },
    {
      move: {
        name: "cut",
        moveType: {
          name: "normal"
        },
        accuracy: 95,
        power: 50,
        pp: 30
      }
    }
  ],
  types: [
    {
      type: {
        name: "grass"
      }
    }
  ]
};

const ListPokemon = () => {
  // const { loading, error, data } = useListPokemonQuery({ variables: { limit: 10 }});
  // if (loading) return <div />;
  // if (error) return <div />;
  return (
    <div>
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default ListPokemon;
