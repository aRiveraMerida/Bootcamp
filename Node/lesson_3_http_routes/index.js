const http = require('http');
const fs = require('fs')

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/json")
  res.writeHead(200)
  const avengers = fs.readFileSync('./avengers.json', (err, avengers) => {
    if (err) {
      console.log('No encuentro el fichero solicitado ❌')
    } else {
      const parsedAvengers = JSON.parse(avengers);
      return parsedAvengers
    }
  })
  if (req.url === '/avengers') {
    res.end(avengers)
  }

  if (req.url === '/best') {
    res.end('best')
  }
}

const PORT = 8080;
const server = http.createServer(requestHandler)


server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT} 🚀`)
})