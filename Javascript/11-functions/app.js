// Tradicional
//() -> añadir parametros con los que operar
function nameFunction(a, b = 15) {
  // operarar y transformar
  // retornar un valor
  return `${a + b} NameFucntion`
  // Argumentos
}

//Invocar a la función
nameFunction("Hola", "Estudiantes")
nameFunction(5)

// Ejemplo param object tenerlo en cuenta
// function functionLargeParams (a) {
//   a.name
//   // operar
// }

// functionLargeParams({name:'pepe', age:35, })

// Arrow functions -> POR FAVOR SI NO CONTROLAIS ASI HASTA QUE OS ACOSTUMBREIS
const arrowFunction = (a) => {

  if (a) { return `Bienvenido ${a}` }
  console.log("Hola");
  return "Bienvenid@"
  return "pepe"
}


// SOLO CUANDO CONTROLEIS LAS ARROWS
const arrowReturnImplicito = () => "Bienvenidos";

// SOLO SI LO CONTROLAIS - solo con un param + de 1 param necesitamos los ()
const arrowReturnParam = param => `${param} ejemplo`

let greeting = arrowReturnParam("pepe");
console.log(greeting)

// AYUDA VSCODE
function tradicional() { return "Hola" }

const arrowFucntion = () => { return "Hola" }

// SI HAY UN VALOR DE RETORNO -> SE ALAMCENA EN OTRA VARIABLE
let greetingHola = arrowFucntion();


