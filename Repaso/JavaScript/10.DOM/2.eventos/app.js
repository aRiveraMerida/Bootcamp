const saludarBtn = document.querySelector("#saludarBtn");
//const input = document.querySelector("#textinput");
const saludo = () => {
  console.log("Hola");
  saludarBtn.removeEventListener("click", saludo);
};

saludarBtn.addEventListener("click", saludo);

//input.addEventListener("input", (ev) => console.log(input.value))

document
  .querySelector("#textinput")
  .addEventListener("input", (ev) => console.log(ev.target.value));

