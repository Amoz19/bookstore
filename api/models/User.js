const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userShceme = mongoose.Schema({
    email: {
        type: String,
        require: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate : [isEmail, "Please enter a vaild email"]
    },
    password: {
        type: String,
        require: [true, "Please enter a password"],
        minlength:[6, "Minimun password length is 6 characters"]
    },
})

userShceme.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userShceme)
module.exports = User;