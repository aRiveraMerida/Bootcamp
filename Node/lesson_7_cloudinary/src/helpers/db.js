const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoDB = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected to DB: ${name} in host: ${host}`);
  } catch (error) {
    console.log(`Error connecting to DB -> ${error}`);
  }
};

module.exports = { connect };
