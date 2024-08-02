const express = require('express')
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleWare')

const router = express.Router()

router.get('/tasks', tasksController.getAll)

router.get('/tasks/:taskId', tasksController.getTask)

router.post('/tasks', tasksMiddleware.validateTitle, tasksController.createTask)

router.delete('/tasks/:taskId', tasksController.deleteTask)

router.put('/tasks/:taskId', tasksMiddleware.validateTitle, tasksMiddleware.validateDescription, tasksController.updateTask)

module.exports = router