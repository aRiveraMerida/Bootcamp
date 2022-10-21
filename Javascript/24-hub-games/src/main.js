import "../style.css";

import { printTemplate as printLoginTemplate } from "./pages/Login";
import { printTemplate as printHubTemplate } from "./pages/Hub";
import { addHeaderListeners } from "./utils/utils";

addHeaderListeners();

export const initContent = (navigation) => {
  switch (navigation) {
    case undefined:
      printLoginTemplate();
      break;
    case "Hub":
      printHubTemplate()
      break; 
  }
};

initContent();
