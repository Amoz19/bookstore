const router = require('express').Router()
const Book = require('../models/Book')

router.route('/')
    .get((req, res) => {
        Book.find()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    })

    .post((req, res) => {
        const books = new Book(req.body)
        books.save()
            .then(res.json(books))
            .catch(err => console.log(err))
})

module.exports = router

