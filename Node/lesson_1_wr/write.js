const fs = require('fs');

const avengers = [
  {
    name: 'Spiderman',
    realName: 'Peter Parker',
    power: 10
  },
  {
    name: 'Ironman',
    realName: 'Tony Stark',
    power: 20
  },
  {
    name: 'Hulk',
    realName: 'Bruce Banner',
    power: 30
  },
  {
    name: 'Thor',
    realName: 'Thor Odinson',
    power: 40
  },
  {
    name: 'Captain America',
    realName: 'Steve Rogers',
    power: 10
  },
  {
    name: 'Black Widow',
    realName: 'Natasha Romanoff',
    power: 70
  },
  {
    name: 'Hawkeye',
    realName: 'Clint Barton',
    power: 90
  },
  {
    name: 'Vision',
    realName: 'Vision',
    power: 10
  },
  {
    name: 'Scarlet Witch',
    realName: 'Wanda Maximoff',
    power: 30
  },
  {
    name: 'Falcon',
    realName: 'Sam Wilson',
    power: 50
  }
]

const avengersToJson = JSON.stringify(avengers);

fs.writeFile('avengers.json', avengersToJson, () => {
  console.log('Ya tenemos Avengers 🦸🏻‍♂️')
});


