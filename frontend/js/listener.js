import { createTask } from "./requests.js";

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', async (event)=>{
    const task = document.getElementById('task').value
    await createTask(task)
})

const setEventListeners = ()=>{
    let btnEdit = [...document.getElementsByClassName('edit')]
    btnEdit.forEach((el)=>{
        el.addEventListener('click', async (event)=>{
            console.log(event.target.getAttribute('id'))
        })
    })

    let btnDelete = [...document.getElementsByClassName('remove')]
    btnDelete.forEach((el)=>{
        el.addEventListener('click', async (event)=>{
            console.log(event.target.getAttribute('id'))
        })
    })
}

export default setEventListeners
