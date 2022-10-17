const list = [1, 2, 3, 4, 5];

console.log(list.length);

console.log(list[3]);

//

list.push(6);
console.log(list);

list.pop();
console.log(list);

list.reverse();
console.log(list);

list.splice(2, 2, "hola");
console.log(list);

console.log(list.slice(0, 2));

console.log(list.includes(89));

console.log(list.indexOf(4));
