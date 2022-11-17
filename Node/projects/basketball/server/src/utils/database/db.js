const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

const connect = async () => {
  try {

    const db = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    const { host, name } = db.connection
    console.log(`Conectado a la DB: ${name} || en el host: ${host} 🚀`)

  } catch (error) {
    console.error(`No se ha podido conectar a la base de datos ䷪`, error)
  }
}

module.exports = connect

