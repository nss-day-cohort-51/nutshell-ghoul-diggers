// Author: Colby Ryan
// Purpose: To fetch tasks from the API.


const remoteUrl = "http://localhost:8088"

export const getTaskById = (taskId) => {
    return fetch(`${remoteUrl}/tasks/${taskId}`)
        .then(res => res.json())
}

export const getAllTasks = () => {
    return fetch(`${remoteUrl}/tasks?_sort=completeDate&_order=asc`)
        .then(res => res.json())
}


export const addTask = (newTask) => {
    return fetch(`${remoteUrl}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(res => res.json())
}

export const deleteTask = (id) => {
    return fetch(`${remoteUrl}/tasks/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const completeTask = (id) => {
    return fetch(`${remoteUrl}/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            isCompleted: true
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
}

export const update = (editedTask) => {
    return fetch(`${remoteUrl}/tasks/${editedTask.id} `, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTask)
    }).then(data => data.json());
}