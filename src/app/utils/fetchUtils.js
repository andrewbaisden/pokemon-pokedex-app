export const fetchPokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};
