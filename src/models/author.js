const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
  date_of_birth: {
    type: Date,
    required: true,
    validate(value) {
      if (value > new Date()) {
        throw new Error('Cannot be a future date')
      }
    },
  },
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
