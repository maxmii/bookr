const express = require('express')
const Author = require('../models/author')

const router = new express.Router()

router.post('/authors', async (req, res) => {
  const author = new Author({
    ...req.body,
  })
  try {
    console.log(author)
    await author.save()
    res.status(201).send(author)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
})

module.exports = router
