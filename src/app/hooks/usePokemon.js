import { useState, useEffect } from 'react';
import { fetchPokemon } from '../utils/fetchUtils';

const usePokemon = (initialUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(initialUrl);
        setData(pokemonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [initialUrl]);
  return { data, isLoading, error };
};

export default usePokemon;
