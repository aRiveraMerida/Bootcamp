const myUser = { name: 'John', age: 30 };

console.log(myUser);


console.log(JSON.stringify(myUser));


const json = '{"name":"John","age":30,"city":"New York"}';

const obj = JSON.parse(json);

console.log(obj);