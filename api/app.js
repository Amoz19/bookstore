const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const port = 4000;
const cors = require('cors')

//middleware
app.use(cors())

const booksRoute = require('./routes/bookRoute')

require('dotenv/config')
//json middleare
app.use(express.json())

// route middleware
app.use('/api/v1/books', booksRoute)




//connect to database
const connectionString = process.env.DB_CONNECTION
mongoose.set('strictQuery', false)
mongoose.connect(connectionString)
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err)) 


app.listen(port,()=> console.log(`server is runing on port ${port}`))