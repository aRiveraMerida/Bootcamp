function sayHello() {
  console.log("Hello");
}

sayHello();

function sayHelloCustom(name) {
  const frase = "Hola " + name;
  console.log(frase);
}

sayHelloCustom("Paco");
sayHelloCustom("Pepe");



function calAge(actualYear, bornYear, name) {
  const age = actualYear - bornYear;
  const frase = name + " tiene " + age + " años.";
  console.log(frase);
}

calAge(2022, 1990, "Antonio");

//

const calAgeArrow = (actualYear, bornYear, name) => {

}

