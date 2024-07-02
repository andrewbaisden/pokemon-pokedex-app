import { useState, useEffect } from 'react';
import usePokemon from '../../hooks/usePokemon';
import { fetchPokemon } from '../../utils/fetchUtils';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

export default function Pokemon() {
  const { data, isLoading, error } = usePokemon(
    'https://pokeapi.co/api/v2/pokemon'
  );

  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (data && data.results) {
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonData = await fetchPokemon(pokemon.url);
            return pokemonData;
          })
        );
        setPokemonDetails(details);
      }
    };

    fetchPokemonDetails();
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex row flex-wrap gap-4 justify-evenly">
        <PokemonDetails pokemonDetails={pokemonDetails} />
      </div>
    </>
  );
}
