//Operadores lógicos
//Operador OR - O -> ||

const soyMayorDeEdad = true;
const tengoDinero = false;

const puedoSalirDeCervezas = soyMayorDeEdad || tengoDinero;
console.log(puedoSalirDeCervezas);

//Operador AND - Y -> &&

const tengoCoche = false;
const tengoCarnet = true;

const puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir);

//NOT - NO -> !
const trueNOT = !true;
const falseNOT = !false;

console.log(trueNOT);
console.log(falseNOT);

//////////

const name = "Peter";

if (!name) {
  console.log("No hay nombre " + name)
} else {
  console.log("No hay nombre");
}
