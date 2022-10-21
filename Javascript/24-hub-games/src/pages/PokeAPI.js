import "../styles/poke.css";
import { Title } from "../components/Title";

const template = () => `
  <section class="pokeApi">
  ${Title("Pokedex", 1)}
  <div class="pokeContainer"></div>
  </section>
`;

const getPokemons = async () => {
  let pokemonList = [];
  for (let i = 1; i < 152; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await data.json();
    pokemonList.push(pokemon);
  }
  mapPokemons(pokemonList);
};

const mapPokemons = (list) => {
  const mappedPokemons = list.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.sprites.other["official-artwork"].front_default,
  }));

  printPokemon(mappedPokemons);
};

const printPokemon = (list) => {
  const container = document.querySelector(".pokeContainer");
  for (const item of list) {
    const template = `
    <img src=${item.image} alt=${item.name}/>
    `;
    container.innerHTML += template;
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};

getPokemons();
