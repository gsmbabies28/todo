const express = require('express')
const taskController = require('../controllers/tasks.js')
const routes = express.Router();

routes.route("/tasks")
.get(taskController.getTasks)
.post(taskController.addTask);

routes.route("/tasks/:id")
.put( taskController.toggleReminder)
.delete(taskController.deleteTask);


module.exports = routes;