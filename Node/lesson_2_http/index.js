const http = require('http');
// console.log(http);
const fs = require('fs')

const requestHandler = (req, res) => {
  // console.log(req.body);
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
  res.end(avengers)
}

const PORT = 8080;
const server = http.createServer(requestHandler)
// console.log(server)

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT} 🚀`)
})