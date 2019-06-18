const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const Todo = require('./models/todo')
const router = require('./router/todo-routes')
require('dotenv').config()

// body-parser config//Built-in middleware func in Express.
//Parses incoming requests with JSON payloads,based on body-parser.
app.use(express.json())
app.use('/', router)
app.use(express.static('public'));

// connecting to database
// const mongoURI = 'mongodb://localhost/tododb'

// const mongoPROD_URI ="mongodb+srv://seepG:atlas@1427@cluster0-yv13n.mongodb.net/test?retryWrites=true&w=majority"
const mongoPROD_URI = process.env.MONGO_PROD_URI
console.log(mongoPROD_URI);

// connecting to mongodb from your application
mongoose.connect(mongoPROD_URI, { useNewUrlParser: true }, (error) => {
	if(error) return console.log(`${error}`)
	console.log('connected to mongodb')
})

// connecting to the port

app.listen(PORT, ()=> {
	console.log(`Listening on port ${PORT}`)
})