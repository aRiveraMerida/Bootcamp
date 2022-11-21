const dotenv = require("dotenv").config()

const mongoose = require("mongoose")

const { setError } = require('../error/handle.error')

const mongoDB = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conectado a la base de datos : ${name} en el host: ${host}`);
  } catch (error) {
    console.error(setError(550, 'Not connect to DB'));
  }
};

module.exports = { connect }