const fs = require('fs')

fs.readFile('avengers.json', (err, avengers) => {
  if (err) {
    console.log('Problemas con los Avengers')
  } else {
    const parsedAvenger = JSON.parse(avengers)
    const filteredAvengers = parsedAvenger.filter(avenger => avenger.power >= 30);

    fs.writeFile('avengerFiltered.json', JSON.stringify(filteredAvengers), () => {
      console.log('Avengers Filtered Done! 🎅🏿')
    })
  }
})