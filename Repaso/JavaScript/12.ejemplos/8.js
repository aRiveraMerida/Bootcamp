const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

const loleros = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("Legends")
);

console.log(loleros);

const mayus = loleros.map((lolero) => ({
  ...lolero, //Forma más corta de recuperar el name y el age
  gameMorePlayed:
    lolero.age > 35
      ? lolero.gameMorePlayed.toUpperCase()
      : lolero.gameMorePlayed,
}));

console.log(mayus);
