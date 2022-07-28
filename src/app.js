const express = require('express')
require('./db/mongoose')
const bookRouter = require('./routers/books')


const app = express()


app.use(express.json())
app.use(bookRouter)


module.exports = app