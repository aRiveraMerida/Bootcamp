// Operador de asignación
let myNumber = 5;

// Operador de adición
myNumber += 1;

// Operador de sustracción
myNumber -= 1;

// Operador de multiplicación
myNumber *= 2;

// Operador de división
myNumber /= 2;

// Operador de módulo
myNumber %= 2;

// Operador == (igualdad) || valor - === (igualdad estricta) || valor y tipo
// Operador != (diferencia) || valor - !== (diferencia estricta) || valor y tipo
function operadorIgualdad(a, b) {
  if (a != b) { console.log('Paso') }
}

operadorIgualdad(1, '1');


//Mayor que > || Menor que < || Mayor o igual que >= || Menor o igual que <=

if (5 >= 5) console.log('Paso mayor')