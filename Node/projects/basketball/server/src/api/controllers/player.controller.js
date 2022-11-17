const Player = require('../models/player.model')

const getPlayers = async (req, res, next) => {
  try {
    const players = await Player.find()
    res.status(200).json(players)
  } catch (error) {
    return next(error)
  }
}

const getPlayer = async (req, res, next) => {
  try {
    const { id } = req.params
    const player = await Player.findById(id)
    return res.status(200).json(player)
  } catch (error) {
    return next(error)
  }
}

const postPlayer = async (req, res, next) => {
  try {
    console.log(req.body)
    const player = new Player()
    player.name = req.body.name
    player.age = req.body.age
    const playerInDB = await player.save()
    return res.status(201).json(playerInDB)
  } catch (error) {
    return next(error)
  }
}

const updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params
    const player = new Player(req.body)
    player._id = id
    const updatePlayerDB = await Player.findByIdAndUpdate(id, player)
    return res.status(200).json(updatePlayerDB)
  } catch (error) {
    return next(error)
  }
}

const deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params
    const player = await Player.findByIdAndDelete(id)
    return res.status(200).json(player)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getPlayer,
  getPlayers,
  postPlayer,
  updatePlayer,
  deletePlayer
}