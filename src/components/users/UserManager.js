//Author: Brady Williams
//Purpose: Fetch calls for Users

const url = "http://localhost:8088"

export const getallUsers = () => {
    return fetch(`${url}/users`)
        .then(res => res.json())
}

export const getUserById = (input) => {
    return fetch(`${url}/users/${input}`)
        .then(res => res.json())
}

export const deleteFriend = (id) => {
    return fetch(`${url}/friends/${id}`, {
        method: "DELETE"
    })
        .then(result => result.json())
}