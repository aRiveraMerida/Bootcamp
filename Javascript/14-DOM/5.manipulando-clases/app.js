//Manipulando clases

const titulo = document.querySelector("#cabecera");

//Añadir una clase si no existe
titulo.classList.add("rojo")

//Eliminar una clase del elemento
titulo.classList.remove("rojo");

//Añadir varios
titulo.classList.add("rojo", "subrayado")

//Eliminar varias
titulo.classList.remove("rojo", "subrayado");

//Toggle
titulo.classList.toggle("rojo") //-> lo crea
titulo.classList.toggle("rojo")// -> lo elimina

//Contain -> si existe devuelve true, si no devuelve false
console.log(titulo.classList.contains("rojo"))