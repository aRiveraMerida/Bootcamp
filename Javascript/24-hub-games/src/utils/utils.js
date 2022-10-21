import { initContent } from "../main";

const getNumber = () => `${Math.floor(Math.random() * 251)}`;

const generateRandomRgb = () => `
rgb(${getNumber()},${getNumber()},${getNumber()})
`;

export const changeBackground = () => {
  document.body.style.background = generateRandomRgb();
};

export const logout = () => {
  localStorage.removeItem("user");
  initContent()
};

export const addHeaderListeners = () => {
  document
    .querySelector("#btnBackground")
    .addEventListener("click", () => changeBackground());

  document.querySelector("#logout").addEventListener("click", () => logout());
};
