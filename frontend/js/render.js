import {
    fetchAllTasks,
} from "./requests.js"
import setEventListeners from "./listener.js"

let i = 0

const renderAllTasks = async ()=>{
    const tasks = await fetchAllTasks()
    tasks.forEach((el)=>{
        renderNewTask(el)
    })
}

const renderNewTask = async (el)=>{

    const task = document.createElement("tr")
    task.setAttribute("class", "task")
    const td0 = document.createElement("td")
    td0.innerHTML = el.title
    const td1 = document.createElement("td")
    td1.innerHTML = el.date
    const td2 = document.createElement("td")
    const status = document.createElement("select")
    status.setAttribute("class", "status")
    td2.appendChild(status)
    status.value = el.description
    const option1 = document.createElement("option")
    option1.value = "Active"
    option1.innerHTML = "Active"
    status.appendChild(option1)
    const option2 = document.createElement("option")
    option2.value = "Completed"
    option2.innerHTML = "Completed"
    status.appendChild(option2)
    status.value = el.description
    status.setAttribute("id", el.id)
    const td3 = document.createElement("td")
    td3.innerHTML += `<ion-icon name="create-outline" class="edit" id="${el.id}"></ion-icon>`
    td3.innerHTML += `<ion-icon name="trash-outline" class="remove" id="${el.id}"></ion-icon>` 
    task.appendChild(td0)
    task.appendChild(td1)
    task.appendChild(td2)
    task.appendChild(td3)
    document.getElementById('tbody').appendChild(task)

    setEventListeners(i)
    i++
}

renderAllTasks()


export {
    renderNewTask,
}

