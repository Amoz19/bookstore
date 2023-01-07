const mongoose = require('mongoose')

const BookScheme = mongoose.Schema({
    title: String,
    author: String,
    publishedDDate: String,
    Rating: Number,
    Reviwer: String,
    Review : String
})

module.exports = mongoose.model('Books',BookScheme)