const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
	id: {type:Number,unique:true,required:true},
	task:{type:String,required:false},
	description:{type:String,required:false},
	due_date: {type:Date, required:false},
}
)

module.exports = mongoose.model('todo', todoSchema)