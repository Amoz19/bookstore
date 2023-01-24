const mongoose = require('mongoose')
const {isEmail} = require('validator')

const ReviewScheme = [{
    reviewer: String,
    review : String
}]

const BookScheme = mongoose.Schema({
    title: String,
    author: String,
    publishedDDate: String,
    rating: Number,
    bookDetail: String,
    genre: String,
    pages : Number,
    reviews: ReviewScheme
})

module.exports = mongoose.model('Books',BookScheme)