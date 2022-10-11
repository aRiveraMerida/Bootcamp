//localStorage - sessionStorage

//Métodos
//setItem -> Almacenar un par clave/valor
//getItem -> Recupera un par clave/valor
//removeItem -> Elimina un par clave/valor
//clear() -> Limpiar todo el almacen
//key(index) -> Obtiene la clave de una posición
//length -> Retorna el número de items almacenado

const input = document.querySelector("#inputName");
const saveBtn = document.querySelector("#saveBtn");
const showBtn = document.querySelector("#showBtn");
const showName = document.querySelector("#showName");

const saveLocalName = (value) => {
  localStorage.setItem("name", value);
};

const showLocalName = () => {
  const localName = localStorage.getItem("name");
  showName.textContent = localName;
};

saveBtn.addEventListener("click", () => saveLocalName(input.value));
showBtn.addEventListener("click", () => showLocalName());

//Arrays
const movies = ["Terminator", "Robocop", "Star Trek"];

localStorage.setItem("movies", JSON.stringify(movies));
//console.log(localStorage.getItem("movies"));
const parsedMovies = JSON.parse(localStorage.getItem("movies"));
console.log(parsedMovies);
//Objetos
const movie = {
  name: "Batman",
  year: 2021,
  company: "WB",
};

//Podemos setear un objeto en el localStorage convirtiendolo a string con JSON.stringify
localStorage.setItem("movie", JSON.stringify(movie));
//Para recuperarlo podemos parsearlo con JSON.parse (lo transformamos en un objeto de nuevo)
const parsedMovie = JSON.parse(localStorage.getItem("movie"));
console.log(parsedMovie);

//PARA CONVERTIR A STRING UTILIZAREMOS JSON.stringify
//PARA DESCONVERTIR UTILIZAREMOS JSON.parse

//TODO
const todoInput = document.querySelector("#inputTodo");
const createBtn = document.querySelector("#createBtn");
const resetBtn = document.querySelector("#resetBtn");
const listElement = document.querySelector("#list");

let todos = [];

//Añadimos una tarea a lista local y la seteamos en la memoria
const addTodo = (todo) => {
  todos.push(todo);
  localStorage.setItem("memorizedList", JSON.stringify(todos));
  const parsedList = JSON.parse(localStorage.getItem("memorizedList"));
  console.log(parsedList);
  //Le pasamos la lista parseada a la funcion que la recorre y la pinta
  printTodos(parsedList);
};

const printTodos = (list) => {
  listElement.innerHTML = "";
  for (const item of list) {
    listElement.innerHTML += `<li>${item}</li>`;
  }
};
//Añadimos una nueva tarea
createBtn.addEventListener("click", () => addTodo(todoInput.value));

//Aqui recuperamos lo memorizado anteriormente
const firstMemorized = JSON.parse(localStorage.getItem("memorizedList"));
printTodos(firstMemorized);

//Reseteamos la clave donde almacenamos la lista
resetBtn.addEventListener("click", () =>
  localStorage.removeItem("memorizedList")
);

//LO QUE TENEIS QUE HACER EN EL EJEMPLO REAL ES COMPROBAR COMO VIENE POR DEFECTO ALGO SI NO ESTA EN LA MEMORIA O ESTA VACIO Y HACER UNA COSA U OTRA DEPENDIENDO DE ELLO

//

const userP = document.querySelector("#userID");

console.log(localStorage.getItem("user"));
userP.innerHTML =
  localStorage.getItem("user") != null
    ? `Bienvenido ${localStorage.getItem("user")}`
    : "Logueate";

//Se puede tratar a localStorage como si fuera un objeto
localStorage.nombre = "Pepe";
