const btn = document.querySelector("#btn");
const par = document.querySelector("#par");
const setName = () => {
  //localStorage.setItem("user", "Alberto");
  localStorage.user = "Antonio";
};

btn.addEventListener("click", setName);

//par.textContent = localStorage.getItem("user")
par.textContent = localStorage.user;
