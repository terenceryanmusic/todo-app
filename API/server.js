const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
	.connect('mongodb://127.0.0.1:27017/todo', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(console.log('connected to DB'))
	.catch(console.error());

const Todo = require('./models/Todo');
const { restart } = require('nodemon');

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	});

	todo.save();

	res.json(todo);
});

app.listen(3001, () => console.log('server started on port 3001'));
