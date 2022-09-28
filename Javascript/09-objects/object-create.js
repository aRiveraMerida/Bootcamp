const person = {
  isHuman: true,
  name: 'Alberto',
  printIntroduction: function () {
    console.log(`Hola soy ${this.name} y ${this.isHuman ? 'soy humano' : 'no soy humano'}`)
  }
}

console.log(person.name);

const javi = Object.create(person);
javi.printIntroduction();

javi.name = 'Javier';
javi.isHuman = false;
console.log(person.name);
javi.printIntroduction();
