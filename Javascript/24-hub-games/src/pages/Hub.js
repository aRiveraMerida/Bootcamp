import { Title } from "../components/Title";
import { initContent } from "../main";

const template = () => `
${Title(`Welcome ${localStorage.user}`, 1)}
<section class="hub">
<button id="pokeApi">PokeAPI</button>
<button id="wacka">Wacka-Hole</button>
</section>
`;

const addListeners = () => {
  document
    .querySelector("#pokeApi")
    .addEventListener("click", () => initContent("PokeAPI"));
  document
    .querySelector("#wacka")
    .addEventListener("click", () => initContent("Wacka"));
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
