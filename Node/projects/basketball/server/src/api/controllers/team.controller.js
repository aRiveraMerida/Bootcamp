const Team = require('../models/team.model')

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find().populate('players')
    res.status(200).json(teams)
  } catch (error) {
    return next(error)
  }
}

const getTeam = async (req, res, next) => {
  try {
    const { id } = req.params
    const team = await Team.findById(id).populate('players')
    res.status(200).json(team)
  } catch (error) {
    return next(error)
  }
}

const postTeam = async (req, res, next) => {
  try {
    const team = new Team(req.body)
    const teamInDB = await team.save()
    return res.status(201).json(teamInDB)
  } catch (error) {
    return next(error)
  }
}

const updateTeam = async (req, res, next) => {
  try {
    const { id } = req.params
    const team = new Team(req.body)
    team._id = id
    const updateTeamDB = await Team.findByIdAndUpdate(id, team)
    return res.status(200).json(updateTeamDB)
  } catch (error) {
    return next(error)
  }
}

const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params
    const team = await Team.findByIdAndDelete(id)
    return res.status(200).json(team)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getTeam,
  getTeams,
  postTeam,
  updateTeam,
  deleteTeam
}