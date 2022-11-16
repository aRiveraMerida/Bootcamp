const mongoose = require('mongoose')

const Song = require('../models/song.model')

const songsList = [
  {
    title: "División del norte",
    author: "Brujería",
    year: 2000,
    genre: "Hardcore"
  },
  {
    title: "Inmigrant Song",
    author: "Led Zeppelin",
    year: 1970,
    genre: "Rock"
  }
]

const songsToDatabase = songsList.map(songElement => new Song(songElement));

// const addElementToCollection = async (Model, list) => {
//   try {
//     const connection = await mongoose.connect('mongodb+srv://root:root@cluster0.e6hwvfd.mongodb.net/music?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, });
//     const elementCollection = await Model.find();
//     if (elementCollection.length) await Element.collection.drop();
//     await Model.insertMany(list);
//   } catch (error) {
//     console.error('No se ha podido cargar')
//   }

// }

// addElementToCollection(Song, songsList);

mongoose.connect('mongodb+srv://root:root@cluster0.e6hwvfd.mongodb.net/music?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(async () => {
    const songsRecovered = await Song.find();
    if (songsRecovered.length) {
      await Song.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Song.insertMany(songsToDatabase);
    console.log('DatabaseCreated')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());