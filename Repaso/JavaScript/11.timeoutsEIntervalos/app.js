setTimeout(() => {
  console.log("Hola");
}, 3000);

setInterval(() => {
  const date = new Date();
  console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`);
}, 1000);
