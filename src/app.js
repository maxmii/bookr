const express = require('express')
const bookRouter = require('./routers/books')


const app = express()


app.use(express.json())
app.use(bookRouter)


module.exports = app