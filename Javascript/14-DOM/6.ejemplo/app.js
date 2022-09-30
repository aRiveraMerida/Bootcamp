const moviesContainer = document.querySelector("#movies");
const showsContainer = document.querySelector("#shows");

//Primera parte
const movies = ["Robocop", "Terminator", "Titanic", "Frozen 2", "Toy Story"];

//Creamos la lista
const movieList = document.createElement("ul");

for (const movie of movies) {
  //Creamos un template de li con el texto interno de movie
  const li = `<li>${movie}</li>`;
  //Editamos el HTML interno de movieList (ul) sumandole en cada vuelta cada uno de estos li
  movieList.innerHTML += li;
}

console.log(movieList);
moviesContainer.appendChild(movieList);

//Segunda parte
const shows = [
  {
    title: "Los Anillos de Poder",
    seasons: 5,
    platform: "Amazon",
    director: "Bayona",
  },
  {
    title: "Andor",
    seasons: 2,
    platform: "Disney+",
    director: "Gareth Edwards",
  },
  {
    title: "Breaking Bad",
    seasons: 5,
    platform: "Fox",
    director: "Rian Johnson",
  },
];

const showList = document.createElement("ul");

for (const show of shows) {
  const li = `
    <div>
        <h2>${show.title}</h2>
        <h3>Seasons: ${show.seasons}</h3>
        <p>${show.platform}</p>
        <p>Created by: ${show.director}</p>
    </div>
    `;
  showList.innerHTML += li;
}

showsContainer.appendChild(showList);
