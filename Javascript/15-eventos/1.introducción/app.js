const saludo = () => {
  console.log("Buenas tardes");
};

const despedida = () => {
  console.log("Adios");
};


//addEventListener -> añadimos un evento y la acción a ejecutar
const btn = document.querySelector("#btn");

btn.addEventListener("click", (ev) => saludo())

window.addEventListener("scroll", (ev) => console.log(ev))