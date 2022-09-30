//Creando nuevos elemento

//createElement crea un nuevo elemento con el tag que especifiquemos
const newH1 = document.createElement("h1");

//createTextNode crea un nuevo nodo de texto
const textH1 = document.createTextNode("Este es el título");

//appendChild -> al elemento indicado le inyectaremos un hijo
newH1.appendChild(textH1);
console.log(newH1)

document.body.appendChild(newH1);

///////////

//Forma rapida para asignar el texto a los elementos.
//innerHTML modifica el HTML interno de los elementos

const username = "Jose"

const htmlDiv = document.querySelector("#container");
htmlDiv.innerHTML = `
<ul class="lista">
    <li>${username}</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ul>
`

//insertBefore -> inserta un elemento antes del padre -> el primer parámetro es el elemento a insertar, y el segundo el que tiene estar después del insertado
document.body.insertBefore(newH1, htmlDiv)