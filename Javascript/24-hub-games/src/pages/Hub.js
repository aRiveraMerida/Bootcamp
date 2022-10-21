import { Title } from "../components/Title";

const template = () => `
${Title("texto", 1)}
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
