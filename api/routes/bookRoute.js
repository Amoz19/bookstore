const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const User = require('../models/User')
const jwt  = require('jsonwebtoken')
const handleErrors = (errs) => {
    console.log(errs.code)
    let errors = { email: "", password: "" }
    if (errs.code === 11000) {
        errors.email = "That email is already registered"
    }
    if (errs.message.includes('user validation failed')) {
        Object.values(errs.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors

}

// router.get('/',(req, res) => {
//         Book.find()
//             .then(data => res.json(data))
//             .catch(err => console.log(err))
//     })
    

// router.post('/',(req, res) => {
//         const books = new Book(req.body)
//         books.save()
//             .then(res.json(books))
//             .catch(err => console.log(err))
//     })

// router.get('/:id',(req, res) => {
//     // try{
//     //     const book  = await Book.findById(req.params.id)
//     //     res.json(book)
//     //    }catch(err){
//     //         res.json({message:err})
//     //    }

//     Book.findById(req.params.id)
//     .then(data => res.json(data))
//     .catch(err => console.log(err))

// })

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'amozDev', {
        expiresIn: maxAge
    })
}

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000})
        res.status(201).json(user)
        console.log('success')
    } catch (err){
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
})

module.exports = router