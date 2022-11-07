export const getPokemon = async (filter) => {
  const pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`)
  const pokemonToJson = await pokemones.json()
  return {
    ...pokemonToJson,
    name: pokemonToJson.name,
    image: pokemonToJson.sprites.front_shiny
  }
}