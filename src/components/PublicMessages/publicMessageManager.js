//Author: Gerson Diketama
//Purpose: This is where I have all my data managers

const api = "http://localhost:8088";

//GET BY ID
export const getMessageById = (messageInput) => {
  return fetch(`${api}/messages/${messageInput}`).then((response) =>
    response.json()
  );
};

//GET MESSAGES
export const getPublicMessages = () => {
  return fetch(`${api}/messages?_sort=timestamp&_order=desc&_expand=user`).then((response) => response.json());
};

//POST
export const addPublicMessages = (newMessage) => {
  return fetch(`${api}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessage),
  })
  .then((response) => response.json());
};

//DELETE
export const deleteMessages = (messageId) => {
  return fetch(`${api}/messages/${messageId}`, { 
    method: "DELETE" })
    .then(response => response.json()
  );
};

//EDIT
export const editMessage = (messageId) => {
  return fetch(`${api}/messages/${messageId.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageId),
  }).then((response) => response.json());
};

//UPDATE MESSAGE
export const updateMessage = (editedMessage) => {
  return fetch(`${api}/messages/${editedMessage.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedMessage)
  }).then(data => data.json());
}