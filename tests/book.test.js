const request = require('supertest')
const app = require('../src/app')
const moment = require('moment')
const Book = require('../src/models/books')
const { setUpDatabase } = require('./fixtures/db')
beforeEach(setUpDatabase)

test('should create a book', async () => {
  const response = await request(app)
    .post('/books')
    .send({
      book_name: 'My Book',
      author: 'Me',
      category: 'Autobiography',
      publication_date: '1996-09-10',
    })
    .expect(201)
  const book = await Book.findById(response.body._id)
  console.log(book)
  expect(book).not.toBeNull()
})
