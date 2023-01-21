const request = require('supertest')
const app = require('../src/app')
const moment = require('moment')
const author = require('../src/models/author')
const { setUpDatabase } = require('./fixtures/db')
const Author = require('../src/models/author')
beforeEach(setUpDatabase)

test('should create an author', async () => {
  const response = await request(app)
    .post('/authors')
    .send({
      first_name: 'George R.',
      last_name: 'R. Martin',
      date_of_birth: '1948-11-20',
    })
    .expect(201)
  const author = await Author.findById(response.body._id)
  console.log(author)
  expect(author).not.toBeNull()
})

test('should not create author with a future date', async () => {
  const response = await request(app)
    .post('/authors')
    .send({
      first_name: 'John',
      last_name: 'Smith',
      date_of_birth: '2023-01-01',
    })
    .expect(400)
})
