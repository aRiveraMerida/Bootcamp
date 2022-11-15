const dotenv = require('dotenv')

dotenv.config();

const mongoose = require('mongoose')

const Director = require('../director/director')
const directors = require('../director/director.seed')

const mongoURI = process.env.MONGO_URI
// console.log(mongoURI);

const connect = async () => {
  try {
    const dbConnect = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

    const allDirectors = await Director.find();
    console.log(allDirectors)
    if (allDirectors.length) await Director.collection.drop()
    console.log(allDirectors)
    const directorsSeed = await directors.map(director => new Director(director));
    await Director.insertMany(directorsSeed);

    const { name, host } = dbConnect.connection
    console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB 💔`, error)
  }
}

module.exports = { connect }