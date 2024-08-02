const tasksModel = require('../models/tasksModel')

const getAll = async (request, response) => {
    const tasks = await tasksModel.getAll()
    return response.status(200).json(tasks)
}

const getTask = async (request, response) =>{
    const taskId = request.params.taskId;
    const task = await tasksModel.getTask(taskId)
    return response.status(200).json(task)
}

const createTask = async (request, response) => {
    const novaTask = await tasksModel.createTask(request.body)
    return response.status(200).json(novaTask)
}

const deleteTask = async (request, response) =>{
    const taskId = request.params.taskId
    const deleteTask = await tasksModel.deleteTask(taskId)
    return response.status(200).json(deleteTask)
}

const updateTask = async (request, response) => {
    const taskId = request.params.taskId
    const updatedTask = await tasksModel.updateTask(taskId, request.body)
    return response.status(200).json(updatedTask)
}

module.exports = {
    getAll,
    getTask,
    createTask,
    deleteTask,
    updateTask
}
