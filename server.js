// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Example data - tasks array
let tasks = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build a Node.js API' },
];

app.use(bodyParser.json());

// GET endpoint to fetch all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST endpoint to add a new task
app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  const newTask = {
    id: tasks.length + 1,
    text,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE endpoint to delete a task by id
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.status(200).json({ message: 'Task deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
