const PlayerRoutes = require('express').Router()


const {
  getPlayer,
  getPlayers,
  postPlayer,
  updatePlayer,
  deletePlayer
} = require('../controllers/player.controller')

PlayerRoutes.get('/', getPlayers)
PlayerRoutes.get('/:id', getPlayer)
PlayerRoutes.post('/', postPlayer)
PlayerRoutes.patch('/:id', updatePlayer)
PlayerRoutes.delete('/:id', deletePlayer)

module.exports = PlayerRoutes