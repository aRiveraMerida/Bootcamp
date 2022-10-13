//Programación orientada a objetos
const character = {
  name: "Peter",
  surname: "Parker",
};

console.log(character.name);
console.log(character.hasOwnProperty("age"));

//Object.create -> utiliza el argumento para generar el prototipo
function Superheroe(name, realName) {
  const superheroe = Object.create(ObjectConstructor);
  superheroe.name = name;
  superheroe.realName = realName;
  return superheroe;
}

let ObjectConstructor = {
  quote: function () {
    return "I'm a superhero";
  },
};

const spiderman = Superheroe("Spider-Man", "Peter Parker");
console.log(spiderman);

//new -> hace lo mismo que el método create pero hace algunas cosas automáticamente

function Villain(name, realName) {
  this.name = name;
  this.realName = realName;
}

const joker = new Villain("Joker", "John Doe");
console.log(joker);

//Clases -> Class

class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  attack() {
    return `${this.name} attacking`;
  }

  defense() {
    return `${this.name} defending`;
  }
}

const Daredevil = new Character("Daredevil", 38);
console.log(Daredevil);
console.log(Daredevil.attack());
const Hulk = new Character("Hulk", 37);
console.log(Hulk.defense());

//Herencia

class Vehicle {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  move() {
    return `${this.name} is moving`;
  }

  stop() {
    return `${this.name} is stopping`;
  }
}

class Car extends Vehicle {
  constructor(name, color, doors) {
    super(name, color);
    this.wheels = 4;
    this.doors = doors;
  }

  handBrake() {
    return `${this.name} is parked`;
  }
}

class Plane extends Vehicle {
  constructor(name, color) {
    super(name, color);
    this.wings = 2;
  }

  fly() {
    return `${this.name} is flying`;
  }
}

const seatIbiza = new Car("Seat Ibiza", "red", 5);
console.log(seatIbiza);
console.log(seatIbiza.handBrake());

//Clase estática -> static
class ClaseConMetodoEstatico {
  static propiedadEstatica = "Existo";
  static metodoEstatico() {
    return "Hola";
  }
  static controladorError() {
    try {
        
    } catch (error) {}
  }
}

console.log(ClaseConMetodoEstatico.propiedadEstatica);
console.log(ClaseConMetodoEstatico);
