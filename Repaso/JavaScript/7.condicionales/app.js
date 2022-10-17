const aprobado = true;
const tienesDinero = true;

if (aprobado === true && tienesDinero === true) {
  console.log("Enhorabuena, has aprobado y te vas de viaje");
} else if (aprobado === true) {
  console.log("Enhorabuena, has aprobado");
} else if (aprobado != false && tienesDinero === true) {
  console.log("Tienes dinero pero has suspendido, te quedas sin viaje");
} else {
  console.log("No se que pasa");
}

const hasAprobado = aprobado === true ? "Aprobado" : "Suspenso";
console.log(hasAprobado);
