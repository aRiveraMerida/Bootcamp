let elements = ["a", "b", "c", "d", "e"];
let elementsList = ["a", "b", "z", "d", "c"];


function recoverC(list) {
  for (let index = 0; index < list.length; index++) {
    console.log(index);
    if (list[index] === "c") {
      console.log("Es una C");
    }
  }
}

recoverC(elements);
recoverC(elementsList);


