const fetchData = async () => {
  try {
    const pokemonId = [];

    while (pokemonId.length < 9) {
      const randomPokemonId = Math.floor(Math.random() * 151) + 1;
      if (!pokemonId.includes(randomPokemonId)) {
        pokemonId.push(randomPokemonId);
      }
    }

    const pokemonPromises = pokemonId.map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        if (!response.ok) {
          throw new Error("HTTP Error! status:", response.status);
        }
        return response.json();
      })
    );
    const pokemonData = await Promise.all(pokemonPromises);
    return pokemonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
