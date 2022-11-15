const express = require('express')

const PORT = 8080;

const server = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server')
})

router.get('/music', (req, res) => {
  const music = ['Eastern sun', 'Problemas', 'What i belive'];
  res.send(music)
})

router.get('/movies', (req, res) => {
  const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  res.send(movies)
})

router.get('/movies/:movie', (req, res) => {
  const name = req.params.movie;
  const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  const movieFound = movies.indexOf(name);
  if (movieFound === -1) res.send('Not Found')
  res.send(movies[movieFound]);
})

router.get('/greeting', (req, res) => {
  const name = req.query.name
  const surname = req.query.surname
  res.send(`Hola ${name} ${surname} a NodeJS`)
})


server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`)
})