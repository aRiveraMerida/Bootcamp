//Pages
import { template as home } from "../pages/Home";
import {
  template as projects,
  listeners as projectsListeners,
} from "../pages/Projects";
import { template as contact } from "../pages/Contact";
import { template as notFound } from "../pages/NotFound";
//Components
import { listeners as navbarListeners } from "../components/Navbar";
import { listeners as footerListeners } from "../components/Footer";
//Routes
export const routes = {
  "/": { title: "Home", render: home },
  "/projects": {
    title: "Projects",
    render: projects,
    listener: projectsListeners,
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
    if (page.title === "Projects") page.listener();
  } else {
    history.replaceState("", "", "/notfound");
    router();
  }
};
