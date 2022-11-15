const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const directorSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    gender: { type: String }
  },
  {
    timestamps: true
  }
)

const Director = mongoose.model('Director', directorSchema)

module.exports = Director;