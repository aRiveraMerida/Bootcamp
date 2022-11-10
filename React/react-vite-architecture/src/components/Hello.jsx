import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Hello = () => {
  const [name, setName] = useState("pikachu");
  const [pokemon, setPokemon] = useState();
  const debounceValue = useDebounce(name, 1000);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${debounceValue}`
      );
      const json = await data.json();
      setPokemon(json);
    };
    getPokemon();
    console.log(pokemon);
  }, [debounceValue]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {pokemon !== undefined ? (
        <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Hello;
