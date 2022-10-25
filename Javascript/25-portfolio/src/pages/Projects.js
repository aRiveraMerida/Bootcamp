import { data } from "../data/data";
const { projects } = data;

export const template = () => `<section class="portfolio">
<h2>Projects</h2>
<div class="projects" id="projects"></div>
</section>`;

const printProjects = () => {
  for (const project of projects) {
    const figure = `
        <figure>
            <h2>${project.title}</h2>
            <img src=${project.image} alt=${project.title} />
            <p>${project.description}</p>
            <a href=${project.link}>View more...</a>
        </figure>
        `;
    document.querySelector("#projects").innerHTML += figure;
  }
};

export const listeners = () => {
  printProjects();
};
