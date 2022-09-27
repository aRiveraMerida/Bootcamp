//Condicionales

const name = "Bruce";

if (name === "Bruce") {
  console.log("Es Batman");
} else {
  console.log("No es Bruce");
}

// Else if

const age = 18;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else if (age === 15) {
  console.log("Tienes 15 años");
} else if (age > 0 && age < 15) {
  console.log("Eres un niño/a");
} else {
  console.log("No has nacido");
}

//Ternario
const puedoEntrarAlConcierto = age >= 18 ? true : false;
console.log(puedoEntrarAlConcierto);

/* if(age >= 18){ 
    return true
} else{
    return false
} */

//Switch -> Realiza comparaciones estrictamente igual a un solo elemento
const superhero = "Spider-Man";
/* if (superhero === "Spider-Man") {
  console.log("Su nombre real es Peter Parker");
} else if (superhero === "Daredevil") {
  console.log("Su nombre real es Matt Murdock");
} else if (superhero === "Iron Man") {
  console.log("Su nombre real es Tony Stark");
} else if (superhero === "Ant-Man") {
  console.log("Su nombre real es Scott Lang");
} else if (superhero === "Black Widow") {
  console.log("Su nombre real es Natasha Romanov");
} else {
  console.log("No se de quién me hablas");
} */
switch (superhero) {
  case "Spider-Man":
    console.log("Su nombre real es Peter Parker");
    break;
  case "Daredevil":
    console.log("Su nombre real es Matt Murdock");
    break;
  case "Iron Man":
    console.log("Su nombre real es Tony Stark");
    break;
  case "Ant-Man":
    console.log("Su nombre real es Scott Lang");
    break;
  case "Black Widow":
    console.log("Su nombre real es Natasha Romanov");
    break;
  default:
    console.log("No hay superheroe");
    break;
}

//
const alimento = "Patata";

switch (alimento) {
  case "Patata":
  case "Galleta":
  case "Coca-Cola":
  case "Zumo":
    console.log("Esto es lo que come Antonio");
    break;
  case "Cafe":
    console.log("Esto no");
    break;
  default:
    console.log("Esta comida no existe");
    break;
}

/* if(alimento === "Patata" || alimento === "Galleta" || ...) */