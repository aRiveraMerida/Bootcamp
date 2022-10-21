import "../styles/wacka.css";
import { Title } from "../components/Title";
const template = () => `
<div class="interface">
    ${Title("Wacka", 1)}
    <span class="score">0</span>
    <button id="startGame">Start!</button>
</div>
<div class="game">
    <div class="hole hole1">
         <div class="mole"></div>
    </div>
    <div class="hole hole2">
         <div class="mole"></div>
    </div>
    <div class="hole hole3">
         <div class="mole"></div>
    </div>
    <div class="hole hole4">
         <div class="mole"></div>
    </div>
    <div class="hole hole5">
         <div class="mole"></div>
    </div>
    <div class="hole hole6">
         <div class="mole"></div>
    </div>
</div>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListener();
};

let lastHole;
let timeUp = false;
let score = 0;

//Creamos una función que nos retorne un tiempo random que mantendrá al topo asomado
const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
//Crear una función para que el topo que se vaya a asomar sea aleatorio
const randomHole = () => {
  const index = Math.floor(
    Math.random() * document.querySelectorAll(".hole").length
  );
  const hole = document.querySelectorAll(".hole")[index];

  //Aqui vamos a evitar que un topo salga dos veces por el mismo hoyo
  if (hole === lastHole) {
    return randomHole(document.querySelectorAll(".hole"));
  }
  lastHole = hole;
  return hole;
};

//Definimos la función que hará que el topo se asome
const showMole = () => {
  //Vamos a definir el tiempo en el que un topo se mantiene asomado
  const time = randomTime(500, 1000);
  const hole = randomHole(document.querySelectorAll(".hole"));
  //A este hoyo le vamos a añadir la clase que asoma el topo
  hole.classList.add("up");
  //Con un settimeout le vamos a quitar el estilo que lo asoma
  setTimeout(() => {
    hole.classList.remove("up");
    //Siempre y cuando el timeUp no se haya acabado seguiremos asomando topos
    if (!timeUp) {
      showMole();
    }
  }, time);
};

//Definimos la función que arranca el juego
const startGame = () => {
  timeUp = false;
  score = 0;
  showMole();
  //Con un setTimeUp modificamos el timeUP en true durante 15 segundos
  setTimeout(() => (timeUp = true), 15000);
};

const wack = (ev) => {
  //Siempre que el evento venga dado por una interacción real del usuario sera valida
  if (!ev.isTrusted) return;
  score++;
  ev.target.parentNode.classList.remove("up");
  console.log("ESTE ES", ev);
  document.querySelector(".score").textContent = score;
};

/* function wack(ev) {
  //Siempre que el evento venga dado por una interacción real del usuario sera valida
  if (!ev.isTrusted) return;
  score++;
  this.parentNode.classList.remove("up");
  console.log("ESTE ES", ev);
  document.querySelector(".score").textContent = score;
} */

const addListener = () => {
  document
    .querySelectorAll(".mole")
    .forEach((mole) => mole.addEventListener("click", (ev) => wack(ev)));

  document.querySelector("#startGame").addEventListener("click", startGame);
};
