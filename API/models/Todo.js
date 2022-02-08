const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: false
	},
	timeStamp: {
		type: String,
		default: Date.now()
	}
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
