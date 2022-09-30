//childNodes te indica los hijos del elemento
const list = document.querySelector("ul");
const hijosDeList = list.childNodes;
console.log(hijosDeList)

//parentNode te indica el nodo padre del elemento
const firstChild = document.querySelector("#firstChild");
const padresChild = firstChild.parentNode;
console.log(padresChild);