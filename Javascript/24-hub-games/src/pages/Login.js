import { Button } from "../components/Button";
import { InputText } from "../components/InputText";
import { Label } from "../components/Label";
import { initContent } from "../main";

const setUser = () => {
  console.log("hola");
  if (document.querySelector("#username")) {
    window.localStorage.setItem(
      "user",
      document.querySelector("#username").value
    );
    initContent("Hub")
  }
};

const template = () => `

    ${Label("username", "Username")}
    ${InputText("username")}
    ${Button("loginBtn", "Enter")}

`;

const addListeners = () => {
  if (document.querySelector("#loginBtn"))
    document.querySelector("#loginBtn").addEventListener("click", setUser);
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
