const Todo = require('../models/todo')
// creating end point for showing index of all to-dos
const index = (request, response)=> {
	Todo.find({})
	.then ( allTodo => {
		console.log(allTodo)
		return response.json(allTodo)
	})
	.catch( error => response.json(error))
}
// getting one todo
const show = (request, response) => {
  const { id } = request.params
  Todo.findOne({id: id})
  .then( todo => {
		console.log(todo)
    return response.json(todo)
  })
  .catch( error => response.json(error))
}

//creating todos post action
const create = (request,response) => {
	const todoArr = request.body
	console.log(todoArr);
	Todo.insertMany(todoArr)
	.then( todos => response.json(todos))
	.catch(error => response.json(error))
}
// Update one todo: update task
const update = (request, response) => {
	const { id } = request.params
	const { newTask } = request.body
	console.log(request.body)
  Todo.findOne({id})
  .then( todo => {
		todo.task = newTask
		console.log(newTask)
    todo.save()
    .then( doc => response.send(`${doc.task} has been updated`))
    .catch( error => console.log(error) )
  })
  .catch( error => response.json(error))
  }

// delete one todo
const deleteTodo = (request, response) => {
	const { id } = request.params
  Todo.findOneAndDelete({id})
  .then( doc => {
    if(!doc) return response.send(`No todo found at id ${id}`)
      response.send(`${doc.id} deleted from database`)
    })
  .catch( error =>  response.json(error))
}

module.exports = {
  index,
	show,
	create,
	update,
	deleteTodo
}
