let age = 15;

let status = (age >= 18) ? adult() : minor();

console.log(status);

function adult() {
  return 'Puedes pasar a mi bar';
}

function minor() {
  return 'Vete a jugar al parque';
}


if (age >= 18) {
  return 'adult'
} else {
  return 'minor'
}



function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

