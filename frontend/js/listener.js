import { 
    createTask,
    removeTask,
} from "./requests.js";

import { renderNewTask } from "./render.js";

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', async (event)=>{
    const task = document.getElementById('task').value
    const newTask = await createTask(task)
    renderNewTask(newTask.sort().reverse()[0])
})

const setEventListeners = ()=>{
    let btnEdit = [...document.getElementsByClassName('edit')]
    btnEdit.forEach((el)=>{
        el.addEventListener('click', async (event)=>{
            // Open a model
            $('#exampleModal').modal()
            // Change the modal values to the task ones
            console.log(event.target.getAttribute('id'))
            // Save changes button - event listener
        })
    })

    let btnDelete = [...document.getElementsByClassName('remove')]
    btnDelete.forEach((el)=>{
        el.addEventListener('click', async (event)=>{
            // Call the API to delete the task
            const id = event.target.getAttribute('id')
            await removeTask(id)
            // Remove the task from the DOM
            event.target.parentElement.parentElement.remove()
        })
    })

    // Set event listener on select to trade the status on database
}

export default setEventListeners
