import { 
    createTask,
    removeTask,
    updateTask
} from "./requests.js";

import { renderNewTask } from "./render.js";

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', async (event)=>{
    let task = document.getElementById('task')
    const newTask = await createTask(task.value)
    renderNewTask(newTask.sort().reverse()[0])
    task.value = ""
})

const setEventListeners = (i)=>{
    let btnEdit = document.getElementsByClassName('edit')[i]
    btnEdit.addEventListener('click', async (event)=>{
        // Open a modal
        $('#exampleModal').modal()
        // Change the modal values to the task ones
        const btnSave = document.getElementById('save')
        btnSave.addEventListener('click', async ()=>{
            // Call the API to update the task
            const taskName = document.getElementById('taskName').value
            const id = event.target.getAttribute('id')
            const status = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.firstChild.value
            await updateTask(id, status, taskName)
            // Close the modal
            $('#exampleModal').modal('hide')
            // Refresh the task on DOM
            event.target.parentElement.parentElement.firstChild.innerHTML = taskName
        })
        // Save changes button - event listener
    })

    let btnDelete = [...document.getElementsByClassName('remove')]
    btnDelete.forEach((el)=>{
        el.addEventListener('click', async (event)=>{
            // Call the API to delete the task
            const id = event.target.getAttribute('id')
            await removeTask(id)
            // Remove the task from DOM
            event.target.parentElement.parentElement.remove()
        })
    })

    let status = document.getElementsByClassName('status')[i]
    status.addEventListener('change', async (event)=>{
        // fetch update
        updateTask(event.target.getAttribute('id'), event.target.value, event.target.parentElement.parentElement.firstChild.innerHTML)
    })

    // Set event listener on select to trade the status on database
}

export default setEventListeners
