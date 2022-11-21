const BookRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')

const { getBooks, postBook } = require('./book.controller')


BookRoutes.get('/', [isAuth], getBooks)
BookRoutes.post('/', [isAuth], postBook)

module.exports = BookRoutes