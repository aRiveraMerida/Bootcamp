//Hoisting

const generatedName = generateName();

/* const generateName = () => {
  const name = "Peter";
  return name;
};
 */

//FUNCIONES -> SI -> Lo adecuado es colocarlas en la parte más superior del código
function generateName() {
  const name = "Peter";
  return name;
}

console.log(generatedName);

//Constantes y variables -> NO
/* console.log(surname)
const surname = "Parker"; */