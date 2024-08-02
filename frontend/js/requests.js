const fetchAllTasks = async ()=>{
    const response = await fetch('http://localhost:3000/tasks')
    const tasks = await response.json()
    return tasks
}

const fetchTask = async (id)=>{
    const response = await fetch('http://localhost:3000/tasks/'+id)
    const task = await response.json()
    return task
}

const createTask = async (task)=>{
    const data  = {
        "title": task
    }
    const response = await fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const [taskAdded, buffer] = await response.json()
    return taskAdded
}

const removeTask = async (id)=>{
    fetch('http://localhost:3000/tasks/'+id,{
        method: "DELETE"
    })
}

export {
    fetchAllTasks,
    createTask,
    removeTask,
    fetchTask
} 
