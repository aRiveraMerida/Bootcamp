const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", (ev) => console.log(ev.target.value));
