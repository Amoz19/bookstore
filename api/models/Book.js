const mongoose = require('mongoose')

const ReviewScheme = [{
    Reviewer: String,
    Review : String
}]

const BookScheme = mongoose.Schema({
    title: String,
    author: String,
    publishedDDate: String,
    Rating: Number,
    bookDetail: String,
    genre: String,
    Pages : Number,
    reviews: ReviewScheme
})

module.exports = mongoose.model('Books',BookScheme)