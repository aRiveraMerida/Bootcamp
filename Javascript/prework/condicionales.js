let user = false;

function isLogged(user) {
  if (typeof user !== "string") {
    console.log("Debes tener un nombre");
  } else if (user) {
    console.log("Bienvenido " + user);
  } else {
    console.log("Debes iniciar sesión");
  }
}

isLogged("Pepe");
isLogged(1);
isLogged();

