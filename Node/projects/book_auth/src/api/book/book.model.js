const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    cover: { type: String },
    year: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('books', bookSchema)