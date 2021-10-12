//Author: Brady Williams
//Purpose: Fetch calls for Friends

const url = "http://localhost:8088"

export const getFriendsById = (input) => {
    return fetch(`${url}/friends/?currentUserId=${input}&_expand=user`)
        .then(res => res.json())
}

export const deleteFriend = (id) => {
    return fetch(`${url}/friends/${id}`, {
        method: "DELETE"
    })
        .then(result => result.json())
}

export const addFriends = (friend) => {
    return fetch(`${url}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    }).then(response => response.json())
  }

  export const getAllFriends = () => {
    return fetch(`${url}/friends`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"     
        },
    }).then(res => res.json())
  }