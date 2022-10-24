import { template as socialLinks } from "./SocialLinks";

const template = () => `
 ${socialLinks()}
 <a href="correo@correo.es">correo@correo.es</a>
`;

export const listeners = () => {
  document.querySelector("footer").innerHTML = template();
};
