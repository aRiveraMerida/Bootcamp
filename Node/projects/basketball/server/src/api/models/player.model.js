const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

const Player = mongoose.model('player', playerSchema)

module.exports = Player