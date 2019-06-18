const express = require('express')
const router = express.Router()

// require schema
const Todo = require('../models/todo')
const { index, show, create, update, deleteTodo } = require('../controller/todo-controller')

// getting all todos read action
router.get('/todo', index)
console.log(index);

// getting one todo
router.get('/todo/:id', show)
console.log(show);

// router.get('/todo', (request,response) => {
// 	console.log('Hi hello')
// 	return response.send("Hello World!");
// });

//creating todos post action
router.post('/todo', create)
console.log(create);

//update one todo put action
router.put('/todo/:id', update)
console.log(update)

// delete one todo
router.delete('/todo/:id', deleteTodo)
console.log(deleteTodo)

module.exports = router