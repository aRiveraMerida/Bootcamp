import "../style.css";

import { printTemplate as printLoginTemplate } from "./pages/Login";
import { printTemplate as printHubTemplate } from "./pages/Hub";
import { printTemplate as printPokeAPITemplate } from "./pages/PokeAPI";
import { printTemplate as printWackaTemplate } from "./pages/Wacka";

import { addHeaderListeners } from "./utils/utils";

export const initContent = (navigation) => {
  switch (navigation) {
    case undefined:
      window.localStorage.getItem("user")
        ? printHubTemplate()
        : printLoginTemplate();

      break;
    case "Hub":
      printHubTemplate();
      break;
    case "PokeAPI":
      printPokeAPITemplate();
      break;
    case "Wacka":
      printWackaTemplate();
      break;
  }
};
addHeaderListeners();
initContent(undefined);
