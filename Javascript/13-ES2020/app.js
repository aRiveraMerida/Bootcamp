//ES2020

//Literal strings
const firstname = "Peter";
const surname = "Parker";

const fullName = `${firstname} ${surname}`;

const html = `
<h2>
    ${2 + 2}
</h2>
`;

//Object destructuring
const alumn = {
  name: "Pedro",
  age: 29,
  job: "Developer",
  hobbies: {
    sport: "active",
    music: "not active",
  },
};

/* const alumnName = alumn.name;
console.log(alumnName) */

const { name, age } = alumn;
const { sport } = alumn.hobbies;

console.log(name);
console.log(age);
console.log(sport);

//Spread Operator
const heroes = ["Aragorn", "Boromir", "Frodo"];
const villains = ["Saruman", "Sauron", "Ella"];

const characters = [...heroes, ...villains, "Morgoth"];

console.log(characters);

//const todos = [...todos, todo]

//MAP

const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

//Con forof
const officersIDs = [];

for (const officer of officers) {
  officersIDs.push(officer.id);
}

console.log(officersIDs);

//Con map
const officersIdsWithMap = officers.map((officer) => officer.id);
console.log(officersIdsWithMap);

const customOfficers = officers.map((officer) => ({
  nombre: officer.name,
  identificacion: 66,
}));

console.log(customOfficers);

//Filter -> se queda con todas las coincidencias de la condición
const pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", faction: "Empire" },
  { id: 40, name: "Iden Versio", faction: "Empire" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels" },
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels);
const over8 = pilots.filter((pilot) => pilot.id > 8);
console.log(over8);

/* const rebelsArray = [];
for (const pilot of pilots) {
    if(pilot.faction === "Rebels"){
        rebelsArray.push(pilot)
    }
}
 */

//FIND -> Se queda con la primera coincidencia de la condición
const numArray = [2, 45, 76, 80, 45];
const find45 = numArray.find((number) => number === 45);
console.log(find45);

//REDUCE ->
var rebelPilots = [
  { id: 10, name: "Poe Dameron", years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: "Tallissan Lintra", years: 16 },
  { id: 99, name: "Ello Asty", years: 22 },
];

const totalYears = rebelPilots.reduce(
  (accumulator, pilot) => accumulator + pilot.years,
  0
);

console.log(totalYears);

//COMBO
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const forcePersonnel = personnel.filter(person => person.isForceUser === true)
console.log(forcePersonnel)

const totalScore = forcePersonnel.map(person => person.pilotingScore + person.shootingScore)

console.log(totalScore)

const total = totalScore.reduce((accumulator, score) => accumulator + score, 0)
console.log(total)

/* const totalJediScore = personnel
	.filter(function (person) { 
		return person.isForceUser;
	})
	.map(function (jedi) { 
		return jedi.pilotingScore + jedi.shootingScore;
	})
	.reduce(function (acc, score) { 
		return acc + score;
	}, 0); */