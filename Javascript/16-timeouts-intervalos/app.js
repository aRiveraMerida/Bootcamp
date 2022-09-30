let intervalID;
let segundos = 0;

//Timeouts -> Cuenta atrás
setTimeout(() => {
  console.log("Hola");
}, 3000);

//Intervalos -> Intervalo de tiempo

const crearIntervalo = () => {
    intervalID = setInterval(() => {
        imprimirTiempo();
    }, 1000);
}

const imprimirTiempo = () => {
    segundos++;
    console.log(`Han pasado ${segundos} segundos.`);
    if(segundos >= 5){
        clearInterval(intervalID);
    }
}

crearIntervalo() 