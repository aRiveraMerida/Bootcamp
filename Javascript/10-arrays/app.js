// at

const array1 = [1, 5, 7, 9, 12];

const index1 = 3; // si tenemos un string en vez de un number funciona igual

console.log(array1.at(index1));

console.log(array1[index1]);

// concat -> concatena un array con el array pasado por param

const arrayConcat1 = [1, 2, 3];
const arrayConcat2 = [5, 7, 8];
const arrayConcat4 = ['a', 'b', { a: 'hola', b: 56 }]
const arrayConcat3 = arrayConcat1.concat(arrayConcat2);
// ... spreed operator -> recorrer los arrays -> SI LO VAMOS A USAR
// [+...] -> dest alamacenarlo
const arrayConcatSpreed = [...arrayConcat1, ...arrayConcat2, ...arrayConcat4];
console.log(arrayConcat3);
console.log(arrayConcatSpreed);

// copywithin
const arrayCopy = ['a', 'b', 'z', 65, 81, 'x', 'y'];
console.log(arrayCopy.copyWithin(1, 2, 4));

//entries -> SI LO VAMOS A USAR
const arrayEntries = [1, 2, 3]; // {0:1, 1:2, 2:3}

const iteratorEntries = arrayEntries.entries();
console.log(iteratorEntries);

console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);

// fill -> 1 param [valor a añadir] || 2 param - posicion donde empieza || 3 param - posicion final
const arrayFill = [1, 2, 3, 5];
console.log(arrayFill.fill(0, 1, 9));

// flat  sin param - 1 array -> SI LO VAMOS A USAR
// si metes un valor numerico es la dimension del array o arrays anidados

// [1, 2, [3, 4], [5, [6, [{ a: 50, b: [1, 2, 3] }]]]]; -> si es una propiedad de objt no aplana
const arrayFlat = [1, 2, [3, 4], [5, [6, [90]]]];
console.log(arrayFlat.flat(9)); // te aplana todos
console.log(arrayFlat.flat(3)); // aplana 90
console.log(arrayFlat.flat(2)); // aplana el 6
console.log(arrayFlat.flat()); // aplana un nivel

// includes -> te devuelve un true o false si encuentra el valor - SI SE USA

const arrayIncludes = [1, 2, 3, 'pepe'];
const arrayIncludes2 = [1, 2, 3, 'pepe', { a: 'pepa' }];
console.log(arrayIncludes.includes('pepa'));
console.log(arrayIncludes2.includes('pepa'));

// indexof -> SI SE USA - te devuelve el primero que encuentra coincide
const arrayIndexOf = ['A', 'B', 'C']; // ['A', 'B', 'C', 'B']
// si el valor no existe dentro del array devuelve -1
console.log(arrayIndexOf.indexOf('B')); // lastindexof -> te devuelve el ultimo

// Join -> une -> SI SE USA POCO
const arrayJoin = ['A', 'B', 'C'];

console.log(arrayJoin.join()) // A,B,C
console.log(arrayJoin.join(" ")) // A B C
console.log(arrayJoin.join("*")) // A*B*C

// length -> propiedad y devuelve la longitud
// logitud natural
// no como se cuenta en arrays - 0,1,2
console.log(arrayJoin.length);

// push y pop -> para añadir  // para elimnar -> SI SE USAN
// shift = pop pero elimina el 1
const arrayPushPop = [1, 2, 3, 4];
arrayPushPop.push('Hola');
console.log(arrayPushPop);
arrayPushPop.pop();
console.log(arrayPushPop);

// reverse -> da la vuelta al array -> SI SE USA

const arrayReverse = [1, 2, 3];
console.log(arrayReverse.reverse());

// unshift -> mimso que push pero añade al principio -> si se usa
const arrayunshift = [1, 2, 3];
arrayunshift.unshift(5, 6, 7, 8);

console.log(arrayunshift);

// slice  -> si se usa
const arraySlice = ['pato', 'rana', 'mono', 'foca'];
console.log(arraySlice.slice(2));// desde el valor indicado hasta la longitud
console.log(arraySlice.slice(1, 2));// el segundo paam que es li mite no esta incluido

// sort -> YO NO LO USO
const arraySort = ['Febrero', 'Junio', 'Mayo', 'Diciembre']

arraySort.sort(); // orden alfabetico
console.log(arraySort);

const arraySort2 = [1, 5, 100000, 20, 40, 900000];
arraySort2.sort(); // SORT PARA NUMEROS CACA!!!
console.log(arraySort2);

// splice - añade + borra || sustituye
const months = ["Jan", "Feb", "Marc", "Jun", "Jul"];

months.splice(1, 0, 'PEPE');
console.log(months);
months.splice(4, 2, 'PEPE');
console.log(months);
// 1 param -> posicion
// 2 param elementos a eleiminar 
// 3 param elemento a introducir
// const otherArray = months.splice(4, 2, 'PEPE');

// tostring -> SE USA
console.log(months.toString());

// values 
const arrayValues = ['a', 'b', 'c'];
const iteratorValues = arrayValues.values();
console.log(iteratorValues);

for (const value of iteratorValues) {
  console.log(value);
}

