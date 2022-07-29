const mongoose = require('mongoose')
const Book = require('../../src/models/books')


const bookOne = {
    book_name: 'Moby Dick',
    author: 'Herman Melville',
    category: 'Adventure',
}


const setUpDatabase = async () => {
    await Book.deleteMany()
    await new Book(bookOne).save()
}

module.exports = {
    bookOne,
    setUpDatabase
}