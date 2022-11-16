// 1. Importamos la librería
const dotenv = require('dotenv')
// 1. Ejecutamos para poder leer las Variables de entorno
dotenv.config();
// 2. Importamos librería -> método para conectar a DB
const mongoose = require('mongoose')

//3. No hace falta -> por si falla
const mongoURI = process.env.MONGO_URI
// console.log(mongoURI);

// 4. Función asincrona -> porque tarda en conectar a DB
const connect = async () => {
  // 5. Try catch -> no romper ejecución
  try {
    // 6. Conectarnos a la Db -> mongoose connect - recibe URI || {config}
    const dbConnect = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    // No es necesario -> host + name
    const { name, host } = dbConnect.connection
    console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
  } catch (error) {
    // 7. Capturo el error + saco mensaje por terminal
    console.error(`No se ha podido conectar a la DB 💔`, error)
  }
}

// 8. Exporto mi función
module.exports = { connect }