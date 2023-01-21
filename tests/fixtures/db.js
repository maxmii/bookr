const mongoose = require('mongoose')
const Book = require('../../src/models/books')
const Author = require('../../src/models/author')

const bookOne = {
  book_name: 'Moby Dick',
  author: 'Herman Melville',
  category: 'Adventure',
}

const setUpDatabase = async () => {
  await Book.deleteMany()
  await new Book(bookOne).save()
  await Author.deleteMany()
}

module.exports = {
  bookOne,
  setUpDatabase,
}
