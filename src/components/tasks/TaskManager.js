const remoteUrl = "http://localhost:8088"

export const getAllTasks = () => {
    return fetch(`${remoteUrl}/tasks`)
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