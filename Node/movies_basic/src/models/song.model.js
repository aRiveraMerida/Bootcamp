// 1. Traemos la librería de mongoose: 
// nos permite interactuar con una Db
// nos permite definir Modelos de nuestra Db -> el tipo de dato a guardar
const mongoose = require('mongoose')
// 2. Contrato de comportamiento de mi modelo
const Schema = mongoose.Schema

// 3. Generamos nuestro Schema con los campos necesarios
const SongSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    genre: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
// 4. Definimos nuestro modelo ->
// Colección es un array de objectos
// First param -> Nombre de la colección
// Second param -> El tipo dentro del array[Colección] 
const Song = mongoose.model('song', SongSchema);
// 5. Exports
module.exports = Song;