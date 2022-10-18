//Recuperar elementos

const container = document.querySelector("#container");
const spans = document.querySelectorAll("span");

console.log(spans);

//Acceder a hijos y padres
console.log(container.childNodes);
console.log(container.parentNode);

//Crear nuevos elementos
const title = document.createElement("h1");
title.innerHTML = "Esto es el titulo";
console.log(title);

document.body.appendChild(title);

//Manipular las clases -> classList
const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () =>
  document.body.classList.toggle("dark")
);
//el metodo contains devuelve un true o un false si la clase indicada existe o no en el elemento

//Template strings
const name = "Peter";

const template = `
<figure class="card">
    <h3>${name}</h3>
</figure>`;

//Combo
const image = document.createElement("img");
image.src = "https://randomwordgenerator.com/img/picture-generator/futuristic-1604408_640.jpg"
image.alt = "Imagen random"
image.id = "mi-imagen"
image.style.border = "2px solid black"

//image.setAttribute(...)
document.body.appendChild(image)
