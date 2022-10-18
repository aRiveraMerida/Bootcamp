/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.

2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>

2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.

2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

const getAgify = async () => {
  const data = await fetch("https://api.agify.io?name=michael");
  const dataJson = await data.json();
  console.log(dataJson);
};

getAgify();

const btn = document.querySelector("button");
const input = document.querySelector("input");

const getNationalize = async (value) => {
  const data = await fetch(`https://api.nationalize.io/?name=${value}`);
  const jsonData = await data.json();
  printElements(jsonData);
};

btn.addEventListener("click", () => getNationalize(input.value));

const printElements = (item) => {
  const { name, country } = item;
  const div = document.createElement("div");
  const p = document.createElement("p");
  const removeBtn = document.createElement("button");

  p.innerHTML = `El nombre ${name} tiene un `;
  for (const cou of country) {
    const template = `${cou.probability}% de ser de: ${cou.country_id}, `;
    p.innerHTML += template;
  }

  const editedP = p.textContent.slice(0, p.textContent.length - 2);

  removeBtn.textContent = "X"
  removeBtn.addEventListener("click", () => div.remove());

  div.innerHTML = editedP;
  div.appendChild(removeBtn)
  document.body.appendChild(div)
};
