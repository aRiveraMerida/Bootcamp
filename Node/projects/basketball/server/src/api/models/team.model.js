const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'player', required: true }]
  },
  {
    timestamps: true
  }
)

const Team = mongoose.model('team', teamSchema)
module.exports = Team