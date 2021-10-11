//Authour: Gerson Diketama
//Purpose: This is where I have all my data managers

const api = "http://localhost:8088";

//GET BY ID
export const messageById = (messageInput) => {
  return fetch(`${api}/messages/${messageInput}`).then((response) =>
    response.json()
  );
};

//GET MESSAGES
export const getPublicMessages = () => {
  return fetch(`${api}/messages?_expand=user`).then((response) => response.json());
};

//POST
export const addPublicMessages = (newMessages) => {
  return fetch(`${api}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessages),
  }).then((response) => response.json());
};

//DELETE

export const deleteMessages = (messageId) => {
  return fetch(`${api}/messages/${messageId}`, { method: "DELETE" }).then(
    (response) => response.json()
  );
};

//EDIT

export const editMessages = (messageId) => {
  return fetch(`${api}/messages/${messageId.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageId),
  }).then((response) => response.json());
};
