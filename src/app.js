const express = require('express')
require('./db/mongoose')
const bookRouter = require('./routers/books')
const authorRouter = require('./routers/author')

const app = express()

app.use(express.json())
app.use(bookRouter)
app.use(authorRouter)

module.exports = app
