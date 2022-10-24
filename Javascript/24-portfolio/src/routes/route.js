//Pages
import { template as home } from "../pages/Home";
import {
  template as portfolio,
  listeners as portfolioListeners,
} from "../pages/Portfolio";
import { template as contact } from "../pages/Contact";
import { template as notFound } from "../pages/NotFound";
//Components
import { listeners as navbarListeners } from "../components/Navbar";
import { listeners as footerListeners } from "../components/Footer";
//Routes
export const routes = {
  "/": { title: "Home", render: home },
  "/portfolio": {
    title: "Portfolio",
    render: portfolio,
    listener: portfolioListeners,
  },
  "/contact": { title: "Contact", render: contact },
  "/notfound": { title: "Not Found", render: notFound },
};
//Router
export const router = () => {
  let page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.querySelector("#app").innerHTML = page.render();
    navbarListeners();
    footerListeners();
    if (page.title === "Portfolio") page.listener();
  } else {
    history.replaceState("", "", "/notfound");
    router();
  }
};
