const Book = require('./book.model')

const { setError } = require('../../helpers/error/handle.error')

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find()
    return res.json({
      status: 200,
      message: 'Recovered all Books',
      data: { books }
    })

  } catch (error) {
    return next(setError(500, 'Fail to recover books'))
  }
}

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)
    const newBookInDB = await newBook.save()

    return res.json({
      status: 201,
      message: 'Created Book',
      data: { newBookInDB }
    })

  } catch (error) {

  }
}

module.exports = { getBooks, postBook }