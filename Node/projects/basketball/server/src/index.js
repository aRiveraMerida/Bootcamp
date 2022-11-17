const express = require('express')
const cors = require('cors')

const connect = require('./utils/database/db')

const PlayerRoutes = require('./api/routes/player.routes')
const TeamRoutes = require('./api/routes/team.routes')

connect()

const server = express()

server.use(express.json())

server.use(express.urlencoded({
  extended: false
}));

server.use(cors())

server.use('/api/player', PlayerRoutes)
server.use('/api/team', TeamRoutes)

server.use('/public', express.static('public'))

server.use('/api', (req, res, next) => res.send('Open'))

server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Something went wrong'))
  })
})

server.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

server.listen(process.env.PORT, () => console.log('Listen'))