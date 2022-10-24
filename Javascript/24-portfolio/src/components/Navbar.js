const template = () => `
<nav>
    <a href="/" data-link><h1>My Portfolio</h1></a> 
    <ul>
       <li> <a href="/portfolio" data-link>Portfolio</a> </li>
       <li> <a href="/contact" data-link>Contact</a> </li>
    </ul>
</nav>
`;

export const listeners = () => {
  document.querySelector("header").innerHTML = template();
};
