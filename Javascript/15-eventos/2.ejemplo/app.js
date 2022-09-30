const createBtn = document.createElement("button");
const themeBtn = document.createElement("button");
const searchbar = document.querySelector("#searchbar");

createBtn.innerText = "Crear elemento";
themeBtn.innerText = "Cambiar tema";

const createBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.appendChild(box);
};

const changeTheme = () => {
  document.body.classList.toggle("dark");
};

createBtn.addEventListener("click", createBox);
themeBtn.addEventListener("click", changeTheme);

document.body.appendChild(createBtn);
document.body.appendChild(themeBtn);

searchbar.addEventListener("keyup", () => console.log(searchbar.value));

//document.body.addEventListener("keydown", () => alert("No toques el teclado"))
