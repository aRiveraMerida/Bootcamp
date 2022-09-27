let product; // sin inicializar
product = "Patatas"; // asignación de valor

let name = "Alberto"; // Inicialización y asignación de valor

let age = 35, userName = "Pepe", isStudent = true; // Declaración de varias variables

// Declaracion de variables
let otherAge = 35;
let otherUser = "Juan";
let isOtherStudent = true;

//----------------------------//

// Asignación de valores
product = "Anillos";
product = 123;

//----------------------------//
// Nombres no válidos
// let let = 123;
// let return = 123;
// let 1name = "Pepe";
// ldet my-name="Pepe";

// nombres validos
let myName = "Pepe";


//----------------------------//
let message = "Hola desde fuera de la función";

function showMessage() {
  let message = "Hola desde dentro de la función";
  console.log(message);
}

showMessage();

let nameExt = "Juan";

function showMyName() {
  let nameGreeting = "Hola " + nameExt;
  console.log(nameGreeting);
}

// console.log(nameGreeting);

showMyName();


let pokemonExt = 'Charmander';

function showPokemon() {
  pokemonExt = "Squirtle"; // (1) Cambió la variable externa

  let message = 'Hola, ' + pokemonExt;
  console.log(message);
}

console.log(pokemonExt); // Charmander antes de llamar la función

showPokemon();

console.log(pokemonExt); // Squirtle, el valor fué modificado por la función


//----------------------------//
const keyboard = "teclado";