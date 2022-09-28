const object1 = {
  a: 'lo que sea',
  b: 50
}
// object entries te transforma el objecto en un array de arrays
// {a:50, b:85}
// [[a, 50], [b,85]]
console.log(Object.entries(object1));

// for ... of -> recorre [....] -> 
// 0 iteración -> [a, 50]
// 1 iteracion -> [b, 85]
// destructurin para 0: [posicion0, posicion1] ->  [a,50]
// destructurin para 1: [posicion0, posicion1] ->  [b,85]
for (const [posicion0, posicion1] of Object.entries(object1)) {
  console.log(`${posicion0}: ${posicion1}`)
}

const arrayElements = [[1, 2], [1, 2, 3, 4]];

for (const [pos0, pos1, pos2] of arrayElements) {
  console.log(`${pos0}: ${pos1} : ${pos2 != undefined ? pos2 : 'elemento no encontrado'}`)
}

for (let i = 0; i < arrayElements.length; i++) {
  for (let j = 0; j < arrayElements[i].length; j++) {
    console.log(arrayElements[i][j]);
  }
}