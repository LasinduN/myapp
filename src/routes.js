const express = require('express');
const router = express.Router();

// In-memory tasks (reset if app restarts)
let tasks = [];

// Get all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add new task
router.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  res.json(newTask);
});

// Delete task
router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
