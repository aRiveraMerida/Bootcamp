const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

Object.assign(target, source);

console.log('target', target);
console.log('source', source);
// console.log('returned', returnedTarget);