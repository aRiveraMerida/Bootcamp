const app = document.querySelector('#list');


// Naming de funcion para llamarlo desde el app;
export const initFilms = () => {
  getFilms();
}

// Declaramos una función asincrona -> necisitamos el async antes de los ()
const getFilms = async () => {
  // Definimos el Try Catch para intentar recuperar los datos y sino capturar el error
  try {
    // Lanzar la petición -> await para guardarlos en la variable
    const responsePromiseFilm = await fetch(' https://ghibliapi.herokuapp.com/films');
    // Transformar los datos a un formato legible -> Json => await para tranformar los datos y almacenarlos
    const responseFilmToJson = await responsePromiseFilm.json();
    // Invocamos a la funcíon que mappea los datos recibidos
    tranformFilms(responseFilmToJson);
  } catch (error) {
    // Capturamos el error y lo sacamos por consola
    console.log(error)
  }
}

// Mapeamos la info de la Api con los datos que nosotros necesitamos
const tranformFilms = (films) => {
  let elementsTransformed = films.map((film) => {
    return {
      japaneseTitle: film.original_title,
      englishTitle: film.title,
      description: film.description,
      poster: film.image,
    }
  })
  // Llammos a la función de pintado -> template 
  fillFilms(elementsTransformed);
}

// Función de pintado -> que tiene un li para capa pelicula que hay en la lista
const fillFilms = (films) => {
  films.forEach((film) => {
    // Recogemos en una variable los elementos
    const listFilm = `
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
            src=${film.poster}>
          <div
            class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${film.englishTitle}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${film.japaneseTitle}</h1>
            <p class="leading-relaxed">${film.description}</p>
          </div>
        </div>
      </div>
    `
    // Los añadimos en el contenedor -> ul
    list.innerHTML += listFilm;
  });
}




