const fetchAllTasks = async ()=>{
    const response = await fetch('http://localhost:3000/tasks')
    const tasks = await response.json()
    return tasks
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
    const tasks = await response.json()
}

const removeTask = async (id)=>{

}

export {
    fetchAllTasks,
    createTask,
    removeTask
} 
