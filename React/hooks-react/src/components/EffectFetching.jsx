import { useState, useEffect } from "react";

import { useDebounce } from 'use-debounce'

import { getPokemon } from '../api/pokemon'

export const EffectFetching = () => {
  const [filter, setFilter] = useState('ditto')
  const [pokemonCollection, setPokemonCollection] = useState([])

  const [debounceFilter] = useDebounce(filter, 500);

  useEffect(() => {
    getPokemon(filter).then((pokemon) => setPokemonCollection([pokemon]))
  }, [debounceFilter])

  return (
    <>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {pokemonCollection.map((pokemon) => (
          <li key={pokemon.name}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </>
  )
}