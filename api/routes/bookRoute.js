const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/',(req, res) => {
        Book.find()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    })
    

router.post('/',(req, res) => {
        const books = new Book(req.body)
        books.save()
            .then(res.json(books))
            .catch(err => console.log(err))
    })

router.get('/:id',(req, res) => {
    // try{
    //     const book  = await Book.findById(req.params.id)
    //     res.json(book)
    //    }catch(err){
    //         res.json({message:err})
    //    }

    Book.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))

})

module.exports = router