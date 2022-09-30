//Bucles - Loops

//FOR CLASICO
const alimentos = ["Patata", "Cerveza", "Pan", "Agua", "Galletas"];

for (let index = 0; index < alimentos.length; index++) {
  const element = alimentos[index];
  console.log(element, index);
}

//Inicializamos index con 0, le indicamos que el index va a seguir funcionando hasta que sea menor que 5 (en este caso) y en cada una de las vueltas va a sumar 1 al index
//PRIMERA VUELTA -> index = 0, index < 5, y suma 1
//->const element = alimentos[0] -> Patata
//SEGUNDA VUELTA -> index = 1, index < 5, y suma 1
//->const element = alimentos[1] -> Cerveza
//...
//QUINTA VUELTA -> index = 4, index < 5, y suma 1
//->const element = alimentos[4] -> Galletas
//SEXTA VUELTA -> como index se vuelve 5, index ya no es < 5, por lo tanto rompe el bucle

//LO QUE PASA EN UN BUCLE SE QUEDA EN UN BUCLE -> aqui no podria hacer un console.log(element) porque está dentro de un bucle

//Normalmente os vais a encontrar que el index se nombra como i
for (let i = 0; i < 10; i++) {
  if (i <= 8) {
    console.log("Hola", i);
  } else {
    console.log("Adios", i);
  }
}

//FOROF
const movies = ["Bambi", "Terminator", "Dumbo", "Rambo", "Alien"];

//El forof va a crear tantas movie tenga movies
for (const movie of movies) {
  console.log("Esta película se llama:", movie);
}

/* for (let index = 0; index < movies.length; index++) {
    const movie = array[index];
    console.log(movie)
} */

//FOREACH
const alumnos = ["Daniel", "Alex", "Laura", "Saray", "Rubén"];

alumnos.forEach((alumno, i) => {
  console.log(`Buenas tardes ${alumno} #${i}`);
});

//FORIN
const show = {
  title: "Los Anillos de Poder",
  director: "Bayona",
  platform: "Amazon",
  seasons: 5,
};
//Solo en el forin, la key es generada como un string, por eso es obligatorio usar los corchetes para acceder al objeto y su clave
for (const key in show) {
  console.log(`La clave: ${key}, tiene como valor: ${show[key]}`);
}

const numbers = [1, 2, 3, 4, 5];

for (const key in numbers) {
  console.log(key);
}

//FOR OF VS FOR EACH
const firstArray = ["Luke", "Leia", 2020];

for (const element of firstArray) {
  console.log(element);
}

//La ventaja del foreach, LA UNICA, es que podemos acceder al indice
firstArray.forEach((element, index) => {
  console.log(element + " " + index);
});

