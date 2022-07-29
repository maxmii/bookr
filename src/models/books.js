const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },

  category: {
    type: String,
    trim: true,
  },

  publication_date: {
    type: Date,
    validate(value) {
      if (value > new Date()) {
        throw new Error('Cannot be a future date')
      }
    },
  },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
