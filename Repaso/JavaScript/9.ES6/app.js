//Object destructuring

const alumn = {
  name: "Fulano",
  age: 30,
  status: "alive",
};

const alumnName = alumn.name;
const alumnAge = alumn.age;

const { name, age } = alumn;
/* const name = alumn.name
const age = alumn.age */
console.log(name);

//Spread Operator
const list1 = [1, 2, 3, 4, 5];
const list2 = [6, 7, 8, 9];

const newList = [...list1, ...list2, 10];
console.log(newList);

//MAP
const pokemons = [
  {
    namePokeS: "Pikachu",
    sprite_fantasy2005: "imagen",
    id: 1,
  },
  {
    namePokeS: "Bulbasur",
    sprite_fantasy2005: "imagen",
    id: 2,
  },
];

const myPokemons = pokemons.map((pokemon) => ({
  nombre: pokemon.namePokeS,
  imagen: pokemon.sprite_fantasy2005,
}));

console.log(myPokemons);

//Filter
const alumnos = [
  {
    nombre: "Marcos",
    age: 89,
  },
  {
    nombre: "Fulano",
    age: 25,
  },
  {
    nombre: "Pepe",
    age: 45,
  },
  {
    nombre: "Marcos",
    age: 30,
  },
];

const under40 = alumnos.filter((alumno) => alumno.age < 40);
console.log(under40);

//Find
const marcos = alumnos.find((alumno) => alumno.nombre === "Marcos");
console.log(marcos);

//Reduce
const sumaEdades = alumnos.reduce(
  (acumulador, alumno) => acumulador + alumno.age,
  0
);

const media = sumaEdades / alumnos.length;
console.log(media);
