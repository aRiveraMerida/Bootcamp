const TeamRoutes = require('express').Router()


const {
  getTeam,
  getTeams,
  postTeam,
  updateTeam,
  deleteTeam
} = require('../controllers/team.controller')

TeamRoutes.get('/', getTeams)
TeamRoutes.get('/:id', getTeam)
TeamRoutes.post('/', postTeam)
TeamRoutes.patch('/:id', updateTeam)
TeamRoutes.delete('/:id', deleteTeam)

module.exports = TeamRoutes