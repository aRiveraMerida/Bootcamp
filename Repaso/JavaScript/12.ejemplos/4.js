const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

let categorias = [];

for (const movie of movies) {
    //Recorremos los arrays por cada una de las peliculas
  for (const category of movie.categories) {
    //El array categorias NO incluye la categoria la pushea, y si no no hace nada
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}
//Aqui tenemos el array con las categorias unicas
console.log(categorias)