const movies = [
  "Terminator",
  "Casper",
  "Los Gremlins",
  "El Exorcista",
  "El chip prodigioso",
];

console.log("MOVIES LENGHT", movies.length);

for (let index = 0; index < movies.length; index++) {
  const movie = movies[index];
  console.log(movie, index);
}

for (const movie of movies) {
  console.log(movie);
}

movies.forEach((movie, index) => {
  console.log(movie, index);
});

const coche = {
  name: "Volvo",
  color: "Amarillo",
  ruedas: 4,
};

for (const key in coche) {
  console.log("La clave: " + key + " tiene el valor: " + coche[key]);
}
