//Recuperando los elementos del DOM

//Almacenando elementos de HTML en JS crearemos NODOS

//getElementByID -> Se recupera por el nombre del id en HTML
const subtitleNode = document.getElementById("subtitle");
console.log(subtitleNode);

//getElementsByClassName -> Crea una lista con los elementos que tengan dicha clase
const paragraphNode = document.getElementsByClassName("paragraph");
console.log(paragraphNode);

//getElementsByTagName -> Crea una lista con los elementos correspondientes a la etiqueta indicada
const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

/////////

//LOS QUE SE USAN SIEMPRE
//querySelector -> Esto recupera un elemento del DOM (el primero que encuentre) y dependiendo de si escribimos .clase, #id, o etiqueta recuperaremos dicho elemento
const querySubtitle = document.querySelector("#subtitle");
const queryParagraph = document.querySelector(".paragraph");
const firstDiv = document.querySelector("div");
//querySelectorAll -> Genera una lista con los elementos del DOM correspondientes y tambien acepta clases, ids y etiquetas.
const allQueryDivs = document.querySelectorAll("div");

console.log(querySubtitle);
console.log(queryParagraph);
console.log(firstDiv);
console.log(allQueryDivs);
