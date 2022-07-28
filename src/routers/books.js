const express = require('express')
const Book = require('../models/books')


const router = new express.Router()

router.post('/books', async (req, res) => {
    const book = new Book({
        ...req.body
    })

    try {
        await book.save()
        res.status(201).send(book)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})


module.exports = router