const mongoose = require('mongoose')

const Author = require('../models/author.model')

const authorList = [
  {
    name: "Brujería",
    songs: ["División del norte", "Don Quijote marihuana"]
  },
  {
    name: "Led Zeppelin",
    songs: ["Inmigrant Song", "Moby Dick"]
  }
]

const authorsToDatabase = authorList.map(authorElement => new Author(authorElement));

mongoose.connect('mongodb+srv://root:root@cluster0.e6hwvfd.mongodb.net/music?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(async () => {
    const authorsRecovered = await Author.find();
    if (authorsRecovered.length) {
      await Author.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Author.insertMany(authorsToDatabase);
    console.log('DatabaseCreated')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());