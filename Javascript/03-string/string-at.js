// El método at te devuelve el elemento en la posición indicada

const sentence = "Yo soy bataman";

let index = 5;


console.log(`Voy a usar el index ${index} para que me devuelva el elemento en esa posicion ${sentence.at(index)}`);

console.log(`Voy a usar el index ${index} para que me devuelva el elemento en esa posicion ${sentence.at(index - 1)}`);
// cuando a at no le pasamos valor por defecto es 0 - si pasamos un -1 es el ultimo elemento
console.log(`Voy a no usar el index  para que me devuelva el elemento en esa posicion por defecto ${sentence.at(-1)}`);