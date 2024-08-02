const connection = require('./connection')

const getAll = async () => {
    const [tasks, buffer] = await connection.execute("SELECT * FROM Tasks")
    return tasks
}

const getTask = async (id)=>{
    const [task, buffer] = await connection.execute("SELECT * FROM Tasks WHERE id = ?", [id])
    return task
}

const createTask = async (task) =>{
    const title = task.title
    const description = "Active"
    const timestamp = new Date().getTime()
    const date = new Date(timestamp)
    await connection.execute("INSERT INTO Tasks (title, description, date) VALUES (?,?,?)", [title, description, date])
    const novaTask = await connection.execute("SELECT * FROM Tasks WHERE title = ?", [title])
    return novaTask
}

const deleteTask = async (id)=>{
    const deletedTask = await connection.execute("DELETE FROM Tasks WHERE id = ?", [id])
    return deletedTask
}

const updateTask = async (id, task) =>{
    const title = task.title
    const description = task.description
    const timestamp = new Date().getTime()
    const date = new Date(timestamp)
    const updatedTask = await connection.execute("UPDATE Tasks SET title =?, description =?, date =? WHERE id =?", [title, description, date, id])
    return updatedTask
}

module.exports = {
    getAll,
    getTask,
    createTask,
    deleteTask,
    updateTask
 
}