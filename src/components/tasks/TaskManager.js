const remoteUrl = "http://localhost:8088"

export const getAllTasks = () => {
    return fetch(`${remoteUrl}/tasks`)
        .then(res => res.json())
}