import { text } from "../Text/component";

//Recuperamos el elemento de HTML donde queremos volcar la información
const app = document.querySelector("#app");

//Exportamos la función init, que dará pie a que se ejecuten todas las demás
export const init = () => {
  getMovies();
};
//Esta función tiene que ser asíncrona porque vamos a recuperar datos de una "API"
const getMovies = async () => {
  //Toda la lógica de esta función irá encapsulada dentro de un trycatch, para poder recuperar el error
  try {
    //Realizar un fetch
    const rawMovies = await fetch("http://localhost:3000/movies");
    //Convertir los datos crudos a JSON
    const jsonMovies = await rawMovies.json();
    //Mapeamos las películas para transformarlas y le pasamos nuestra lista en JSON
    transformMovies(jsonMovies);
  } catch (error) {
    console.log(error);
  }
};

//Creamos una función que mapea los datos que nos devuelve la API una vez transformados a JSON y vamos a crear un nuevo array de objetos que no incluya el id
const transformMovies = (movies) => {
  //Por cada una de las "movie" haremos un nuevo objeto
  const mappedMovies = movies.map((movie) => ({
    title: movie.title,
    date: movie.date,
    description: movie.description,
    poster: movie.poster,
  }));
  //A la función printMovies le pasamos mappedMovies
  printMovies(mappedMovies);
};

//Creamos una función que a través de un bucle cree un montón de elementos <figure/>
const printMovies = (movies) => {
  for (const movie of movies) {
    //Creamos bloques en una costante con template strings
    const movieFigure = `
        <figure class="movie">
            <h3>${movie.title}</h3>
            ${text("Release date: " + movie.date, "small")}
            <img src=${movie.poster} alt=${movie.title} />
            <figcaption>${movie.description}</figcaption>
        </figure>
        `;
    //Añadir uno a uno estos elementos al contenedor
    app.innerHTML += movieFigure;
  }
};
