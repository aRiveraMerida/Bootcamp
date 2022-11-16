const express = require('express')
const cors = require('cors')

const { connect } = require('./database/connection')

const Song = require('./models/song.model')
const Author = require('./models/author.model')

connect()

const server = express()

server.use(cors())

const router = express.Router()

router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find()
    return res.status(200).json(songs);
  } catch (error) {
    return res.status(500).json(error);
  }
})

router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find()
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json(error);
  }
})

server.use('/apimusic/', router)

server.listen(process.env.PORT, () => {
  console.log('hola')
})

